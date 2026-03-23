# oluwasefunmi

Personal portfolio and UI experiments.

## Setup

```bash
bun install
bun run dev
```

## Structure

- `source/app/` - App bootstrap and route registration
- `source/routes/` - Thin route entrypoints that map URLs to feature pages
- `source/features/home/` - Home page feature
- `source/features/bookmarks/` - Bookmarks page, hooks, and components
- `source/features/notes/` - Notes index and note detail pages
- `source/features/works/` - Works listing page
- `source/features/contact/` - Contact page
- `source/features/playground/` - Playground page plus experiment implementations
- `source/components/` - Shared UI and layout primitives
- `source/content/` - MDX notes
- `source/data/` - Static datasets and media mappings

## Scripts

- `dev` - Start dev server (port 5229)
- `build` - Production build
- `preview` - Preview build
