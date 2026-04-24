# GEOL201L Site Rules

This project stays intentionally simple. Future edits should preserve that.

## Stack Rules

- Use plain `HTML`, `CSS`, and `JavaScript`.
- Do not add frameworks, package managers, build tooling, or templating unless there is a clear need that the current static setup cannot handle.
- Keep the site directly runnable by opening [`index.html`](/Users/garyzhen/Downloads/project-2-cpu-sim-gary-zhen/geol201lwebsite/index.html) in a browser or by serving the folder as static files.

## Structure Rules

- Keep the main site entry in [`index.html`](/Users/garyzhen/Downloads/project-2-cpu-sim-gary-zhen/geol201lwebsite/index.html).
- Keep styling in [`styles.css`](/Users/garyzhen/Downloads/project-2-cpu-sim-gary-zhen/geol201lwebsite/styles.css).
- Keep JavaScript in [`script.js`](/Users/garyzhen/Downloads/project-2-cpu-sim-gary-zhen/geol201lwebsite/script.js).
- Keep the page order aligned to the notebook source unless there is an explicit reason to change it.
- Prefer semantic HTML and readable class names over abstractions.

## Simplicity Rules

- Keep JavaScript limited to interface behavior such as tab switching.
- Do not turn content into generated data structures, JSON feeds, Markdown pipelines, or CMS-style logic unless the project requirements change.
- Favor small direct edits over refactors.
- If a feature can be done with basic HTML/CSS, do not solve it with more JavaScript.

## Content Rules

- This site is a class demo first, not a fully finished publication.
- Keep the content flow clear for peer review.
- Match the intended structure from the Siberian Traps notebook source:
  - Home
  - The Siberian Traps
  - Planetary Fuel Cell
  - Life & Death
  - Recovery
- Add detailed write-ups only when explicitly requested.

## Image Rules

- Never generate or invent images.
- Place manual assets only in `/images`.
- Use descriptive filenames such as `siberian-traps-map.jpg` or `trilobite-fossil.jpg`.
- When adding a future image slot, include:
  - the expected filename
  - the intended section
  - a plain search phrase the user can use to find it
- If an image is not available yet, leave a clean placeholder instead of a broken `<img>` tag.

## Visual Rules

- Preserve the dark basalt / lava visual direction unless asked to redesign it.
- Keep the interface bold but simple.
- Prioritize readability on laptop and phone widths.
- Avoid decorative extras that make the demo feel overengineered.
