import React from "react";
import type { Metadata } from "next";
import { getPageByRoute } from "@/lib/pages";
import { PortfolioPageShell } from "@/components/PortfolioPageShell";

export function generateMetadata(): Metadata {
  const page = getPageByRoute("/projects");
  return {
    title: page?.title || "Work — Sahil Lunia (Flux Edit)",
    description: page?.description,
  };
}

export default function ProjectsPage() {
  const page = getPageByRoute("/projects");
  if (!page) {
    return <div>Projects page not found</div>;
  }
  return <PortfolioPageShell page={page} />;
}
