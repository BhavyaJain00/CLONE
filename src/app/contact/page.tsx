import React from "react";
import type { Metadata } from "next";
import { getPageByRoute } from "@/lib/pages";
import { PortfolioPageShell } from "@/components/PortfolioPageShell";

export function generateMetadata(): Metadata {
  const page = getPageByRoute("/contact");
  return {
    title: page?.title || "Contact — Sahil Lunia (Flux Edit)",
    description: page?.description,
  };
}

export default function ContactPage() {
  const page = getPageByRoute("/contact");
  if (!page) {
    return <div>Contact page not found</div>;
  }
  return <PortfolioPageShell page={page} />;
}
