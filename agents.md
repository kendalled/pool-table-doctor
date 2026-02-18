# AGENTS.md

Purpose: help Codex work safely and efficiently in this repository while preserving the original hand-coded style.

## Project snapshot
- Framework: Nuxt 3 (`nuxt@^3.11`) with Vue 3 and Tailwind.
- Site type: marketing/service website with static content pages.
- Layout: `layouts/default.vue` wraps global navigation/footer.
- Routing: file-based routes from `pages/*.vue` plus redirects in `nuxt.config.ts`.
- Assets: many image files under `public/` (including nested folders).

## Core principle
- Preserve the existing handcrafted implementation style.
- Prefer minimal, targeted edits over broad refactors.
- Do not migrate components to new patterns (for example, avoid converting Options API components to `<script setup>`) unless explicitly requested.

## Coding conventions for this repo
- Match existing Vue style in each file:
  - Many components/pages are template-only or use Options API.
  - Keep naming and structure consistent with neighboring files.
- Keep copy and tone aligned with current website content.
- Avoid introducing new dependencies unless asked.
- Reuse existing components before creating new ones.
- Prefer Tailwind utility edits over large custom CSS rewrites.

## Files and responsibilities
- `pages/`: route-level content.
- `components/`: reusable UI blocks and section components.
- `layouts/default.vue`: global shell, body background look, shared chrome.
- `plugins/*.client.js`: browser-only plugin behavior.
- `nuxt.config.ts`: modules, SEO/site metadata, redirects, analytics.
- `public/`: static images and logos used directly by templates.

## Safe working process
1. Read related files first (`pages`, matching `components`, and `nuxt.config.ts` if route/SEO is involved).
2. Make the smallest change that satisfies the request.
3. Keep old URLs/paths stable unless user asks for URL changes.
4. Verify locally:
   - `npm run dev` for manual smoke check
   - `npm run build` to catch compile errors
5. Summarize exactly what changed and where.

## Commands
- Install: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview production build: `npm run preview`

## Guardrails
- Do not rewrite the site structure, design language, or copy strategy without explicit approval.
- Do not remove existing images or route redirects unless requested.
- Treat SEO metadata and legacy redirects as intentional; update carefully.
- When uncertain, ask before making architectural changes.

## Copy protection rules
- Existing page and component copy is considered source-of-truth and owner-authored.
- Do not reword, shorten, modernize, or \"improve\" text unless the user explicitly asks for copy changes.
- For technical tasks, limit edits to code/behavior and leave nearby text untouched.
- If a technical change requires text changes (for example, new fields/labels), keep wording minimal and ask for approval before broad copy edits.
- Preserve existing punctuation, capitalization style, and brand phrasing where possible.

## Preferred PR/change style for Codex
- Small commits with clear scope.
- Include file-level change notes.
- Call out any behavior changes, especially navigation, routing, SEO tags, and contact CTAs.
