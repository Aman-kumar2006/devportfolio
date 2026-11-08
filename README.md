# Aman Kumar Portfolio

Personal portfolio and build log for Aman Kumar, an aspiring full-stack developer based in Ranchi, Jharkhand, India.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- AVIF image assets served through `next/image`

## Development

```bash
bun install
bun run dev
```

Create a production build with:

```bash
bun run build
bun run start
```

## SEO and security

Metadata, canonical URLs, Open Graph/Twitter cards, JSON-LD, `robots.txt`, and `sitemap.xml` are defined in the App Router. The production config also sends HTTPS and browser security headers. Images use AVIF assets and lazy loading for below-the-fold certificate cards.
