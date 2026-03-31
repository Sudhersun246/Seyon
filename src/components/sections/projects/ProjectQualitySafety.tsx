import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  {
    title: "ISO CERTIFIED QUALITY",
    description:
      "Strict adherence to international construction standards and quality benchmarks.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="#DF440E" strokeWidth="1.5" />
        <path d="M9 14l3.5 3.5 6-7" stroke="#DF440E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "SAFETY FIRST PROTOCOL",
    description:
      "Zero-incident goal driven by rigorous site safety management systems.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 3L5 7v8c0 5 3.8 9.5 9 11 5.2-1.5 9-6 9-11V7L14 3z"
          stroke="#DF440E"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M10 14l2.5 2.5 5-5" stroke="#DF440E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "SUSTAINABLE BUILDING",
    description:
      "Eco-conscious engineering to minimize carbon footprint across project lifecycles.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M6 22c0-6 4-10 8-10s8 4 8-4c0 0-4 0-8 4-2-4-4-6-8-6 0 8 3 13 8 16"
          stroke="#DF440E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function ProjectQualitySafety(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="w-full py-[64px]"
      style={{ backgroundColor: "#0A1A3A" }}
      aria-labelledby="pqs-heading"
    >
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto px-4 md:px-8"
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-[48px] md:gap-[32px] stagger-children ${isVisible ? "visible" : ""}`}
        >
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-[20px]">
              <div className="flex-shrink-0 w-[44px] h-[44px] rounded-[10px] flex items-center justify-center bg-white/10">
                {item.icon}
              </div>
              <div>
                <h3
                  id={item.title === "ISO CERTIFIED QUALITY" ? "pqs-heading" : undefined}
                  className="font-['Space_Grotesk'] font-bold text-[13px] uppercase tracking-[1.5px] text-white mb-[8px]"
                >
                  {item.title}
                </h3>
                <p className="font-['Space_Grotesk'] font-normal text-[14px] leading-[22px] text-white/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
