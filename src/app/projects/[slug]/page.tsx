import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageByRoute } from "@/lib/pages";
import { EmotionPageShell } from "@/components/EmotionPageShell";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageByRoute(`/projects/${slug}`);
  return {
    title: page?.title || "Project — Emotion Agency",
    description: page?.description,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const page = getPageByRoute(`/projects/${slug}`);
  if (!page) {
    notFound();
  }
  return <EmotionPageShell page={page} />;
}
