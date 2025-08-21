# Code Style and Conventions

## TypeScript Configuration
The project uses strict TypeScript settings with modern ESNext features:

### Compiler Options
- **Target**: ESNext
- **Module**: Preserve (bundler mode)
- **Module Resolution**: bundler
- **JSX**: react-jsx
- **Strict Mode**: Enabled
- **Additional Strictness**:
  - `noFallthroughCasesInSwitch: true`
  - `noUncheckedIndexedAccess: true`
  - `noImplicitOverride: true`
  - `skipLibCheck: true`

### Disabled Strict Options
- `noUnusedLocals: false`
- `noUnusedParameters: false`
- `noPropertyAccessFromIndexSignature: false`

## Bun-Specific Preferences
From CLAUDE.md, the project strongly prefers Bun over Node.js:

### Command Preferences
- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of jest or vitest
- Use `bun build` instead of webpack or esbuild
- Use `bun install` instead of npm/yarn/pnpm install
- Use `bun run <script>` instead of npm/yarn/pnpm run

### API Preferences
- `Bun.serve()` instead of express
- `bun:sqlite` instead of better-sqlite3
- `Bun.redis` instead of ioredis
- `Bun.sql` instead of pg or postgres.js
- Built-in `WebSocket` instead of ws
- `Bun.file` instead of node:fs readFile/writeFile
- `Bun.$` instead of execa

## File Organization
- Source code in `src/` directory
- Build output in `dist/` directory
- Entry point: `src/index.ts`
- Binary output: `dist/index.js`

## Project Configuration
- Module type: ES modules (`"type": "module"`)
- Private package (`"private": true`)
- CLI tool with binary entry point