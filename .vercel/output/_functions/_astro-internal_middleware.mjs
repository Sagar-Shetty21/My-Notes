import { d as defineMiddleware, s as sequence } from './chunks/index_Cba24ASn.mjs';
import { createServerClient } from '@supabase/ssr';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_152ZTHP_.mjs';
import 'kleur/colors';
import './chunks/astro/server_ixCSCnnp.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware(async (context, next) => {
  if (!context.url.pathname.startsWith("/admin")) {
    return next();
  }
  if (context.url.pathname === "/admin/login" || context.url.pathname === "/admin/login/" || context.url.pathname === "/admin/forgot-password") {
    return next();
  }
  const supabase = createServerClient(
    "https://dlyrrpjyaqpcbccjzdmq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRseXJycGp5YXFwY2JjY2p6ZG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MjI4ODgsImV4cCI6MjA2OTE5ODg4OH0.a-DFNSoYR1tUwcaZsfEz9L_i_Ksj4QDBqPBQOLw0QRI",
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
        }
      }
    }
  );
  try {
    const {
      data: { session },
      error
    } = await supabase.auth.getSession();
    if (error) {
      const redirectUrl = `/admin/login?redirect=${encodeURIComponent(context.url.pathname)}`;
      return context.redirect(redirectUrl);
    }
    if (!session || !session.user) {
      const redirectUrl = `/admin/login?redirect=${encodeURIComponent(context.url.pathname)}`;
      return context.redirect(redirectUrl);
    }
    const {
      data: { user },
      error: userError
    } = await supabase.auth.getUser();
    if (userError || !user) {
      await supabase.auth.signOut();
      const redirectUrl = `/admin/login?redirect=${encodeURIComponent(context.url.pathname)}`;
      return context.redirect(redirectUrl);
    }
    context.locals.user = user;
    context.locals.session = session;
    return next();
  } catch {
    const redirectUrl = `/admin/login?redirect=${encodeURIComponent(context.url.pathname)}`;
    return context.redirect(redirectUrl);
  }
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
