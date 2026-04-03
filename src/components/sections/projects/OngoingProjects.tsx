import React from "react";
import { ongoingProjects } from "@/constants/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ruler from "@/assets/images/projects/icons/whiteRuler.svg";
import locationi from "@/assets/images/projects/icons/whiteMapPoint.svg";

function ProjectCard({
  image,
  title,
  location,
  area,
  // description,
}: {
  image: string;
  title: string;
  location: string;
  area: string;
  // description: string;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [dims, setDims] = React.useState({ width: 300, height: 400 });
  const [hovered, setHovered] = React.useState(false);

  React.useEffect(() => {
    const update = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setDims({ width: rect.width, height: rect.height });
        }
      }
    };
    update();
    const observer = new ResizeObserver(update);
    if (cardRef.current) observer.observe(cardRef.current);
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

  const dropShadow = hovered
    ? "drop-shadow(0 0 1.5px rgba(223,68,14,0.9))"
    : "drop-shadow(0 0 1px rgba(255,255,255,0.15))";

  return (
    <div
      className="relative group cursor-pointer transition-all duration-300"
      style={{ filter: dropShadow }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={cardRef}
        className="relative flex flex-col bg-[#242424]"
        style={{ clipPath, WebkitClipPath: clipPath, aspectRatio: "398/551" }}
      >
        {/* Image */}
        <div
          className="overflow-hidden rounded-[10px] m-[5.5%] mb-0"
          style={{ height: "64%" }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1 px-[5.5%] pt-4 pb-[14%]">
          <h3 className="font-['Space_Grotesk'] font-bold text-[20px] leading-6.5 tracking-[-0.32px] text-white mb-1.5">
            {title}
          </h3>
          {/* Meta */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center gap-1">
              <img src={locationi} />
              <span className="font-['Space_Grotesk'] font-normal text-[13px] text-[#fff]">
                {location}
              </span>
            </div>
            <span className="text-[#D1D5DB]">•</span>
            <div className="flex items-center justify-center gap-1">
              <img src={ruler} />
              <span className="font-['Space_Grotesk'] font-normal text-[13px] text-[#fff]">
                {area}
              </span>
            </div>
          </div>
          {/* <p className="font-['Space_Grotesk'] font-medium text-[13px] leading-5 tracking-[-0.2px] text-[#696969]">
            {description}
          </p> */}
        </div>
      </div>

      {/* Arrow button at notch */}
      <div className="absolute bottom-1 right-1 w-9.5 h-9.5 rounded-lg bg-[#DF440E] flex items-center justify-center group-hover:bg-[#c63a0c] transition-colors">
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
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function OngoingProjects(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="ongoing-projects"
      className="w-full py-15 px-4 md:px-8"
      aria-labelledby="ongoing-heading"
    >
      <div
        ref={ref}
        className="max-w-387.5 mx-auto rounded-3xl px-10 py-12"
        style={{ backgroundColor: "#0F0F1A" }}
      >
        {/* Header row */}
        <div
          className={`flex items-start justify-between mb-10 scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-2.25 h-2.25 rounded-full bg-[#DF440E]"
                aria-hidden="true"
              />
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

          {/* <a
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
          </a> */}
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px] stagger-children ${isVisible ? "visible" : ""}`}
        >
          {ongoingProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              location={project.location}
              area={project.area}
              // description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
