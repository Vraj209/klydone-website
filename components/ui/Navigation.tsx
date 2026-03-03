"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { useIsMobileMenuOpen, useUIActions } from "@/store/selectors";
import { ArrowRight, CalendarCheck, Menu, X } from "lucide-react";
import { SCHEDULE_LINK } from "@/data/constant";

export default function Navigation() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const isMobileMenuOpen              = useIsMobileMenuOpen();
  const { toggleMobileMenu, closeMobileMenu } = useUIActions();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "What We Build", href: "#solution"    },
    { name: "Case Studies",  href: "#case-studies" },
    { name: "Process",       href: "#process"      },
    { name: "Packages",      href: "#pricing"      },
    { name: "Security",      href: "#security"     },
    { name: "FAQ",           href: "#faq"          },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm shadow-gray-200/80 border-b border-gray-100"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 tracking-tight"
          aria-label="Klydone home"
        >
          Klydone
          <span className="klydone-dot font-bold">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
          <Link href={SCHEDULE_LINK} target="_blank">
          <Button variant="primary" size="sm">
            <CalendarCheck size={18} aria-hidden="true" />
            Book a Strategy Call
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          </Link>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden rounded-lg p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md shadow-lg">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link href={SCHEDULE_LINK} target="_blank">
              <Button variant="primary" size="sm" fullWidth>
                <CalendarCheck size={18} aria-hidden="true" />
                Book a Strategy Call
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              </Link> 
              </div>
          </div>
        </div>
      )}
    </nav>
  );
}
