# GPA Calculator

A small React app to calculate GPA. The UI was updated to a darker theme, the GPA form layout was improved, and an "Add Course" button was added to dynamically append rows.

## Quick start

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm start
```

The app runs locally (default: `http://localhost:3000`). If port 3000 is in use, the dev server will prompt to run on another port (e.g. `3001`).

## Scripts

- `npm start` — start dev server
- `npm build` — create a production build
- `npm test` — run tests (if present)

## UI notes

- Darker, muted theme (header and card background)
- Responsive grid for course rows
- `+ Add Course` button to append more course input rows
- `Calculate GPA` button present (no logic yet)

## Files changed

- `src/App.js` — refactored form, added state + add-course button
- `src/App.css` — darker theme, layout and spacing tweaks, button styles

## Next steps

- Implement GPA calculation logic and validation
- Importing grades for ease of calculation
- Deploy to a vercel site

## License

MIT
