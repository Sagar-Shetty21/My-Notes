import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, d as renderSlot, r as renderComponent, f as renderScript } from './astro/server_ixCSCnnp.mjs';
import 'kleur/colors';
import { c as createSvgComponent, I as IconMoon, a as IconSunHigh } from './IconSunHigh_CoFjy6Hg.mjs';
import { S as SITE } from './config_BNeQ3wY4.mjs';
import 'clsx';

const $$Astro$4 = createAstro("https://astro-paper.pages.dev/");
const $$Hr = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hr;
  const { noPadding = false, ariaHidden = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mx-auto max-w-app", noPadding ? "px-0" : "px-4"], "class:list")}> <hr class="border-border"${addAttribute(ariaHidden, "aria-hidden")}> </div>`;
}, "/home/iam/Projects/On Going/My-Notes/src/components/Hr.astro", void 0);

const IconX = createSvgComponent({"meta":{"src":"/_astro/IconX.DK0Dc7zq.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-x"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" />"});

const IconSearch = createSvgComponent({"meta":{"src":"/_astro/IconSearch.w3diR66o.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-search"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" />"});

const IconArchive = createSvgComponent({"meta":{"src":"/_astro/IconArchive.Woxh8eou.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-archive"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z\" /><path d=\"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10\" /><path d=\"M10 12l4 0\" />"});

const IconMenuDeep = createSvgComponent({"meta":{"src":"/_astro/IconMenuDeep.CczWFiGg.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M4 6h16\" /><path d=\"M7 12h13\" /><path d=\"M10 18h10\" />"});

const $$Astro$3 = createAstro("https://astro-paper.pages.dev/");
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const {
    id,
    href,
    class: className = "",
    ariaLabel,
    title,
    disabled = false
  } = Astro2.props;
  return renderTemplate`${disabled ? renderTemplate`${maybeRenderHead()}<span${addAttribute(id, "id")}${addAttribute(["group inline-block", className], "class:list")}${addAttribute(title, "title")}${addAttribute(disabled, "aria-disabled")}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`<a${addAttribute(id, "id")}${addAttribute(href, "href")}${addAttribute(["group inline-block hover:text-accent", className], "class:list")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(title, "title")}>${renderSlot($$result, $$slots["default"])}</a>`}`;
}, "/home/iam/Projects/On Going/My-Notes/src/components/LinkButton.astro", void 0);

const $$Astro$2 = createAstro("https://astro-paper.pages.dev/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  const currentPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const isActive = (path) => {
    const currentPathArray = currentPath.split("/").filter((p) => p.trim());
    const pathArray = path.split("/").filter((p) => p.trim());
    return currentPath === path || currentPathArray[0] === pathArray[0];
  };
  return renderTemplate`${maybeRenderHead()}<header> <a id="skip-to-content" href="#main-content" class="absolute start-16 -top-full z-50 bg-background px-3 py-2 text-accent backdrop-blur-lg transition-all focus:top-4">
Skip to content
</a> <div id="nav-container" class="mx-auto flex max-w-app flex-col items-center justify-between sm:flex-row"> <div id="top-nav-wrap" class="relative flex w-full items-baseline justify-between bg-background p-4 sm:items-center sm:py-6"> <a href="/" class="text-md absolute py-1 leading-8 font-semibold whitespace-nowrap sm:static sm:my-auto sm:text-xl sm:leading-none"> ${SITE.title} <div class="mt-1 flex items-center space-x-1"> <div class="h-0.5 w-6 bg-gradient-to-r from-foreground to-transparent"></div> <div class="h-1 w-1 animate-pulse rounded-full bg-accent"></div> <div class="h-1 w-1 animate-pulse rounded-full bg-foreground"></div> </div> </a> <nav id="nav-menu" class="flex w-full flex-col items-center sm:ms-2 sm:flex-row sm:justify-end sm:space-x-4 sm:py-0"> <button id="menu-btn" class="focus-outline self-end p-2 sm:hidden" aria-label="Open Menu" aria-expanded="false" aria-controls="menu-items"> ${renderComponent($$result, "IconX", IconX, { "id": "close-icon", "class": "hidden" })} ${renderComponent($$result, "IconMenuDeep", IconMenuDeep, { "id": "menu-icon" })} </button> <ul id="menu-items"${addAttribute([
    "mt-4 grid w-44 grid-cols-2 place-content-center gap-2",
    "[&>li>a]:block [&>li>a]:px-4 [&>li>a]:py-3 [&>li>a]:text-center [&>li>a]:font-medium [&>li>a]:hover:text-accent sm:[&>li>a]:px-2 sm:[&>li>a]:py-1",
    "hidden",
    "sm:mt-0 sm:flex sm:w-auto sm:gap-x-5 sm:gap-y-0"
  ], "class:list")}> <li class="col-span-2"> <a href="/posts"${addAttribute({ "active-nav": isActive("/posts") }, "class:list")}>
Posts
</a> </li> <li class="col-span-2"> <a href="/tags"${addAttribute({ "active-nav": isActive("/tags") }, "class:list")}>
Tags
</a> </li> <li class="col-span-2"> <a href="/about"${addAttribute({ "active-nav": isActive("/about") }, "class:list")}>
About
</a> </li> ${renderTemplate`<li class="col-span-2"> ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": "/archives", "class:list": [
    "focus-outline flex justify-center p-3 sm:p-1",
    {
      "active-nav [&>svg]:stroke-accent": isActive("/archives")
    }
  ], "ariaLabel": "archives", "title": "Archives" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IconArchive", IconArchive, { "class": "hidden sm:inline-block" })} <span class="sm:sr-only">Archives</span> ` })} </li>`} <li class="col-span-1 flex items-center justify-center"> ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": "/search", "class:list": [
    "focus-outline flex p-3 sm:p-1",
    { "[&>svg]:stroke-accent": isActive("/search") }
  ], "ariaLabel": "search", "title": "Search" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IconSearch", IconSearch, {})} <span class="sr-only">Search</span> ` })} </li> ${renderTemplate`<li class="col-span-1 flex items-center justify-center"> <button id="theme-btn" class="focus-outline relative size-12 p-4 sm:size-8 hover:[&>svg]:stroke-accent" title="Toggles light & dark" aria-label="auto" aria-live="polite"> ${renderComponent($$result, "IconMoon", IconMoon, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" })} ${renderComponent($$result, "IconSunHigh", IconSunHigh, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" })} </button> </li>`} </ul> </nav> </div> </div> ${renderComponent($$result, "Hr", $$Hr, {})} </header> ${renderScript($$result, "/home/iam/Projects/On Going/My-Notes/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/iam/Projects/On Going/My-Notes/src/components/Header.astro", void 0);

const IconMail = createSvgComponent({"meta":{"src":"/_astro/IconMail.BsR8RxJL.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-mail"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z\" /><path d=\"M3 7l9 6l9 -6\" />"});

const IconGitHub = createSvgComponent({"meta":{"src":"/_astro/IconGitHub.D4TpU-sh.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-github"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5\" />"});

const IconBrandX = createSvgComponent({"meta":{"src":"/_astro/IconBrandX.ATC87rTm.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-x"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M4 4l11.733 16h4.267l-11.733 -16z\" /><path d=\"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772\" />"});

const IconLinkedin = createSvgComponent({"meta":{"src":"/_astro/IconLinkedin.CgFOWy_H.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M8 11v5\" /><path d=\"M8 8v.01\" /><path d=\"M12 16v-5\" /><path d=\"M16 16v-3a2 2 0 1 0 -4 0\" /><path d=\"M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z\" />"});

const IconWhatsapp = createSvgComponent({"meta":{"src":"/_astro/IconWhatsapp.B1vN587S.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9\" /><path d=\"M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1\" />"});

const IconFacebook = createSvgComponent({"meta":{"src":"/_astro/IconFacebook.DViGtK9D.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3\" />"});

const IconTelegram = createSvgComponent({"meta":{"src":"/_astro/IconTelegram.Btn5McfO.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4\" />"});

const IconPinterest = createSvgComponent({"meta":{"src":"/_astro/IconPinterest.Fl4F684Z.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-pinterest"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M8 20l4 -9\" /><path d=\"M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7\" /><path d=\"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" />"});

const IconWeb = createSvgComponent({"meta":{"src":"/_astro/IconWeb.CFJIQfnA.svg","width":24,"height":24,"format":"svg"},"attributes":{"fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","class":"size-6"},"children":"\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418\" />\n"});

const SOCIALS = [
  {
    name: "Web",
    href: "https://sagarshetty.netlify.app/",
    linkTitle: `Visit ${SITE.author}'s website`,
    icon: IconWeb
  },
  {
    name: "GitHub",
    href: "https://github.com/Sagar-Shetty21",
    linkTitle: `Visit ${SITE.author}'s GitHub`,
    icon: IconGitHub
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sagarshetty21",
    linkTitle: `Visit ${SITE.author}'s LinkedIn`,
    icon: IconLinkedin
  },
  {
    name: "Mail",
    href: "mailto:dev.sagarshetty@gmail.com",
    linkTitle: `Send an email to ${SITE.author}'s email`,
    icon: IconMail
  }
];
const SHARE_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail
  }
];

const $$Astro$1 = createAstro("https://astro-paper.pages.dev/");
const $$Socials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Socials;
  const { centered = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex-wrap justify-center gap-1", { flex: centered }], "class:list")}> ${SOCIALS.map((social) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": social.href, "class": "p-2 hover:rotate-6 sm:p-1", "title": social.linkTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "social.icon", social.icon, { "class": "inline-block size-6 scale-125 fill-transparent stroke-current stroke-2 opacity-90 group-hover:fill-transparent sm:scale-110" })} <span class="sr-only">${social.linkTitle}</span> ` })}`)} </div>`;
}, "/home/iam/Projects/On Going/My-Notes/src/components/Socials.astro", void 0);

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const { noMarginTop = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(["w-full", { "mt-auto": !noMarginTop }], "class:list")}> ${renderComponent($$result, "Hr", $$Hr, { "noPadding": true })} <div class="flex flex-col items-center justify-between py-6 sm:flex-row-reverse sm:py-4"> ${renderComponent($$result, "Socials", $$Socials, { "centered": true })} <div class="my-2 flex flex-col items-center text-sm whitespace-nowrap text-gray-600 sm:flex-row"> <span>
&copy; ${currentYear} <strong><a href="/admin">Dev.SagarShetty</a></strong> </span> <span class="hidden sm:inline">&nbsp;|&nbsp;</span> <span>Built with Astro & ❤️</span> </div> </div> </footer>`;
}, "/home/iam/Projects/On Going/My-Notes/src/components/Footer.astro", void 0);

export { $$Header as $, SHARE_LINKS as S, $$LinkButton as a, $$Footer as b, SOCIALS as c, $$Socials as d, $$Hr as e };
