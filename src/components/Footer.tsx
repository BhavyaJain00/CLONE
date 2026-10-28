"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer" data-v-56d3d648>
      <div className="container footer__container" data-v-56d3d648>
        <div className="footer__top" data-v-56d3d648>
          <p className="footer__heading">
            Video edits that don&apos;t just impress the eyes, but connect with emotions
          </p>
          <a
            href="mailto:sahillunia2006@gmail.com"
            className="footer__email"
          >
            sahillunia2006@gmail.com
          </a>
        </div>
        <div className="footer__bottom">
          <span>Made by FLUX EDIT | Powered by SAHIL © {new Date().getFullYear()}</span>
          <div className="footer__legal">
            <Link href="/legal/privacy-policy">Privacy Policy</Link>
            <Link href="/legal/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
