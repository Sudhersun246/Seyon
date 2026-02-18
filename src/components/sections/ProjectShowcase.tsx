import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/images/projects/project-1.jpg";
import project2 from "@/assets/images/projects/project-2.jpg";
import project3 from "@/assets/images/projects/project-3.jpg";
import project4 from "@/assets/images/projects/project-4.jpg";

const projects = [
  {
    id: "project-1",
    image: project1,
    title: "Skyline Tower",
    description:
      "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "project-2",
    image: project2,
    title: "Oceanview Plaza",
    description:
      "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "project-3",
    image: project3,
    title: "Vertex Center",
    description:
      "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "project-4",
    image: project4,
    title: "Summit Plaza",
    description:
      "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
];

// SVG clip path for the notched project card shape
const projectCardClipPath =
  "M366 0C383.673 0 398 14.3269 398 32L398 477C398 483.627 392.627 489 386 489L348 489C341.373 489 336 494.373 336 501L336 539C336 545.627 330.627 551 324 551L32 551C14.3269 551 0 536.673 0 519L0 32C0 14.3269 14.3269 0 32 0L366 0Z";

export function ProjectShowcase(): React.ReactElement {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section
      className="relative w-full pt-[0px] pb-[100px] -mt-[160px] z-10"
      aria-labelledby="projects-heading"
    >
      {/* Decorative ellipse glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "623px",
          height: "623px",
          right: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(223, 68, 14, 0.20)",
          borderRadius: "50%",
          filter: "blur(300px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "623px",
          height: "623px",
          left: "-400px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(223, 68, 14, 0.20)",
          borderRadius: "50%",
          filter: "blur(300px)",
        }}
        aria-hidden="true"
      />

      {/* 100% Quality Badge - overlaps into container */}
      <div
        className={`flex justify-center relative z-10 mb-[-68px] scroll-scale-up ${isVisible ? "visible" : ""}`}
      >
        <div className="relative" style={{ width: "136px", height: "136px" }}>
          {/* Rotating text ring */}
          <svg
            className="w-full h-full animate-spin"
            style={{ animationDuration: "10s" }}
            viewBox="0 0 136 136"
            aria-hidden="true"
          >
            <defs>
              <path
                id="circlePath"
                d="M 68,68 m -54,0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0"
              />
            </defs>
            <text className="font-['Space_Grotesk'] text-[13px] fill-[#DF440E] font-medium">
              <textPath href="#circlePath" startOffset="0%">
                Quality • Comfort • Quality • Comfort •{" "}
              </textPath>
            </text>
          </svg>
          {/* Center circle with 100% */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "#DF440E",
              boxShadow: "0px 2px 10.6px rgba(0,0,0,0.12)",
            }}
          >
            <span className="font-['Space_Grotesk'] font-bold text-[22px] leading-[28px] text-white">
              100%
            </span>
          </div>
        </div>
      </div>

      {/* Projects Container with border */}
      <div
        ref={sectionRef}
        className="max-w-11/12 mx-auto rounded-4xl pt-[110px] pb-12.5 px-4 md:px-6 lg:px-8"
        style={{
          borderBottom: "4px solid #DF440E",
          backgroundColor: "#FFF8F5",
        }}
      >
        {/* Heading */}
        <h2
          id="projects-heading"
          className={`text-center font-['Space_Grotesk'] font-medium text-[40px] leading-12.75 tracking-[-0.32px] text-[#160F72] mb-10 scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          Project Showcase
        </h2>

        {/* Projects Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${isVisible ? "visible" : ""}`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden"
              style={{ aspectRatio: "398/551" }}
            >
              {/* Orange background visible through the notch */}
              <div
                className="absolute inset-0 rounded-[32px]"
                aria-hidden="true"
              />
              {/* Dark notched shape via SVG */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 398 551"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d={projectCardClipPath} fill="#242424" />
              </svg>
              {/* Content on top */}
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

                {/* Content */}
                <div
                  className="p-[10px] pt-[16px] flex flex-col flex-1"
                  style={{ paddingBottom: "14%" }}
                >
                  <h3 className="font-['Space_Grotesk'] font-bold text-[28px] leading-[36px] tracking-[-0.32px] text-white mb-[8px]">
                    {project.title}
                  </h3>
                  <p className="font-['Space_Grotesk'] font-medium text-[16px] leading-[24px] tracking-[-0.32px] text-[#696969] mb-[12px]">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-['Space_Grotesk'] font-medium text-[16px] leading-[20px] tracking-[-0.32px] text-white underline underline-offset-4 cursor-pointer hover:text-[#DF440E] transition-colors">
                      Learn more
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow button positioned at the notch */}
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

        {/* View All Projects Button */}
        <div className="text-center mt-[40px]">
          <Link
            to="/projects"
            className="inline-flex items-center gap-[10px] bg-[#DF440E] rounded-[10px] px-[30px] py-[14px]"
          >
            <span className="font-['Space_Grotesk'] font-medium text-[18px] leading-[18px] text-white">
              View All Projects
            </span>
            <div className="w-[28px] h-[28px] rounded-[14px] bg-white flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="transform -rotate-45"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#DF440E"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
