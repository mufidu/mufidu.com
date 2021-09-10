# mufidu.com

This is repository for my personal website.  
Built with [11ty](https://11ty.dev/), based on [this template](https://github.com/google/eleventy-high-performance-blog/), and deployed to [Cloudflare Pages](https://pages.dev).

Another tech stack:

- Templating Engine: [Nunjucks](https://mozilla.github.io/nunjucks/)
- CSS Framework: [Bahunya](https://kimeiga.github.io/bahunya/)

## Guides

### Running locally

```bash
npm start
```

It will serve the `_site` directory on port 8080.

### Building for production

```bash
npm run build
```

It will build the site and copy all generated images before deploying. Please **commit after running this command**.

### Deploying

Just set the build command to

```bash
npm run deploy
```

## Features

This is a list of features that this site has. Mostly already come from the template. I added and deleted some features based on my needs. Will grow as I add new features.

### Blog

- Multilingual, all pages have [Indonesian](https://mufidu.com/id/) and [English](https://mufidu.com/) version.
- Post navigation with [next and previous post](https://11ty.dev/docs/eleventy/navigation/).
- Optimized YouTube Embed (low effect on performance and with privacy in mind) using [this plugin](https://github.com/gfscott/eleventy-plugin-youtube-embed).
- Responsive by design.
- Hamburger menu for mobile.

### Performance outcomes

- Perfect score in applicable lighthouse audits (including accessibility).
- Single HTTP request to [First Contentful Paint](https://web.dev/first-contentful-paint/).
- Very optimized [Largest Contentful Paint](https://web.dev/lcp/) (score depends on image usage, but images are optimized).
- 0 [Cumulative Layout Shift](https://web.dev/cls/).
- ~0 [First Input Delay](https://web.dev/fid/).

### Performance optimizations

#### Images

- Generates multiple sizes of each image and uses them in **`srcset`**.
- Generates a **blurry placeholder** for each image (without adding an HTML element or using JS).
- Transcodes images to [AVIF](<https://en.wikipedia.org/wiki/AV1#AV1_Image_File_Format_(AVIF)>) and [webp](https://developers.google.com/speed/webp) and generates `picture` element.
- Transcodes GIFs to muted looping autoplaying MP4 videos for greatly reduced file size.
- **Lazy loads** images (using [native `loading=lazy`](https://web.dev/native-lazy-loading/)).
- **Async decodes** images (using `decoding=async`).
- **Lazy layout** of images and placeholders using [`content-visibility: auto`](https://web.dev/content-visibility/#skipping-rendering-work-with-content-visibility).
- **Avoids CLS impact** of images by inferring and providing width and height (Supported in Chrome, Firefox and Safari 14+).
- Downloads remote images and stores/serves them locally.
- Immutable URLs.

#### CSS

- Defaults to the compact "classless" [Bahunya CSS framework](https://kimeiga.github.io/bahunya/).
  - Converted back to SCSS and divided per components (so to speak).
- Inlines CSS.
- Dead-code-eliminates / tree-shakes / purges (pick your favorite word) unused CSS on a per-page basis with [PurgeCSS](https://purgecss.com/).
- Minified CSS with [csso](https://www.npmjs.com/package/csso).

#### Miscellaneous

- Immutable URLs for JS.
- Sets immutable caching headers for images, fonts, and JS (CSS is inlined). Currently implements for Netlify `_headers` file.
- Minifies HTML and optimizes it for compression. Uses [html-minifier](https://www.npmjs.com/package/html-minifier) with aggressive options.
- Uses [rollup](https://rollupjs.org/) to bundle JS and minifies it with [terser](https://terser.org/).
- Prefetches same-origin navigations when a navigation is likely (when hovered).
- If an AMP files is present, [optimizes it](https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/optimize_amp/).

#### Fonts

- Serves fonts from same origin.
- Makes fonts `display:optional`.

#### Analytics

- Supports locally serving Google Analytics's JS and proxying it's hit requests to a Netlify proxy (other proxies could be easily added).
- Supports sending [Core Web Vitals](https://web.dev/vitals/) metrics to Google Analytics as [events](https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-analytics).
- Support for noscript hit requests.
- Avoids blocking onload on analytics requests.
- Support Beampipe (privacy-focused Google Analytics), and serve it locally to avoid block by adblockers.

### DX features

- Supports a range of default tests.
- Runs build and tests on `git push`.
- Sourcemap generated for JS.

### SEO & Social

- Share button preferring `navigator.share()` and falling back to Twitter. Using OS-like share-icon.
- Support for OGP metadata.
- Support for Twitter metadata.
- Support for schema.org JSON-LD.
- Sitemap.xml generation.

### Security

Generates a strong CSP for the base template.

- Default-src is self.
- Disallows plugins.
- Generates hash based CSP for the JS used on the site.
- Extended CSP for Twitter, YouTube, and Instagram embedding. Also for Beampipe and Cloudflare analytics.

### Build performance

- Downloaded remote images, and generated sizes are cached in the local filesystem…
- Build script automatically copy the generated images to the `img` folder
  - ...so the images are not processed again during deployment (and thus the build time is reduced).
