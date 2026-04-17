import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import GPNPalaceGardens from "@/assets/images/projects/ongoing_project/GPN Palace (Gardens).webp";
// import PoliceQuarters from "@/assets/images/projects/ongoing_project/Police Quarters.webp";
import SingaporeGlobalDataCentre from "@/assets/images/projects/ongoing_project/Singapore Global Data Centre.webp";
import Warehouse from "@/assets/images/projects/ongoing_project/Warehouse.webp";
import badge from "@/assets/images/home/badge.png";
import ruler from "@/assets/images/projects/icons/whiteRuler.svg";
import locationi from "@/assets/images/projects/icons/whiteMapPoint.svg";
import WaterSump from "@/assets/images/projects/ongoing_project/Water Sump.webp";
import SNJPondy from "@/assets/images/projects/ongoing_project/SNJ-pondy.webp";

const projects = [
  {
    id: "project-1",
    image: SingaporeGlobalDataCentre,
    title: "Singapore Global Data Centre",
    location: "Ambattur",
    area: "23,000 Sqft",
  },
  {
    id: "project-2",
    image: WaterSump,
    title: "Water Sump",
    location: "Thiruthani",
    area: "10,00,000 Liters",
  },
  {
    id: "project-3",
    image: Warehouse,
    title: "Warehouse",
    location: "Thiruverkadu",
    area: "10,000 Sqft",
  },
  {
    id: "project-4",
    image: SNJPondy,
    title: "SNJ Project (Pondicherry)",
    location: "Pondicherry",
    area: "—",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const outerRef = React.useRef<HTMLDivElement>(null);
  const [dims, setDims] = React.useState({ width: 300, height: 450 });

  React.useEffect(() => {
    const update = () => {
      if (outerRef.current) {
        const rect = outerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setDims({ width: rect.width, height: rect.height });
        }
      }
    };
    update();
    const observer = new ResizeObserver(update);
    if (outerRef.current) observer.observe(outerRef.current);
    return () => observer.disconnect();
  }, []);

  const W = dims.width;
  const H = dims.height;
  const notchW = 52;
  const notchH = 52;
  const outerR = 16;
  const outerNotchR = 12;
  const innerNotchR = 16;

  const clipPath = `path('M ${outerR},0 L ${W - outerR},0 Q ${W},0 ${W},${outerR} L ${W},${H - notchH - outerNotchR} Q ${W},${H - notchH} ${W - outerNotchR},${H - notchH} L ${W - notchW + innerNotchR},${H - notchH} Q ${W - notchW},${H - notchH} ${W - notchW},${H - notchH + innerNotchR} L ${W - notchW},${H - outerR} Q ${W - notchW},${H} ${W - notchW - outerR},${H} L ${outerR},${H} Q 0,${H} 0,${H - outerR} L 0,${outerR} Q 0,0 ${outerR},0 Z')`;

  return (
    <div
      ref={outerRef}
      className="relative group"
      style={{ aspectRatio: "398/480" }}
    >
      <div
        className="absolute inset-0 flex flex-col bg-[#242424]"
        style={{
          clipPath,
          WebkitClipPath: clipPath,
          padding: "5.5%",
          paddingBottom: "0",
        }}
      >
        <div className="relative h-full overflow-hidden rounded-[10px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="w-[86%] flex flex-col flex-1 px-[5.5%] pt-4 pb-[8%]">
          <h3 className="font-['Space_Grotesk'] font-bold text-[20px] leading-6.5 tracking-[-0.32px] text-white mb-1.5">
            {project.title}
          </h3>
          {/* Meta */}
          <div className="flex items-center flex-wrap gap-2.5">
            <div className="flex items-center justify-center gap-1">
              <img src={locationi} />
              <span className="font-['Space_Grotesk'] font-normal text-[13px] text-[#fff]">
                {project.location}
              </span>
            </div>
            <span className="text-[#D1D5DB]">•</span>
            <div className="flex items-center justify-center gap-1">
              <img src={ruler} />
              <span className="font-['Space_Grotesk'] font-normal text-[13px] text-[#fff]">
                {project.area}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="group absolute flex items-center rounded-[10px] justify-center bg-[#DF440E] cursor-pointer hover:bg-[#c53a0c] transition-all group-hover:rounded-[50px] duration-300"
        style={{
          width: "46px",
          height: "46px",
          right: "0px",
          bottom: "0px",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className="transform -rotate-45 group-hover:rotate-0 transition duration-300"
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
  );
}

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
          <img src={badge} />
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-[40px]">
          <Link
            to="/projects"
            className="inline-flex items-center gap-[10px] bg-[#DF440E] rounded-[10px] px-[30px] py-[14px] group"
          >
            <span className="font-['Space_Grotesk'] font-medium text-[18px] leading-[18px] text-white">
              View All Projects
            </span>
            <div className="w-[28px] h-[28px] rounded-[14px] bg-white flex items-center justify-center transform group-hover:rotate-45 transition duration-300">
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
