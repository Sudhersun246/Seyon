import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { deliveryStages } from "./servicesData";

export function DeliveryApproach(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="w-full py-[80px]"
      style={{ backgroundColor: "#0A1A3A" }}
      aria-labelledby="delivery-heading"
    >
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className={`text-center mb-[60px] scroll-fade-up ${isVisible ? "visible" : ""}`}>
          <span className="text-[#DF440E] font-['Space_Grotesk'] font-medium text-[13px] uppercase tracking-[4px]">
            — Project Delivery
          </span>
          <h2
            id="delivery-heading"
            className="mt-[12px] font-['Space_Grotesk'] font-bold text-[32px] md:text-[44px] leading-[1.2] tracking-[1px] uppercase text-white"
          >
            Our <span className="text-[#DF440E]">8-Stage</span> Delivery Approach
          </h2>
          <p
            className="mt-[16px] font-['Space_Grotesk'] font-normal text-[15px] leading-[26px] text-white/60 max-w-[700px] mx-auto"
            style={{ transitionDelay: "150ms" }}
          >
            A structured, end-to-end methodology ensuring every project is
            delivered on time, on quality, and with full documentation.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] border border-white/10 overflow-hidden rounded-[16px] stagger-children ${isVisible ? "visible" : ""}`}
        >
          {deliveryStages.map((stage) => (
            <div
              key={stage.number}
              className="p-[28px] border-b border-r border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="font-['Space_Grotesk'] font-medium text-[13px] text-[#DF440E] mb-[12px] tracking-[2px]">
                {stage.number}
              </div>
              <div className="text-[28px] mb-[12px]" aria-hidden="true">
                {stage.icon}
              </div>
              <h3 className="font-['Space_Grotesk'] font-semibold text-[11px] uppercase tracking-[1.5px] text-white mb-[10px]">
                {stage.title}
              </h3>
              <p className="font-['Space_Grotesk'] font-normal text-[13px] leading-[22px] text-white/50">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
