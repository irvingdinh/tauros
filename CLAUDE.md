# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tauros is a Next.js 16 application using React 19, Tailwind CSS 4, and Bun as the runtime/package manager.

## Commands

```bash
# Install dependencies
bun install

# Development server (with hot reload)
bun run dev

# Production build
bun run build

# Start production server
bun run start

# Linting
bun run lint
bun run lint:fix

# Run tests (when added)
bun test

# Run a single test file
bun test path/to/file.test.ts
```

## Tech Stack

- **Runtime**: Bun (not Node.js)
- **Framework**: Next.js 16 with Pages Router
- **UI**: React 19, Tailwind CSS 4
- **Linting**: ESLint 9 with flat config, Prettier, simple-import-sort

## Bun Guidelines

Use Bun instead of Node.js:

- `bun <file>` instead of `node <file>` or `ts-node <file>`
- `bun test` instead of `jest` or `vitest`
- `bun install` instead of `npm install`
- `bun run <script>` instead of `npm run <script>`
- `bunx <package>` instead of `npx <package>`
- Bun auto-loads `.env` files - no dotenv needed

Prefer Bun built-ins:
- `Bun.file` over `node:fs` readFile/writeFile
- `bun:sqlite` over `better-sqlite3`
- `Bun.$\`command\`` over execa

## Code Style

- Imports are auto-sorted by `simple-import-sort` (enforced by ESLint)
- Prettier for formatting
