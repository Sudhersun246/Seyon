import { items } from "@/constants/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ProjectQualitySafety(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="w-full py-[64px] mb-25"
      style={{ backgroundColor: "#111111" }}
      aria-labelledby="pqs-heading"
    >
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-[48px] md:gap-[32px] stagger-children ${isVisible ? "visible" : ""}`}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2.5 rounded-[14px] p-6"
            >
              <div className="flex items-start gap-2.5">
                <img src={item.icon} alt={item.title} className="w-7 h-7 object-contain shrink-0" />
                <div className="flex flex-col gap-2">
                  <h3
                    id={item.title === "ISO CERTIFIED QUALITY" ? "pqs-heading" : undefined}
                    className="font-['Space_Grotesk'] font-bold text-[13px] uppercase tracking-[1.5px] text-white"
                  >
                    {item.title}
                  </h3>
                  <p className="font-['Space_Grotesk'] font-normal text-[14px] leading-5.5 text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
