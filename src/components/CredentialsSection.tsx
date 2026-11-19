import { Check, Copy, Mail } from 'lucide-react';
import { useState } from 'react';
import { CANDIDATE_PROFILE, REFEREES } from '../data/portfolioData';

export function CredentialsSection() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch {
      setCopiedEmail(null);
    }
  };

  return (
    <section id="credentials" className="border-b border-white/8 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/8 pb-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono-tech text-xs text-[#E11D48]">
              04 · Credentials & References
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-[#F3F1EA] md:text-5xl">
              Academic Standing
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A1A09A]">
            Verified university standing, internship eligibility, and academic referees from Raffles University.
          </p>
        </div>

        {/* Top 3 Verification Blocks */}
        <div className="grid grid-cols-1 divide-y divide-white/8 border border-white/10 bg-[#121215] md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="p-6 md:p-8">
            <p className="font-mono-tech text-xs text-[#E11D48]">Education</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-[#F3F1EA]">
              {CANDIDATE_PROFILE.programme}
            </h3>
            <p className="mt-2 text-sm text-[#A1A09A]">
              {CANDIDATE_PROFILE.institution} · {CANDIDATE_PROFILE.cohort}
            </p>
            <p className="mt-4 font-mono-tech text-xs text-[#71717A] tabular-nums">
              Intake {CANDIDATE_PROFILE.intake} · ID {CANDIDATE_PROFILE.studentId}
            </p>
          </div>

          <div className="p-6 md:p-8">
            <p className="font-mono-tech text-xs text-[#E11D48]">
              Compulsory Attachment
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-[#F3F1EA] tabular-nums">
              {CANDIDATE_PROFILE.internshipPeriod}
            </h3>
            <p className="mt-2 text-sm text-[#A1A09A]">
              Officially endorsed by Centre of Professional Development (CPD), Raffles University.
            </p>
            <p className="mt-4 font-mono-tech text-xs text-[#71717A]">
              Letter Issued {CANDIDATE_PROFILE.supportLetterDate}
            </p>
          </div>

          <div className="p-6 md:p-8">
            <p className="font-mono-tech text-xs text-[#E11D48]">Communication</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-[#F3F1EA]">
              Trilingual Proficiency
            </h3>
            <p className="mt-2 text-sm text-[#A1A09A]">
              Fluent across technical documentation, team standups, and cross-functional collaboration.
            </p>
            <p className="mt-4 font-mono-tech text-xs text-[#F3F1EA]">
              {CANDIDATE_PROFILE.languages.join(' · ')}
            </p>
          </div>
        </div>

        {/* Academic Referees Grid */}
        <div className="mt-10">
          <p className="mb-4 font-mono-tech text-xs text-[#71717A]">
            Academic References & University Signatory
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {REFEREES.map((referee) => {
              const isCopied = copiedEmail === referee.email;
              return (
                <div
                  key={referee.email}
                  className="flex flex-col justify-between border border-white/10 bg-[#121215] p-6"
                >
                  <div>
                    <h4 className="font-display text-2xl font-bold tracking-tight text-[#F3F1EA]">
                      {referee.name}
                    </h4>
                    <p className="mt-1 text-xs text-[#E11D48]">{referee.role}</p>
                    <p className="mt-1 text-sm text-[#A1A09A]">
                      {referee.institution}
                    </p>
                    {referee.phone && (
                      <p className="mt-2 font-mono-tech text-xs text-[#71717A] tabular-nums">
                        Tel: {referee.phone}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-2 border-t border-white/8 pt-4">
                    <a
                      href={`mailto:${referee.email}`}
                      className="inline-flex min-w-0 items-center gap-1.5 font-mono-tech text-xs text-[#A1A09A] transition-colors hover:text-[#F3F1EA]"
                    >
                      <Mail className="h-3.5 w-3.5 shrink-0 text-[#E11D48]" aria-hidden="true" />
                      <span className="truncate">{referee.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopyEmail(referee.email)}
                      aria-label={`Copy email address for ${referee.name}`}
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-white/12 text-[#A1A09A] transition-colors hover:border-[#E11D48] hover:text-[#F3F1EA]"
                    >
                      {isCopied ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
