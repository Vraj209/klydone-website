"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "AI Solutions", href: "#ai-services" },
    { name: "Process", href: "#process" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="flex justify-center px-0 py-4 ">
        <div
          className={`transition-all duration-300 rounded-2xl mx-4 ${
            isScrolled
              ? "bg-black/80 backdrop-blur-md shadow-2xl border border-gray-700"
              : "bg-black/40 backdrop-blur-sm border border-gray-800"
          }`}
        >
          <div className="flex items-center justify-between gap-10 px-6 h-16 ">
            <Link
              href="/"
              className="text-xl font-bold text-white whitespace-nowrap mx-0"
            >
              Klydone
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white font-medium transition-colors text-sm whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
              <Button href="#contact" variant="primary" size="sm">
                Get Started
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 mx-auto max-w-md">
          <div className="bg-black/95 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl p-6 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-300 hover:text-white font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button href="#contact" variant="primary" size="sm" fullWidth>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
