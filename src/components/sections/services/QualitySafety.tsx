import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const qualityPoints = [
  "Standardised installation methods and material approval processes",
  "In-process inspection test plans (ITP) at every critical stage",
  "Dedicated HSE officers on all active project sites",
  "Full testing and commissioning documentation before handover",
  "Third-party audit and certification support where required",
];

const qualityCards = [
  {
    icon: "🔒",
    title: "QUALITY ASSURANCE",
    desc: "Standardised methods, material controls, and ITP-driven inspections across every trade",
  },
  {
    icon: "🛡️",
    title: "SAFETY COMPLIANCE",
    desc: "Trained safety officers, method statements, and statutory HSE compliance on every project",
  },
  {
    icon: "⚠️",
    title: "RISK MANAGEMENT",
    desc: "Proactive risk registers, hazard controls, and incident prevention protocols embedded in delivery",
  },
];

function BulletPoint({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-[10px]">
      <span
        className="mt-[5px] flex-shrink-0 w-[14px] h-[14px] rounded-full border-[3px] border-[#DF440E] bg-white"
        aria-hidden="true"
      />
      <span className="font-['Space_Grotesk'] font-normal text-[16px] leading-[26px] text-[#2D2D2D]">
        {text}
      </span>
    </li>
  );
}

export function QualitySafety(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="w-full py-[80px] bg-[#FFF8F5]" aria-labelledby="quality-heading">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="bg-white rounded-[24px] p-[40px] md:p-[60px] border border-[#FFE4D6]">
          <div className={`scroll-fade-up ${isVisible ? "visible" : ""}`}>
            <div className="flex items-center gap-[8px] mb-[12px]">
              <span className="w-[9px] h-[9px] rounded-full bg-[#DF440E]" />
              <span className="font-['Space_Grotesk'] font-medium text-[13px] uppercase tracking-[4px] text-[#DF440E]">
                Quality & Safety
              </span>
            </div>
            <h2
              id="quality-heading"
              className="font-['Space_Grotesk'] font-bold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.5px] text-[#0A1A3A] mb-[20px]"
            >
              Built on Rigour Not Assumption
            </h2>
            <p className="font-['Space_Grotesk'] font-normal text-[16px] leading-[28px] text-[#4A5568] max-w-[860px] mb-[32px] text-justify">
              Quality and safety are not functions applied at the end — they are
              embedded throughout our delivery process through standardised
              installation methods, regular audits, and a trained workforce
              operating under clear safety protocols.
            </p>
            <ul className="space-y-[14px] mb-[40px]">
              {qualityPoints.map((point, i) => (
                <BulletPoint key={i} text={point} />
              ))}
            </ul>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-[20px] stagger-children ${isVisible ? "visible" : ""}`}
          >
            {qualityCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[16px] p-[28px]"
                style={{ backgroundColor: "#DF440E" }}
              >
                <div className="text-[28px] mb-[12px]" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="font-['Space_Grotesk'] font-bold text-[14px] uppercase tracking-[1.5px] text-white mb-[10px]">
                  {card.title}
                </h3>
                <p className="font-['Space_Grotesk'] font-normal text-[14px] leading-[22px] text-white/80">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
