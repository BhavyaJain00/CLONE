import React from "react";
import type { Metadata } from "next";
import { getPageByRoute } from "@/lib/pages";
import { PortfolioPageShell } from "@/components/PortfolioPageShell";

export function generateMetadata(): Metadata {
  const page = getPageByRoute("/about");
  return {
    title: page?.title || "About — Sahil Lunia (Flux Edit)",
    description: page?.description,
  };
}

export default function AboutPage() {
  const page = getPageByRoute("/about");
  if (!page) {
    return <div>About page not found</div>;
  }
  return <PortfolioPageShell page={page} />;
}
