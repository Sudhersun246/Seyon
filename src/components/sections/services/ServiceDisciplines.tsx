import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { disciplineCards } from "./servicesData";

function DisciplineCard({ icon, title, desc, anchor }: { icon: string; title: string; desc: string; anchor: string }) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [dims, setDims] = React.useState({ width: 300, height: 220 });
  const [hovered, setHovered] = React.useState(false);

  React.useEffect(() => {
    const update = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setDims({ width: rect.width, height: rect.height });
        }
      }
    };
    update();
    const observer = new ResizeObserver(update);
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    document.getElementById(`service-${anchor}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const W = dims.width;
  const H = dims.height;
  const notchW = 52;
  const notchH = 52;
  const outerR = 16;
  const outerNotchR = 12;
  const innerNotchR = 16;

  const clipPath = `path('M ${outerR},0 L ${W - outerR},0 Q ${W},0 ${W},${outerR} L ${W},${H - notchH - outerNotchR} Q ${W},${H - notchH} ${W - outerNotchR},${H - notchH} L ${W - notchW + innerNotchR},${H - notchH} Q ${W - notchW},${H - notchH} ${W - notchW},${H - notchH + innerNotchR} L ${W - notchW},${H - outerR} Q ${W - notchW},${H} ${W - notchW - outerR},${H} L ${outerR},${H} Q 0,${H} 0,${H - outerR} L 0,${outerR} Q 0,0 ${outerR},0 Z')`;

  const dropShadow = hovered
    ? "drop-shadow(0 0 1.5px rgba(223,68,14,0.9))"
    : "drop-shadow(0 0 1px rgba(255,255,255,0.15))";

  return (
    <div
      className="relative group cursor-pointer transition-all duration-300"
      style={{ filter: dropShadow }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <div
        ref={cardRef}
        className="relative p-7 pb-20 bg-[#242424] group-hover:bg-white/10 transition-all duration-300"
        style={{ clipPath, WebkitClipPath: clipPath }}
      >
        <div className="w-[56px] h-[56px] rounded-[12px] bg-[#DF440E]/20 flex items-center justify-center mb-[20px]">
          <img src={icon} alt={title} className="w-7 h-7 object-contain" />
        </div>
        <h3 className="font-['Space_Grotesk'] font-bold text-[18px] leading-[26px] text-white mb-[10px]">
          {title}
        </h3>
        <p className="font-['Space_Grotesk'] font-normal text-[14px] leading-[24px] text-white/60">
          {desc}
        </p>
      </div>
      <div className="absolute bottom-[4px] right-[4px] w-[38px] h-[38px] rounded-[8px] bg-[#DF440E] flex items-center justify-center group-hover:bg-[#c63a0c] transition-colors">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function ServiceDisciplines(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();
  const topCards = disciplineCards.slice(0, 2);
  const bottomCards = disciplineCards.slice(2, 4);

  return (
    <section
      id="service-disciplines"
      className="w-full py-[80px]"
      style={{ backgroundColor: "#111111" }}
      aria-labelledby="disciplines-heading"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-[50px] gap-[20px]">
          <div className={`scroll-fade-left ${isVisible ? "visible" : ""}`}>
            <div className="flex items-center gap-[8px] mb-[12px]">
              <span className="w-[9px] h-[9px] rounded-full bg-[#DF440E]" />
              <span className="font-['Space_Grotesk'] font-medium text-[13px] uppercase tracking-[4px] text-[#DF440E]">
                What We Do
              </span>
            </div>
            <h2
              id="disciplines-heading"
              className="font-['Space_Grotesk'] font-semibold text-[36px] md:text-[44px] leading-[1.15] tracking-[-0.5px] text-white"
            >
              Core Service Disciplines
            </h2>
          </div>
          <p
            className={`font-['Space_Grotesk'] font-normal text-[15px] leading-[26px] text-white/60 max-w-[380px] lg:text-right scroll-fade-right ${isVisible ? "visible" : ""}`}
          >
            Five integrated engineering disciplines each backed by qualified
            teams and precision-driven delivery.
          </p>
        </div>

        <div className={`stagger-children ${isVisible ? "visible" : ""}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[20px] mb-[20px]">
            {topCards.map((s) => (
              <DisciplineCard key={s.title} {...s} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[20px] mx-auto">
            {bottomCards.map((s) => (
              <DisciplineCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
