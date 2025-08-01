import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
export { renderers } from '../../renderers.mjs';

async function GET() {
  try {
    const blogDir = path.join(process.cwd(), "src/data/blog");
    if (!fs.existsSync(blogDir)) {
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const filenames = fs.readdirSync(blogDir);
    const files = filenames.filter((name) => name.endsWith(".md")).map((filename) => {
      try {
        const filePath = path.join(blogDir, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);
        return {
          filename,
          title: data.title,
          author: data.author,
          pubDatetime: data.pubDatetime,
          modDatetime: data.modDatetime,
          description: data.description,
          draft: data.draft || false,
          tags: data.tags || [],
          featured: data.featured || false
        };
      } catch (error) {
        console.error(`Error processing file ${filename}:`, error);
        return null;
      }
    }).filter((file) => file !== null);
    return new Response(JSON.stringify(files), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error reading blog files:", error);
    return new Response(
      JSON.stringify({ error: "Failed to read blog files" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
