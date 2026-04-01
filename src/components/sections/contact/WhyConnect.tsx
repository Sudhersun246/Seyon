import { whyItems } from "@/constants/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function WhyConnect(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="w-full py-[80px] px-4 md:px-[60px] lg:px-[100px]" style={{ backgroundColor: "#111111" }}>
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <h2 className={`font-['Space_Grotesk'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-white text-center mb-[48px] scroll-fade-up ${isVisible ? "visible" : ""}`}>
          Why Connect With Us
        </h2>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 stagger-children ${isVisible ? "visible" : ""}`}>
          {whyItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-[16px] rounded-[16px] p-[24px]"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div
                className="w-14 h-14 rounded-[12px] flex items-center justify-center"
                style={{ backgroundColor: "rgba(223,68,14,0.15)" }}
              >
                <img src={item.icon} alt={item.title} className="p-3"/>
              </div>
              <h3 className="font-['Space_Grotesk'] font-bold text-[16px] leading-[24px] text-white">
                {item.title}
              </h3>
              <p className="font-['Space_Grotesk'] font-normal text-[13px] leading-[22px] text-white/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
