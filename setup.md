# Joyfulness website: local setup

This guide explains how to install and run the Joyfulness website on a local computer.

## 1. Prerequisites

Install the following before continuing:

- **Node.js 22.13.0 or newer**
- **npm** (included with Node.js)
- A terminal application, such as Terminal on macOS

Check the installed versions:

```bash
node --version
npm --version
```

The Node.js version must be `v22.13.0` or newer. If Node.js is not installed, download the current LTS release from [nodejs.org](https://nodejs.org/).

## 2. Open the project folder

Open Terminal and move into the project:

```bash
cd "/Users/mazisolomon/Desktop/joyfulness-site"
```

All commands in the rest of this guide should be run from this directory.

## 3. Install dependencies

For a clean, reproducible installation based on `package-lock.json`, run:

```bash
npm ci
```

This creates the local `node_modules` directory. It may take a few minutes the first time and requires an internet connection.

If dependencies are intentionally changed later, use `npm install` instead. Commit both `package.json` and `package-lock.json` when adding or updating packages.

## 4. Start the development server

Run:

```bash
npm run dev
```

When startup completes, open:

[http://localhost:5173](http://localhost:5173)

The development server watches the source files and refreshes the site as changes are made. Keep the terminal window open while working. Press `Control+C` in that terminal to stop the server.

If port 5173 is already in use, choose another port:

```bash
npm run dev -- --port 5174
```

Then open `http://localhost:5174`.

## 5. Create a production build

To confirm that the project can be built for deployment, run:

```bash
npm run build
```

The generated output is written to `dist/`. This directory is intentionally excluded from Git because it can always be regenerated.

To run the production build locally after a successful build:

```bash
npm run start
```

Wrangler will print the local address in the terminal. Open that address in a browser. Press `Control+C` to stop the server.

## 6. Optional checks

Run the code-quality check:

```bash
npm run lint
```

For a fresh dependency installation in automated or managed environments, the project also provides:

```bash
npm run install:ci
```

For ordinary local development, `npm ci` is sufficient.

## Environment variables and services

No environment variables, API keys, external database, or third-party service are required for the website in its current form.

- Questionnaire answers are processed in memory.
- The report is generated locally by the server route.
- The database helpers under `db/` are scaffolding and are not used by the current experience.
- `.openai/hosting.json` currently has no D1 database or R2 storage binding configured.

If external services or model-backed report generation are added later, put secrets in `.env.local` and access them only from server-side code. Files matching `.env*` are ignored by Git. Never place API keys in client-side code or commit them to the repository.

## Main project locations

- `app/page.tsx` — main page entry point
- `app/journey-experience.tsx` — questionnaire and report experience
- `app/globals.css` — global styling
- `app/api/report/route.ts` — local report-generation endpoint
- `public/` — images and public assets
- `components/` — shared interface components
- `ARCHITECTURE.md` — product behavior and architecture notes

## Troubleshooting

### `node` or `npm` is not found

Install Node.js 22.13.0 or newer, close and reopen Terminal, and check the versions again:

```bash
node --version
npm --version
```

### The installed Node.js version is too old

Upgrade Node.js to version 22.13.0 or newer, then reinstall the project dependencies:

```bash
npm ci
```

### Dependency installation fails

Confirm that the internet connection is working and that the terminal is inside the project directory. Then retry:

```bash
cd "/Users/mazisolomon/Desktop/joyfulness-site"
npm ci
```

### The development port is already in use

Stop the other process using port 5173, or start this site on a different port:

```bash
npm run dev -- --port 5174
```

### Changes do not appear in the browser

Save the edited file and refresh the browser. If necessary, stop the server with `Control+C` and run `npm run dev` again.

### Start command fails after a clean checkout

The production server requires generated build files. Run the build first:

```bash
npm run build
npm run start
```

## Quick start

After Node.js is installed, these are the only commands needed for normal local development:

```bash
cd "/Users/mazisolomon/Desktop/joyfulness-site"
npm ci
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).
