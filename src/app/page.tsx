import React from "react";
import { getPageByRoute } from "@/lib/pages";
import { EmotionPageShell } from "@/components/EmotionPageShell";

export default function HomePage() {
  const page = getPageByRoute("/");
  if (!page) {
    return <div>Homepage data not found</div>;
  }
  return <EmotionPageShell page={page} />;
}
