import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

interface ContactSectionProps {
  onPreviewDocument: (doc: 'resume' | 'support-letter') => void;
}

export function ContactSection({ onPreviewDocument }: ContactSectionProps) {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-white/8 bg-[#0A0A0B] py-24 md:py-32"
    >
      {/* Subtle ambient crimson glow matching reference #contact aesthetic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-[360px] w-[480px] rounded-full bg-[#E11D48]/12 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="font-mono-tech text-xs text-[#E11D48]">06 · Contact</p>

        <h2 className="mt-3 font-display text-[clamp(3rem,8vw,5.75rem)] font-extrabold leading-[0.9] tracking-tight">
          <span className="text-[#F3F1EA]">CONNECT </span>
          <span className="text-[#E11D48]">WITH ME.</span>
        </h2>

        <p className="mt-4 max-w-lg text-base leading-relaxed text-[#A1A09A]">
          Available for Software Engineering internships —{' '}
          <span className="text-[#F3F1EA]">{CANDIDATE_PROFILE.internshipPeriod}</span>. Feel free to reach out directly via email or phone.
        </p>

        {/* Primary 2-Column Contact Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Email Card */}
          <div className="flex flex-col justify-between border border-white/10 bg-[#121215] p-6 md:p-8 transition-colors hover:border-white/25">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center border border-[#E11D48]/30 bg-[#E11D48]/10 text-[#E11D48]">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono-tech text-[11px] text-[#E11D48]">
                    Direct Email
                  </p>
                  <h3 className="font-display text-2xl font-bold text-[#F3F1EA]">
                    Email
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(CANDIDATE_PROFILE.email, 'email')}
                aria-label="Copy email address"
                className="inline-flex min-h-[38px] items-center gap-1.5 border border-white/12 px-3 py-1.5 font-mono-tech text-xs text-[#A1A09A] transition-colors hover:border-[#E11D48] hover:text-[#F3F1EA]"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-6">
              <p className="break-all text-base font-medium text-[#F3F1EA]">
                {CANDIDATE_PROFILE.email}
              </p>
              <p className="mt-1 text-sm text-[#A1A09A]">
                Fastest channel for internship interviews and technical inquiries.
              </p>
            </div>

            <div className="mt-6 border-t border-white/8 pt-4">
              <a
                href={`mailto:${CANDIDATE_PROFILE.email}?subject=Software%20Engineering%20Internship%20Inquiry%20%E2%80%94%20Chan%20Teck%20Cheng`}
                className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-[#F3F1EA] transition-colors hover:text-[#E11D48]"
              >
                <span>Send Email</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#E11D48]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Phone & Campus Card */}
          <div className="flex flex-col justify-between border border-white/10 bg-[#121215] p-6 md:p-8 transition-colors hover:border-white/25">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center border border-[#E11D48]/30 bg-[#E11D48]/10 text-[#E11D48]">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono-tech text-[11px] text-[#E11D48]">
                    Mobile & Campus
                  </p>
                  <h3 className="font-display text-2xl font-bold text-[#F3F1EA]">
                    Phone & Location
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(CANDIDATE_PROFILE.phone, 'phone')}
                aria-label="Copy phone number"
                className="inline-flex min-h-[38px] items-center gap-1.5 border border-white/12 px-3 py-1.5 font-mono-tech text-xs text-[#A1A09A] transition-colors hover:border-[#E11D48] hover:text-[#F3F1EA]"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-6">
              <p className="font-mono-tech text-base font-medium text-[#F3F1EA] tabular-nums">
                {CANDIDATE_PROFILE.phone}
              </p>
              <p className="mt-2 flex items-start gap-2 text-sm text-[#A1A09A]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#71717A]" aria-hidden="true" />
                <span>{CANDIDATE_PROFILE.address}</span>
              </p>
            </div>

            <div className="mt-6 border-t border-white/8 pt-4">
              <a
                href={`tel:${CANDIDATE_PROFILE.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-[#F3F1EA] transition-colors hover:text-[#E11D48]"
              >
                <span>Call Directly</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#E11D48]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Quick Links Strip */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onPreviewDocument('resume')}
            className="inline-flex min-h-[42px] items-center gap-2 border border-white/12 bg-[#121215] px-4 py-2 font-mono-tech text-xs text-[#A1A09A] transition-colors hover:border-[#E11D48] hover:text-[#F3F1EA]"
          >
            <span>Preview Resume</span>
          </button>
          <button
            type="button"
            onClick={() => onPreviewDocument('support-letter')}
            className="inline-flex min-h-[42px] items-center gap-2 border border-white/12 bg-[#121215] px-4 py-2 font-mono-tech text-xs text-[#A1A09A] transition-colors hover:border-[#E11D48] hover:text-[#F3F1EA]"
          >
            <span>Preview Support Letter</span>
          </button>
          <a
            href="#work"
            className="inline-flex min-h-[42px] items-center gap-2 border border-white/12 bg-[#121215] px-4 py-2 font-mono-tech text-xs text-[#A1A09A] transition-colors hover:border-[#E11D48] hover:text-[#F3F1EA]"
          >
            <span>AeroDrive Showcase</span>
          </a>
        </div>
      </div>
    </section>
  );
}
