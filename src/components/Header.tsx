"use client";

import React from "react";
import Link from "next/link";

export interface NavItem {
  label: string;
  href: string;
  badge?: number;
}

export const EMOTION_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects", badge: 16 },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="header" data-v-50cb1b2c>
      <div className="container header__container" data-v-50cb1b2c>
        <Link
          href="/"
          className="header__logo"
          aria-label="Emotion Agency — Home"
          data-v-50cb1b2c
        >
          <span>emotion</span>
        </Link>
        <nav className="header__nav" aria-label="Main navigation" data-v-50cb1b2c>
          {EMOTION_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="header__nav-link"
              data-v-50cb1b2c
            >
              <span>{item.label}</span>
              {item.badge !== undefined && (
                <sup className="header__badge">{item.badge}</sup>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
