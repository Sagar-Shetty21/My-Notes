export const SITE = {
    website: "https://mynotes-sagar.vercel.app/", // replace this with your deployed domain
    author: "Sagar Shetty",
    profile: "https://sagarshetty.netlify.app/",
    desc: "A minimalist blog theme for Astro with admin panel for managing blogs.",
    hosting: "vercel",
    title: "MyNotes",
    ogImage: "",
    lightAndDarkMode: true,
    postPerIndex: 4,
    postPerPage: 4,
    scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
    showArchives: true,
    showBackButton: true, // show back button in post detail
    editPost: {
        enabled: false,
        text: "Edit page",
        url: "",
    },
    dynamicOgImage: true,
    dir: "ltr", // "rtl" | "auto"
    lang: "en", // html lang code. Set this empty and default will be "en"
    timezone: "Asia/Kolkata", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
