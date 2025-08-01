import { b as createAstro, c as createComponent, e as addAttribute, f as renderScript, a as renderTemplate, m as maybeRenderHead, d as renderSlot, r as renderComponent, o as renderHead, u as unescapeHTML } from './astro/server_ixCSCnnp.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { S as SITE } from './config_BNeQ3wY4.mjs';

const $$Astro$2 = createAstro("https://astro-paper.pages.dev/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/iam/Projects/On Going/My-Notes/node_modules/.pnpm/astro@5.12.7_jiti@2.4.2_lightningcss@1.30.1_rollup@4.41.1_tsx@4.20.3_typescript@5.8.3_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/iam/Projects/On Going/My-Notes/node_modules/.pnpm/astro@5.12.7_jiti@2.4.2_lightningcss@1.30.1_rollup@4.41.1_tsx@4.20.3_typescript@5.8.3_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro", void 0);

const PUBLIC_GOOGLE_SITE_VERIFICATION = undefined;

const $$Astro$1 = createAstro("https://astro-paper.pages.dev/");
const $$ProgressBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProgressBar;
  return renderTemplate`${maybeRenderHead()}<div id="progress-bar" class="progress-bar" data-astro-cid-jx4nc67j></div>  ${renderScript($$result, "/home/iam/Projects/On Going/My-Notes/src/components/ProgressBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/iam/Projects/On Going/My-Notes/src/components/ProgressBar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro-paper.pages.dev/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = SITE.title,
    author = SITE.author,
    profile = SITE.profile,
    description = SITE.desc,
    ogImage = `/${SITE.ogImage}` ,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.url),
    pubDatetime,
    modDatetime,
    scrollSmooth = false
  } = Astro2.props;
  const socialImageURL = new URL(ogImage, Astro2.url);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${title}`,
    image: `${socialImageURL}`,
    datePublished: `${pubDatetime?.toISOString()}`,
    ...modDatetime && { dateModified: modDatetime.toISOString() },
    author: [
      {
        "@type": "Person",
        name: `${author}`,
        ...profile && { url: profile }
      }
    ]
  };
  return renderTemplate(
    _a || (_a = __template(["<html", "", "", ' data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"', '><meta name="generator"', "><!-- General Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><link rel="sitemap" href="/sitemap-index.xml"><!-- Open Graph / Facebook --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', "><!-- Article Published/Modified time -->", "", '<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Google JSON-LD Structured data --><script type="application/ld+json">', '<\/script><!-- Enable RSS feed auto-discovery  --><!-- https://docs.astro.build/en/recipes/rss/#enabling-rss-feed-auto-discovery --><link rel="alternate" type="application/rss+xml"', "", '><meta name="theme-color" content="">', "", '<script src="/toggle-theme.js"><\/script>', "</head> <body data-astro-cid-sckkx6r4> ", " ", " </body></html>"])),
    addAttribute(SITE.dir, "dir"),
    addAttribute(`${SITE.lang}`, "lang"),
    addAttribute(`${scrollSmooth && "scroll-smooth"}`, "class"),
    addAttribute(canonicalURL, "href"),
    addAttribute(Astro2.generator, "content"),
    title,
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(author, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(canonicalURL, "content"),
    addAttribute(socialImageURL, "content"),
    pubDatetime && renderTemplate`<meta property="article:published_time"${addAttribute(pubDatetime.toISOString(), "content")}>`,
    modDatetime && renderTemplate`<meta property="article:modified_time"${addAttribute(modDatetime.toISOString(), "content")}>`,
    addAttribute(canonicalURL, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(socialImageURL, "content"),
    unescapeHTML(JSON.stringify(structuredData)),
    addAttribute(SITE.title, "title"),
    addAttribute(new URL("rss.xml", Astro2.site), "href"),
    // If PUBLIC_GOOGLE_SITE_VERIFICATION is set in the environment variable,
    // include google-site-verification tag in the heading
    // Learn more: https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag
    PUBLIC_GOOGLE_SITE_VERIFICATION,
    renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true }),
    renderHead(),
    renderComponent($$result, "ProgressBar", $$ProgressBar, { "data-astro-cid-sckkx6r4": true }),
    renderSlot($$result, $$slots["default"])
  );
}, "/home/iam/Projects/On Going/My-Notes/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
