# Faraday — Far a day

Free apps for your car's browser, to help you go farther every day.

Named after Michael Faraday, whose work made electric motors possible. Faraday sounds like
"far a day" — the question every electric driver asks: how far can I go in a day?

This site is the personal home of the Faraday toolkit. It is static, free-only, and
dependency-light: Next.js 15.5.7, React 19, no database, no env vars, no paid services.

## Pages

- `/` — Home: Faraday branding and the first app
- `/work` — Signal Predictor (live demo + GitHub) and the Coming Soon list
- `/posts` — Posts index, plus one post per file in `content/posts/`

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # verify the static production build
npm start     # serve the production build
```

## Add a new post

1. Create a new file in `content/posts/`, e.g. `my-new-post.md`
2. Give it frontmatter and markdown body:

```markdown
---
title: "My new post"
date: "2026-10-29"
excerpt: "One line shown on the posts index."
---

## Heading

Your post text. **Bold** and [links](https://example.com) work, as do `-` bullet lists.
```

3. The post appears automatically at `/posts/my-new-post` — no CMS, no database, no cost.
   Rebuild/redeploy to publish it (see below).

## Deploy free to Vercel

1. Push this folder to a GitHub repo (do not push `node_modules/` or `.next/` — see `.gitignore`).
2. Vercel → Add New Project → import that repo → Framework: Next.js → Deploy.
3. No env vars are needed. You get a free `https://...vercel.app` URL.
4. A custom domain can be added later in Vercel → Settings → Domains; nothing is bought or
   configured here.

## Design

iOS-like, clean and smooth: light, airy, blue/purple gradients, rounded glass cards,
3D/glossy accents like stock iOS UI, spring-like motion using transform/opacity only,
one main action per screen.
