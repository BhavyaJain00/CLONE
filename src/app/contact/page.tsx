import React from "react";
import type { Metadata } from "next";
import { getPageByRoute } from "@/lib/pages";
import { EmotionPageShell } from "@/components/EmotionPageShell";

export function generateMetadata(): Metadata {
  const page = getPageByRoute("/contact");
  return {
    title: page?.title || "Contact — Emotion Agency",
    description: page?.description,
  };
}

export default function ContactPage() {
  const page = getPageByRoute("/contact");
  if (!page) {
    return <div>Contact page not found</div>;
  }
  return <EmotionPageShell page={page} />;
}
