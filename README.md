# Dmytro Lysohor — portfolio

A minimal, responsive portfolio for a Senior Software Engineer and Product Engineer focused on Agentic AI, Python, Ruby, and enterprise integrations. Built with plain HTML and CSS; no build step, external fonts, or runtime JavaScript.

## Local preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. The design uses a readable single column, warm neutrals and amber accents, a personal monogram, and simple section headings. It supports light/dark system preferences, reduced motion, keyboard navigation, and printing. Email, LinkedIn, and GitHub share a single contact row on all screen sizes.

## Content

- Edit biography, work, experience, contact links, and JSON-LD profile data in `index.html`.
- The experience and results are based on `Dmytro Lysohor_CV.pdf`, supplied in October 2026. The positioning and job preferences also reflect the LinkedIn headline and preferences supplied for this redesign. `lysohor_cv.pdf` contains the updated résumé. Replace it when the résumé changes.
- Update `assets/social-preview.svg` and regenerate `assets/social-preview.png` when the headline or positioning changes. Keep the PNG at 1200 × 630 pixels.
- Legacy image assets remain in the repository but are no longer loaded by the page.

## Search positioning

Primary phrases: **Dmytro Lysohor**, **Senior Software Engineer**, **Product Engineer**, **Agentic AI**, **Ruby on Rails developer**, **Python developer**, and **Full Stack Engineer**. Supporting topics: enterprise integrations, REST APIs, PostgreSQL, SQL optimization, legacy modernization, CI/CD, and software engineering in Madrid, Spain.

The contact section states availability for full-time, part-time, and contract roles, on-site/hybrid in Madrid or remote. Keyword variants are expressed naturally through readable descriptions of skills and experience.

These topics appear in visible, CV-backed content and relevant page metadata. The page includes a descriptive title and summary, one main heading, a canonical URL, `ProfilePage`/`Person` structured data, Open Graph and Twitter preview metadata, a crawler-readable `robots.txt`, and a one-page sitemap. Core content is available without JavaScript.

## After publishing to GitHub Pages

1. Confirm the public address is `https://13ld.github.io/`. If using a custom domain, update the canonical URL, social URLs, JSON-LD identifiers, `robots.txt`, and `sitemap.xml` together.
2. Add the site as a URL-prefix property in [Google Search Console](https://search.google.com/search-console) and verify ownership using the method offered for your setup.
3. Submit `https://13ld.github.io/sitemap.xml`, then inspect the homepage and request indexing.
4. Link to the portfolio from your LinkedIn and GitHub profiles. Use consistent wording for your name and engineering specialties.
5. Review Search Console queries and indexing after a few weeks. Refine descriptions with accurate projects and outcomes as experience changes.

Search visibility depends on crawling, relevant content, and competing pages; metadata and a sitemap do not guarantee placement. See [Google’s SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).
