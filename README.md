# Forma

AI-assisted spatial planning for everyday spaces.

Forma helps people experiment with furniture layouts, understand spatial constraints, and find arrangements that work for the way they live.

## Product direction

- 2D room canvas with editable furniture placements
- Room dimensions and furniture inventory
- AI-assisted layout proposals from natural-language goals
- Deterministic validation for boundaries and collisions
- Local-first room persistence for the MVP

## Stack

- React + TypeScript + Vite
- CSS for the visual system
- Vercel serverless function for AI layout proposals
- OpenAI API via server-side environment variables

## Local development

```bash
npm install
npm run dev
```

The canvas and manual editing work without an API key. To enable AI proposals, configure `OPENAI_API_KEY` in the deployment environment and use Vercel's local development command (`vercel dev`) so the `/api/suggest-layout` function is available.

## Environment

- `OPENAI_API_KEY` — server-side only; never expose it as a `VITE_` variable.
- `OPENAI_MODEL` — optional model override. Defaults to `gpt-4.1-mini`.

## Status

Initial MVP build. AI proposals require a configured API key; geometry validation runs in the client before proposals are applied.