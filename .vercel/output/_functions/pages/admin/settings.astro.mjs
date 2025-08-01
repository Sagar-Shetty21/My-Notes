import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderScript } from '../../chunks/astro/server_ixCSCnnp.mjs';
import 'kleur/colors';
import { s as supabase } from '../../chunks/supabaseClient_u_L1k4gK.mjs';
import { S as SITE } from '../../chunks/config_BNeQ3wY4.mjs';
import { c as createSvgComponent, I as IconMoon, a as IconSunHigh } from '../../chunks/IconSunHigh_CoFjy6Hg.mjs';
import { $ as $$Layout } from '../../chunks/Layout_D2ta28gk.mjs';
import { s as slugifyStr } from '../../chunks/slugify_CvQuO4Tx.mjs';
export { renderers } from '../../renderers.mjs';

const FileText = createSvgComponent({"meta":{"src":"/_astro/IconFileText.Ba6n25fe.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"lucide lucide-file-text-icon lucide-file-text"},"children":"<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /><path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /><path d=\"M10 9H8\" /><path d=\"M16 13H8\" /><path d=\"M16 17H8\" />"});

const ChevronDown = createSvgComponent({"meta":{"src":"/_astro/IconChevronDown.C3M_BN1R.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"lucide lucide-chevron-down-icon lucide-chevron-down"},"children":"<path d=\"m6 9 6 6 6-6\" />"});

const Database = createSvgComponent({"meta":{"src":"/_astro/IconDatabase.BIaE6BJr.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"lucide lucide-database-icon lucide-database"},"children":"<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\" /><path d=\"M3 5V19A9 3 0 0 0 21 19V5\" /><path d=\"M3 12A9 3 0 0 0 21 12\" />"});

const AlertTriangle = createSvgComponent({"meta":{"src":"/_astro/IconAlertTriangle.BkN4GWx0.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"lucide lucide-triangle-alert-icon lucide-triangle-alert"},"children":"<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /><path d=\"M12 9v4\" /><path d=\"M12 17h.01\" />"});

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const getLocalBlogFiles = async () => {
    try {
      const response = await fetch(`${Astro2.url.origin}/api/blog-files`);
      const files = await response.json();
      return files;
    } catch (error) {
      console.error("Error reading local files:", error);
      return [];
    }
  };
  let stats = {
    totalArticles: 0,
    publishedArticles: 0,
    localFiles: [],
    supabaseBlogs: [],
    loading: false
  };
  let localOnlyBlogs = [];
  let dbOnlyBlogs = [];
  let unpublishedInDb = [];
  let SystemStatsFetchError = null;
  try {
    const { count: totalArticles } = await supabase.from("blogs").select("*", { count: "exact", head: true });
    const { count: publishedArticles } = await supabase.from("blogs").select("*", { count: "exact", head: true }).eq("draft", false);
    const { data: supabaseBlogs } = await supabase.from("blogs").select("title, draft");
    const localFiles = await getLocalBlogFiles();
    stats = {
      totalArticles: totalArticles || 0,
      publishedArticles: publishedArticles || 0,
      localFiles: localFiles || [],
      supabaseBlogs: supabaseBlogs || [],
      loading: false
    };
    const localTitles = new Set(stats.localFiles.map((file) => file.title));
    const dbTitles = new Set(stats.supabaseBlogs.map((blog) => blog.title));
    localOnlyBlogs = stats.localFiles.filter((file) => !dbTitles.has(file.title));
    dbOnlyBlogs = stats.supabaseBlogs.filter(
      (blog) => !localTitles.has(blog.title)
    );
    unpublishedInDb = stats.supabaseBlogs.filter((blog) => blog.draft);
  } catch (error) {
    SystemStatsFetchError = error;
  }
  const hostingPlatform = SITE.hosting;
  let webhookUrl = "";
  switch (hostingPlatform) {
    case "vercel":
      webhookUrl = "https://api.vercel.com/v1/integrations/deploy/prj_E2cG1IuTyQ7w22ycW11SXYvupfQL/bk3tzz69zH";
      break;
    case "netlify":
      webhookUrl = "";
      break;
    case "github":
      webhookUrl = `https://api.github.com/repos/${"https://github.com/Sagar-Shetty21/My-Notes.git"}/dispatches`;
      break;
    default:
      return new Response("Platform not configured", { status: 400 });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex max-h-screen min-h-screen flex-col overflow-hidden bg-background/80 text-foreground"> <!-- Header --> <header class="flex-shrink-0 border-b bg-background shadow-sm"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between py-6"> <div> <h1 class="text-3xl font-bold text-foreground">
Admin Settings
</h1> <p class="mt-1 text-foreground/80">
Manage your blog configuration and deployment
                            settings
</p> </div> <div class="flex items-center space-x-8"> ${renderTemplate`<button id="theme-btn" class="focus-outline relative size-16 p-4 sm:size-8 hover:[&>svg]:stroke-accent" title="Toggles light & dark" aria-label="auto" aria-live="polite"> ${renderComponent($$result2, "IconMoon", IconMoon, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" })} ${renderComponent($$result2, "IconSunHigh", IconSunHigh, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" })} </button>`} <a href="/admin" class="flex items-center space-x-2 rounded-lg bg-accent px-6 py-3 font-medium text-foreground transition-colors duration-200 hover:bg-accent/80"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5v4"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v4"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5v4"></path> </svg> <span>Back to Dashboard</span> </a> </div> </div> </div> </header> <div class="mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col overflow-y-auto px-4 py-8 sm:px-6 lg:px-8"> <!-- System Statistics --> <div class="mb-8 rounded-lg bg-muted p-6 shadow"> <h2 class="mb-6 text-2xl font-semibold text-foreground">
System Statistics
</h2> ${SystemStatsFetchError && renderTemplate`<div>Failed to load System statistics</div>`} <!-- Main Statistics Grid --> <div class="grid gap-6 md:grid-cols-3"> <div class="rounded-lg bg-background p-4 text-center"> <div class="text-3xl font-bold text-blue-600"> ${stats.totalArticles} </div> <div class="text-sm font-medium text-foreground/80">
Total Articles (DB)
</div> </div> <div class="rounded-lg bg-background p-4 text-center"> <div class="text-3xl font-bold text-green-600"> ${stats.publishedArticles} </div> <div class="text-sm font-medium text-foreground/80">
Published Articles
</div> </div> <div class="rounded-lg bg-background p-4 text-center"> <div class="text-3xl font-bold text-yellow-600"> ${stats.totalArticles - stats.publishedArticles} </div> <div class="text-sm font-medium text-foreground/80">
Draft Articles
</div> </div> </div> <!-- File Comparison Section --> <div class="mt-8"> <h3 class="mb-4 text-xl font-semibold text-foreground">
File Synchronization Status
</h3> <div class="grid gap-4 md:grid-cols-3"> <!-- Local Files --> <div class="rounded-lg bg-background p-4"> <div class="mb-2 flex items-center justify-between"> <div class="flex items-center gap-2"> ${renderComponent($$result2, "FileText", FileText, { "class": "h-5 w-5 text-blue-600" })} <span class="font-semibold text-blue-600"> ${stats.localFiles.length} </span> </div> <span class="text-sm font-medium text-foreground/80">
Local Files
</span> </div> <div class="text-xs text-foreground/60">
/src/data/blog/*.md
</div> </div> <!-- Database Files --> <div class="rounded-lg bg-background p-4"> <div class="mb-2 flex items-center justify-between"> <div class="flex items-center gap-2"> ${renderComponent($$result2, "Database", Database, { "class": "h-5 w-5 text-green-600" })} <span class="font-semibold text-green-600"> ${stats.supabaseBlogs.length} </span> </div> <span class="text-sm font-medium text-foreground/80">
Database Entries
</span> </div> <div class="text-xs text-foreground/60">
Supabase blogs table
</div> </div> <!-- Sync Issues --> <div class="rounded-lg bg-background p-4"> <div class="mb-2 flex items-center justify-between"> <div class="flex items-center gap-2"> ${renderComponent($$result2, "AlertTriangle", AlertTriangle, { "class": "h-5 w-5 text-orange-600" })} <span class="font-semibold text-orange-600"> ${localOnlyBlogs.length + dbOnlyBlogs.length} </span> </div> <span class="text-sm font-medium text-foreground/80">
Sync Issues
</span> </div> <div class="text-xs text-foreground/60">
Files/DB mismatches
</div> </div> </div> </div> <!-- Detailed Lists --> <div class="mt-6 space-y-4"> <!-- Local Only Files --> ${localOnlyBlogs.length > 0 && renderTemplate`<div class="rounded-lg border border-red-200 bg-background p-4"> <button class="toggle-details flex w-full items-center justify-between text-left" data-target="localOnly"> <div class="flex items-center gap-2"> ${renderComponent($$result2, "AlertTriangle", AlertTriangle, { "class": "h-4 w-4 text-red-600" })} <span class="font-medium text-red-800"> ${`Files not in Database (${localOnlyBlogs.length})`} </span> </div> ${renderComponent($$result2, "ChevronDown", ChevronDown, { "class": "chevron-icon h-4 w-4 text-red-600" })} </button> <div class="details-content mt-3 hidden space-y-2" id="localOnly"> <p class="mb-2 text-sm text-red-700">
These files exist locally but are not in
                                        your Supabase database. You may need to
                                        rebuild your app to publish them.
</p> ${localOnlyBlogs.map((file) => renderTemplate`<div class="rounded border border-border bg-muted p-2 text-sm"> <div class="font-medium"> ${file.title} </div> <div class="text-gray-600">
File:${" "} ${slugifyStr(file.title) + ".md"} </div> <div class="text-gray-600">
Draft:${" "} ${file.draft ? "Yes" : "No"} </div> ${file.pubDatetime && renderTemplate`<div class="text-gray-600">
Date:${" "} ${new Date(
    file.pubDatetime
  ).toLocaleDateString()} </div>`} </div>`)} </div> </div>`} <!-- Database Only Files --> ${dbOnlyBlogs.length > 0 && renderTemplate`<div class="rounded-lg border border-yellow-200 bg-background p-4"> <button class="toggle-details flex w-full items-center justify-between text-left" data-target="dbOnly"> <div class="flex items-center gap-2"> ${renderComponent($$result2, "AlertTriangle", AlertTriangle, { "class": "h-4 w-4 text-yellow-600" })} <span class="font-medium text-yellow-800"> ${`Database entries without local files (${dbOnlyBlogs.length})`} </span> </div> ${renderComponent($$result2, "ChevronDown", ChevronDown, { "class": "chevron-icon h-4 w-4 text-yellow-600" })} </button> <div class="details-content mt-3 hidden space-y-2" id="dbOnly"> <p class="mb-2 text-sm text-yellow-700">
These entries exist in your database but
                                        don't have corresponding local markdown
                                        files.
</p> ${dbOnlyBlogs.map((blog) => renderTemplate`<div class="rounded border border-border bg-muted p-2 text-sm"> <div class="font-medium"> ${blog.title} </div> <div class="text-gray-600">
Status:${" "} ${blog.draft ? "Draft" : "Published"} </div> </div>`)} </div> </div>`} <!-- Unpublished Articles --> ${unpublishedInDb.length > 0 && renderTemplate`<div class="rounded-lg border border-blue-200 bg-background p-4"> <button class="toggle-details flex w-full items-center justify-between text-left" data-target="unpublished"> <div class="flex items-center gap-2"> ${renderComponent($$result2, "FileText", FileText, { "class": "h-4 w-4 text-blue-600" })} <span class="font-medium text-blue-800"> ${`Unpublished Articles (${unpublishedInDb.length})`} </span> </div> ${renderComponent($$result2, "ChevronDown", ChevronDown, { "class": "chevron-icon h-4 w-4 text-blue-600" })} </button> <div class="details-content mt-3 hidden space-y-2" id="unpublished"> <p class="mb-2 text-sm text-blue-700">
These articles are marked as drafts in
                                        your database.
</p> ${unpublishedInDb.map((blog) => renderTemplate`<div class="rounded border border-border bg-muted p-2 text-sm"> <div class="font-medium"> ${blog.title} </div> </div>`)} </div> </div>`} <!-- All Good Message --> ${localOnlyBlogs.length === 0 && dbOnlyBlogs.length === 0 && renderTemplate`<div class="rounded-lg border border-green-200 bg-green-50 p-4"> <div class="flex items-center gap-2"> <div class="h-4 w-4 rounded-full bg-green-600"></div> <span class="font-medium text-green-800">
All files are synchronized between
                                            local directory and database
</span> </div> </div>`} </div> </div> <!-- Deployment Section --> <div class="mb-8 rounded-lg bg-muted p-6 shadow"> <div class="mb-6 flex items-center justify-between"> <div> <h2 class="text-2xl font-semibold text-foreground">
Deployment Settings
</h2> <p class="mt-1 text-sm text-foreground/80">
Manage your blog deployment and build triggers
</p> </div> <div class="text-right"> <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"> ${hostingPlatform.charAt(0).toUpperCase() + hostingPlatform.slice(1)} </span> </div> </div> <!-- Deploy Button --> <div class="mb-6 rounded-lg border border-border bg-background p-4"> <div class="flex items-center justify-between"> <div> <h3 class="font-medium text-foreground">
Trigger Deployment
</h3> <p class="text-sm text-foreground/80">
Rebuild and deploy your site with latest
                                published articles
</p> </div> <button id="deploy-btn"${addAttribute(webhookUrl, "data-webhook-url")}${addAttribute(hostingPlatform, "data-hosting-platform")} class="flex items-center space-x-2 rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> <span>Deploy Now</span> </button> </div> <div id="deploy-status" class="mt-4 hidden"></div> </div> <!-- Webhook URL --> <div class="mb-6 rounded-lg border border-border bg-background p-4"> <h3 class="mb-2 font-medium text-foreground">
Webhook URL
</h3> <div class="flex items-center space-x-3"> <code class="flex-1 rounded bg-muted px-3 py-2 font-mono text-sm text-foreground"> ${webhookUrl} </code> <button${addAttribute(`navigator.clipboard.writeText('${webhookUrl}')`, "onclick")} class="rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800" title="Copy webhook URL"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path> </svg> </button> </div> </div> </div> <!-- Site Configuration --> <div class="mb-8 rounded-lg bg-muted p-6 shadow"> <h2 class="mb-6 text-2xl font-semibold text-foreground">
Site Configuration
</h2> <div class="grid gap-6 md:grid-cols-2"> <!-- Basic Info --> <div class="space-y-4"> <h3 class="text-lg font-medium text-foreground">
Basic Information
</h3> <div> <label class="block text-sm font-medium text-foreground/80">Website URL</label> <div class="mt-1 rounded bg-background px-3 py-2"> <a${addAttribute(SITE.website, "href")} target="_blank" class="text-accent hover:text-accent/80"> ${SITE.website} </a> </div> </div> <div> <label class="block text-sm font-medium text-foreground/80">Title</label> <div class="mt-1 rounded bg-background px-3 py-2 text-foreground"> ${SITE.title} </div> </div> <div> <label class="block text-sm font-medium text-foreground/80">Description</label> <div class="mt-1 rounded bg-background px-3 py-2 text-foreground"> ${SITE.desc} </div> </div> <div> <label class="block text-sm font-medium text-foreground/80">Author</label> <div class="mt-1 rounded bg-background px-3 py-2"> <a${addAttribute(SITE.profile, "href")} target="_blank" class="text-accent hover:text-accent/80"> ${SITE.author} </a> </div> </div> </div> <!-- Display Settings --> <div class="space-y-4"> <h3 class="text-lg font-medium text-foreground">
Display Settings
</h3> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-medium text-foreground/80">Posts per Index</label> <div class="mt-1 rounded bg-background px-3 py-2 text-foreground"> ${SITE.postPerIndex} </div> </div> <div> <label class="block text-sm font-medium text-foreground/80">Posts per Page</label> <div class="mt-1 rounded bg-background px-3 py-2 text-foreground"> ${SITE.postPerPage} </div> </div> </div> <div> <label class="block text-sm font-medium text-foreground/80">Language & Direction</label> <div class="mt-1 flex space-x-2"> <div class="flex-1 rounded bg-background px-3 py-2 text-foreground">
Lang: ${SITE.lang} </div> <div class="flex-1 rounded bg-background px-3 py-2 text-foreground">
Dir: ${SITE.dir} </div> </div> </div> <div> <label class="block text-sm font-medium text-foreground/80">Timezone</label> <div class="mt-1 rounded bg-background px-3 py-2 text-foreground"> ${SITE.timezone} </div> </div> </div> </div> <!-- Feature Toggles --> <div class="mt-6 space-y-4"> <h3 class="text-lg font-medium text-foreground">
Features
</h3> <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"> <div class="flex items-center justify-between rounded bg-background p-3"> <span class="text-sm font-medium text-foreground">Dark Mode</span> <span${addAttribute(`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${"bg-green-100 text-green-800" }`, "class")}> ${"Enabled" } </span> </div> <div class="flex items-center justify-between rounded bg-background p-3"> <span class="text-sm font-medium text-foreground">Show Archives</span> <span${addAttribute(`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${"bg-green-100 text-green-800" }`, "class")}> ${"Enabled" } </span> </div> <div class="flex items-center justify-between rounded bg-background p-3"> <span class="text-sm font-medium text-foreground">Back Button</span> <span${addAttribute(`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${"bg-green-100 text-green-800" }`, "class")}> ${"Enabled" } </span> </div> <div class="flex items-center justify-between rounded bg-background p-3"> <span class="text-sm font-medium text-foreground">Dynamic OG Images</span> <span${addAttribute(`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${"bg-green-100 text-green-800" }`, "class")}> ${"Enabled" } </span> </div> <div class="flex items-center justify-between rounded bg-background p-3"> <span class="text-sm font-medium text-foreground">Edit Post</span> <span${addAttribute(`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${"bg-green-100 text-green-800" }`, "class")}> ${"Enabled" } </span> </div> </div> </div> </div> <!-- Advanced Settings --> <div class="rounded-lg bg-muted p-6 shadow"> <h2 class="mb-6 text-2xl font-semibold text-foreground">
Advanced Settings
</h2> <div class="space-y-4"> <div> <label class="block text-sm font-medium text-foreground/80">OG Image</label> <div class="mt-1 rounded bg-background px-3 py-2 text-foreground"> ${SITE.ogImage} </div> </div> ${renderTemplate`<div> <label class="block text-sm font-medium text-foreground/80">
Edit Post URL
</label> <div class="mt-1 rounded bg-background px-3 py-2"> <a${addAttribute(SITE.editPost.url, "href")} target="_blank" class="text-accent hover:text-accent/80"> ${SITE.editPost.url} </a> </div> <p class="mt-1 text-xs text-foreground/60">
Button text: "${SITE.editPost.text}"
</p> </div>`} </div> </div> </div> </div> ${renderScript($$result2, "/home/iam/Projects/On Going/My-Notes/src/pages/admin/settings/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/iam/Projects/On Going/My-Notes/src/pages/admin/settings/index.astro", void 0);
const $$file = "/home/iam/Projects/On Going/My-Notes/src/pages/admin/settings/index.astro";
const $$url = "/admin/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
