import baseTopImage from "@/assets/images/projects/baseTop.png";
import { featureProjects } from "@/constants/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ProjectsOverview(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="w-full py-[80px] bg-white"
      aria-labelledby="projects-overview-heading"
    >
      <div
        ref={ref}
        className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-[60px]"
      >
        {/* Left: Single image */}
        <div
          className={`flex-shrink-0 w-full lg:w-[50%] scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          <img
            src={baseTopImage}
            alt="Seyon Constrotech project"
            className="w-full h-auto rounded-[20px] object-cover"
          />
        </div>

        {/* Right: Text + feature grid */}
        <div
          className={`flex-1 scroll-fade-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          <h2
            id="projects-overview-heading"
            className="font-['Space_Grotesk'] font-bold text-[22px] md:text-[30px] leading-[1.25] tracking-[-0.5px] text-[#160F72] mb-[20px]"
          >
            Delivering Projects That Stand the Test of Time
          </h2>
          <p className="font-['Space_Grotesk'] font-normal text-[15px] leading-[26px] text-[#4A5568] mb-[32px]">
            Seyon Constrotech delivers engineering-driven construction solutions
            across industrial, commercial, residential, and institutional
            sectors. Every project we undertake reflects our commitment to
            precision, quality, and disciplined execution.
          </p>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-[16px] stagger-children ${isVisible ? "visible" : ""}`}
          >
            {featureProjects.map((f) => (
              <div
                key={f.title}
                className="rounded-[12px] p-[20px] border border-[#E8E8E8] bg-[#F4F4F4]"
              >
                <h3 className="font-['Space_Grotesk'] font-bold text-[16px] text-[#0A1A3A] mb-[6px]">
                  {f.title}
                </h3>
                <p className="font-['Space_Grotesk'] font-normal text-[11px] leading-[20px] text-[#6B7280]">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
