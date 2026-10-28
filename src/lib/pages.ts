import fs from "fs";
import path from "path";
import routesMap from "@/data/routes_map.json";
import pagesMetadata from "@/data/pages_metadata.json";

export interface CleanPageData {
  slug: string;
  route: string;
  title: string;
  description: string;
  stylesheets: string[];
  nuxtInnerHtml: string;
  nuxtConfigScript: string;
  nuxtDataJson: string;
  nuxtDataSrc: string | null;
  jsonLd: string | null;
}

const ROUTES_MAP: Record<string, string> = routesMap as Record<string, string>;

export function normalizeRoute(route: string): string {
  if (!route || route === "/") return "/";
  const withSlash = route.startsWith("/") ? route : `/${route}`;
  return withSlash.replace(/\/+$/, "") || "/";
}

export function getPageByRoute(route: string): CleanPageData | null {
  const norm = normalizeRoute(route);
  const slug = ROUTES_MAP[norm];
  if (!slug) return null;

  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "pages_clean",
    `${slug}.json`
  );
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as CleanPageData;
}

export function getAllRoutes(): string[] {
  return Object.keys(ROUTES_MAP);
}

export function getAllStylesheets(): string[] {
  return pagesMetadata.stylesheets;
}
