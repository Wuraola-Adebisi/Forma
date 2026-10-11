# NEXUS

NEXUS helps you plan a room around the furniture you own. Enter the room's measurements, arrange furniture on a scaled floor plan, and review fit issues before moving anything.

## What you can do

- Create a floor plan in centimetres with rulers along the top and left edges
- Drag, rotate and nudge furniture; positions snap to 5 cm and align with walls
- Edit furniture names and dimensions, and set exact distances from the left and top walls
- Identify overlapping pieces and furniture extending beyond room boundaries
- Request layout suggestions from a written goal, preview proposed positions, and choose whether to apply them
- Undo and redo changes, save a plan in the current browser, and export a JSON copy

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| Tab | Move between furniture pieces |
| Arrow keys | Move the selected piece 5 cm (25 cm with Shift) |
| R | Rotate the selected piece a quarter turn |
| Delete | Remove the selected piece |
| Ctrl or Cmd + Z | Undo (add Shift to redo) |

## Technology

- React, TypeScript and Vite
- SVG floor plan with CSS design tokens in `src/styles/base.css`
- Vercel serverless function for layout suggestions, using the OpenAI API server-side

## Project structure

```
api/suggest-layout.ts   Serverless route for layout suggestions
src/planner/            Planner state, floor plan drawing, geometry and storage
src/site/               Home, how it works, about and privacy pages
src/styles/             Tokens and base styles, site styles, planner styles
src/brand.ts            Product name and storage keys
```

## Run locally

```bash
npm install
npm run dev
```

Room editing, furniture placement, local saving and export work without an AI API key. To run the serverless layout suggestion endpoint locally, use the Vercel CLI:

```bash
npx vercel dev
```

Set `OPENAI_API_KEY` in the Vercel project environment. `OPENAI_MODEL` is optional and defaults to `gpt-4.1-mini`. Keep the API key out of any `VITE_*` variable and out of the repository.

## Deployment

`vercel.json` rewrites non-API paths to `index.html`, allowing direct links such as `/workspace` and `/how-it-works` to work after a refresh.

## Important planning notes

- Furniture dimensions are entered manually. Room and furniture photos are not interpreted.
- Doors, windows and other fixed features cannot be placed on the plan.
- Layout checks flag overlaps and furniture outside the room; they do not verify walkway clearance, door access, accessibility requirements or building-code compliance.
- Plans are saved in the current browser. There are no accounts or automatic cloud sync; export a JSON copy to move a plan to another device.

## Brand

The product name and local-storage keys are defined in `src/brand.ts`. Review brand, domain and trademark availability before expanding distribution.
