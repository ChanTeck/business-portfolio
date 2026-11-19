import { MARQUEE_STACK } from '../data/portfolioData';

export function MarqueeStrip() {
  const repeatedItems = [...MARQUEE_STACK, ...MARQUEE_STACK];

  return (
    <div
      aria-label="Core technical stack marquee"
      className="overflow-hidden border-b border-white/8 bg-[#0E0E10] py-3.5"
    >
      <div className="animate-marquee flex items-center gap-8">
        {repeatedItems.map((tech, idx) => (
          <div key={`${tech}-${idx}`} className="flex items-center gap-8 whitespace-nowrap shrink-0">
            <span className="font-mono-tech text-xs font-medium tracking-widest text-[#A1A09A]">
              {tech}
            </span>
            <span aria-hidden="true" className="text-[10px] text-[#E11D48]">
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
