## Purpose
This repository contains small example web projects (Express servers, a MongoDB helper, and several Create-React-App frontends). These instructions help an AI coding assistant quickly understand the layout, common commands, and the exact files to edit when making changes.

## Big picture
- Multiple small projects live side-by-side (not a monorepo with a build orchestrator). Key folders:
  - `mongodb/` — simple Mongoose examples and a `server.js` exposing `/users` on port 5000; seed script at `createdb.js`.
  - `restapiservices/` — static JSON-backed Express API exposing `/students`, `/imarks`, `/emarks` on port 8080 (data files: `students.json`, `imarks.json`, `emarks.json`).
  - `MVC/` — example Express + EJS app rendering `views/memo.ejs` on port 3000 (`index.js`).
  - `spa/`, `render/`, `props-program7/` — independent React apps scaffolded by Create React App; use `react-scripts` (`npm start`, `npm build`).

## How to run (developer workflows)
- Per-project commands (run in the project folder):
  - `cd mongodb && npm install && npm start` — runs `mongodb/server.js` (port 5000). To seed DB: `node createdb.js`.
  - `cd restapiservices && npm install && npm start` — runs `restapiservices/index.js` (port 8080).
  - `cd MVC && npm install && node index.js` — EJS view at `MVC/views/memo.ejs` (port 3000).
  - For each React app folder (`spa`, `render`, `props-program7`): `cd <app> && npm install && npm start`.

Notes:
- Ports are hard-coded in the scripts; avoid starting multiple services that clash on the same port.
- There is no root-level `npm start` orchestration; start the specific project you are editing.

## Patterns & conventions (project-specific)
- CommonJS modules are used (require/module.exports) across the Node/Express apps.
- Simple in-repo data: `restapiservices` serves static JSON files — editing those files changes API responses immediately.
- EJS views are located under `MVC/views` and rendered from `MVC/index.js` (view model passed as `data`).
- MongoDB connection strings are hard-coded to `mongodb://localhost:27017/...` in `mongodb/*` files — when editing, prefer introducing `process.env` variables and document the change.

## Integration points to be careful about
- `restapiservices` JSON endpoints are likely consumed by the React frontends; changing the shape of `students.json`, `imarks.json`, or `emarks.json` is breaking.
- `mongodb/server.js` uses Mongoose with a `Users` model; `createdb.js` uses a different DB name and `student` model. Be consistent when changing schemas.

## Files to edit for common tasks (examples)
- Add a new API route: edit `restapiservices/index.js` and update the corresponding JSON under `restapiservices/`.
- Change view data or markup: edit `MVC/views/memo.ejs` and `MVC/index.js` data shape.
- Seed or change DB schema: edit `mongodb/createdb.js` and `mongodb/server.js` (models defined inline in these files).
- Work on a React UI: edit `spa/src/App.js` (or `render/src/App.js`, `props-program7/src/App.js`) and run `npm start` in that folder.

## Tests and CI
- There are no meaningful automated tests in the repo. React apps include the default `react-scripts test` scaffold but no project-level tests are provided.

## Editing guidance for AI agents
- Prefer minimal, localized changes: update the single service folder you are targeting rather than sweeping cross-folder edits.
- When adding environment variables or ports, update README or add a short comment in the file indicating the expected env var name.
- When modifying JSON APIs, include examples of the new response shape in the PR description.

## Where to look first
- `mongodb/server.js`, `mongodb/createdb.js` — DB examples and models.
- `restapiservices/index.js`, `restapiservices/*.json` — small API that frontends may consume.
- `MVC/index.js`, `MVC/views/memo.ejs` — server-rendered example.
- `spa/src/App.js`, `render/src/App.js`, `props-program7/src/App.js` — React entry points.

If any section is unclear or you want more examples (e.g., sample edits and test runs), tell me which area to expand and I will iterate.
