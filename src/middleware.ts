import { defineMiddleware } from "astro:middleware";
import { createServerClient } from "@supabase/ssr";

export const onRequest = defineMiddleware(async (context, next) => {
    // Only protect admin routes
    if (!context.url.pathname.startsWith("/admin")) {
        return next();
    }

    // Skip auth check for login page and other auth pages
    if (
        context.url.pathname === "/admin/login" ||
        context.url.pathname === "/admin/login/" ||
        context.url.pathname === "/admin/forgot-password"
    ) {
        return next();
    }

    const supabase = createServerClient(
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

    try {
        // Get the session from Supabase
        const {
            data: { session },
            error,
        } = await supabase.auth.getSession();

        // If there's an error or no session, redirect to login
        if (error) {
            const redirectUrl = `/admin/login?redirect=${encodeURIComponent(context.url.pathname)}`;
            return context.redirect(redirectUrl);
        }

        if (!session || !session.user) {
            const redirectUrl = `/admin/login?redirect=${encodeURIComponent(context.url.pathname)}`;
            return context.redirect(redirectUrl);
        }

        // Additional check: verify the session is still valid
        const {
            data: { user },
            error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
            // Session exists but user is invalid, clear it and redirect
            await supabase.auth.signOut();
            const redirectUrl = `/admin/login?redirect=${encodeURIComponent(context.url.pathname)}`;
            return context.redirect(redirectUrl);
        }

        // Store user info in locals for use in pages
        context.locals.user = user;
        context.locals.session = session;

        return next();
    } catch {
        const redirectUrl = `/admin/login?redirect=${encodeURIComponent(context.url.pathname)}`;
        return context.redirect(redirectUrl);
    }
});
