# CargoLink Remediation Dashboard

A small React project that displays CargoLink's compliance gap status, remediation progress, and key metrics. It uses sample lab data only. Nothing here touches real systems.

## What's Inside

* `src/App.js` - main React component managing metric counts, progress, and the remediation table
* `src/App.css` - custom styling for the dashboard layout, cards, and priority tags
* `src/gapsData.json` - sample data containing 12 remediation gaps, controls, actions, owners, priorities, start dates, and due dates
* `package.json` - project configuration, dependencies, and deployment scripts

## How to Run

Install the dependencies:

```bash
npm install
```

Start the development server:
```bash
npm start
```

Deploy to GitHub Pages:
```bash
npm run deploy
```

## Assumptions
 * Owners and dates are proposals for this lab exercise, not real commitments.
 * Priority levels reflect initial triage for CargoLink's security controls based on lab requirements.

## Results
 * 12 remediation gaps tracked with priority breakdowns, start dates, and due dates.
 * Fully responsive web interface accessible via a public URL.
 * Live demo hosted on GitHub Pages: https://aleezakhannn.github.io/cargolink-dashboard/

## Limitations
 * Data is loaded from a static local JSON file rather than a live backend database.
 * Designed as a standalone lab dashboard rather than an enterprise compliance platform.
