# Copilot Instructions for this Repository

This is a small Create React App (CRA) single-page portfolio application. The goal of these instructions is to help AI coding agents be immediately productive and avoid making unsafe or breaking changes.

**Architecture & Big Picture**
- **Entry point:** `src/index.js` — wraps the app in `BrowserRouter`.
- **Routing:** `src/App.js` defines routes using `react-router-dom` `Routes`/`Route` that load pages from `src/routes/*` (e.g., `Home`, `About`, `Project`, `Contact`).
- **Pages & Layout:** Pages in `src/routes/*` compose reusable UI from `src/components/*` (e.g., `Navbar`, `Footer`, `HeroImage`).
- **Styling:** CSS files are colocated with components and follow the `*Styles.css` naming pattern (e.g., `NavbarStyles.css`, `HeroStyles.css`).

**Critical Workflows / Commands**
- Development: `npm start` (runs CRA dev server at http://localhost:3000).
- Test runner: `npm test` (CRA interactive watch mode).
- Production build: `npm run build` (outputs to `build/`).
- Do not `eject` unless explicitly requested: `npm run eject` is one-way.

**Project-specific Conventions & Patterns**
- Components are functional React components with default exports.
- CSS is global, colocated per-component (no CSS modules or styled-components in repo). Edit the matching `*Styles.css` file when changing presentation.
- Routing path strings are sometimes capitalized in `src/App.js` (e.g., `/Project`) while `Link` usages in `src/components/Navbar.js` use lowercase (e.g., `/project`). Do NOT rename or remap routes automatically — point out and propose fixes to the developer instead. Example:
  - `src/App.js` has ` <Route path="/Project" element={<Project/>} /> `
  - `src/components/Navbar.js` contains ` <Link to="/project">Project</Link>`
- Some component filenames differ in casing (`HeroImage.js` vs `Heroimage2.js`). Be conservative: do not change filename casing without confirming with the developer (Windows is case-insensitive; git and CI may be case-sensitive).
- Icons use `react-icons` (e.g., `FaBars`, `FaTimes`, `FaLinkedin`).

**Integration Points & External Dependencies**
- No backend or API endpoints present — this is a static frontend.
- External links are in `src/components/Footer.js` (LinkedIn, Instagram, X). Treat these as content changes if editing.
- Key dependencies (see `package.json`): `react`, `react-dom`, `react-router-dom`, `react-icons`, `react-scripts`.

**What to change (safe, small PRs)**
- Fixing a typo, updating copy, or editing CSS in a single component is safe—keep changes colocated.
- When proposing route/path changes, include a brief migration plan and update all `Link` targets and `Route` paths together (search for `/Project`, `/project`, `/About`, `/about`, etc.).
- Consolidate or remove unused components only after verifying imports across `src/routes` and `src/components`.

**What NOT to do without asking**
- Do not rename files solely to change casing.
- Do not change routing structure or component hierarchy without a clear migration plan and tests/demos.
- Avoid introducing new global CSS resets or frameworks that rework the visual layout without designer confirmation.

**Examples & Key Files to Inspect**
- App routing: `src/App.js`
- App entry + router: `src/index.js`
- Shared components: `src/components/Navbar.js`, `src/components/Footer.js`, `src/components/HeroImage.js`
- Pages: `src/routes/Home.js`, `src/routes/About.js`, `src/routes/Project.js`, `src/routes/Contact.js`
- Styling pattern: look for files matching `*Styles.css` in `src/components/`

If any section is unclear or you'd like the agent to take a specific action (fix route casing, rename a component, add tests), please tell me which area to modify and I'll prepare a focused PR with explanation and tests where appropriate.
