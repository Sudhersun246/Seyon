import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import dot from "@/assets/images/services/icons/dot.svg";
import { qualityCards, qualityPoints } from "@/constants/content";

export function QualitySafety(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="w-full py-20" aria-labelledby="quality-heading">
      <div ref={ref} className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="rounded-[24px] p-[20px] bg-[#FFF6F2] md:p-[60px] border border-[#FFE4D6]">
          <div className={`scroll-fade-up ${isVisible ? "visible" : ""}`}>
            <div className="flex items-center gap-[8px] mb-[12px]">
              <span className="w-[9px] h-[9px] rounded-full bg-primary-600" />
              <span className="font-['Space_Grotesk'] font-medium text-[13px] uppercase tracking-[4px] text-[#DF440E]">
                Quality & Safety
              </span>
            </div>
            <h2
              id="quality-heading"
              className="font-['Space_Grotesk'] font-bold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.5px] text-[#160F72] mb-[20px]"
            >
              Built on Rigour Not Assumption
            </h2>
            <p className="font-['Space_Grotesk'] font-normal text-[16px] leading-[28px] text-[#4A5568]  mb-[10px] text-justify">
              Quality and safety are not functions applied at the end — they are
              embedded throughout our delivery process through standardised
              installation methods, regular audits, and a trained workforce
              operating under clear safety protocols.
            </p>
            <ul className="space-y-[1px] mb-8">
              {qualityPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <img
                    src={dot}
                    alt=""
                    aria-hidden="true"
                    className="mt-1.25 w-3.5 h-3.5 shrink-0"
                  />
                  <span className="font-['Space_Grotesk'] font-normal text-[16px] leading-6.5 text-[#2D2D2D]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-[20px] stagger-children ${isVisible ? "visible" : ""}`}
          >
            {qualityCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-5"
                style={{ backgroundColor: "#DF440E" }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 mb-3">
                  <img src={card.icon} alt="" className="w-6.5 h-6.5" />
                </div>
                <h3 className="font-['Space_Grotesk'] font-bold text-[14px] uppercase tracking-[1.5px] text-white">
                  {card.title}
                </h3>
                <p className="font-['Space_Grotesk'] font-normal text-[12px] text-white/80">
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
