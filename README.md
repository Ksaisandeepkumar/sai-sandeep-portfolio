# Sai Sandeep Kommi — Data Engineer portfolio

[View the live portfolio](https://ksaisandeepkumar.github.io/sai-sandeep-portfolio/)

A responsive, buildless portfolio with semantic HTML, CSS, and a small JavaScript file. The site covers experience, skills, a real university project, an interactive synthetic-data demo, education, certifications, a downloadable one-page resume, GitHub, LinkedIn, and email contact.

## Preview locally

From this folder, run `python3 -m http.server 4173 --directory dist` and open http://localhost:4173. No install or build step is required. Run `node --check dist/script.js` to check JavaScript syntax.

## GitHub Pages

1. Create a GitHub repository and upload this folder's contents, including the hidden `.github` folder. Use `main` as the default branch.
2. In the repository, open **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
3. Push to `main` or manually run the included **Deploy portfolio to GitHub Pages** workflow. It publishes only `dist/`.
4. Open the URL shown in the deployment. Relative asset URLs support both `username.github.io` and repository subpaths.

The workflow is in `.github/workflows/pages.yml`. See the [official GitHub Pages workflow guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Vercel

1. Import the GitHub repository into Vercel.
2. Use **Other** as the framework preset. Leave the build command empty and set the output directory to `dist`.
3. Deploy. `vercel.json` also declares the static output directory and basic response headers.

See [Vercel's framework settings](https://vercel.com/docs/builds/configure-a-build).

## Personalize and maintain

- `dist/index.html`: all visible copy, experience dates, skills, project details, contact links, and Person structured data.
- `dist/styles.css`: colors, typography, layout, mobile breakpoints, reduced-motion behavior, and print styles.
- `dist/script.js`: mobile menu and interactive quality demo.
- `dist/assets/sai-sandeep-kommi-resume.pdf`: the downloadable resume generated from supplied content. Replace it with a newer resume using the same filename.
- The GitHub copy excludes the private Sites deployment identity and local generated files.

**After moving to GitHub Pages, Vercel, or a custom domain:** replace the canonical URL and `og:url` in `index.html`, the origin in `sitemap.xml`, and the sitemap URL in `robots.txt` with the final public URL. This copy uses the public GitHub Pages URL.

## Content notes

- The site and resume use the supplied 3+ TB/day wording consistently.
- Exact dates and metrics use the resume text supplied by the owner. 1Stop.ai is retained as additional experience without invented dates or responsibilities.
- The selected PySpark streaming project comes from the supplied resume. Its code link opens the owner's `pyspark-streaming-dedup-late-data` repository.
- The browser demo uses six synthetic records and actually validates duplicates, missing member IDs, and negative amounts. It is a small illustration, not a production ETL system.
- The university project leads the Projects section; the synthetic data-quality demo is an optional disclosure.
- Resume text is selectable and uses a single-column layout; the website itself is not an ATS submission.
- Fonts are loaded from Google Fonts, with local font fallbacks. No analytics, backend, or contact-form service is required. The contact action opens the visitor's email application.

## Visual design

The current design uses a warm paper background, navy text, teal accents, and small terracotta details. The introduction leads with the owner’s name, a simple portrait, and specific first-person copy. Experience uses rows rather than repeated cards; the greeting keeps one wave emoji. It supports keyboard navigation, visible focus indicators, reduced motion, responsive menus, selectable resume text, and browser-local data validation.
