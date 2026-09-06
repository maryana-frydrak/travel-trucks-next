"use client";

import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logo}>
        <svg width="136" height="16">
          <use href="/icons.svg#icon-logo"></use>
        </svg>
      </Link>
      <nav className={css.nav} aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/" className={css.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/catalog" className={css.link}>
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
