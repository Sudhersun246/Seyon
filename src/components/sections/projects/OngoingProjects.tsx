import project1 from "@/assets/images/projects/project-1.jpg";
import project2 from "@/assets/images/projects/project-2.jpg";
import project3 from "@/assets/images/projects/project-3.jpg";
import project4 from "@/assets/images/projects/project-4.jpg";
import project5 from "@/assets/images/projects/project-5.jpg";
import project6 from "@/assets/images/projects/project-6.jpg";
import apexTower from "@/assets/images/projects/apex-tower.jpg";
import harborPoint from "@/assets/images/projects/harbor-point.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ongoingProjects = [
  {
    id: "op-1",
    image: project5,
    title: "Skyline Tower",
    description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-2",
    image: project6,
    title: "Skyline Tower",
    description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-3",
    image: apexTower,
    title: "Skyline Tower",
    description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-4",
    image: harborPoint,
    title: "Skyline Tower",
    description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-5",
    image: project1,
    title: "Skyline Tower",
    description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-6",
    image: project2,
    title: "Skyline Tower",
    description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-7",
    image: project3,
    title: "Skyline Tower",
    description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-8",
    image: project4,
    title: "Skyline Tower",
    description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
];

// SVG clip path for the notched project card shape
const projectCardClipPath =
  "M366 0C383.673 0 398 14.3269 398 32L398 477C398 483.627 392.627 489 386 489L348 489C341.373 489 336 494.373 336 501L336 539C336 545.627 330.627 551 324 551L32 551C14.3269 551 0 536.673 0 519L0 32C0 14.3269 14.3269 0 32 0L366 0Z";

export function OngoingProjects(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="ongoing-projects"
      className="w-full py-[60px] px-4 md:px-8"
      aria-labelledby="ongoing-heading"
    >
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto rounded-[24px] px-[40px] py-[48px]"
        style={{ backgroundColor: "#0F0F1A" }}
      >
        {/* Header row */}
        <div className={`flex items-start justify-between mb-[40px] scroll-fade-up ${isVisible ? "visible" : ""}`}>
          <div>
            <div className="flex items-center gap-[8px] mb-[12px]">
              <span className="w-[9px] h-[9px] rounded-full bg-[#DF440E]" aria-hidden="true" />
              <span className="font-['Space_Grotesk'] font-medium text-[12px] uppercase tracking-[4px] text-[#DF440E]">
                Ongoing Projects
              </span>
            </div>
            <h2
              id="ongoing-heading"
              className="font-['Space_Grotesk'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-white"
            >
              Progressing With Purpose.
            </h2>
          </div>

          <a
            href="#"
            className="flex-shrink-0 inline-flex items-center gap-[8px] bg-[#DF440E] rounded-[10px] px-[20px] py-[10px] mt-[4px]"
          >
            <span className="font-['Space_Grotesk'] font-medium text-[14px] text-white">
              View More
            </span>
            <div className="w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                className="transform -rotate-45"
                aria-hidden="true"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#DF440E"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </a>
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] stagger-children ${isVisible ? "visible" : ""}`}
        >
          {ongoingProjects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden"
              style={{ aspectRatio: "398/551" }}
            >
              {/* Dark notched shape via SVG */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 398 551"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d={projectCardClipPath} fill="#242424" />
              </svg>

              {/* Content */}
              <div
                className="absolute inset-0 flex flex-col"
                style={{ padding: "5.5%", paddingBottom: "0" }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden rounded-[10px]"
                  style={{ height: "64%" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text */}
                <div
                  className="p-[10px] pt-[16px] flex flex-col flex-1"
                  style={{ paddingBottom: "14%" }}
                >
                  <h3 className="font-['Space_Grotesk'] font-bold text-[20px] leading-[26px] tracking-[-0.32px] text-white mb-[6px]">
                    {project.title}
                  </h3>
                  <p className="font-['Space_Grotesk'] font-medium text-[13px] leading-[20px] tracking-[-0.2px] text-[#696969]">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Arrow button at notch */}
              <div
                className="absolute flex items-center justify-center bg-[#DF440E] cursor-pointer hover:bg-[#c53a0c] transition-colors"
                style={{
                  width: "46px",
                  height: "46px",
                  right: "0px",
                  bottom: "0px",
                  borderRadius: "10px",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transform -rotate-45"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
