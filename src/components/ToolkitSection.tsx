import { useState } from 'react';
import { SKILL_GROUPS, TECH_MATRIX } from '../data/portfolioData';

export function ToolkitSection() {
  const [selectedTechName, setSelectedTechName] = useState<string>(TECH_MATRIX[0].name);

  const activeTech =
    TECH_MATRIX.find((t) => t.name === selectedTechName) ?? TECH_MATRIX[0];

  return (
    <section id="skills" className="border-b border-white/8 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/8 pb-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono-tech text-xs text-[#E11D48]">02 · Toolkit</p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-[#F3F1EA] md:text-5xl">
              Technology Stack
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A1A09A]">
            Languages, frameworks, databases, and embedded tools used across academic and production projects.
          </p>
        </div>

        {/* 2x2 Discipline Grid (Zero-Pill Metadata Discipline) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.id}
              className="flex flex-col justify-between border border-white/10 bg-[#121215] p-6 md:p-8"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-4">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-[#F3F1EA]">
                    {group.title}
                  </h3>
                  <span className="font-mono-tech text-xs text-[#71717A] tabular-nums">
                    0{idx + 1}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#A1A09A]">
                  {group.description}
                </p>
              </div>

              <div className="mt-6 border-t border-white/8 pt-4">
                <p className="font-mono-tech text-xs leading-relaxed text-[#F3F1EA]">
                  {group.items.join(' · ')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Technology-to-Project Explorer */}
        <div className="mt-16 border border-white/10 bg-[#121215] p-6 md:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h3 className="font-display text-3xl font-bold tracking-tight text-[#F3F1EA]">
                Technologies I Work With
              </h3>
              <p className="mt-2 text-sm text-[#A1A09A]">
                Select or hover any technology to inspect where it has been applied.
              </p>

              <div
                role="listbox"
                aria-label="Technologies I work with"
                className="mt-6 flex flex-wrap gap-2"
              >
                {TECH_MATRIX.map((tech) => {
                  const isActive = tech.name === activeTech.name;
                  return (
                    <button
                      key={tech.name}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onMouseEnter={() => setSelectedTechName(tech.name)}
                      onClick={() => setSelectedTechName(tech.name)}
                      className={`min-h-[40px] whitespace-nowrap shrink-0 border px-3.5 py-2 font-mono-tech text-xs transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E11D48] ${
                        isActive
                          ? 'border-[#E11D48] bg-[#E11D48] text-white'
                          : 'border-white/12 bg-[#0A0A0B] text-[#A1A09A] hover:border-white/30 hover:text-[#F3F1EA]'
                      }`}
                    >
                      {tech.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Tech Detail Panel */}
            <div
              aria-live="polite"
              className="flex flex-col justify-between border border-white/10 bg-[#0A0A0B] p-6 lg:col-span-5"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-white/8 pb-3">
                  <span className="font-mono-tech text-xs text-[#E11D48]">
                    {activeTech.category}
                  </span>
                  <span className="font-mono-tech text-xs text-[#71717A]">
                    Applied In
                  </span>
                </div>

                <h4 className="mt-4 font-display text-3xl font-bold text-[#F3F1EA]">
                  {activeTech.name}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#A1A09A]">
                  {activeTech.note}
                </p>
              </div>

              <div className="mt-6 border-t border-white/8 pt-4">
                <p className="font-mono-tech text-[11px] text-[#71717A]">
                  Projects
                </p>
                <ul className="mt-2 space-y-1.5">
                  {activeTech.projects.map((projectName) => (
                    <li
                      key={projectName}
                      className="font-mono-tech text-xs text-[#F3F1EA]"
                    >
                      → {projectName}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
