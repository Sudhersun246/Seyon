import location from "@/assets/images/projects/icons/map.png";
import ruler from "@/assets/images/projects/icons/ruler.png";
import { completedProjects } from "@/constants/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";


export function CompletedProjects(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="completed-projects"
      className="w-full py-[80px] bg-white"
      aria-labelledby="completed-heading"
    >
      <div ref={ref} className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Section label */}
        <div
          className={`flex items-center gap-[8px] mb-[16px] scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          <span
            className="w-[9px] h-[9px] rounded-full bg-[#DF440E]"
            aria-hidden="true"
          />
          <span className="font-['Space_Grotesk'] font-medium text-[12px] uppercase tracking-[4px] text-[#DF440E]">
            Completed Projects
          </span>
        </div>

        <h2
          id="completed-heading"
          className={`font-['Space_Grotesk'] font-bold text-[36px] md:text-[44px] leading-[1.2] tracking-[-0.5px] text-[#0A1A3A] mb-[48px] scroll-fade-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          Built with precision
        </h2>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 stagger-children ${isVisible ? "visible" : ""}`}
        >
          {completedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-[#E8E8E8] shadow-sm hover:shadow-md transition-shadow flex flex-col"
              style={{ padding: "22px", gap: "10px", opacity: 1 }}
            >
              {/* Image */}
              <div
                className="w-full overflow-hidden rounded-2xl"
                style={{ height: "300px" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col" style={{ gap: "10px" }}>
                <h3 className="font-['Space_Grotesk'] font-bold text-[20px] leading-6.5 text-[#0A1A3A]">
                  {project.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center gap-1">
                    <img src={location} />
                    <span className="font-['Space_Grotesk'] font-normal text-[13px] text-[#6B7280]">
                      {project.location}
                    </span>
                  </div>
                  <span className="text-[#D1D5DB]">•</span>
                  <div className="flex items-center justify-center gap-1">
                    <img src={ruler} />
                    <span className="font-['Space_Grotesk'] font-normal text-[13px] text-[#6B7280]">
                      {project.area}
                    </span>
                  </div>
                </div>

                {/* Scope tags */}
                <div className="flex flex-col" style={{ gap: "8px" }}>
                  <span className="font-['Space_Grotesk'] font-medium text-[10px] uppercase tracking-[1.5px] text-[#9CA3AF]">
                    Scope of Work
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full font-['Space_Grotesk'] font-normal text-[11px] text-[#3730A3]"
                        style={{ backgroundColor: "#EFF0FF" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
