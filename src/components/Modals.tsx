import { ChevronLeft, ChevronRight, Download, ExternalLink, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  CANDIDATE_PROFILE,
  ProjectItem,
  REFEREES,
  getNextGalleryIndex,
} from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  initialIndex: number;
  onClose: () => void;
}

export function ProjectModal({ project, initialIndex, onClose }: ProjectModalProps) {
  const [slideIndex, setSlideIndex] = useState(initialIndex);

  useEffect(() => {
    setSlideIndex(initialIndex);
  }, [initialIndex, project]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight' && project.gallery.length > 1) {
        setSlideIndex((prev) => getNextGalleryIndex(prev, project.gallery.length, 'next'));
      } else if (event.key === 'ArrowLeft' && project.gallery.length > 1) {
        setSlideIndex((prev) => getNextGalleryIndex(prev, project.gallery.length, 'prev'));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const activeSlide = project.gallery[slideIndex] ?? project.gallery[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden border border-white/15 bg-[#121215]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
          <div>
            <p className="font-mono-tech text-xs text-[#E11D48]">
              {project.category} · {project.indexNumber}
            </p>
            <h3
              id="project-modal-title"
              className="font-display text-2xl font-bold text-[#F3F1EA] md:text-3xl"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${project.title} modal`}
            className="flex h-10 w-10 items-center justify-center border border-white/15 text-[#F3F1EA] transition-colors hover:border-[#E11D48] hover:text-[#E11D48]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Image Stage */}
            <div className="lg:col-span-7">
              <div className="relative flex items-center justify-center border border-white/10 bg-[#0A0A0B] p-4">
                {project.gallery.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      setSlideIndex((prev) =>
                        getNextGalleryIndex(prev, project.gallery.length, 'prev')
                      )
                    }
                    aria-label="Previous project image"
                    className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center border border-white/15 bg-[#121215]/90 text-[#F3F1EA] hover:border-[#E11D48]"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                )}

                <img
                  src={activeSlide.src}
                  alt={activeSlide.caption}
                  referrerPolicy="no-referrer"
                  className={
                    activeSlide.aspect === 'mobile'
                      ? 'max-h-[460px] w-auto object-contain'
                      : 'aspect-[4/3] w-full object-cover'
                  }
                />

                {project.gallery.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      setSlideIndex((prev) =>
                        getNextGalleryIndex(prev, project.gallery.length, 'next')
                      )
                    }
                    aria-label="Next project image"
                    className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center border border-white/15 bg-[#121215]/90 text-[#F3F1EA] hover:border-[#E11D48]"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                )}
              </div>

              <p className="mt-3 font-mono-tech text-xs text-[#A1A09A]">
                {activeSlide.caption} ({slideIndex + 1}/{project.gallery.length})
              </p>

              {project.gallery.length > 1 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.gallery.map((item, idx) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setSlideIndex(idx)}
                      aria-label={`Select image ${idx + 1}`}
                      className={`h-14 w-10 overflow-hidden border ${
                        idx === slideIndex
                          ? 'border-[#E11D48] opacity-100'
                          : 'border-white/12 opacity-50 hover:opacity-85'
                      }`}
                    >
                      <img
                        src={item.src}
                        alt=""
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Breakdown */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="text-sm font-medium text-[#F3F1EA]">{project.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#A1A09A]">
                  {project.summary}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-mono-tech text-xs text-[#E11D48]">
                    Engineering Highlights
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm text-[#A1A09A]">
                    {project.highlights.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#E11D48]" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-mono-tech text-[11px] text-[#71717A]">
                  Technologies
                </p>
                <p className="mt-1 font-mono-tech text-xs text-[#F3F1EA]">
                  {project.stack.join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface DocumentModalProps {
  activeDoc: 'resume' | 'support-letter' | null;
  onSelectDoc: (doc: 'resume' | 'support-letter') => void;
  onClose: () => void;
}

export function DocumentModal({
  activeDoc,
  onSelectDoc,
  onClose,
}: DocumentModalProps) {
  useEffect(() => {
    if (!activeDoc) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDoc, onClose]);

  if (!activeDoc) return null;

  const isResume = activeDoc === 'resume';
  const pdfUrl = isResume
    ? CANDIDATE_PROFILE.resumePdfUrl
    : CANDIDATE_PROFILE.supportLetterPdfUrl;
  const downloadFilename = isResume
    ? 'Chan_Teck_Cheng_Resume.pdf'
    : 'Chan_Teck_Cheng_Support_Letter.pdf';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="doc-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden border border-white/15 bg-[#121215]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Document Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-4">
            <h3
              id="doc-modal-title"
              className="font-display text-2xl font-bold text-[#F3F1EA]"
            >
              {isResume ? 'Resume — Chan Teck Cheng' : 'University Support Letter'}
            </h3>
            <div className="flex border border-white/12 bg-[#0A0A0B] p-0.5">
              <button
                type="button"
                onClick={() => onSelectDoc('resume')}
                className={`px-3 py-1 font-mono-tech text-xs transition-colors ${
                  isResume
                    ? 'bg-[#E11D48] text-white'
                    : 'text-[#A1A09A] hover:text-[#F3F1EA]'
                }`}
              >
                Resume
              </button>
              <button
                type="button"
                onClick={() => onSelectDoc('support-letter')}
                className={`px-3 py-1 font-mono-tech text-xs transition-colors ${
                  !isResume
                    ? 'bg-[#E11D48] text-white'
                    : 'text-[#A1A09A] hover:text-[#F3F1EA]'
                }`}
              >
                Support Letter
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download={downloadFilename}
              className="inline-flex min-h-[38px] items-center gap-1.5 bg-[#E11D48] px-3.5 py-1.5 font-mono-tech text-xs font-medium text-white hover:bg-[#BE123C]"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download PDF</span>
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open PDF in new tab"
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-[#F3F1EA] hover:border-[#E11D48]"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close document preview"
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-[#F3F1EA] hover:border-[#E11D48]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Structured Document Preview */}
        <div className="grid grid-cols-1 overflow-y-auto lg:grid-cols-12">
          <div className="border-b border-white/10 bg-[#F3F1EA] p-6 text-[#121215] md:p-8 lg:col-span-7 lg:border-b-0 lg:border-r">
            {isResume ? (
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4 border-b border-[#121215]/15 pb-4">
                  <div>
                    <p className="font-mono-tech text-[11px] uppercase tracking-wider text-[#E11D48]">
                      Curriculum Vitae
                    </p>
                    <h4 className="mt-1 font-display text-3xl font-extrabold tracking-tight text-[#0A0A0B]">
                      {CANDIDATE_PROFILE.fullName}
                    </h4>
                    <p className="text-sm font-medium text-[#3F3F46]">
                      {CANDIDATE_PROFILE.roleTitle} · {CANDIDATE_PROFILE.institution}
                    </p>
                    <p className="mt-2 font-mono-tech text-xs text-[#52525B]">
                      {CANDIDATE_PROFILE.email} · {CANDIDATE_PROFILE.phone}
                    </p>
                  </div>
                  <img
                    src={CANDIDATE_PROFILE.avatarUrl}
                    alt={CANDIDATE_PROFILE.fullName}
                    referrerPolicy="no-referrer"
                    className="h-20 w-20 shrink-0 rounded-full border border-[#121215]/20 object-cover"
                  />
                </div>

                <div>
                  <h5 className="font-mono-tech text-xs font-semibold uppercase tracking-wider text-[#0A0A0B]">
                    Profile
                  </h5>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#3F3F46]">
                    {CANDIDATE_PROFILE.bioExtended}
                  </p>
                </div>

                <div>
                  <h5 className="font-mono-tech text-xs font-semibold uppercase tracking-wider text-[#0A0A0B]">
                    Projects
                  </h5>
                  <div className="mt-2 space-y-2.5 text-xs text-[#27272A]">
                    <div>
                      <p className="font-semibold text-[#0A0A0B]">
                        AeroDrive · React, TypeScript, Tailwind CSS, Capacitor, Supabase
                      </p>
                      <p className="text-[#52525B]">
                        Cross-platform car rental and peer-to-peer fleet platform with real-time Supabase bookings and native Capacitor builds.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A0A0B]">
                        Smart Study Planner · Flutter, Supabase, Android Studio
                      </p>
                      <p className="text-[#52525B]">
                        Mobile academic organizer featuring user authentication, CRUD task flows, and achievement tracking.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A0A0B]">
                        IoT Game Station · ESP32, Arduino IDE
                      </p>
                      <p className="text-[#52525B]">
                        Embedded handheld prototype with push button controller, OLED display, piezo buzzer, and Bluetooth.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A0A0B]">
                        Snake Game · C++, OOP, STL Containers
                      </p>
                      <p className="text-[#52525B]">
                        Modular object-oriented game engine using STL vector and queue containers with dynamic difficulty scaling.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-[#121215]/15 pt-4 text-xs">
                  <div>
                    <p className="font-mono-tech font-semibold uppercase text-[#0A0A0B]">
                      Skills
                    </p>
                    <p className="mt-1 text-[#52525B]">
                      PHP, Flutter, Dart, Java, C++, Python, JavaScript, HTML, CSS, MySQL, UI/UX
                    </p>
                  </div>
                  <div>
                    <p className="font-mono-tech font-semibold uppercase text-[#0A0A0B]">
                      Languages
                    </p>
                    <p className="mt-1 text-[#52525B]">
                      {CANDIDATE_PROFILE.languages.join(' · ')}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="flex items-start justify-between border-b border-[#121215]/15 pb-4">
                  <div>
                    <p className="font-display text-2xl font-extrabold text-[#0A0A0B]">
                      Raffles University
                    </p>
                    <p className="text-[11px] text-[#52525B]">
                      Medini 7, Jalan Medini Sentral 5, 79250 Iskandar Puteri, Johor, Malaysia
                    </p>
                  </div>
                  <span className="font-mono-tech text-xs text-[#52525B]">
                    {CANDIDATE_PROFILE.supportLetterDate}
                  </span>
                </div>

                <div className="space-y-3 text-xs leading-relaxed text-[#27272A]">
                  <p className="font-semibold text-[#0A0A0B]">To Whom It May Concern</p>
                  <p>Dear Sir/Madam,</p>
                  <p className="font-semibold text-[#0A0A0B]">
                    RU – Diploma in Information Technology Programme - Sep-24 Intake
                    <br />
                    Student Name: Chan Teck Cheng (Mr.)
                  </p>
                  <p>
                    We are pleased to inform that Mr. Chan Teck Cheng; RU Student ID:{' '}
                    <span className="font-mono-tech font-semibold text-[#0A0A0B]">
                      {CANDIDATE_PROFILE.studentId}
                    </span>{' '}
                    is currently studying Diploma in Information Technology Programme with Raffles University.
                  </p>
                  <p>
                    As part of the programme requirements, the student is required to undergo compulsory professional attachment from{' '}
                    <span className="font-semibold text-[#E11D48]">
                      {CANDIDATE_PROFILE.internshipPeriod}
                    </span>
                    .
                  </p>
                </div>

                <div className="border-t border-[#121215]/15 pt-4 text-xs text-[#27272A]">
                  <p>Yours sincerely,</p>
                  <p className="mt-3 font-semibold text-[#0A0A0B]">Suraj Mariappan</p>
                  <p className="text-[#52525B]">
                    Head of Department · Centre of Professional Development (CPD)
                  </p>
                  <p className="text-[#52525B]">Raffles University</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-5 p-6 text-sm text-[#A1A09A] lg:col-span-5">
            {isResume ? (
              <>
                <div>
                  <p className="font-mono-tech text-xs text-[#E11D48]">Verified Summary</p>
                  <p className="mt-2 leading-relaxed text-[#F3F1EA]">
                    {CANDIDATE_PROFILE.bioExtended}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-mono-tech text-xs text-[#71717A]">Education</p>
                  <p className="mt-1 font-medium text-[#F3F1EA]">
                    {CANDIDATE_PROFILE.programme}
                  </p>
                  <p>{CANDIDATE_PROFILE.institution} ({CANDIDATE_PROFILE.cohort})</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-mono-tech text-xs text-[#71717A]">Key Projects</p>
                  <ul className="mt-2 space-y-1 text-xs text-[#F3F1EA]">
                    <li>· AeroDrive (React, TypeScript, Tailwind CSS, Capacitor, Supabase)</li>
                    <li>· Smart Study Planner (Flutter, Supabase, Android Studio)</li>
                    <li>· IoT Game Station (ESP32, Arduino IDE, OLED, Bluetooth)</li>
                    <li>· Snake Game (C++, OOP, STL Containers)</li>
                  </ul>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-mono-tech text-xs text-[#71717A]">Referees</p>
                  {REFEREES.slice(0, 2).map((r) => (
                    <p key={r.email} className="mt-1 text-xs text-[#F3F1EA]">
                      {r.name} — {r.email}
                    </p>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div>
                  <p className="font-mono-tech text-xs text-[#E11D48]">
                    Official Endorsement · {CANDIDATE_PROFILE.supportLetterDate}
                  </p>
                  <h4 className="mt-2 font-display text-2xl font-bold text-[#F3F1EA]">
                    RU – Diploma in Information Technology Programme (Sep-24 Intake)
                  </h4>
                </div>
                <dl className="divide-y divide-white/8 border-y border-white/8 text-xs">
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#71717A]">Student Name</dt>
                    <dd className="text-[#F3F1EA]">{CANDIDATE_PROFILE.fullName}</dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#71717A]">Student ID</dt>
                    <dd className="font-mono-tech text-[#F3F1EA]">{CANDIDATE_PROFILE.studentId}</dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#71717A]">Internship Period</dt>
                    <dd className="font-medium text-[#E11D48]">{CANDIDATE_PROFILE.internshipPeriod}</dd>
                  </div>
                </dl>
                <p className="text-xs leading-relaxed">
                  Confirms that {CANDIDATE_PROFILE.fullName} is currently studying the Diploma in Information Technology programme at Raffles University and is required to undergo compulsory professional attachment for 3 months from January 2027 to March 2027.
                </p>
                <div className="border-t border-white/10 pt-4 text-xs">
                  <p className="font-medium text-[#F3F1EA]">Suraj Mariappan</p>
                  <p>Head of Department · Centre of Professional Development (CPD)</p>
                  <p className="mt-1 font-mono-tech text-[#A1A09A]">
                    surajmariappan@raffles-university.edu.my · +6017 3558188
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
