import project1 from "@/assets/images/projects/project-1.jpg";
import project2 from "@/assets/images/projects/project-2.jpg";
import project3 from "@/assets/images/projects/project-3.jpg";
import project4 from "@/assets/images/projects/project-4.jpg";
import project5 from "@/assets/images/projects/project-5.jpg";
import project6 from "@/assets/images/projects/project-6.jpg";
import apexTower from "@/assets/images/projects/apex-tower.jpg";
import harborPoint from "@/assets/images/projects/harbor-point.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const completedProjects = [
  {
    id: "cp-1",
    image: project1,
    title: "Skyline Tower",
    location: "Chennai",
    area: "25,000 Sqft",
    tags: ["Civil", "PHE", "Fire Protection Systems", "Electrical", "HVAC"],
  },
  {
    id: "cp-2",
    image: project2,
    title: "Oceanview Plaza",
    location: "Chennai",
    area: "25,000 Sqft",
    tags: ["Civil", "PHE", "Fire Protection Systems", "Electrical", "HVAC"],
  },
  {
    id: "cp-3",
    image: project3,
    title: "Vertex Center",
    location: "Chennai",
    area: "25,000 Sqft",
    tags: ["Civil", "PHE", "Fire Protection Systems", "Electrical", "HVAC"],
  },
  {
    id: "cp-4",
    image: project4,
    title: "Summit Plaza",
    location: "Chennai",
    area: "25,000 Sqft",
    tags: ["Civil", "PHE", "Fire Protection Systems", "Electrical", "HVAC"],
  },
  {
    id: "cp-5",
    image: project5,
    title: "Apex Tower",
    location: "Chennai",
    area: "30,000 Sqft",
    tags: ["Civil", "Structural", "Electrical", "HVAC"],
  },
  {
    id: "cp-6",
    image: project6,
    title: "Harbor Point",
    location: "Chennai",
    area: "18,000 Sqft",
    tags: ["Civil", "MEP", "Fire Protection Systems"],
  },
  {
    id: "cp-7",
    image: apexTower,
    title: "Meridian Complex",
    location: "Chennai",
    area: "22,000 Sqft",
    tags: ["Structural", "PHE", "Electrical", "HVAC"],
  },
  {
    id: "cp-8",
    image: harborPoint,
    title: "Pinnacle Business Park",
    location: "Chennai",
    area: "35,000 Sqft",
    tags: ["Civil", "MEP", "Fire Protection Systems", "Electrical"],
  },
];

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
        fill="#6B7280"
      />
    </svg>
  );
}

function AreaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z"
        stroke="#6B7280"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function CompletedProjects(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="completed-projects"
      className="w-full py-[80px] bg-white"
      aria-labelledby="completed-heading"
    >
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className={`flex items-center gap-[8px] mb-[16px] scroll-fade-up ${isVisible ? "visible" : ""}`}>
          <span className="w-[9px] h-[9px] rounded-full bg-[#DF440E]" aria-hidden="true" />
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
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] stagger-children ${isVisible ? "visible" : ""}`}
        >
          {completedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-[16px] border border-[#E8E8E8] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="w-full h-[180px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-[16px]">
                <h3 className="font-['Space_Grotesk'] font-bold text-[16px] leading-[22px] text-[#0A1A3A] mb-[8px]">
                  {project.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-[12px] mb-[12px]">
                  <div className="flex items-center gap-[4px]">
                    <LocationIcon />
                    <span className="font-['Space_Grotesk'] font-normal text-[12px] text-[#6B7280]">
                      {project.location}
                    </span>
                  </div>
                  <span className="text-[#D1D5DB]">•</span>
                  <div className="flex items-center gap-[4px]">
                    <AreaIcon />
                    <span className="font-['Space_Grotesk'] font-normal text-[12px] text-[#6B7280]">
                      {project.area}
                    </span>
                  </div>
                </div>

                {/* Scope tags */}
                <div className="mb-[4px]">
                  <span className="font-['Space_Grotesk'] font-medium text-[10px] uppercase tracking-[1.5px] text-[#9CA3AF]">
                    Scope of Work
                  </span>
                </div>
                <div className="flex flex-wrap gap-[6px]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-[8px] py-[3px] rounded-full border border-[#E5E7EB] font-['Space_Grotesk'] font-normal text-[11px] text-[#374151]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
