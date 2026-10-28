"use client";

import React, { useEffect } from "react";
import type { CleanPageData } from "@/lib/pages";

declare global {
  interface Window {
    __NUXT__?: Record<string, unknown>;
    __emotionWebGLBooted?: boolean;
  }
}

export function EmotionPageShell({ page }: { page: CleanPageData }) {
  useEffect(() => {
    // 1. Sync theme attribute from cookie if present, defaulting to light
    const match = document.cookie.match(/(?:^|; )theme=(dark|light)\b/);
    const theme = match ? match[1] : "light";
    if (!document.documentElement.getAttribute("data-theme")) {
      document.documentElement.setAttribute("data-theme", theme);
    }

    // 2. Ensure window.__NUXT__.config is initialized before the entry module executes
    if (!window.__NUXT__ || !window.__NUXT__.config) {
      window.__NUXT__ = {
        config: {
          public: {
            calendlyEventUrl: "https://calendly.com/emotion-agency/30min",
            siteUrl: window.location.origin,
            gtag: {
              enabled: false,
              initMode: "manual",
              id: "GTM-P9GMXF7",
              initCommands: [],
              config: {},
              tags: [],
              loadingStrategy: "defer",
              url: "https://www.googletagmanager.com/gtag/js",
            },
            mdc: {
              components: { prose: true, map: {}, customElements: [] },
              headings: { anchorLinks: false },
              highlight: {
                noApiRoute: true,
                highlighter: "shiki",
                theme: { default: "github-light", dark: "github-dark" },
                shikiEngine: "oniguruma",
                langs: [
                  "js",
                  "jsx",
                  "json",
                  "ts",
                  "tsx",
                  "vue",
                  "css",
                  "html",
                  "bash",
                  "md",
                  "mdc",
                  "yaml",
                ],
              },
            },
            content: { wsUrl: "" },
          },
          app: {
            baseURL: "/",
            buildId: "a481ca1b-b2a3-4ed3-a47f-920d53e95b24",
            buildAssetsDir: "/_nuxt/",
            cdnURL: "",
          },
        },
      };
    }

    // 3. Boot the Emotion Agency WebGL + GSAP + Lenis + Nuxt entry bundle once
    if (
      !window.__emotionWebGLBooted &&
      !document.querySelector('script[src="/_nuxt/BqYnmFZw.js"]')
    ) {
      window.__emotionWebGLBooted = true;
      const script = document.createElement("script");
      script.type = "module";
      script.src = "/_nuxt/BqYnmFZw.js";
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }, [page]);

  return (
    <>
      {page.jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: page.jsonLd }}
        />
      )}
      <div
        id="__nuxt"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: page.nuxtInnerHtml }}
      />
      <div
        id="teleports"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: "<!--teleport start anchor--><!----><!--teleport anchor-->",
        }}
      />
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: page.nuxtConfigScript }}
      />
      <script
        type="application/json"
        data-nuxt-data="nuxt-app"
        data-ssr="true"
        id="__NUXT_DATA__"
        {...(page.nuxtDataSrc ? { "data-src": page.nuxtDataSrc } : {})}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: page.nuxtDataJson }}
      />
    </>
  );
}
