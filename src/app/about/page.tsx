import React from "react";
import type { Metadata } from "next";
import { getPageByRoute } from "@/lib/pages";
import { EmotionPageShell } from "@/components/EmotionPageShell";

export function generateMetadata(): Metadata {
  const page = getPageByRoute("/about");
  return {
    title: page?.title || "About — Emotion Agency",
    description: page?.description,
  };
}

export default function AboutPage() {
  const page = getPageByRoute("/about");
  if (!page) {
    return <div>About page not found</div>;
  }
  return <EmotionPageShell page={page} />;
}
