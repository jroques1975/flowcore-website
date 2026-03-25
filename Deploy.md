# FlowCore Systems Website — Deployment Guide

## Production Environment

| | |
|---|---|
| **URL** | https://www.flowcoresystemsai.com |
| **Alias** | https://flowcore.2309apt.com |
| **Server** | 10.0.0.57 (local server, Ubuntu 24.04) |
| **Server path** | `~/apps/flowcore-website/` |
| **Port** | 15123 |
| **Stack** | Docker — nginx:alpine (static file server) |
| **Tunnel** | Cloudflare `2309apt-server` (`c6b2def1-faf8-46e9-8ceb-7d9d51a953f2`) |

---

## How It Works

```
Browser → Cloudflare → 2309apt-server tunnel → localhost:15123 → nginx → dist/
```

The site is a static Vite build served by nginx. No backend, no database. nginx handles SPA routing (all paths fall back to `index.html`).

---

## Deploy to Production

Run all commands from `/Users/javierroques/AppDevelopment/flowcore-website/`.

### Full deploy (build + sync + restart)

```bash
# 1. Build
npm run build

# 2. Sync dist + configs to server
rsync -az --delete dist/ jroques@10.0.0.57:~/apps/flowcore-website/dist/
rsync -az nginx.conf docker-compose.yml jroques@10.0.0.57:~/apps/flowcore-website/

# 3. Restart container
sshpass -p '7325Fjrp' ssh -o StrictHostKeyChecking=no jroques@10.0.0.57 \
  "cd ~/apps/flowcore-website && docker compose up -d"
```

### Shortcut — code-only redeploy (no config changes)

```bash
npm run build && \
sshpass -p '7325Fjrp' rsync -az --delete dist/ jroques@10.0.0.57:~/apps/flowcore-website/dist/
```

nginx serves the `dist/` folder as a bind mount — no container restart needed after a dist-only sync.

---

## Verify

```bash
# Check container status
sshpass -p '7325Fjrp' ssh -o StrictHostKeyChecking=no jroques@10.0.0.57 \
  "cd ~/apps/flowcore-website && docker compose ps"

# Quick HTTP check
sshpass -p '7325Fjrp' ssh -o StrictHostKeyChecking=no jroques@10.0.0.57 \
  "curl -s -o /dev/null -w '%{http_code}' http://localhost:15123/"

# View nginx logs
sshpass -p '7325Fjrp' ssh -o StrictHostKeyChecking=no jroques@10.0.0.57 \
  "cd ~/apps/flowcore-website && docker compose logs --tail=30"
```

---

## Server File Structure

```
~/apps/flowcore-website/
├── dist/           ← Built static files (synced from local)
│   ├── index.html
│   ├── assets/
│   └── images/
├── nginx.conf      ← nginx server config
└── docker-compose.yml
```

---

## Cloudflare DNS

All records are proxied CNAMEs pointing to the tunnel:

| Hostname | Zone |
|---|---|
| `flowcoresystemsai.com` | flowcoresystemsai.com |
| `www.flowcoresystemsai.com` | flowcoresystemsai.com |
| `flowcore.2309apt.com` | 2309apt.com |

To update tunnel ingress rules (if hostnames change):
```
PUT https://api.cloudflare.com/client/v4/accounts/f8fa5354440b8d4cd4f2593af7a7d67c/cfd_tunnel/c6b2def1-faf8-46e9-8ceb-7d9d51a953f2/configurations
Token: ~/.secrets/cloudflare.txt (local) or /Users/javierroques/AppDevelopment/.secrets/cloudflare.txt
```

---

## Logo Assets

Source logos live at `/Users/javierroques/AppDevelopment/media/` and are committed to `public/images/`. No special handling needed on deploy — they are included in `dist/` after build.
