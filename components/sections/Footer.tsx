'use client';

import Link from 'next/link';
import { Icon } from '../icons';
import { DataService } from '../../data';

export default function Footer() {
  const navigationLinks = DataService.getNavigationSections();
  const socialLinks     = DataService.getSocialLinks();

  return (
    <footer
      className="relative z-10 bg-white text-gray-900 border-t border-gray-100"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 pb-28">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-baseline gap-px text-2xl font-bold text-gray-900">
              Klydone
              <span className="klydone-dot font-bold">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
              AI automations that remove manual work across support, sales ops, and internal
              processes — secure, measurable, and production-ready.
            </p>
            <div className="mt-5 space-y-1">
              <a href="mailto:hello@klydone.com" className="block text-sm text-gray-500 hover:text-violet-600 transition-colors">
                hello@klydone.com
              </a>
              <a href="tel:+15551234567" className="block text-sm text-gray-500 hover:text-violet-600 transition-colors">
                +1 (873) 498-5370
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {navigationLinks.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-violet-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Klydone&copy; <br /> All rights reserved.</p>

          <div className="flex items-center gap-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-violet-600 transition-colors"
                aria-label={social.name}
              >
                <Icon name={social.icon} size={20} />
              </a>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-0 flex justify-center"
        >
          <div className="footer-brand-stack select-none text-[20vw] font-black uppercase leading-none tracking-tight md:text-[12vw]">
            <span className="footer-brand-base">KLYDONE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
