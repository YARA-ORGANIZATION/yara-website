# YARA website

Launch website for the Young Africans Research Academy, built with Next.js 15 (App Router) and Tailwind CSS v4.
Copy follows the *Website Copy Master — Final Locked, 20 September 2026*; visual design follows the Yara Website Figma file.

## Develop

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Where things live

| What | Where |
| --- | --- |
| Pages (one folder per route in the sitemap) | `src/app/(web)/` |
| Contact details, nav, socials, Symposium details, partner names | `src/lib/site.ts` |
| Research themes, projects and Fellows | `src/lib/research.ts` |
| Shared UI (buttons, cards, heroes) | `src/components/ui.tsx` |
| Form handling (server action) | `src/app/(web)/actions.ts` |
| Design tokens (colours, radii, font) | `src/app/globals.css` |
| Redirects from the old site, security headers | `next.config.ts` |
| Sanity Studio (write Stories) | `/studio`: config in `sanity.config.ts`, schemas in `schemas/` |
| CMS client and queries | `src/sanity/` |
| Photography from the YARA DESIGN Figma board | `public/images/brand/` |

## Writing stories (CMS)

Stories are written in Sanity Studio at `/studio` (project `3vn7gjom`, dataset `production`).

1. Sign in at `/studio` with a Sanity account that is a member of the project.
2. **Stories → Create**, then choose a category:
   - **Spotlight** or **Insight**: write the body. It publishes at `/stories/<slug>`.
   - **In the Press**: paste the external article URL and outlet name. The card links straight to the coverage.
3. Publish. The page updates within 5 minutes, or immediately once the webhook below is set up.

One-time setup in [sanity.io/manage](https://www.sanity.io/manage) for project `3vn7gjom`:
- **API → CORS origins:** add `http://localhost:3000` and the production domain, with *Allow credentials* enabled. The embedded Studio needs this.
- **API → Webhooks:** POST to `https://<domain>/api/revalidate`, filter `_type == "post"`, projection `{_type, "slug": slug.current}`, secret = `SANITY_REVALIDATE_SECRET`.
- **Members:** invite whoever will write stories.

The old site's `blog` and `newsAnnouncement` documents stay under **Legacy** in the Studio. They are not shown on the website.

## Launch checklist (implementation items from the copy master)

- **Forms:** set `FORMS_WEBHOOK_URL` and/or `RESEND_API_KEY`. Without one, production forms show an error that points people to info@yarafrica.org.
- **Apply / Donate buttons:** hidden until `NEXT_PUBLIC_AI_ETHICS_APPLY_URL` and `NEXT_PUBLIC_DONATION_URL` are set. `NEXT_PUBLIC_AI_ETHICS_STATUS` shows the application status/deadline.
- **Symposium speakers:** add them to the `speakers` array in `src/app/(web)/symposium-2026/page.tsx`. The section stays hidden while the array is empty. The page switches to its archive state after 30 September 2026, 17:00 GMT.
- **Photography:** photos in `public/images/brand/` come from the YARA DESIGN Figma board, which only holds low-resolution copies (180–512px). Replace them with the original files at the same paths. Fellows and the Ampe story still use branded placeholders (`Monogram`, `BrandPanel`). Ruth Biney Junior has no team photo yet.
- **Partner logos:** Emerging Climate Frontiers uses its logo from the Figma board. CABI and Telecel Ghana render as text until logo files are added to `partners` in `src/lib/site.ts`.
