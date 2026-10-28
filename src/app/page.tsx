import React from "react";
import { getPageByRoute } from "@/lib/pages";
import { PortfolioPageShell } from "@/components/PortfolioPageShell";

export default function HomePage() {
  const page = getPageByRoute("/");
  if (!page) {
    return <div>Homepage data not found</div>;
  }
  return <PortfolioPageShell page={page} />;
}
