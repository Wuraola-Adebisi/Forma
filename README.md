# Forma

**Working name:** Forma  
**Product:** AI-assisted spatial planning for everyday spaces.

Forma helps people experiment with furniture layouts, understand spatial constraints, and find arrangements that work for the way they live.

## Product direction

- Interactive 2D room canvas with draggable and rotatable furniture
- Room dimensions, furniture inventory, and layout issue checks
- AI-assisted layout proposals from natural-language goals
- Deterministic client-side validation for room boundaries and furniture collisions
- Local-first workspace saving and JSON export

## Stack

- React, TypeScript, Vite
- SVG-based spatial canvas and custom CSS
- Vercel serverless function for AI layout proposals
- OpenAI API called server-side

## Local development

```bash
npm install
npm run dev
```

The interactive canvas, furniture editing, local save, and JSON export work without an AI key. To test the serverless AI route locally, install/use the Vercel CLI and run:

```bash
npx vercel dev
```

Configure `OPENAI_API_KEY` in the Vercel project environment before using AI suggestions. Optionally set `OPENAI_MODEL`; the default is `gpt-4.1-mini`. Never expose the API key through a `VITE_*` variable or commit it to the repository.

## Current MVP boundaries

- Furniture is entered manually; photo-based room recognition is not implemented.
- Doors, windows, and other fixed obstructions are not yet editable features. Keep entryways clear manually for now.
- AI-generated positions are checked for room boundaries and furniture overlap before they can be applied. The current checks do not establish building-code compliance or guarantee safe circulation widths.
- Workspaces are stored in the current browser when saved. JSON export is available for portability; there is no account or cloud sync.

## Brand note

Forma is a working name, not a cleared trademark. Research found existing products using FORMA in interior design and spatial commerce, so verify trademark, domain, and app-store conflicts before public launch.

## Status

Initial MVP implementation. AI suggestions require a configured server-side API key.
