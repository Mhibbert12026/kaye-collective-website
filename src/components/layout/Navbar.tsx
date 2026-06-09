"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/constants";
import { parseHashHref, scrollToSection } from "@/lib/navigation";
import { closingCtaContent } from "@/lib/constants";
import styles from "./Navbar.module.css";

type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
};

function NavbarLink({
  href,
  children,
  className,
  onNavigate,
}: NavbarLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { pathname: linkPath, hash } = parseHashHref(href);

  const isActive =
    href === "/"
      ? pathname === "/"
      : hash && linkPath === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();

    if (!hash) {
      return;
    }

    event.preventDefault();

    if (pathname === linkPath) {
      scrollToSection(hash);
      window.history.pushState(null, "", `#${hash}`);
      return;
    }

    router.push(`${linkPath}#${hash}`);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${className ?? styles.navLink}${isActive ? ` ${styles.navLinkActive}` : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header}${scrolled ? ` ${styles.headerScrolled}` : ""}`}
    >
      <div className={styles.shell}>
        <Link href="/" className={styles.brand} aria-label="The Kaye Collective — Home">
          <span className={styles.monogram} aria-hidden>
            KC
          </span>
          <span className={styles.wordmark}>
            <span className={styles.name}>The Kaye Collective</span>
            <span className={styles.tagline}>Leadership &amp; Advisory</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavbarLink href={link.href}>{link.label}</NavbarLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link
            href={closingCtaContent.cta.href}
            aria-label={closingCtaContent.cta.ariaLabel}
            className={styles.cta}
          >
            {closingCtaContent.cta.label}
          </Link>

          <div className={styles.menuWrap}>
            <button
              type="button"
              className={styles.menuButton}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className={styles.menuIcon} aria-hidden>
                <span />
                <span />
              </span>
            </button>

            {menuOpen ? (
              <div className={styles.mobilePanel}>
                <ul className={styles.mobileNavList}>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <NavbarLink
                        href={link.href}
                        className={styles.mobileNavLink}
                        onNavigate={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </NavbarLink>
                    </li>
                  ))}
                </ul>
                <Link
                  href={closingCtaContent.cta.href}
                  aria-label={closingCtaContent.cta.ariaLabel}
                  className={styles.mobileCta}
                  onClick={() => setMenuOpen(false)}
                >
                  {closingCtaContent.cta.label}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
