import { createBrowserClient, createServerClient } from "@supabase/ssr";
import type { AstroGlobal } from "astro";

// For client-side operations (browser)
export const supabase = createBrowserClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);

// For server-side operations (middleware, API routes, server components)
export function createSupabaseServerClient(context: AstroGlobal) {
    return createServerClient(
        import.meta.env.PUBLIC_SUPABASE_URL,
        import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                get(key) {
                    return context.cookies.get(key)?.value;
                },
                set(key, value, options) {
                    context.cookies.set(key, value, options);
                },
                remove(key, options) {
                    context.cookies.delete(key, options);
                },
            },
        }
    );
}
