import { g as getCollection } from '../../../chunks/_astro_content_D3sKKHaO.mjs';
import { g as getPath } from '../../../chunks/getPath_CzVCyMiw.mjs';
import { a as generateOgImageForPost } from '../../../chunks/generateOgImages_rGAZxS0s.mjs';
export { renderers } from '../../../renderers.mjs';

async function getStaticPaths() {
  const posts = await getCollection("blog").then(
    (p) => p.filter(({ data }) => !data.draft && !data.ogImage)
  );
  return posts.map((post) => ({
    params: { slug: getPath(post.id, post.filePath, false) },
    props: post
  }));
}
const GET = async ({ props }) => {
  return new Response(
    await generateOgImageForPost(props),
    {
      headers: { "Content-Type": "image/png" }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
