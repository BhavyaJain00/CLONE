"use client";

import React from "react";

export interface FeaturedProjectItem {
  slug: string;
  title: string;
  category: string;
  year: string;
  href: string;
  thumb: string;
}

export const FEATURED_PROJECTS: FeaturedProjectItem[] = [
  {
    slug: "e-promo",
    title: "E Promo",
    category: "Promo Site / WebGL",
    year: "2025",
    href: "/projects/e-promo",
    thumb: "/projects/aura-thumb.webp",
  },
  {
    slug: "sofia-shcherbak",
    title: "Sofia Shcherbak",
    category: "Portfolio / WebGL",
    year: "2025",
    href: "/projects/sofia-shcherbak",
    thumb: "/projects/sofia-thumb.webp",
  },
  {
    slug: "flashform",
    title: "Flashform",
    category: "SaaS / AI",
    year: "2025",
    href: "/projects/flashform",
    thumb: "/projects/ai-tools-thumb.webp",
  },
  {
    slug: "relive-by-coco",
    title: "Relive by Coco",
    category: "Interactive Storytelling",
    year: "2024",
    href: "/projects/relive-by-coco",
    thumb: "/projects/coco-thumb.webp",
  },
  {
    slug: "ksh-design",
    title: "KSH Design",
    category: "Architecture / 3D",
    year: "2024",
    href: "/projects/ksh-design",
    thumb: "/projects/ksh-thumb.webp",
  },
  {
    slug: "aura",
    title: "Aura",
    category: "Digital Product",
    year: "2024",
    href: "/projects/aura",
    thumb: "/projects/aura-thumb.webp",
  },
  {
    slug: "kairos",
    title: "Kairos",
    category: "Fintech / Web3",
    year: "2024",
    href: "/projects/kairos",
    thumb: "/projects/kairos-thumb.webp",
  },
];

export function HomePageSections() {
  return (
    <section className="sr-only" aria-label="Emotion Agency Featured Work">
      <h2>Interfaces People Remember</h2>
      <ul>
        {FEATURED_PROJECTS.map((project) => (
          <li key={project.slug}>
            <a href={project.href}>
              {project.title} — {project.category} ({project.year})
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
