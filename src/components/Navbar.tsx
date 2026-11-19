import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'About', href: '#about', index: '01' },
  { label: 'Skills', href: '#skills', index: '02' },
  { label: 'Work', href: '#work', index: '03' },
  { label: 'Credentials', href: '#credentials', index: '04' },
  { label: 'Contact', href: '#contact', index: '05' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#0A0A0B]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 text-[#F3F1EA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D48]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="text-[#E11D48]"
          >
            <path
              d="M4 17L10 7L14 14L20 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="square"
            />
          </svg>
          <span className="font-display text-xl font-bold tracking-wider">
            {CANDIDATE_PROFILE.monogram}
          </span>
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A1A09A]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#F3F1EA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D48]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action (plus mobile menu button on small screens) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center whitespace-nowrap shrink-0 border border-white/15 bg-transparent px-4 py-2 font-mono-tech text-xs font-medium text-[#F3F1EA] transition-colors duration-150 hover:border-[#E11D48] hover:bg-[#E11D48] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D48]"
          >
            Contact Me
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/12 text-[#F3F1EA] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/8 bg-[#0A0A0B] px-6 py-6 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline gap-4 py-2 text-lg font-medium text-[#F3F1EA] transition-colors hover:text-[#E11D48]"
              >
                <span className="font-mono-tech text-xs text-[#E11D48]">{item.index}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
