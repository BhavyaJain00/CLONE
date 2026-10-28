import React from "react";
import type { Metadata } from "next";
import { getPageByRoute } from "@/lib/pages";
import { EmotionPageShell } from "@/components/EmotionPageShell";

export function generateMetadata(): Metadata {
  const page = getPageByRoute("/projects");
  return {
    title: page?.title || "Work — Emotion Agency",
    description: page?.description,
  };
}

export default function ProjectsPage() {
  const page = getPageByRoute("/projects");
  if (!page) {
    return <div>Projects page not found</div>;
  }
  return <EmotionPageShell page={page} />;
}
