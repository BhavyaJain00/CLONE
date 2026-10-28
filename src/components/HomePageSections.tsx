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
    title: "Perfect Flux Reel",
    category: "Recent Videos / Velocity Edit",
    year: "2025",
    href: "/projects/e-promo",
    thumb: "/projects/e-promo-thumb.webp",
  },
  {
    slug: "sofia-shcherbak",
    title: "Ramayana — Mythic Visuals",
    category: "Recent Videos / Color Grading",
    year: "2025",
    href: "/projects/sofia-shcherbak",
    thumb: "/projects/sofia-thumb.webp",
  },
  {
    slug: "flashform",
    title: "Daredevil — Crimson Cut",
    category: "Recent Videos / Cinematic Cut",
    year: "2025",
    href: "/projects/flashform",
    thumb: "/projects/flshfrm-thumb.webp",
  },
  {
    slug: "relive-by-coco",
    title: "Citadel S2 — Espionage Cut",
    category: "Recent Videos / VFX",
    year: "2025",
    href: "/projects/relive-by-coco",
    thumb: "/projects/coco-thumb.webp",
  },
  {
    slug: "ksh-design",
    title: "Flux Motion System 05",
    category: "Motion Graphics / After Effects",
    year: "2025",
    href: "/projects/ksh-design",
    thumb: "/projects/ksh-thumb.webp",
  },
  {
    slug: "aura",
    title: "Real Brand — Story Film",
    category: "Story Telling / Motion Graphics",
    year: "2024",
    href: "/projects/aura",
    thumb: "/projects/aura-thumb.webp",
  },
  {
    slug: "kairos",
    title: "Narrative Animations",
    category: "Story Telling / After Effects",
    year: "2024",
    href: "/projects/kairos",
    thumb: "/projects/kairos-thumb.webp",
  },
];

export function HomePageSections() {
  return (
    <section className="sr-only" aria-label="Sahil Lunia — Flux Edit Featured Work">
      <h2>Edits That Move With The Story</h2>
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
