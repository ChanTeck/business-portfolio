import { ArrowRight, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { useState } from 'react';
import {
  PROJECTS,
  ProjectItem,
  filterProjectsByCategory,
  getNextGalleryIndex,
} from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem, initialImageIndex?: number) => void;
}

const CATEGORIES: Array<{ value: 'All' | ProjectItem['category']; label: string }> = [
  { value: 'All', label: 'All' },
  { value: 'Full-Stack & Mobile', label: 'Full-Stack' },
  { value: 'Mobile App', label: 'Mobile' },
  { value: 'Embedded IoT', label: 'Embedded IoT' },
  { value: 'Desktop & OOP', label: 'C++ OOP' },
];

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectItem['category']>('All');
  const [aeroSlideIndex, setAeroSlideIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleProjects = filterProjectsByCategory(selectedCategory);
  const featuredAero = visibleProjects.find((p) => p.featured);
  const gridProjects = visibleProjects.filter((p) => !p.featured);

  const handleImageError = (src: string) => {
    setFailedImages((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <section id="work" className="border-b border-white/8 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header + Interactive Filter Bar */}
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-white/8 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono-tech text-xs text-[#E11D48]">03 · Selected Work</p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-[#F3F1EA] md:text-5xl">
              Projects
            </h2>
            <p className="mt-2 text-sm text-[#A1A09A]">
              Practical applications built across web, cross-platform mobile, embedded IoT, and C++.
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div
            role="tablist"
            aria-label="Filter projects by discipline"
            className="flex flex-wrap sm:flex-nowrap gap-1 bg-[#121215] p-1 border border-white/10 shrink-0"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category.value;
              return (
                <button
                  key={category.value}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`min-h-[38px] whitespace-nowrap shrink-0 px-3 py-1.5 font-mono-tech text-xs transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E11D48] ${
                    active
                      ? 'bg-[#E11D48] text-white'
                      : 'text-[#A1A09A] hover:text-[#F3F1EA]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Flagship Showcase: AeroDrive with 5 Real App Screenshots */}
        {featuredAero && (
          <article className="mb-12 border border-white/10 bg-[#121215]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left: Real App Screenshot Stage */}
              <div className="flex flex-col justify-between border-b border-white/8 bg-[#0D0D10] p-6 lg:col-span-6 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between gap-4 pb-4">
                  <span className="font-mono-tech text-xs text-[#E11D48]">
                    Featured · Real App Captures ({aeroSlideIndex + 1}/{featuredAero.gallery.length})
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectProject(featuredAero, aeroSlideIndex)}
                    aria-label="Expand AeroDrive screenshots"
                    className="inline-flex min-h-[36px] items-center gap-1.5 border border-white/12 px-3 py-1 font-mono-tech text-xs text-[#F3F1EA] transition-colors hover:border-[#E11D48] hover:text-[#E11D48]"
                  >
                    <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Expand</span>
                  </button>
                </div>

                {/* Centered Phone Frame Preview */}
                <div className="relative mx-auto flex w-full max-w-[300px] items-center justify-center py-2">
                  <button
                    type="button"
                    onClick={() =>
                      setAeroSlideIndex((prev) =>
                        getNextGalleryIndex(prev, featuredAero.gallery.length, 'prev')
                      )
                    }
                    aria-label="Previous AeroDrive screenshot"
                    className="absolute -left-2 z-10 flex h-10 w-10 items-center justify-center border border-white/15 bg-[#121215]/95 text-[#F3F1EA] transition-colors hover:border-[#E11D48] hover:text-[#E11D48] sm:-left-6"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>

                  <div className="flex justify-center overflow-hidden border border-white/15 bg-[#0A0A0B] p-1.5 shadow-2xl">
                    {!failedImages[featuredAero.gallery[aeroSlideIndex].src] ? (
                      <img
                        src={featuredAero.gallery[aeroSlideIndex].src}
                        alt={featuredAero.gallery[aeroSlideIndex].caption}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          handleImageError(featuredAero.gallery[aeroSlideIndex].src)
                        }
                        className="h-[440px] w-auto object-contain"
                      />
                    ) : (
                      <div className="flex h-[440px] w-[220px] items-center justify-center bg-[#18181C] p-6 text-center">
                        <span className="font-mono-tech text-xs text-[#A1A09A]">
                          {featuredAero.gallery[aeroSlideIndex].caption}
                        </span>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setAeroSlideIndex((prev) =>
                        getNextGalleryIndex(prev, featuredAero.gallery.length, 'next')
                      )
                    }
                    aria-label="Next AeroDrive screenshot"
                    className="absolute -right-2 z-10 flex h-10 w-10 items-center justify-center border border-white/15 bg-[#121215]/95 text-[#F3F1EA] transition-colors hover:border-[#E11D48] hover:text-[#E11D48] sm:-right-6"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Caption & Thumbnail Selector */}
                <div className="mt-4 space-y-3">
                  <p className="text-center font-mono-tech text-xs text-[#A1A09A]">
                    {featuredAero.gallery[aeroSlideIndex].caption}
                  </p>
                  <div className="flex justify-center gap-2">
                    {featuredAero.gallery.map((item, idx) => (
                      <button
                        key={item.src}
                        type="button"
                        onClick={() => setAeroSlideIndex(idx)}
                        aria-label={`View screenshot ${idx + 1}: ${item.caption}`}
                        className={`h-12 w-8 overflow-hidden border transition-opacity ${
                          idx === aeroSlideIndex
                            ? 'border-[#E11D48] opacity-100'
                            : 'border-white/12 opacity-45 hover:opacity-80'
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
                </div>
              </div>

              {/* Right: AeroDrive Engineering Details */}
              <div className="flex flex-col justify-between p-6 md:p-10 lg:col-span-6">
                <div>
                  <p className="font-mono-tech text-xs text-[#E11D48]">
                    Flagship Project · {featuredAero.category}
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#F3F1EA] md:text-5xl">
                    {featuredAero.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#F3F1EA]/90">
                    {featuredAero.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#A1A09A] md:text-base">
                    {featuredAero.summary}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-white/8 pt-6 text-sm text-[#A1A09A]">
                    {featuredAero.highlights.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#E11D48]" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-white/8 pt-6">
                  <p className="font-mono-tech text-xs text-[#71717A]">
                    {featuredAero.stack.join(' · ')}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectProject(featuredAero, aeroSlideIndex)}
                      className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 bg-[#E11D48] px-5 py-2.5 font-mono-tech text-xs font-medium text-white transition-colors hover:bg-[#BE123C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D48]"
                    >
                      <span>Inspect Gallery ({featuredAero.gallery.length} Screens)</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Numbered Project Grid */}
        {gridProjects.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {gridProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between border border-white/10 bg-[#121215] transition-colors duration-150 hover:border-white/25"
              >
                <div>
                  {/* 4:3 Project Visual Container */}
                  <div className="relative overflow-hidden border-b border-white/8 bg-[#0A0A0B]">
                    {!failedImages[project.coverImage] ? (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(project.coverImage)}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex aspect-[4/3] w-full items-center justify-center bg-[#18181C] p-6">
                        <span className="font-display text-2xl font-bold text-[#A1A09A]">
                          {project.title}
                        </span>
                      </div>
                    )}
                    <span className="absolute right-3 top-3 bg-[#0A0A0B]/90 px-2.5 py-1 font-mono-tech text-xs text-[#F3F1EA] tabular-nums">
                      {project.indexNumber}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="font-mono-tech text-xs text-[#E11D48]">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#F3F1EA]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#A1A09A]">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Unboxed Stack Separator & Detail Trigger */}
                <div className="border-t border-white/8 px-6 py-4">
                  <p className="font-mono-tech text-xs text-[#71717A]">
                    {project.stack.join(' · ')}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project, 0)}
                    className="mt-3 inline-flex items-center gap-1.5 font-mono-tech text-xs text-[#F3F1EA] transition-colors hover:text-[#E11D48] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E11D48]"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#E11D48]" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {visibleProjects.length === 0 && (
          <div className="border border-white/10 bg-[#121215] p-12 text-center">
            <p className="text-sm text-[#A1A09A]">No projects match this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
