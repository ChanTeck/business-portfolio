import { ArrowRight, Download } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/8 bg-[#0A0A0B] hero-architectural-grid"
    >
      {/* Subtle focal ambient gradient matching reference obsidian + crimson mood */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[12%] h-[420px] w-[420px] rounded-full bg-[#E11D48]/10 blur-[120px]"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl flex-col justify-between px-6 py-16 md:py-24">
        <div className="my-auto max-w-4xl">
          {/* Quiet Editorial Kicker */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#E11D48]" aria-hidden="true" />
            <p className="font-mono-tech text-xs tracking-wider text-[#E11D48]">
              {CANDIDATE_PROFILE.roleTitle} · {CANDIDATE_PROFILE.institution}, {CANDIDATE_PROFILE.locationShort}
            </p>
          </div>

          {/* High-Impact Condensed Display Typography */}
          <h1 className="font-display text-[clamp(3.75rem,10.5vw,7.75rem)] font-extrabold leading-[0.88] tracking-tight text-balance">
            <span className="block text-[#F3F1EA]">{CANDIDATE_PROFILE.firstName}</span>
            <span className="block text-outline-hero">{CANDIDATE_PROFILE.lastName}</span>
          </h1>

          {/* Concise Narrative Lead */}
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#A1A09A] md:text-lg">
            {CANDIDATE_PROFILE.bioHero}
          </p>

          {/* Primary & Secondary Action Pair */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 bg-[#E11D48] px-6 py-3 font-mono-tech text-xs font-medium text-white transition-colors duration-150 hover:bg-[#BE123C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D48]"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href={CANDIDATE_PROFILE.resumePdfUrl}
              download="Chan_Teck_Cheng_Resume.pdf"
              className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 border border-white/15 bg-[#121215] px-6 py-3 font-mono-tech text-xs font-medium text-[#F3F1EA] transition-colors duration-150 hover:border-white/35 hover:bg-[#18181C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D48]"
            >
              <Download className="h-4 w-4 text-[#E11D48]" aria-hidden="true" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Quiet Scroll Indicator */}
        <div className="mt-12 flex items-center gap-3">
          <span className="h-4 w-px bg-[#E11D48]" aria-hidden="true" />
          <a
            href="#about"
            className="font-mono-tech text-[11px] tracking-widest text-[#71717A] transition-colors hover:text-[#F3F1EA]"
          >
            Scroll to explore
          </a>
        </div>
      </div>
    </section>
  );
}
