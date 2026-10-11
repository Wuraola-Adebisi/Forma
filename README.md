# NEXUS

**Product:** AI-assisted room planning for everyday spaces.

NEXUS brings room dimensions, furniture and layout ideas together in one practical workspace. Experiment with arrangements, understand spatial constraints, and find a setup that works for the way you live.

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

NEXUS is the product's current working name. Check trademark, domain, and app-store availability before public launch.

## Status

Initial MVP implementation. AI suggestions require a configured server-side API key.
