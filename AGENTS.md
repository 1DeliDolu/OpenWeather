# Repository Guidelines

## Project Structure & Module Organization
- `src/` — TypeScript/React UI for the Grafana datasource (`module.ts`, `datasource.ts`, `components/*`, `types.ts`, `plugin.json`).
- `pkg/` — Go backend (`plugin/` handlers, `models/` settings, `main.go`).
- `tests/` — Playwright end-to-end tests (`*.spec.ts`).
- `.config/` — Tooling configs (Jest, Webpack, ESLint, Prettier, TS).
- `public/` & `src/img/` — Static assets and logos.
- `.github/workflows/` — CI, release, and compatibility pipelines.
- `provisioning/` — Example Grafana provisioning (datasources).

## Build, Test, and Development Commands
- `npm ci` — Install Node deps (Node >= 22).
- `npm run dev` — Watch/serve UI with Webpack (development build).
- `npm run build` — Production UI build.
- `npm run typecheck` — TypeScript type checks.
- `npm run lint` / `npm run lint:fix` — Lint and auto-fix.
- `npm run test` / `npm run test:ci` — Jest unit tests.
- `npm run e2e` — Playwright E2E (expects Grafana at `http://localhost:3000`).
- `go test ./...` — Go backend tests.
- `mage` — Build backend/bundle via Grafana SDK (requires Mage).
- `npm run server` — Start Grafana via Docker Compose for local testing.

## Coding Style & Naming Conventions
- Prettier + ESLint (Grafana config): 2-space indent, single quotes, semicolons.
- TypeScript: `.ts/.tsx`; components PascalCase; variables/functions camelCase.
- Go: follow `gofmt`; package names lowercase; keep files small and focused.

## Testing Guidelines
- Unit tests: place under `src/**/__tests__` or name `*.{spec,test}.{ts,tsx}` per Jest config.
- E2E tests: `tests/*.spec.ts`; run against local Grafana (`npm run server`, then `npm run e2e`).
- Aim for coverage on query logic and editors; keep tests deterministic.

## Commit & Pull Request Guidelines
- Commits: Prefer Conventional Commits (`feat:`, `fix:`, `chore:`). Use imperative present tense.
- PRs: include summary, linked issues, screenshots/GIFs for UI, and clear test steps.
- Ensure CI is green and `npm run build && go test ./...` pass before requesting review.

## Security & Configuration Tips
- Do not hardcode or log secrets. Configure the OpenWeather API key in datasource settings (secure JSON); accessed in Go via `models.LoadPluginSettings`.
- For E2E, set `GRAFANA_URL` if not using the default.
- Sign bundles for distribution: `npm run sign`.
