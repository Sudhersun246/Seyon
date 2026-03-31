import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { whyStandOutItems } from "./servicesData";

export function WhyServicesStandOut(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="w-full py-[80px] bg-white" aria-labelledby="why-heading">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className={`text-center mb-[60px] scroll-fade-up ${isVisible ? "visible" : ""}`}>
          <span className="text-[#DF440E] font-['Space_Grotesk'] font-medium text-[13px] uppercase tracking-[4px]">
            — Our Advantage
          </span>
          <h2
            id="why-heading"
            className="mt-[12px] font-['Space_Grotesk'] font-bold text-[32px] md:text-[44px] uppercase leading-[1.2] tracking-[1px] text-[#0A1A3A]"
          >
            Why Our <span className="text-[#DF440E]">Services</span>
            <br />
            Stand Out
          </h2>
          <p className="mt-[16px] font-['Space_Grotesk'] font-normal text-[15px] leading-[26px] text-[#4A5568] max-w-[620px] mx-auto">
            The engineering capabilities, delivery discipline, and accountability
            that set Seyon Constrotech apart
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] stagger-children ${isVisible ? "visible" : ""}`}
        >
          {whyStandOutItems.map((item, i) => (
            <div
              key={i}
              className="rounded-[16px] p-[32px] border border-[#E2E8F0] hover:border-[#DF440E]/40 hover:shadow-lg hover:-translate-y-[4px] transition-all duration-300"
            >
              <div className="w-[48px] h-[48px] rounded-[12px] bg-[#DF440E]/10 flex items-center justify-center mb-[20px]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#DF440E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-['Space_Grotesk'] font-bold text-[18px] leading-[26px] text-[#0A1A3A] mb-[10px]">
                {item.title}
              </h3>
              <p className="font-['Space_Grotesk'] font-normal text-[14px] leading-[24px] text-[#4A5568]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
