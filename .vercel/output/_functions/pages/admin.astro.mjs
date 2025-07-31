import { a as createComponent, r as renderComponent, g as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C9kPMc8v.mjs';
import 'kleur/colors';
import { s as supabase } from '../chunks/supabaseClient_u_L1k4gK.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dq374h-7.mjs';
import { s as slugifyStr } from '../chunks/slugify_CvQuO4Tx.mjs';
import { I as IconMoon, a as IconSunHigh } from '../chunks/IconSunHigh_CcvG3wmw.mjs';
import { S as SettingsIcon } from '../chunks/IconSettings_CGitzfYr.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data, error: recentArticlesError } = await supabase.from("blogs").select("*").order("modDatetime", { ascending: false }).limit(10);
  const recentArticles = data ?? [];
  const { count: totalCount, error: totalArticlesError } = await supabase.from("blogs").select("*", { count: "exact", head: true });
  const { count: publishedCount, error: publishedArticlesError } = await supabase.from("blogs").select("*", { count: "exact", head: true }).eq("draft", false);
  const { count: draftCount, error: draftArticlesError } = await supabase.from("blogs").select("*", { count: "exact", head: true }).eq("draft", true);
  const totalArticles = totalCount;
  const publishedArticles = publishedCount;
  const draftArticles = draftCount;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex max-h-screen min-h-screen flex-col overflow-hidden bg-background/80 text-foreground"> <!-- Header --> <header class="flex-shrink-0 border-b bg-background shadow-sm"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between py-6"> <div> <h1 class="text-3xl font-bold text-foreground">
Blog Admin Dashboard
</h1> <p class="mt-1 text-foreground/80">
Manage your blog content and articles
</p> </div> <div class="flex items-center space-x-12"> ${renderTemplate`<li class="col-span-1 flex items-center justify-center"> <button id="theme-btn" class="focus-outline relative size-16 p-4 sm:size-8 hover:[&>svg]:stroke-accent" title="Toggles light & dark" aria-label="auto" aria-live="polite"> ${renderComponent($$result2, "IconMoon", IconMoon, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" })} ${renderComponent($$result2, "IconSunHigh", IconSunHigh, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" })} </button> </li>`} <a href="/admin/settings" class="focus-outline relative flex size-16 items-center justify-center transition-all hover:rotate-90 sm:size-8 hover:[&>svg]:stroke-accent"> ${renderComponent($$result2, "SettingsIcon", SettingsIcon, { "class": "size-7" })} </a> <a href="/admin/manage" class="flex items-center space-x-2 rounded-lg bg-accent px-6 py-3 font-medium text-foreground transition-colors duration-200 hover:bg-accent/80"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path> </svg> <span>Create New Article</span> </a> </div> </div> </div> </header> <div class="mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8"> <!-- Stats Cards --> <div class="mb-8 grid flex-shrink-0 grid-cols-1 gap-6 md:grid-cols-3"> <div class="rounded-lg bg-muted p-6 shadow"> <div class="flex items-center"> <div class="flex-shrink-0"> <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100"> <svg class="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> </div> </div> <div class="ml-4"> <p class="text-sm font-medium text-foreground/80">
Total Articles
</p> <p${addAttribute(`font-semibold ${!totalArticlesError ? "text-foreground text-2xl" : "text-red-500 text-lg"}`, "class")}> ${!totalArticlesError ? totalArticles : "Error fetching total articles"} </p> </div> </div> </div> <div class="rounded-lg bg-muted p-6 shadow"> <div class="flex items-center"> <div class="flex-shrink-0"> <div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-100"> <svg class="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> </div> <div class="ml-4"> <p class="text-sm font-medium text-foreground/80">
Published
</p> <p${addAttribute(`font-semibold ${!publishedArticlesError ? "text-foreground text-2xl" : "text-red-500 text-lg"}`, "class")}> ${!publishedArticlesError ? publishedArticles : "Error fetching published articles"} </p> </div> </div> </div> <div class="rounded-lg bg-muted p-6 shadow"> <div class="flex items-center"> <div class="flex-shrink-0"> <div class="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100"> <svg class="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> </div> <div class="ml-4"> <p class="text-sm font-medium text-foreground/80">
Drafts
</p> <p${addAttribute(`font-semibold ${!draftArticlesError ? "text-foreground text-2xl" : "text-red-500 text-lg"}`, "class")}> ${!draftArticlesError ? draftArticles : "Error fetching draft articles"} </p> </div> </div> </div> </div> <!-- Recent Articles Section --> <div class="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg shadow"> <div class="flex flex-shrink-0 items-center justify-between border-b border-border bg-muted px-6 py-4"> <div> <h2 class="text-xl font-semibold text-foreground">
Recent Articles
</h2> <p class="mt-1 text-sm text-foreground/80">
Latest published and draft articles
</p> </div> <a href="/admin/articles" class="hover:accent/80 flex items-center space-x-1 text-sm font-medium text-accent"> <span>View All Articles</span> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> <!-- Scrollable Articles Container --> <div class="flex-1 overflow-y-auto bg-muted"> <div class="divide-y divide-border"> ${recentArticles.length > 0 ? recentArticles.map((article) => renderTemplate`<div class="px-6 py-4 transition-colors duration-200 hover:bg-background/20"> <div class="flex items-center justify-between"> <div class="min-w-0 flex-1"> <div class="flex items-center space-x-3"> <h3 class="truncate text-lg font-medium text-foreground"> ${article.title} </h3> <span${addAttribute(`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${article.draft ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`, "class")}> ${article.draft ? "Draft" : "Published"} </span> </div> <p class="mt-1 line-clamp-2 text-sm text-foreground/80"> ${article.description} </p> <div class="mt-2 flex items-center space-x-4 text-sm text-foreground/40"> <span>
By ${article.author} </span> <span>•</span> <span> ${article.modDatetime ? new Date(
    article.modDatetime
  ).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  ) : new Date(
    article.pubDatetime
  ).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  )} </span> </div> </div> <div class="ml-4 flex items-center space-x-2"> <a${addAttribute(`/admin/manage?id=${article.id}`, "href")} class="rounded-lg p-2 text-blue-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-800" title="Edit Article"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg> </a> <a${addAttribute(`/posts/${slugifyStr(article.title)}`, "href")} class="rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-800" title="View Article" target="_blank"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg> </a> ${!article.draft ? renderTemplate`<button class="rounded-lg p-2 text-red-600 transition-colors duration-200 hover:bg-red-50 hover:text-red-800" title="Unpublish Article"${addAttribute(`unpublishArticle(${article.id})`, "onclick")}> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path> </svg> </button>` : renderTemplate`<button class="rounded-lg p-2 text-green-600 transition-colors duration-200 hover:bg-green-50 hover:text-green-800" title="Publish Article"${addAttribute(`publishArticle(${article.id})`, "onclick")}> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path> </svg> </button>`} </div> </div> </div>`) : !recentArticlesError ? renderTemplate`<div class="px-6 py-4 text-center text-foreground/60">
No recent articles found.
</div>` : renderTemplate`<div class="px-6 py-4 text-center text-red-500">
Failed to load recent articles. Please try
                                    again later.
</div>`} </div> </div> <div class="flex-shrink-0 border-t border-border bg-muted px-6 py-4"> <a href="/admin/articles" class="flex items-center justify-center space-x-2 text-sm font-medium text-accent hover:text-accent/80"> <span>View All ${totalArticles} Articles</span> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> </div> ` })}`;
}, "/home/iam/Projects/On Going/My-Notes/src/pages/admin/index.astro", void 0);

const $$file = "/home/iam/Projects/On Going/My-Notes/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
