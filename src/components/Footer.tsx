import { ArrowUp } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0B] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <svg
            width="20"
            height="20"
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
          <div>
            <p className="text-xs font-medium text-[#F3F1EA]">
              {CANDIDATE_PROFILE.fullName}
            </p>
            <p className="font-mono-tech text-[11px] text-[#71717A]">
              {CANDIDATE_PROFILE.programme} · {CANDIDATE_PROFILE.institution}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono-tech text-xs text-[#71717A] tabular-nums">
            2026
          </span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-[#A1A09A] transition-colors hover:text-[#F3F1EA]"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#E11D48]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
