# NEXUS

A floor plan you can drag furniture around. Enter a room's measurements, add the furniture you own, and see what fits before moving anything.

## Features

- Floor plan drawn in centimetres, with rulers along the top and left edges
- Drag, rotate and nudge furniture. Positions snap to 5 cm and sit flush against walls
- Editable furniture names and sizes, plus exact distances from the left and top walls
- Live checks for overlaps and pieces that reach past a wall, listed under the plan
- Layout suggestions from a written goal, previewed on the plan before they are applied
- Undo and redo, local saving, and JSON export

### Keyboard

| Key | Action |
| --- | --- |
| Tab | Move between furniture pieces |
| Arrow keys | Move the selected piece 5 cm (25 cm with Shift) |
| R | Rotate the selected piece a quarter turn |
| Delete | Remove the selected piece |
| Ctrl or Cmd + Z | Undo (add Shift to redo) |

## Stack

- React, TypeScript, Vite
- SVG floor plan, plain CSS with design tokens in `src/styles/base.css`
- Vercel serverless function for layout suggestions, which calls the OpenAI API from the server

## Project layout

```
api/suggest-layout.ts   Serverless route for layout suggestions
src/planner/            Planner state, floor plan drawing, geometry and storage
src/site/               Home, how it works, about and privacy pages
src/styles/             Tokens and base styles, site styles, planner styles
src/brand.ts            Product name and storage keys in one place
```

## Local development

```bash
npm install
npm run dev
```

The floor plan, furniture editing, saving and export work without an API key. To try layout suggestions locally, use the Vercel CLI:

```bash
npx vercel dev
```

Set `OPENAI_API_KEY` in the Vercel project environment. `OPENAI_MODEL` is optional and defaults to `gpt-4.1-mini`. Keep the key out of any `VITE_*` variable and out of the repository.

## Deployment

`vercel.json` rewrites every non-API path to `index.html`, so direct links such as `/workspace` and `/how-it-works` work after a refresh.

## Current limits

- Furniture is entered by hand. Photos are not read.
- Doors, windows and other fixed features cannot be placed yet.
- Suggested layouts are checked for walls and overlaps only. They do not confirm walkway widths or building code compliance.
- Plans are saved in the current browser. There are no accounts or cloud sync.

## Naming

NEXUS is the working product name. Check trademark, domain and app store availability before a public launch. The name is set in `src/brand.ts`, `index.html` and the page copy.
