import project1 from "@/assets/images/projects/project-1.jpg";
import project2 from "@/assets/images/projects/project-2.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    title: "Multi-Sector Projects",
    desc: "Industrial, Commercial, Residential & Institutional Developments",
  },
  {
    title: "Integrated Engineering",
    desc: "Civil | MEP | Mechanical | Structural",
  },
  {
    title: "Quality Execution",
    desc: "Structured planning, supervision, and safety compliance",
  },
  {
    title: "Trusted Delivery",
    desc: "Reliable outcomes through disciplined project management",
  },
];

export function ProjectsOverview(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="w-full py-[80px] bg-white" aria-labelledby="projects-overview-heading">
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-[60px]"
      >
        {/* Left: Stacked images */}
        <div
          className={`relative flex-shrink-0 w-full max-w-[540px] lg:w-1/2 h-[420px] scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          {/* Bottom / background image */}
          <div className="absolute left-0 bottom-0 w-[72%] h-[88%] rounded-[20px] overflow-hidden shadow-lg">
            <img
              src={project1}
              alt="City skyline project"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Top / foreground image */}
          <div className="absolute right-0 top-0 w-[56%] h-[68%] rounded-[20px] overflow-hidden shadow-xl border-4 border-white">
            <img
              src={project2}
              alt="Modern building project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text + feature grid */}
        <div className={`flex-1 scroll-fade-up ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
          <h2
            id="projects-overview-heading"
            className="font-['Space_Grotesk'] font-bold text-[28px] md:text-[36px] leading-[1.25] tracking-[-0.5px] text-[#0A1A3A] mb-[20px]"
          >
            Delivering Projects That Stand the Test of Time
          </h2>
          <p className="font-['Space_Grotesk'] font-normal text-[15px] leading-[26px] text-[#4A5568] mb-[32px]">
            Seyon Constrotech delivers engineering-driven construction solutions
            across industrial, commercial, residential, and institutional
            sectors. Every project we undertake reflects our commitment to
            precision, quality, and disciplined execution.
          </p>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-[16px] stagger-children ${isVisible ? "visible" : ""}`}>
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-[12px] p-[20px] border border-[#E8E8E8] bg-[#F9F9F9]"
              >
                <h3 className="font-['Space_Grotesk'] font-bold text-[14px] text-[#0A1A3A] mb-[6px]">
                  {f.title}
                </h3>
                <p className="font-['Space_Grotesk'] font-normal text-[13px] leading-[20px] text-[#6B7280]">
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
