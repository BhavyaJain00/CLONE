import type { Metadata } from "next";
import { getAllStylesheets } from "@/lib/pages";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flux Edit Portfolio — Sahil Lunia",
  description:
    "Video edits that don't just impress the eyes, but connect with emotions. Sahil Lunia — Video Editor with 5+ years of professional experience and 90+ completed projects.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/meta/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const THEME_TOKENS_CSS = `:root{--primary:#9047ff;--primary-rgb:144,71,255;--primary-active:#7114ff;--primary-active-rgb:113,20,255;--status-danger:#ff3b30;--status-danger-rgb:255,59,48;--status-danger-active:#c91b11;--status-danger-active-rgb:201,27,17;--status-success:#319f43;--status-success-rgb:49,159,67;--background:#f5efff;--background-rgb:245,239,255;--foreground:#2a1647;--foreground-rgb:42,22,71;--foreground-muted:#64698b;--foreground-muted-rgb:100,105,139;--border:#e2e4f0;--border-rgb:226,228,240;--card:#fff;--card-rgb:255,255,255;--muted:#f1f2f9;--muted-rgb:241,242,249;--contrast:#000;--contrast-rgb:0,0,0;--glass:#fff;--glass-rgb:255,255,255;--backdrop:rgba(0, 0, 0, 0.8);--backdrop-rgb:0,0,0;--btn-color:var(--color-purple-900)}:root[data-theme='dark']{--primary:#9047ff;--primary-rgb:144,71,255;--primary-active:#7114ff;--primary-active-rgb:113,20,255;--status-danger:#ff3b30;--status-danger-rgb:255,59,48;--status-danger-active:#c91b11;--status-danger-active-rgb:201,27,17;--status-success:#319f43;--status-success-rgb:49,159,67;--background:#121212;--background-rgb:18,18,18;--foreground:#fff;--foreground-rgb:255,255,255;--foreground-muted:#a3a6c1;--foreground-muted-rgb:163,166,193;--border:#30343f;--border-rgb:48,52,63;--card:#181818;--card-rgb:24,24,24;--muted:#25282e;--muted-rgb:37,40,46;--contrast:#fff;--contrast-rgb:255,255,255;--glass:#000;--glass-rgb:0,0,0;--backdrop:rgba(0, 0, 0, 0.9);--backdrop-rgb:0,0,0;--btn-color:#e5e5e5;--btn-color-rgb:229,229,229}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const stylesheets = getAllStylesheets();

  return (
    <html lang="en" translate="no" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var m=document.cookie.match(/(?:^|; )theme=(dark|light)\\b/);if(m)document.documentElement.setAttribute('data-theme',m[1])})()`,
          }}
        />
        <style
          id="theme-tokens"
          dangerouslySetInnerHTML={{ __html: THEME_TOKENS_CSS }}
        />
        <link
          rel="preload"
          href="/fonts/PPNeueMontreal-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexMono-Medium-Latin1.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} crossOrigin="anonymous" />
        ))}
        <link rel="stylesheet" href="/css/emotion-inline-styles.css" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
