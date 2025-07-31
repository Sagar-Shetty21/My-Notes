import { s as supabase } from '../../chunks/supabaseClient_u_L1k4gK.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({ request }) {
  let body;
  try {
    body = await request.json();
  } catch (error2) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Invalid JSON in request body: " + (error2 instanceof Error ? error2.message : String(error2))
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  const currentDate = /* @__PURE__ */ new Date();
  const { data, error } = await supabase.from("blogs").insert([
    {
      title: body.title,
      author: body.author,
      body: body.body,
      description: body.description,
      tags: body.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      featured: body.featuredArticle === true || body.featuredArticle === "on",
      ogImage: body.ogImage || null,
      canonicalURL: body.canonicalURL || null,
      draft: body.draft,
      pubDatetime: currentDate.toISOString(),
      modDatetime: currentDate.toISOString()
    }
  ]).select();
  return new Response(JSON.stringify({ success: !error, error, data }), {
    headers: { "Content-Type": "application/json" }
  });
}
async function PUT({ request }) {
  let body;
  try {
    body = await request.json();
  } catch (error2) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Invalid JSON in request body: " + (error2 instanceof Error ? error2.message : String(error2))
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  const { data, error } = await supabase.from("blogs").update({
    title: body.title,
    author: body.author,
    body: body.body,
    description: body.description,
    tags: body.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
    featured: body.featuredArticle === true || body.featuredArticle === "on",
    ogImage: body.ogImage || null,
    canonicalURL: body.canonicalURL || null,
    draft: body.draft,
    modDatetime: (/* @__PURE__ */ new Date()).toISOString()
  }).eq("id", body.id).select();
  return new Response(JSON.stringify({ success: !error, error, data }), {
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    PUT,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
