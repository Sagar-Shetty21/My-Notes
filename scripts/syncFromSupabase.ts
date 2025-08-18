/* eslint-disable no-console */
import "dotenv/config";
import fs from "fs";
import path from "path";
import { format } from "date-fns";
import { createClient } from "@supabase/supabase-js";
import { slugifyStr } from "@/utils/slugify";

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const OUTPUT_DIR = "src/data/blog";

export type SupabaseBlogPost = {
  title: string;
  author?: string;
  pubDatetime: string | Date;
  modDatetime?: string | Date;
  description?: string;
  draft?: boolean;
  tags?: string[];
  featured?: boolean;
  ogImage?: string;
  canonicalURL?: string;
  hideEditPost?: boolean;
  timezone?: string;
  body: string;
};

const formatFrontmatter = (post: SupabaseBlogPost) => {
  const frontmatter = {
    title: post.title,
    author: post.author,
    pubDatetime: new Date(post.pubDatetime),
    modDatetime: post.modDatetime ? new Date(post.modDatetime) : undefined,
    description: post.description,
    draft: post.draft ?? false,
    tags: post.tags ?? [],
    featured: post.featured ?? false,
    ogImage: post.ogImage,
    canonicalURL: post.canonicalURL,
    hideEditPost: post.hideEditPost,
    timezone: post.timezone,
  };

  return Object.entries(frontmatter)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}: [${value.map(v => `"${v}"`).join(", ")}]`;
      }
      if (typeof value === "string") {
        // Escape quotes in strings
        const escapedValue = value.replace(/"/g, '\\"');
        return `${key}: "${escapedValue}"`;
      }
      if (value instanceof Date) {
        return `${key}: ${format(new Date(value), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}`;
      }
      return `${key}: ${value}`;
    })
    .join("\n");
};

const generateSlug = (title: string) => {
  // return title
  //   .toLowerCase()
  //   .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
  //   .replace(/\s+/g, "-") // Replace spaces with hyphens
  //   .replace(/-+/g, "-") // Replace multiple hyphens with single
  //   .replace(/(^-|-$)/g, ""); // Remove leading/trailing hyphens
  return slugifyStr(title)
};

async function cleanExistingFiles() {
  try {
    if (fs.existsSync(OUTPUT_DIR)) {
      const files = fs.readdirSync(OUTPUT_DIR);
      const mdFiles = files.filter(file => file.endsWith('.md'));
      
      for (const file of mdFiles) {
        fs.unlinkSync(path.join(OUTPUT_DIR, file));
      }
      
      if (mdFiles.length > 0) {
        console.log(`🧹 Cleaned ${mdFiles.length} existing markdown files`);
      }
    }
  } catch (err) {
    console.warn("⚠️  Warning: Could not clean existing files:", err);
  }
}

async function validatePost(post: SupabaseBlogPost) {
  const errors = [];
  
  if (!post.title || post.title.trim() === "") {
    errors.push("Missing title");
  }
  
  if (!post.body || post.body.trim() === "") {
    errors.push("Missing body content");
  }
  
  return errors;
}

async function main() {
  console.log("🚀 Starting Supabase sync...");
  
  try {
    // Fetch posts from Supabase
    const { data: posts, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("draft", false)
      .order("pubDatetime", { ascending: false });

    if (error) {
      throw new Error(`Supabase query failed: ${error.message}`);
    }

    if (!posts || posts.length === 0) {
      console.log("📭 No posts found in Supabase");
      return;
    }

    console.log(`📚 Found ${posts.length} posts to sync`);

    // Ensure output directory exists
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    // Clean existing files
    await cleanExistingFiles();

    let successCount = 0;
    let errorCount = 0;
    const slugs = new Set();

    for (const post of posts) {
      try {
        // Validate post
        const validationErrors = await validatePost(post);
        if (validationErrors.length > 0) {
          console.error(`❌ Invalid post "${post.title}": ${validationErrors.join(", ")}`);
          errorCount++;
          continue;
        }

        // Generate unique slug
        const baseSlug = generateSlug(post.title);
        let slug = baseSlug;
        let counter = 1;
        
        while (slugs.has(slug)) {
          slug = `${baseSlug}-${counter}`;
          counter++;
        }
        slugs.add(slug);

        const filePath = path.join(OUTPUT_DIR, `${slug}.md`);
        const frontmatter = formatFrontmatter(post);
        const body = post.body.trim();

        const content = `---\n${frontmatter}\n---\n\n${body}`;
        
        fs.writeFileSync(filePath, content, "utf-8");
        console.log(`✅ Synced: ${slug}`);
        successCount++;
        
      } catch (err) {
        console.error(`❌ Failed to sync post "${post.title}": ${err}`);
        errorCount++;
      }
    }

    // Summary
    console.log("\n📊 Sync Summary:");
    console.log(`   ✅ Success: ${successCount} posts`);
    if (errorCount > 0) {
      console.log(`   ❌ Errors: ${errorCount} posts`);
    }
    console.log(`   📁 Output: ${OUTPUT_DIR}`);
    
    if (errorCount > 0) {
      process.exit(1);
    }

  } catch (err) {
    console.error("💥 Fatal error during sync:", err);
    process.exit(1);
  }
}

main();