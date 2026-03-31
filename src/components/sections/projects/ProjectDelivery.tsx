import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stages = [
  {
    number: "01.",
    title: "ENGINEERING REVIEW",
    description: "Detailed assessment of blueprints and structural feasibility.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="4" rx="1" stroke="#DF440E" strokeWidth="1.5" />
        <rect x="4" y="12" width="14" height="4" rx="1" stroke="#DF440E" strokeWidth="1.5" />
        <rect x="4" y="20" width="9" height="4" rx="1" stroke="#DF440E" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "02.",
    title: "EXECUTION PHASE",
    description: "Core civil works and core structural implementation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 22V10l10-6 10 6v12" stroke="#DF440E" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="11" y="15" width="6" height="7" stroke="#DF440E" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "03.",
    title: "SYSTEMS INTEGRATION",
    description: "PHE, electrical, and mechanical infrastructure installation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="#DF440E" strokeWidth="1.5" />
        <path d="M14 4v6M14 18v6M4 14h6M18 14h6" stroke="#DF440E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04.",
    title: "PROJECT HANDOVER",
    description: "Final quality audits and client asset transfer.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="#DF440E" strokeWidth="1.5" />
        <path d="M9 14l3.5 3.5 6-7" stroke="#DF440E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ProjectDelivery(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="w-full py-[80px] bg-white" aria-labelledby="project-delivery-heading">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Label + heading */}
        <div className={`text-center mb-[60px] scroll-fade-up ${isVisible ? "visible" : ""}`}>
          <div className="flex items-center justify-center gap-[8px] mb-[12px]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#DF440E]" aria-hidden="true" />
            <span className="font-['Space_Grotesk'] font-medium text-[12px] uppercase tracking-[4px] text-[#DF440E]">
              Delivery Approach
            </span>
          </div>
          <h2
            id="project-delivery-heading"
            className="font-['Space_Grotesk'] font-bold text-[28px] md:text-[38px] leading-[1.2] tracking-[-0.5px] text-[#0A1A3A]"
          >
            Structured Delivery Process
          </h2>
        </div>

        {/* Stages */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] relative stagger-children ${isVisible ? "visible" : ""}`}
        >
          {stages.map((stage, index) => (
            <div key={stage.number} className="relative flex flex-col items-center text-center px-[20px]">
              {/* Connector line between cards (desktop) */}
              {index < stages.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[40px] left-[calc(50%+36px)] right-0 h-[1px] bg-[#E5E7EB]"
                  aria-hidden="true"
                />
              )}

              {/* Icon circle */}
              <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-[20px] relative z-10"
                style={{ backgroundColor: "#FFF0EB" }}
              >
                {stage.icon}
              </div>

              <span className="font-['Space_Grotesk'] font-medium text-[12px] uppercase tracking-[2px] text-[#6B7280] mb-[8px]">
                {stage.number} {stage.title}
              </span>
              <p className="font-['Space_Grotesk'] font-normal text-[13px] leading-[22px] text-[#4A5568]">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
