import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SocialLink } from "@/components/ui/SocialLinks";
import { FooterCallToAction } from "@/components/layout/FooterCallToAction";
import { footerContent, founderBio, siteConfig } from "@/lib/constants";
import {
  brandSurfaceGradient,
  brandSurfaceTopLine,
  siteContainerWide,
} from "@/lib/layout";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-warm-nude/20 bg-chocolate text-cream">
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${brandSurfaceGradient}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-px ${brandSurfaceTopLine}`}
      />

      <div className={`${siteContainerWide} relative`}>
        <FooterCallToAction />

        <div className="grid gap-10 py-10 lg:grid-cols-12 lg:gap-8 lg:py-14">
          <div className="lg:col-span-4">
            <Logo variant="dark" size="md" />
            <blockquote className="mt-6 border-l-2 border-soft-gold/60 pl-4 sm:mt-8 sm:pl-6">
              <p className="text-base leading-[1.85] text-warm-nude italic lg:text-lg lg:leading-[1.9]">
                &ldquo;{footerContent.founderStatement}&rdquo;
              </p>
              <footer className="mt-4 font-serif text-lg text-cream">
                — {founderBio.name}
              </footer>
              <p className="mt-1 text-sm tracking-wide text-soft-gold/90">
                {founderBio.title}
              </p>
            </blockquote>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:gap-8">
            <div>
              <p className="mb-4 text-xs tracking-[0.18em] text-soft-gold uppercase sm:mb-5 sm:text-sm sm:tracking-[0.22em]">
                Services
              </p>
              <ul className="space-y-3.5 text-base leading-relaxed text-warm-nude">
                <li>
                  <Link
                    href="/services"
                    className="transition-colors duration-300 hover:text-cream"
                  >
                    For Organizations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="transition-colors duration-300 hover:text-cream"
                  >
                    For Individuals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#speaking"
                    className="transition-colors duration-300 hover:text-cream"
                  >
                    Speaking & Facilitation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs tracking-[0.18em] text-soft-gold uppercase sm:mb-5 sm:text-sm sm:tracking-[0.22em]">
                Company
              </p>
              <ul className="space-y-3.5 text-base leading-relaxed text-warm-nude">
                <li>
                  <Link
                    href="/about"
                    className="transition-colors duration-300 hover:text-cream"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/founder"
                    className="transition-colors duration-300 hover:text-cream"
                  >
                    Founder
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experience"
                    className="transition-colors duration-300 hover:text-cream"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partner-with-us"
                    className="transition-colors duration-300 hover:text-cream"
                  >
                    Partner With Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs tracking-[0.18em] text-soft-gold uppercase sm:mb-5 sm:text-sm sm:tracking-[0.22em]">
                Connect
              </p>
              <ul className="space-y-3.5 text-base leading-relaxed text-warm-nude">
                <li>
                  <Link
                    href="/#contact"
                    className="transition-colors duration-300 hover:text-cream"
                  >
                    Contact
                  </Link>
                </li>
                <li>{siteConfig.location}</li>
                <li className="pt-2">
                  <p className="mb-4 text-sm tracking-[0.18em] text-soft-gold/90 uppercase">
                    Follow
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {footerContent.social.map((item) => (
                      <SocialLink
                        key={item.label}
                        label={item.label as "LinkedIn" | "Instagram"}
                        href={item.href}
                      />
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 py-6 lg:py-8">
          <div className="flex flex-col gap-4 text-sm text-warm-nude sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} The Kaye Collective.{" "}
              <span className="hidden sm:inline">·</span>{" "}
              <span className="block sm:inline">{siteConfig.mission}</span>
            </p>
            <Link
              href="/privacy"
              className="transition-colors duration-300 hover:text-cream"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
