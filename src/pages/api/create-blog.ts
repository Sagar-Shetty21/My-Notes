import { supabase } from "@/lib/supabaseClient";

export const prerender = false;

export async function POST({ request }: { request: Request }) {
    let body;
    try {
        body = await request.json();
    } catch (error) {
        return new Response(
            JSON.stringify({
                success: false,
                error:
                    "Invalid JSON in request body: " +
                    (error instanceof Error ? error.message : String(error)),
            }),
            {
                status: 400,
                headers: { "Content-Type": "application/json" },
            }
        );
    }

    const { data, error } = await supabase
        .from("blogs")
        .insert([
            {
                title: body.title,
                author: body.author,
                body: body.body,
                description: body.description,
                tags: body.tags
                    .split(",")
                    .map((tag: string) => tag.trim())
                    .filter(Boolean),
                featured:
                    body.featuredArticle === true ||
                    body.featuredArticle === "on",
                ogImage: body.ogImage || null,
                canonicalURL: body.canonicalURL || null,
                draft: body.draft,
                pubDatetime: new Date().toISOString(),
                modDatetime: null,
            },
        ])
        .select();

    return new Response(JSON.stringify({ success: !error, error, data }), {
        headers: { "Content-Type": "application/json" },
    });
}

export async function PUT({ request }: { request: Request }) {
    let body;
    try {
        body = await request.json();
    } catch (error) {
        return new Response(
            JSON.stringify({
                success: false,
                error:
                    "Invalid JSON in request body: " +
                    (error instanceof Error ? error.message : String(error)),
            }),
            {
                status: 400,
                headers: { "Content-Type": "application/json" },
            }
        );
    }

    const { data, error } = await supabase
        .from("blogs")
        .update({
            title: body.title,
            author: body.author,
            body: body.body,
            description: body.description,
            tags: body.tags
                .split(",")
                .map((tag: string) => tag.trim())
                .filter(Boolean),
            featured:
                body.featuredArticle === true || body.featuredArticle === "on",
            ogImage: body.ogImage || null,
            canonicalURL: body.canonicalURL || null,
            draft: body.draft,
            pubDatetime: new Date().toISOString(),
            modDatetime: null,
        })
        .eq("id", body.id)
        .select();

    return new Response(JSON.stringify({ success: !error, error, data }), {
        headers: { "Content-Type": "application/json" },
    });
}
