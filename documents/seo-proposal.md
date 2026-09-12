# SEO & Analytics Overview
Search Engine Optimization (SEO) improve how easily search engines can understand, index, and rank a website. A well-structured site with clear headings, meaningful metadata, and high-quality content increase visibility in organic search results, which users trust more than paid placement. SEO also relies on semantic HTML, proper use of h1 - h6 tags, internal linking, and avoiding outdated tactics like hidden "ghost text".

Analytics tools such as Google Analytics and heat maps provide insight into how users interact with a site. These tools reveal which pages attract the most traffic, where users click, and how they navigate through content. Understanding these patterns helps developers and marketing teams make informed decisions about layout, content placement, and user experience improvements.

Together, SEO and analytics form a foundation for building websites that are discoverable, intuitive, and aligned with user behavior.

## Ideal SEO Implementation Plan
My ideal SEO implementation would start with adding default metadata in the nuxt.config.ts file, including a clear site title, description, and basic Open Graph tags. This ensures every page has fallback SEO information even before adding page-specific metadata. Each page would then use useHead() composable to override the description so search engines understand the unique purpose of each page.

Note: My project uses Nuxt3
Nuxt 3 uses nuxt.config.ts instead of nuxt.config.js, and page-level metadata is added using the useHead() composable instead of the older head() method.
