import { ArrowUpRight } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

interface AboutSectionProps {
  onPreviewDocument: (doc: 'resume' | 'support-letter') => void;
}

export function AboutSection({ onPreviewDocument }: AboutSectionProps) {
  const profileSpecs = [
    { label: 'Institution', value: CANDIDATE_PROFILE.institution },
    { label: 'Programme', value: 'Dip. Information Technology' },
    { label: 'Student ID', value: CANDIDATE_PROFILE.studentId },
    { label: 'Cohort', value: CANDIDATE_PROFILE.cohort },
    { label: 'Internship', value: 'Jan 2027 – Mar 2027' },
    { label: 'Location', value: CANDIDATE_PROFILE.locationShort },
  ];

  const keyStats = [
    { number: '4', label: 'Shipped Projects', sub: 'Web · Mobile · IoT · C++' },
    { number: '3', label: 'Months Internship', sub: 'Jan – Mar 2027 Ready' },
    { number: '3', label: 'Spoken Languages', sub: 'English · Chinese · Malay' },
  ];

  return (
    <section id="about" className="border-b border-white/8 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/8 pb-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono-tech text-xs text-[#E11D48]">01 · About</p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-[#F3F1EA] md:text-5xl">
              The Profile
            </h2>
          </div>
          <p className="text-sm text-[#A1A09A]">
            {CANDIDATE_PROFILE.traits.join(' · ')}
          </p>
        </div>

        {/* 2-Column Editorial Split */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Left: Structured Identity Dossier Card */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between border border-white/10 bg-[#121215] p-6 md:p-8">
              <div>
                <div className="flex items-center justify-between border-b border-white/8 pb-4">
                  <span className="font-mono-tech text-xs text-[#71717A]">
                    ID · {CANDIDATE_PROFILE.studentId}
                  </span>
                  <span className="font-mono-tech text-xs text-[#E11D48]">
                    Intake {CANDIDATE_PROFILE.intake}
                  </span>
                </div>

                {/* Portrait & Identity Header */}
                <div className="my-6 flex items-center gap-5">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white p-0.5 shadow-lg">
                    <img
                      src={CANDIDATE_PROFILE.avatarUrl}
                      alt={CANDIDATE_PROFILE.fullName}
                      referrerPolicy="no-referrer"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-[#F3F1EA]">
                      {CANDIDATE_PROFILE.fullName}
                    </h3>
                    <p className="mt-1 font-mono-tech text-xs text-[#E11D48]">
                      {CANDIDATE_PROFILE.roleTitle}
                    </p>
                  </div>
                </div>

                {/* Tabular Dossier Fields */}
                <dl className="divide-y divide-white/8 border-t border-white/8">
                  {profileSpecs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-baseline justify-between gap-4 py-3 text-sm"
                    >
                      <dt className="text-[#71717A]">{spec.label}</dt>
                      <dd className="text-right font-medium text-[#F3F1EA] tabular-nums">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-white/8 pt-5">
                <button
                  type="button"
                  onClick={() => onPreviewDocument('support-letter')}
                  className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-[#F3F1EA] transition-colors hover:text-[#E11D48] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D48]"
                >
                  <span>University Endorsement</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#E11D48]" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Editorial Bio + Key Quantitative Strip */}
          <div className="flex flex-col justify-between gap-10 lg:col-span-7">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-[#F3F1EA] md:text-2xl">
                {CANDIDATE_PROFILE.bioExtended}
              </p>

              <p className="text-base leading-relaxed text-[#A1A09A]">
                Currently pursuing the{' '}
                <span className="font-medium text-[#F3F1EA]">
                  {CANDIDATE_PROFILE.programme}
                </span>{' '}
                at {CANDIDATE_PROFILE.institution} (Sep-24 Intake), I am officially endorsed by the Centre of Professional Development (CPD) for a compulsory 3-month professional attachment from{' '}
                <span className="font-medium text-[#E11D48]">
                  {CANDIDATE_PROFILE.internshipPeriod}
                </span>
                .
              </p>

              <div className="border-t border-white/8 pt-6">
                <p className="font-mono-tech text-xs text-[#71717A]">
                  Core Focus Areas
                </p>
                <p className="mt-2 text-sm text-[#F3F1EA]">
                  Full-Stack Web Engineering · Cross-Platform Flutter & Capacitor Mobile Apps · Relational Databases (MySQL & Supabase) · Embedded ESP32 Hardware
                </p>
              </div>
            </div>

            {/* 3-Column Quantitative Spec Grid */}
            <div className="grid grid-cols-1 divide-y divide-white/8 border border-white/10 bg-[#121215] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {keyStats.map((stat) => (
                <div key={stat.label} className="p-6">
                  <div className="font-display text-4xl font-extrabold text-[#F3F1EA] tabular-nums">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-sm font-medium text-[#F3F1EA]">
                    {stat.label}
                  </div>
                  <div className="mt-1 font-mono-tech text-xs text-[#71717A]">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
