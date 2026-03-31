import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { deliveryStages } from "./servicesData";

export function DeliveryApproach(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="w-full py-[80px]"
      style={{ backgroundColor: "#0A1628" }}
      aria-labelledby="delivery-heading"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-[60px] scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          <span className="text-[#DF440E] font-['Space_Grotesk'] font-medium text-[13px] uppercase tracking-[4px]">
            — Project Delivery
          </span>
          <h2
            id="delivery-heading"
            className="mt-[12px] font-['Space_Grotesk'] font-bold text-[32px] md:text-[44px] leading-[1.2] tracking-[1px] uppercase text-white"
          >
            Our <span className="text-[#DF440E]">8-Stage</span> Delivery
            Approach
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
          className={`overflow-hidden scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
            {deliveryStages.map((stage) => (
              <div
                key={stage.number}
                className="relative p-[28px] bg-[#0A1628] hover:bg-[#0d1e32] transition-colors border border-white/10"
              >
                {/* 🔥 vertical orange glow */}
                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[80px] w-[2px] bg-gradient-to-b from-transparent via-[#DF440E] to-transparent opacity-80" />
                <div className="text-[#DF440E] text-[13px] mb-[12px] tracking-[2px]">
                  {stage.number}
                </div>

                <img
                  src={stage.icon}
                  alt=""
                  className="w-6 h-6 mb-[16px]"
                />

                <h3 className="text-white text-[11px] uppercase mb-[10px]">
                  {stage.title}
                </h3>

                <p className="text-white/50 text-[13px] leading-[22px]">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
