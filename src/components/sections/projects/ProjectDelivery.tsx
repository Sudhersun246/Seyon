import { deliveryStages } from "@/constants/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ProjectDelivery(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="w-full py-[80px] bg-white" aria-labelledby="project-delivery-heading">
      <div ref={ref} className="max-w-[1600px] mx-auto px-4 md:px-8">
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
          className={`relative stagger-children ${isVisible ? "visible" : ""}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px">
            {deliveryStages.map((stage, index) => (
              <div key={stage.number} className="relative flex flex-col items-center text-center px-5">
                {/* Connector line from this circle's right edge to next circle's left edge */}
                {index < deliveryStages.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-9 h-px z-0"
                    style={{
                      left: "calc(50% + 36px)",
                      right: "calc(-50% + 36px)",
                      background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 122, 80, 0.2) 0%, rgba(153, 73, 48, 0.05) 100%)",
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Icon circle */}
                <div
                  className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-5 relative z-10"
                  style={{ backgroundColor: "#FFF0EB" }}
                >
                  <img src={stage.icon} alt={stage.title} className="w-7 h-7 object-contain" />
                </div>

                <span className="font-['Space_Grotesk'] font-bold text-[12px] uppercase tracking-[2px] text-[#0A1A3A] mb-2">
                  {stage.number} {stage.title}
                </span>
                <p className="font-['Space_Grotesk'] font-normal text-[13px] leading-5.5 text-[#4A5568]">
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
