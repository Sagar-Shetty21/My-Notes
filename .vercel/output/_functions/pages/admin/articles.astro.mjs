import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderScript } from '../../chunks/astro/server_ixCSCnnp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BUoxi9Ex.mjs';
import { s as supabase } from '../../chunks/supabaseClient_u_L1k4gK.mjs';
import { I as IconMoon, a as IconSunHigh } from '../../chunks/IconSunHigh_CoFjy6Hg.mjs';
import { S as SettingsIcon } from '../../chunks/IconSettings_DVS9z-2H.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { data, error: articlesError } = await supabase.from("blogs").select("*").order("modDatetime", { ascending: false });
  const url = new URL(Astro2.request.url);
  const statusFilter = url.searchParams.get("status") || "all";
  const categoryFilter = url.searchParams.get("category") || "all";
  const authorFilter = url.searchParams.get("author") || "all";
  const sortBy = url.searchParams.get("sort") || "createdAt";
  const sortOrder = url.searchParams.get("order") || "desc";
  const search = url.searchParams.get("search") || "";
  const currentPage = parseInt(url.searchParams.get("page") || "1");
  const itemsPerPage = parseInt(url.searchParams.get("perPage") || "10");
  let filteredArticles = data ?? [];
  if (statusFilter !== "all") {
    filteredArticles = filteredArticles.filter(
      (article) => article.status === statusFilter
    );
  }
  if (categoryFilter !== "all") {
    filteredArticles = filteredArticles.filter(
      (article) => article.category === categoryFilter
    );
  }
  if (authorFilter !== "all") {
    filteredArticles = filteredArticles.filter(
      (article) => article.author === authorFilter
    );
  }
  if (search) {
    filteredArticles = filteredArticles.filter(
      (article) => article.title.toLowerCase().includes(search.toLowerCase()) || article.author.toLowerCase().includes(search.toLowerCase()) || article.tags.some(
        (tag) => tag.toLowerCase().includes(search.toLowerCase())
      )
    );
  }
  filteredArticles.sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];
    if (sortBy === "createdAt" || sortBy === "updatedAt") {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }
    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
  const totalItems = filteredArticles.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
  const pageStart = Math.max(1, Math.min(totalPages - 4, currentPage - 2));
  const pageNumbers = Array.from(
    { length: Math.min(5, totalPages) },
    (_, i) => pageStart + i
  );
  const query = Object.fromEntries(new URLSearchParams(url.search));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-screen flex-col bg-background font-sans leading-relaxed text-foreground"> <!-- Header --> <header class="flex-shrink-0 border-b bg-background shadow-sm"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between py-6"> <div> <h1 class="text-3xl font-bold text-foreground">
Articles Management
</h1> <p class="mt-1 text-foreground/80">
Manage and filter your content library
</p> </div> <div class="flex items-center space-x-12"> ${renderTemplate`<li class="col-span-1 flex items-center justify-center"> <button id="theme-btn" class="focus-outline relative size-16 p-4 sm:size-8 hover:[&>svg]:stroke-accent" title="Toggles light & dark" aria-label="auto" aria-live="polite"> ${renderComponent($$result2, "IconMoon", IconMoon, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" })} ${renderComponent($$result2, "IconSunHigh", IconSunHigh, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" })} </button> </li>`} <a href="/admin/settings" class="focus-outline relative flex size-16 items-center justify-center transition-all hover:rotate-90 sm:size-8 hover:[&>svg]:stroke-accent"> ${renderComponent($$result2, "SettingsIcon", SettingsIcon, { "class": "size-7" })} </a> <a href="/admin/manage" class="flex items-center space-x-2 rounded-lg bg-accent px-6 py-3 font-medium text-foreground transition-colors duration-200 hover:bg-accent/80"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path> </svg> <span>Create New Article</span> </a> </div> </div> </div> </header> <!-- Main Content Container --> <div class="flex flex-1 flex-col overflow-hidden"> <div class="mx-auto flex h-full w-full max-w-7xl flex-col px-8 py-4"> <!-- Compact Stats & Filters Row --> <div class="mb-4 flex-shrink-0"> <!-- Compact Stats --> <div class="mb-4 rounded-lg bg-muted p-4"> <div class="flex items-center justify-between text-sm"> <div class="flex items-center space-x-8"> <div class="text-center"> <span class="text-lg font-bold">${data?.length}</span> <span class="ml-1 text-foreground/70">Total</span> </div> <div class="text-center"> <span class="text-lg font-bold text-green-600">${data?.filter(
    (a) => a.status === "published"
  ).length}</span> <span class="ml-1 text-foreground/70">Published</span> </div> <div class="text-center"> <span class="text-lg font-bold text-yellow-600">${data?.filter(
    (a) => a.status === "draft"
  ).length}</span> <span class="ml-1 text-foreground/70">Drafts</span> </div> <div class="text-center"> <span class="text-lg font-bold text-blue-600">${filteredArticles.length}</span> <span class="ml-1 text-foreground/70">Filtered</span> </div> </div> <div class="text-sm text-foreground/70">
