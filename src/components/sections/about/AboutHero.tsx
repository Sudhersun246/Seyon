import heroBgImage from "@/assets/images/hero/hero-bg.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

export function AboutHero(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative w-full min-h-212 flex items-center justify-center overflow-hidden -mt-25.5 mb-25">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBgImage}
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
          About{" "}
          <span className="text-primary-600">Seyon</span>{" "}
          Constrotech
        </h1>

        <p
          className={`font-['Space_Grotesk'] font-normal text-[16px] md:text-[18px] leading-[30px] text-white/90 max-w-[700px] mb-[36px] scroll-fade-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          A multidisciplinary engineering and contracting organisation delivering
          comprehensive construction solutions across diverse sectors.
        </p>

        <Link
          to="/projects"
          className={`group inline-flex items-center gap-[10px] bg-[#DF440E] rounded-[10px] px-[30px] py-[14px] hover:bg-[#c53a0c] transition-colors duration-200 scroll-fade-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "300ms" }}
        >
          <span className="font-['Space_Grotesk'] font-medium text-[16px] text-white">
            Explore Our Work
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
        </Link>
      </div>
    </section>
  );
}
