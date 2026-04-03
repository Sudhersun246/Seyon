import projectsBgImage from "@/assets/images/projects/project-bg.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ProjectsHero(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative w-full min-h-212 flex items-center justify-center overflow-hidden -mt-25.5 mb-25">
      <div className="absolute inset-0">
        <img
          src={projectsBgImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(6, 16, 51, 0.78)" }}
          aria-hidden="true"
        />
      </div>

      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center text-center px-4 pt-32 pb-24 mx-auto max-w-[860px]"
      >
        <h1
          className={`font-['Space_Grotesk'] font-bold text-[44px] md:text-[64px] leading-[1.15] tracking-[-1px] text-white mb-[24px] scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          Our{" "}
          <span className="text-primary-600">Projects</span>
        </h1>

        <p
          className={`font-['Space_Grotesk'] font-normal text-[16px] md:text-[18px] leading-[30px] text-white/90 max-w-[700px] mb-[36px] scroll-fade-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          Over the years, Seyon Constrotech Private Limited has successfully
          delivered projects across industrial, commercial, residential, and
          institutional sectors. Each project reflects our commitment to
          engineering precision, disciplined execution, and long-term
          performance.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-[16px] scroll-fade-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "300ms" }}
        >
          <a
            href="#completed-projects"
            className="inline-flex items-center gap-[10px] bg-[#DF440E] rounded-[10px] px-[30px] py-[14px] group"
          >
            <span className="font-['Space_Grotesk'] font-medium text-[16px] text-white">
              View Completed Projects
            </span>
            <div className="w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center transform group-hover:rotate-45 transition duration-300">
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
                  stroke="#DF440E"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </a>

          <a
            href="#ongoing-projects"
            className="inline-flex items-center gap-[10px] border border-white bg-white rounded-[10px] px-[30px] py-[14px]"
          >
            <span className="font-['Space_Grotesk'] font-medium text-[16px] text-primary-600">
              View Ongoing Projects
            </span>
            <div className="w-[28px] h-[28px] rounded-full bg-primary-600 flex items-center justify-center">
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
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