Showing ${startIndex + 1}-${Math.min(endIndex, totalItems)} of ${totalItems} </div> </div> </div> <!-- Compact Filters --> <form class="rounded-lg bg-muted p-4 shadow-sm" method="GET"> <div class="flex flex-wrap items-end gap-4"> <div class="min-w-[200px] flex-1"> <input type="text" name="search" id="search" placeholder="Search articles, authors, or tags..."${addAttribute(search, "value")} class="w-full rounded-lg border border-border bg-background p-2 text-sm"> </div> <select name="status" class="rounded-lg border border-border bg-background p-2 text-sm"> <option value="all"${addAttribute(statusFilter === "all", "selected")}>All Status</option> <option value="published"${addAttribute(statusFilter === "published", "selected")}>Published</option> <option value="draft"${addAttribute(statusFilter === "draft", "selected")}>Draft</option> </select> <select name="sort" class="rounded-lg border border-border bg-background p-2 text-sm"> <option value="createdAt"${addAttribute(sortBy === "createdAt", "selected")}>Created Date</option> <option value="updatedAt"${addAttribute(sortBy === "updatedAt", "selected")}>Updated Date</option> <option value="title"${addAttribute(sortBy === "title", "selected")}>Title</option> </select> <select name="order" class="rounded-lg border border-border bg-background p-2 text-sm"> <option value="desc"${addAttribute(sortOrder === "desc", "selected")}>Desc</option> <option value="asc"${addAttribute(sortOrder === "asc", "selected")}>Asc</option> </select> <select name="perPage" class="rounded-lg border border-border bg-background p-2 text-sm"> <option value="10"${addAttribute(itemsPerPage === 10, "selected")}>10/page</option> <option value="25"${addAttribute(itemsPerPage === 25, "selected")}>25/page</option> <option value="50"${addAttribute(itemsPerPage === 50, "selected")}>50/page</option> </select> <input type="hidden" name="page" value="1"> <button type="submit" class="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-foreground hover:bg-accent/80">
Apply
</button> </div> </form> </div> <!-- Table Container - Takes remaining space --> ${articlesError ? renderTemplate`<div class="flex flex-1 flex-col items-center font-semibold justify-center text-red-500 overflow-hidden rounded-lg bg-muted shadow-sm p-4">
Failed to fetch the articles!
</div>` : renderTemplate`<div class="flex flex-1 flex-col overflow-hidden rounded-lg bg-muted shadow-sm"> <!-- Table Header --> <div class="flex-shrink-0 border-b border-border bg-muted px-6 py-3"> <h3 class="text-lg font-semibold text-foreground">
Articles (${totalItems} total, ${paginatedArticles.length} shown)
</h3> </div> <!-- Table Content - Scrollable --> <div class="flex-1 overflow-auto"> ${paginatedArticles.length > 0 ? renderTemplate`<table class="w-full"> <thead class="sticky top-0 bg-background/90 backdrop-blur-sm"> <tr> <th class="border-b border-border px-4 py-3 text-left text-xs font-semibold tracking-wide text-foreground uppercase">
Title
</th> <th class="border-b border-border px-4 py-3 text-left text-xs font-semibold tracking-wide text-foreground uppercase">
Author
</th> <th class="border-b border-border px-4 py-3 text-center text-xs font-semibold tracking-wide text-foreground uppercase">
Status
</th> <th class="border-b border-border px-4 py-3 text-left text-xs font-semibold tracking-wide text-foreground uppercase">
Created
</th> <th class="border-b border-border px-4 py-3 text-left text-xs font-semibold tracking-wide text-foreground uppercase">
Tags
</th> <th class="w-48 border-b border-border px-4 py-3 text-center text-xs font-semibold tracking-wide text-foreground uppercase">
Actions
</th> </tr> </thead> <tbody> ${paginatedArticles.map((article) => renderTemplate`<tr class="transition-colors hover:bg-background/60"> <td class="border-b border-border px-4 py-3"> <div class="text-sm font-medium text-foreground"> ${article.title} </div> </td> <td class="border-b border-border px-4 py-3 text-sm text-foreground"> ${article.author} </td> <td class="border-b border-border px-4 py-3 text-center"> <span${addAttribute(`inline-block rounded-full px-2 py-1 text-xs font-medium ${article.draft === false ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`, "class")}> ${article.status} </span> </td> <td class="border-b border-border px-4 py-3 text-sm text-foreground"> ${new Date(
    article.pubDatetime
  ).toLocaleDateString()} </td> <td class="border-b border-border px-4 py-3"> <div class="flex max-w-48 flex-wrap gap-1"> ${article.tags.slice(0, 2).map(
    (tag) => renderTemplate`<span class="rounded-full bg-sky-100 px-2 py-1 text-xs font-medium text-sky-800"> ${tag} </span>`
  )} ${article.tags.length > 2 && renderTemplate`<span class="text-xs text-foreground/60">
+
${article.tags.length - 2} </span>`} </div> </td> <td class="border-b border-border px-4 py-3"> <div class="flex items-center justify-center gap-2"> <a${addAttribute(`/articles/${article.slug}`, "href")} class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-100" title="View Article"> <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg> <span class="ml-1">
View
</span> </a> <a${addAttribute(`/admin/manage?edit=${article.id}`, "href")} class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100" title="Edit Article"> <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg> <span class="ml-1">
Edit
</span> </a> <form method="POST" action="/api/articles/toggle-status" class="inline"> <input type="hidden" name="articleId"${addAttribute(
    article.id,
    "value"
  )}> <input type="hidden" name="currentStatus"${addAttribute(
    article.status,
    "value"
  )}> <button type="submit"${addAttribute(`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium transition-colors ${article.status === "published" ? "bg-red-50 text-red-700 hover:bg-red-100" : "bg-green-50 text-green-700 hover:bg-green-100"}`, "class")}${addAttribute(
    article.status === "published" ? "Unpublish" : "Publish",
    "title"
  )}> <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> ${article.status === "published" ? renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>` : renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`} </svg> <span class="ml-1"> ${article.status === "published" ? "Unpub" : "Pub"} </span> </button> </form> </div> </td> </tr>`)} </tbody> </table>` : renderTemplate`<div class="flex flex-1 items-center justify-center py-12 text-slate-500"> <div class="text-center"> <h3 class="mb-4 text-xl font-semibold text-gray-700">
No articles found
</h3> <p>
Try adjusting your filters or search
                                                terms.
</p> </div> </div>`} </div> <!-- Pagination Footer --> ${totalPages > 1 && renderTemplate`<div class="flex-shrink-0 border-t border-border bg-muted px-6 py-4"> <div class="flex items-center justify-between"> <div class="text-sm text-foreground/70">
Page ${currentPage} of ${totalPages} </div> <div class="flex items-center space-x-2"> ${currentPage > 1 && renderTemplate`<a${addAttribute(`?${new URLSearchParams({
    ...Object.fromEntries(
      new URLSearchParams(
        url.search
      )
    ),
    page: (currentPage - 1).toString()
  })}`, "href")} class="rounded-md border border-border bg-background px-3 py-1 text-sm transition-colors hover:bg-accent/20">
Previous
</a>`} ${pageNumbers.map((pageNum) => {
    if (pageNum > totalPages)
      return null;
    const pageURL = new URLSearchParams(
      {
        ...query,
        page: pageNum.toString()
      }
    ).toString();
    return renderTemplate`<a${addAttribute(`?${pageURL}`, "href")}${addAttribute(`rounded-md px-3 py-1 text-sm transition-colors ${pageNum === currentPage ? "bg-accent font-medium text-foreground" : "border border-border bg-background hover:bg-accent/20"}`, "class")}> ${pageNum} </a>`;
  })} ${currentPage < totalPages && renderTemplate`<a${addAttribute(`?${new URLSearchParams({
    ...Object.fromEntries(
      new URLSearchParams(
        url.search
      )
    ),
    page: (currentPage + 1).toString()
  })}`, "href")} class="rounded-md border border-border bg-background px-3 py-1 text-sm transition-colors hover:bg-accent/20">
Next
</a>`} </div> </div> </div>`} </div>`} </div> </div> ${renderScript($$result2, "/home/iam/Projects/On Going/My-Notes/src/pages/admin/articles/index.astro?astro&type=script&index=0&lang.ts")} </div> ` })}`;
}, "/home/iam/Projects/On Going/My-Notes/src/pages/admin/articles/index.astro", void 0);

const $$file = "/home/iam/Projects/On Going/My-Notes/src/pages/admin/articles/index.astro";
const $$url = "/admin/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
