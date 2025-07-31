import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
    try {
        const blogDir = path.join(process.cwd(), "src/data/blog");

        // Check if directory exists
        if (!fs.existsSync(blogDir)) {
            return new Response(JSON.stringify([]), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

        const filenames = fs.readdirSync(blogDir);

        const files = filenames
            .filter(name => name.endsWith(".md"))
            .map(filename => {
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
                        featured: data.featured || false,
                    };
                } catch (error) {
                    console.error(`Error processing file ${filename}:`, error); //eslint-disable-line no-console
                    return null;
                }
            })
            .filter(file => file !== null); // Remove any files that failed to process

        return new Response(JSON.stringify(files), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error reading blog files:", error); //eslint-disable-line no-console
        return new Response(
            JSON.stringify({ error: "Failed to read blog files" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
