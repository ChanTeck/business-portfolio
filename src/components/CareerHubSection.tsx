import { Download, Eye, FileText, RotateCw } from 'lucide-react';
import { useState } from 'react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

interface CareerHubSectionProps {
  onPreviewDocument: (doc: 'resume' | 'support-letter') => void;
}

export function CareerHubSection({ onPreviewDocument }: CareerHubSectionProps) {
  const [cardFlipped, setCardFlipped] = useState(false);

  return (
    <section id="career" className="border-b border-white/8 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/8 pb-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono-tech text-xs text-[#E11D48]">05 · Career Hub</p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-[#F3F1EA] md:text-5xl">
              Resume & Support Letter
            </h2>
          </div>
          <p className="text-sm text-[#A1A09A]">
            Official internship documentation and downloadable credentials in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Resume & Support Letter Document Cards */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            {/* Resume Card */}
            <div className="flex flex-col justify-between border border-white/10 bg-[#121215] p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono-tech text-xs text-[#E11D48]">
                    Curriculum Vitae · PDF
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold text-[#F3F1EA]">
                    Resume
                  </h3>
                  <p className="mt-2 text-sm text-[#A1A09A]">
                    Full technical overview covering projects, languages, education, and references.
                  </p>
                </div>
                <FileText className="h-6 w-6 shrink-0 text-[#71717A]" aria-hidden="true" />
              </div>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-white/8 pt-5">
                <button
                  type="button"
                  onClick={() => onPreviewDocument('resume')}
                  className="inline-flex min-h-[42px] items-center gap-2 border border-white/15 bg-[#0A0A0B] px-4 py-2 font-mono-tech text-xs text-[#F3F1EA] transition-colors hover:border-[#E11D48] hover:text-[#E11D48]"
                >
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Preview Document</span>
                </button>
                <a
                  href={CANDIDATE_PROFILE.resumePdfUrl}
                  download="Chan_Teck_Cheng_Resume.pdf"
                  className="inline-flex min-h-[42px] items-center gap-2 bg-[#E11D48] px-4 py-2 font-mono-tech text-xs font-medium text-white transition-colors hover:bg-[#BE123C]"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* University Support Letter Card */}
            <div className="flex flex-col justify-between border border-white/10 bg-[#121215] p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono-tech text-xs text-[#E11D48]">
                    Raffles University CPD · {CANDIDATE_PROFILE.supportLetterDate}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold text-[#F3F1EA]">
                    Internship Support Letter
                  </h3>
                  <p className="mt-2 text-sm text-[#A1A09A]">
                    Official confirmation of compulsory industrial attachment for{' '}
                    <span className="text-[#F3F1EA]">{CANDIDATE_PROFILE.internshipPeriod}</span>, signed by HOD Suraj Mariappan.
                  </p>
                </div>
                <FileText className="h-6 w-6 shrink-0 text-[#71717A]" aria-hidden="true" />
              </div>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-white/8 pt-5">
                <button
                  type="button"
                  onClick={() => onPreviewDocument('support-letter')}
                  className="inline-flex min-h-[42px] items-center gap-2 border border-white/15 bg-[#0A0A0B] px-4 py-2 font-mono-tech text-xs text-[#F3F1EA] transition-colors hover:border-[#E11D48] hover:text-[#E11D48]"
                >
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Preview Letter</span>
                </button>
                <a
                  href={CANDIDATE_PROFILE.supportLetterPdfUrl}
                  download="Chan_Teck_Cheng_Support_Letter.pdf"
                  className="inline-flex min-h-[42px] items-center gap-2 bg-[#E11D48] px-4 py-2 font-mono-tech text-xs font-medium text-white transition-colors hover:bg-[#BE123C]"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Flippable Digital Business Card */}
          <div className="flex flex-col justify-between border border-white/10 bg-[#121215] p-6 md:p-8 lg:col-span-6">
            <div>
              <div className="flex items-center justify-between">
                <p className="font-mono-tech text-xs text-[#E11D48]">Interactive</p>
                <span className="font-mono-tech text-xs text-[#71717A]">
                  {cardFlipped ? 'Back View' : 'Front View'}
                </span>
              </div>
              <h3 className="mt-2 font-display text-3xl font-bold text-[#F3F1EA]">
                Digital Business Card
              </h3>
              <p className="mt-2 text-sm text-[#A1A09A]">
                Click or tap the card to flip between front identity and direct contact details.
              </p>
            </div>

            <div className="my-8 flex justify-center">
              <button
                type="button"
                onClick={() => setCardFlipped((prev) => !prev)}
                aria-pressed={cardFlipped}
                aria-label={
                  cardFlipped
                    ? 'Flip business card to show front'
                    : 'Flip business card to show contact details'
                }
                className="perspective-1000 w-full max-w-[420px] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D48]"
              >
                <div
                  className={`relative h-[240px] w-full transition-transform duration-500 transform-style-3d ${
                    cardFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Card Front */}
                  <div className="backface-hidden absolute inset-0 flex flex-col justify-between border border-white/15 bg-[#0A0A0B] p-6 hero-architectural-grid">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl font-extrabold tracking-wider text-[#F3F1EA]">
                        {CANDIDATE_PROFILE.monogram}
                      </span>
                      <span className="font-mono-tech text-[11px] text-[#E11D48]">
                        Raffles University
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display text-3xl font-extrabold tracking-tight text-[#F3F1EA]">
                        {CANDIDATE_PROFILE.fullName.toUpperCase()}
                      </h4>
                      <p className="mt-1 font-mono-tech text-xs text-[#A1A09A]">
                        {CANDIDATE_PROFILE.roleTitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-3 font-mono-tech text-[11px] text-[#71717A]">
                      <span>{CANDIDATE_PROFILE.locationShort}</span>
                      <span>Internship · Jan–Mar 2027</span>
                    </div>
                  </div>

                  {/* Card Back */}
                  <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between border border-[#E11D48]/50 bg-[#16161A] p-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-mono-tech text-xs text-[#E11D48]">
                        Direct Contact
                      </span>
                      <span className="font-mono-tech text-xs text-[#71717A]">
                        {CANDIDATE_PROFILE.studentId}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-mono-tech text-[11px] text-[#71717A]">
                          Email
                        </span>
                        <p className="font-medium text-[#F3F1EA]">
                          {CANDIDATE_PROFILE.email}
                        </p>
                      </div>
                      <div>
                        <span className="font-mono-tech text-[11px] text-[#71717A]">
                          Phone
                        </span>
                        <p className="font-medium text-[#F3F1EA] tabular-nums">
                          {CANDIDATE_PROFILE.phone}
                        </p>
                      </div>
                      <div>
                        <span className="font-mono-tech text-[11px] text-[#71717A]">
                          Campus
                        </span>
                        <p className="text-xs text-[#A1A09A]">
                          Medini 7, Bandar Medini Iskandar, 79250 Iskandar Puteri, Johor
                        </p>
                      </div>
                    </div>

                    <div className="font-mono-tech text-[11px] text-[#71717A]">
                      {CANDIDATE_PROFILE.languages.join(' · ')}
                    </div>
                  </div>
                </div>
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-white/8 pt-4">
              <button
                type="button"
                onClick={() => setCardFlipped((prev) => !prev)}
                className="inline-flex items-center gap-2 font-mono-tech text-xs text-[#F3F1EA] transition-colors hover:text-[#E11D48]"
              >
                <RotateCw className="h-3.5 w-3.5 text-[#E11D48]" aria-hidden="true" />
                <span>{cardFlipped ? 'Show Card Front' : 'Flip to Contact Details'}</span>
              </button>
              <span className="font-mono-tech text-xs text-[#71717A]">
                Tap / Click
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
