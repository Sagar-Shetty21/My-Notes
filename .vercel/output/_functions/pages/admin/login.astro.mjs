import { c as createAstro, a as createComponent, r as renderComponent, e as renderScript, g as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_C9kPMc8v.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BKgePYbS.mjs';
import { createServerClient } from '@supabase/ssr';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Admin Portal - Login";
  const supabase = createServerClient(
    "https://dlyrrpjyaqpcbccjzdmq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRseXJycGp5YXFwY2JjY2p6ZG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MjI4ODgsImV4cCI6MjA2OTE5ODg4OH0.a-DFNSoYR1tUwcaZsfEz9L_i_Ksj4QDBqPBQOLw0QRI",
    {
      cookies: {
        get(key) {
          return Astro2.cookies.get(key)?.value;
        },
        set(key, value, options) {
          Astro2.cookies.set(key, value, options);
        },
        remove(key, options) {
          Astro2.cookies.delete(key, options);
        }
      }
    }
  );
  const {
    data: { session }
  } = await supabase.auth.getSession();
  if (session) {
    const redirectTo2 = Astro2.url.searchParams.get("redirect") || "/admin";
    return Astro2.redirect(redirectTo2);
  }
  const redirectTo = Astro2.url.searchParams.get("redirect") || "/admin";
  const errorType = Astro2.url.searchParams.get("error");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-6maxmw56": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative min-h-screen overflow-hidden" data-astro-cid-6maxmw56> <!-- Animated Background Stars --> <div class="absolute inset-0 overflow-hidden" data-astro-cid-6maxmw56> <div class="absolute top-1/4 left-1/5 h-0.5 w-0.5 animate-pulse rounded-full bg-foreground opacity-70" data-astro-cid-6maxmw56></div> <div class="animation-delay-500 absolute top-1/3 right-1/4 h-1 w-1 animate-ping rounded-full bg-foreground opacity-50" data-astro-cid-6maxmw56></div> <div class="animation-delay-1000 absolute bottom-1/3 left-1/6 h-0.5 w-0.5 animate-pulse rounded-full bg-foreground opacity-60" data-astro-cid-6maxmw56></div> <div class="animation-delay-1500 absolute top-1/2 right-1/5 h-1 w-1 animate-ping rounded-full bg-foreground opacity-40" data-astro-cid-6maxmw56></div> <div class="animation-delay-2000 absolute right-1/2 bottom-1/4 h-0.5 w-0.5 animate-pulse rounded-full bg-foreground opacity-80" data-astro-cid-6maxmw56></div> <div class="animation-delay-300 absolute top-1/6 right-1/12 h-0.5 w-0.5 animate-pulse rounded-full bg-foreground opacity-50" data-astro-cid-6maxmw56></div> <div class="animation-delay-1200 absolute bottom-1/6 left-1/3 h-1 w-1 animate-ping rounded-full bg-foreground opacity-60" data-astro-cid-6maxmw56></div> <div class="animation-delay-800 absolute top-2/5 left-2/5 h-0.5 w-0.5 animate-pulse rounded-full bg-foreground opacity-70" data-astro-cid-6maxmw56></div> </div> <!-- Main Content --> <div class="relative z-10 flex min-h-screen items-center justify-center px-4" data-astro-cid-6maxmw56> <div class="w-full max-w-md transform rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-2xl backdrop-blur-xl transition-all duration-700 hover:scale-[1.02]" data-astro-cid-6maxmw56> <!-- Logo Section --> <div class="mb-8 text-center" data-astro-cid-6maxmw56> <h1 class="my-2 bg-accent bg-clip-text text-4xl font-bold text-transparent" data-astro-cid-6maxmw56>
Admin Login
</h1> <p class="text-sm text-foreground/70" data-astro-cid-6maxmw56>
Access the dashboard to create and manage blog content.
</p> </div> <!-- Error Message --> ${errorType === "unauthorized" && renderTemplate`<div class="mb-6 rounded-lg border border-red-300 bg-red-100 p-4 text-red-700" data-astro-cid-6maxmw56> <p class="text-sm" data-astro-cid-6maxmw56>
Access denied. Admin privileges required.
</p> </div>`} <!-- Login Form --> <form id="loginForm" class="space-y-6" data-astro-cid-6maxmw56> <!-- Hidden redirect field --> <input type="hidden" id="redirectTo"${addAttribute(redirectTo, "value")} data-astro-cid-6maxmw56> <!-- Email Field --> <div class="space-y-2" data-astro-cid-6maxmw56> <label for="email" class="block text-sm font-medium text-foreground/90" data-astro-cid-6maxmw56>
Email Address
</label> <input type="email" id="email" name="email" required class="w-full rounded-xl border border-foreground/15 bg-foreground/8 px-4 py-3 text-foreground placeholder-foreground/50 transition-all duration-300 hover:bg-foreground/12 focus:border-transparent focus:ring-2 focus:ring-accent focus:outline-none" placeholder="Enter your email address" data-astro-cid-6maxmw56> </div> <!-- Password Field --> <div class="space-y-2" data-astro-cid-6maxmw56> <label for="password" class="block text-sm font-medium text-foreground/90" data-astro-cid-6maxmw56>
Password
</label> <input type="password" id="password" name="password" required class="w-full rounded-xl border border-foreground/15 bg-foreground/8 px-4 py-3 text-foreground placeholder-foreground/50 transition-all duration-300 hover:bg-foreground/12 focus:border-transparent focus:ring-2 focus:ring-accent focus:outline-none" placeholder="Enter your password" data-astro-cid-6maxmw56> </div> <!-- Remember Me Checkbox --> <div class="flex items-center justify-center pb-2" data-astro-cid-6maxmw56> <input type="checkbox" id="remember" name="remember" class="h-3 w-3 rounded border-foreground/20 bg-foreground/8 text-accent focus:ring-2 focus:ring-accent" data-astro-cid-6maxmw56> <label for="remember" class="ml-2 text-sm text-foreground/70" data-astro-cid-6maxmw56>
Remember me for 30 days
</label> </div> <!-- Login Button --> <button type="submit" class="w-full transform rounded-xl bg-accent px-4 py-3 font-semibold text-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70" id="loginButton" data-astro-cid-6maxmw56> <span class="login-text" data-astro-cid-6maxmw56>Sign In to Dashboard</span> </button> </form> <!-- Forgot Password Link --> <div class="mt-6 text-center" data-astro-cid-6maxmw56> <a href="/admin/forgot-password" class="text-sm text-accent transition-colors duration-200 hover:text-accent/80" data-astro-cid-6maxmw56>
Forgot your password?
</a> </div> <!-- Footer --> <p class="mt-8 text-center text-sm text-foreground/60" data-astro-cid-6maxmw56>
Powered by Supabase Auth
</p> </div> </div> <!-- Toast Container --> <div id="toast-container" class="fixed top-4 right-4 z-50 space-y-2" data-astro-cid-6maxmw56></div> </main> ` })}  ${renderScript($$result, "/home/iam/Projects/On Going/My-Notes/src/pages/admin/login/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/iam/Projects/On Going/My-Notes/src/pages/admin/login/index.astro", void 0);
const $$file = "/home/iam/Projects/On Going/My-Notes/src/pages/admin/login/index.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
