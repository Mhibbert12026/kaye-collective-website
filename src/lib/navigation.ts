/** Sticky header height — keep in sync with Navbar */
export const NAV_HEADER_OFFSET = 90;

export function scrollToSection(id: string, behavior: ScrollBehavior = "smooth") {
  const element = document.getElementById(id);
  if (!element) return false;

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    NAV_HEADER_OFFSET;

  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

export function parseHashHref(href: string): {
  pathname: string;
  hash: string | null;
} {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) {
    return { pathname: href, hash: null };
  }

  return {
    pathname: href.slice(0, hashIndex) || "/",
    hash: href.slice(hashIndex + 1) || null,
  };
}
