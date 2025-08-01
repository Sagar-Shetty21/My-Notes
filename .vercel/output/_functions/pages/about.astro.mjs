import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as renderSlot, u as unescapeHTML } from '../chunks/astro/server_ixCSCnnp.mjs';
import 'kleur/colors';
import { $ as $$Header, b as $$Footer } from '../chunks/Footer_CSl-ak1-.mjs';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_Cm_0Ifuq.mjs';
import { $ as $$Layout } from '../chunks/Layout_BUoxi9Ex.mjs';
import { S as SITE } from '../chunks/config_BNeQ3wY4.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const $$AboutLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})} ${maybeRenderHead()}<main id="main-content"> <section id="about" class="app-prose mb-28 max-w-app prose-img:border-0"> <h1 class="text-2xl tracking-wider sm:text-3xl"> ${frontmatter.title} </h1> ${renderSlot($$result2, $$slots["default"])} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/iam/Projects/On Going/My-Notes/src/layouts/AboutLayout.astro", void 0);

const html = () => "<br>\n<h1 id=\"hi-im-sagar-shetty\">Hi, I’m Sagar Shetty 👋</h1>\n<p>I’m a passionate full-stack developer based in Bengaluru with 15+ months of professional experience. I specialize in creating applications that users actually want to use, focusing on clean code and intuitive user experiences.</p>\n<h2 id=\"what-i-do\">What I Do</h2>\n<p>I build web applications using React, Node.js, Python, and other modern technologies. I enjoy solving complex problems and creating solutions that make a difference.</p>\n<p>When I’m not coding, I like to:</p>\n<ul>\n<li>Explore new technologies and frameworks</li>\n<li>Contribute to open-source projects</li>\n<li>Share knowledge with the developer community</li>\n</ul>\n<h2 id=\"tech-stack\">Tech Stack</h2>\n<p><strong>Frontend:</strong> React, Next.js, Svelte, Tailwind CSS<br>\n<strong>Backend:</strong> Node.js, Express.js, Python<br>\n<strong>Databases:</strong> MongoDB, MySQL, Firebase, Supabase<br>\n<strong>Cloud:</strong> AWS (S3, RDS), Docker, Redis<br>\n<strong>Other Tools:</strong> The usual suspects that make modern development bearable</p>\n<h2 id=\"my-approach\">My Approach</h2>\n<p>I believe in writing clean, maintainable code and building applications that solve real problems. I focus on creating user-friendly interfaces backed by robust, scalable systems.</p>\n<h2 id=\"projects--portfolio\">Projects &#x26; Portfolio</h2>\n<p>Want to see what I’ve been working on? Check out my projects at <a href=\"https://sagarshetty.netlify.app/\">sagarshetty.netlify.app</a> where I showcase my latest work and experiments.</p>\n<h2 id=\"lets-connect\">Let’s Connect</h2>\n<p>Always open to discussing new opportunities, interesting projects, or just chatting about the latest in web development.</p>\n<hr>\n<p><em>“Making the web a slightly better place, one commit at a time.”</em></p>";

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"About"};
				const file = "/home/iam/Projects/On Going/My-Notes/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "   \n                                    \n              \n   \n\n<br>\n\n# Hi, I'm Sagar Shetty 👋\n\nI'm a passionate full-stack developer based in Bengaluru with 15+ months of professional experience. I specialize in creating applications that users actually want to use, focusing on clean code and intuitive user experiences.\n\n## What I Do\n\nI build web applications using React, Node.js, Python, and other modern technologies. I enjoy solving complex problems and creating solutions that make a difference.\n\nWhen I'm not coding, I like to:\n\n- Explore new technologies and frameworks\n- Contribute to open-source projects\n- Share knowledge with the developer community\n\n## Tech Stack\n\n**Frontend:** React, Next.js, Svelte, Tailwind CSS  \n**Backend:** Node.js, Express.js, Python  \n**Databases:** MongoDB, MySQL, Firebase, Supabase  \n**Cloud:** AWS (S3, RDS), Docker, Redis  \n**Other Tools:** The usual suspects that make modern development bearable\n\n## My Approach\n\nI believe in writing clean, maintainable code and building applications that solve real problems. I focus on creating user-friendly interfaces backed by robust, scalable systems.\n\n## Projects & Portfolio\n\nWant to see what I've been working on? Check out my projects at [sagarshetty.netlify.app](https://sagarshetty.netlify.app/) where I showcase my latest work and experiments.\n\n## Let's Connect\n\nAlways open to discussing new opportunities, interesting projects, or just chatting about the latest in web development.\n\n---\n\n_\"Making the web a slightly better place, one commit at a time.\"_\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hi-im-sagar-shetty","text":"Hi, I’m Sagar Shetty 👋"},{"depth":2,"slug":"what-i-do","text":"What I Do"},{"depth":2,"slug":"tech-stack","text":"Tech Stack"},{"depth":2,"slug":"my-approach","text":"My Approach"},{"depth":2,"slug":"projects--portfolio","text":"Projects & Portfolio"},{"depth":2,"slug":"lets-connect","text":"Let’s Connect"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
