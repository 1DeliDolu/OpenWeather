Resolved: E2E login error (ECONNREFUSED) by auto-starting Grafana and using .env.

Summary
- Playwright now loads `.env` and starts Grafana via Docker Compose automatically.
- Base URL defaults to `http://127.0.0.1:3001` (IPv4) to avoid Windows `::1` issues.
- Provisioning reads `OPENWEATHER_API_KEY` and `OPENWEATHER_BASE_URL` from env.

Run tests
- `npm run e2e`
- If Grafana is already running, Playwright reuses it.

Environment
- Copy `.env.example` to `.env` and set:
  - `GRAFANA_URL=http://127.0.0.1:3001`
  - `OPENWEATHER_API_KEY=...`

Troubleshooting
- Ensure Docker is running and port 3001 is free.
- Check logs: `docker compose -f docker-compose.yml logs -f grafana`.
