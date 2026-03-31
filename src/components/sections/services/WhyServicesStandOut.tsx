import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { whyStandOutItems } from "./servicesData";

export function WhyServicesStandOut(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="w-full py-[80px] bg-white" aria-labelledby="why-heading">
      <div ref={ref} className="max-w-[1600px] mx-auto px-4 md:px-8">
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
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] stagger-children ${isVisible ? "visible" : ""}`}
        >
          {whyStandOutItems.map((item, i) => (
            <div
              key={i}
              className="group rounded-[16px] p-[28px] border border-[#E2E8F0] border-t-[3px] border-t-[#E2E8F0] hover:border-t-[#DF440E] hover:bg-[#FFF8F5] hover:shadow-md transition-all duration-300"
            >
              <div className="font-['Space_Grotesk'] font-bold text-[36px] leading-none text-[#CBD5E0] group-hover:text-[#DF440E] transition-colors duration-300 mb-[14px]">
                {item.number}
              </div>
              <img
                src={item.icon}
                alt=""
                aria-hidden="true"
                className="w-6 h-6 mb-[16px]"
              />
              <h3 className="font-['Space_Grotesk'] font-bold text-[13px] uppercase tracking-[1.5px] text-[#0A1A3A] mb-[10px]">
                {item.title}
              </h3>
              <p className="font-['Space_Grotesk'] font-normal text-[12px] leading-[22px] text-[#4A5568]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
