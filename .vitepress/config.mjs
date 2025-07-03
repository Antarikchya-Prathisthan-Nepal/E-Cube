import { defineConfig } from "vitepress";
const getSidebar = require("./get_sidebar.js");
import openEditor from "open-editor"; // Open file locally via edit
import tabsPlugin from "@red-asuka/vitepress-plugin-tabs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ecube Guide",
  description: "ECube User and Developer Guide",
  base: "/ecube/",
  srcExclude: [
    "de/**/*.md",
    "ja/**/*.md",
    "ru/**/*.md",
    "tr/**/*.md",
    "**/_*.md", //Remove source docs that start with "_" (included/not rendered)
  ],
  ignoreDeadLinks: true,
  markdown: {
    math: true,
    config: (md) => {
      // use more markdown-it plugins!
      tabsPlugin(md); //https://github.com/Red-Asuka/vitepress-plugin-tabs
    },
  },

  vite: {
    plugins: [
      {
        // Open file locally via edit
        name: "open-in-editor",
        configureServer(server) {
          server.middlewares.use("/__open-in-editor", (req, res, next) => {
            if (!req.url) return next();
            const q = new URL(req.url, "http://a.com").searchParams;
            const file = q.get("file");
            if (!file) return next();
            const line = Number.parseInt(q.get("line")) || 1;
            const column = Number.parseInt(q.get("column")) || 1;
            // Open editor if EDITOR environment variable is set
            if (typeof process.env.EDITOR !== "undefined") {
              openEditor([{ file, line, column }]);
            } else {
              console.warn(
                "EDITOR environment variable is not set. Skipping opening file."
              );
            }
            res.statusCode = 204;
            res.end();
          });
        },
      },
    ],
  },

  // Remove locales section

  //Logs every page loaded on build. Good way to catch errors not caught by other things.
  async transformPageData(pageData, { siteConfig }) {
    console.log(pageData.filePath);
  },

  themeConfig: {
    logo: "/ecuberender.png",
    sidebar: getSidebar.sidebar("en"),

    editLink: {
      pattern: "https://github.com/Antarikchya-Prathisthan-Nepal/learn.antarikchya/tree/main/en",
      text: "Edit this page on GitHub",
    },

    search: {
      provider: "local",
    },

    nav: [
      {
        text: "Antarikchya",
        items: [
          {
            text: "Website",
            link: "https://antarikchya.org.np/",
            ariaLabel: "PX4 website link",
          },
          {
            text: "Slippers2Sat",
            link: "https://www.s2s.antarikchya.org.np/",
          },
        ],
      },
      {
        text: "Amateur Radio",
        items: [
          {
            text: "Amateur Radio",
            link: "/en/amateurradio/index.md",
          },
          {
            text: "ARDC",
            link: "https://www.ardc.net/",
          },
        ],
      },
      {
        text: "Version",
        items: [
          { text: "main", link: "https://learn.antarikchya.org.np/" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Antarikchya-Prathisthan-Nepal/learn.antarikchya" },
    ],

    // Step 1: Enable Contributors and Last Updated Date
    contributors: true, // Enables contributor list
    lastUpdated: true,  // Enables last updated timestamp
    lastUpdatedText: "Last Updated", // Custom text for last updated field
  },

  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-91EWVWRQ93",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-91EWVWRQ93');`,
    ],
  ],

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "lite-youtube",
      },
    },
  },
});
