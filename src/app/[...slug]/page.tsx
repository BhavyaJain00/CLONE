import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageByRoute } from "@/lib/pages";
import { PortfolioPageShell } from "@/components/PortfolioPageShell";

interface CatchAllPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: CatchAllPageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = "/" + (slug || []).join("/");
  const page = getPageByRoute(route);
  return {
    title: page?.title || "Sahil Lunia — Flux Edit",
    description: page?.description,
  };
}

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { slug } = await params;
  const route = "/" + (slug || []).join("/");
  const page = getPageByRoute(route);
  if (!page) {
    notFound();
  }
  return <PortfolioPageShell page={page} />;
}
