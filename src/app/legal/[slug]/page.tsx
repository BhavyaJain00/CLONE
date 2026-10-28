import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageByRoute } from "@/lib/pages";
import { PortfolioPageShell } from "@/components/PortfolioPageShell";

interface LegalPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageByRoute(`/legal/${slug}`);
  return {
    title: page?.title || "Legal — Sahil Lunia (Flux Edit)",
    description: page?.description,
  };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const page = getPageByRoute(`/legal/${slug}`);
  if (!page) {
    notFound();
  }
  return <PortfolioPageShell page={page} />;
}
