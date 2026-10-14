<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

OpenDayCare — Spanish-language daycare app. Next.js 16 App Router + React 19 + Tailwind v4. All UI copy and product content are in Spanish; keep it that way. `app/` is still the `create-next-app` starter.

## Commands

- `npm run dev` — dev server on `:3000`
- `npm run lint` — runs bare `eslint` (flat config). It currently reports errors/warnings **only** from `references/pantallas/support.js`, a generated design-runtime file. That is not app code: don't "fix" it, and don't read the failing exit code as your change breaking lint. Add `references/**` to the ignores in `eslint.config.mjs` for a clean run.
- `npm run build` / `npm run start`
- No test runner and no typecheck script exist. Use `npx tsc --noEmit` for types.
- `/verify-spec <spec>` — project command (opencode) that runs the `spec-verifier` agent; see "Agents y comandos" below.

## Toolchain quirks

- Tailwind v4 is wired through the Turbopack loader (`@tailwindcss/turbopack`) in `next.config.ts`, not PostCSS. Global styles start at `app/globals.css` (`@import "tailwindcss"`).
- `@/*` maps to the repo root, not `src/` (`tsconfig.json`).
- `next.config.ts` enables experimental Next 16 features: `cacheComponents`, `partialPrefetching`, `experimental.agentFeedback`. Read the bundled docs before relying on caching/data APIs.
- `app/layout.tsx` uses the generated global `LayoutProps<"/">` type; page/layout prop types come from `.next/types` (listed in `tsconfig` include). Do not hand-roll them.

## Design source

- `references/pantallas/*.dc.html` are the UI design mockups and the source of truth for screens (feed, login, niños, mi-cuenta, …). `references/screenshots/*.png` are their captures.
- `.dc.html` files are generated static React-in-HTML design artifacts, not part of the Next build. Never import or edit `support.js`; recreate the screens under `app/` from them.
- Mockups use fonts Fredoka + Nunito and a cream palette (`#F6ECDF` / `#FFFDF9`); reuse those tokens when porting.

## Skills

- `.agents/skills/spec` (`/spec`) and `spec-impl` (`/spec-impl`) drive the spec-first workflow. Specs live in `specs/`.

## Agents y comandos (`.opencode/`)

- **Agente `spec-verifier`** — `.opencode/agent/spec-verifier.md`. Model `opencode/qwen3.6-plus`, `mode: all`. Verifies a spec's `Acceptance criteria`: reads the spec in `specs/`, checks each `- [ ]` with Playwright MCP (screenshots always to `.playwright-mcp/`, compared against `references/screenshots/*.png` and `references/pantallas/*.dc.html`) and Context7 (current Next.js guidance), runs `npx tsc --noEmit` / `npm run lint` when needed, then ticks only the passing boxes (`- [x]`) and reports a table (criterio → resultado → evidencia). **Never edits app code**, never commits; it only edits the spec file. Frontmatter permissions: `edit: allow`, bash allow-listed for `npm run dev|build|lint`, `npx tsc*`, read-only `git status|diff|log`, everything else asks.

## MCPs
- Playwright screenshots y cualquier cosa relacionada con Playwright tiene que estar en la carpeta .playwright-mcp. 
- Context7, Usaremos esta MCP para traer la documentación actualizada del framework.

## Spec Driven Development - Skill
- /spec usaremos estabilidad para crear las especificaciones. 
- /spec-impl usaremos esta skill para hacer las implementaciones. 

## Reglas de codigo
- Usar codigo limpio, nombres, funciones, variables, etc en ingles
