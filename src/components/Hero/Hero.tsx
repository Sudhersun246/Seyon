import { Link } from "react-router-dom";
import heroBgImage from "@/assets/images/hero/hero-bg.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "500+", label: "Project completed" },
  { value: "100+", label: "Professionals" },
  { value: "2M+", label: "Sq Ft built" },
];

export function Hero(): React.ReactElement {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section
      className="relative w-full h-dvh overflow-hidden -mt-25.5"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBgImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Dark blue overlay - rgba(6, 16, 51, 0.8) */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(6, 16, 51, 0.8)" }}
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div
        ref={heroRef}
        className="relative h-full flex flex-col items-center justify-center px-4 pt-25.25"
      >
        <div className="w-full max-w-247.5 flex flex-col items-center text-center gap-5">
          {/* Main Heading */}
          <h1
            id="hero-heading"
            className={`font-['Space_Grotesk'] font-bold text-[36px] leading-[40px] md:text-[56px] md:leading-[60px] lg:text-[clamp(50px, 8vh, 80px)] lg:leading-[79.2px] tracking-[-1.44px] text-white scroll-fade-up ${heroVisible ? "visible" : ""}`}
          >
            Foundation for{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF8902 0%, #FF6900 50%, #FB2C37 100%)",
              }}
            >
              the Future.
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`max-w-247.5 font-['Space_Grotesk'] font-normal text-[16px] leading-[24px] md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[30.6px] text-white text-center scroll-fade-up ${heroVisible ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            Elite Builders, delivers top tier commercial construction services
            across Miami, turning blueprints into reality with precision and
            expertise.
          </p>

          {/* Stats Section */}
          <div
            className={`flex flex-wrap justify-center items-center gap-4 sm:gap-8 scroll-fade-up ${heroVisible ? "visible" : ""}`}
            style={{ transitionDelay: "400ms" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="md:w-[200px] w-[150px] flex flex-col items-center justify-center p-4 md:px-5 md:py-3 rounded-3xl border border-[#ffffff2e] backdrop-blur-md"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.01)" }}
              >
                <span className="font-['Space_Grotesk'] font-medium text-[20px] leading-5 md:text-[50px] md:leading-16 lg:text-[clamp(50px, 8vh, 80px)] tracking-[-0.32px] text-white text-center">
                  {stat.value}
                </span>
                <span className="font-['Space_Grotesk'] font-normal text-[12px] md:text-[16px] md:leading-6 text-white text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/projects"
            className={`flex items-center gap-2.5 bg-[#DF440E] rounded-[10px] px-7.5 py-3.5 group scroll-fade-up ${heroVisible ? "visible" : ""}`}
            style={{ transitionDelay: "600ms" }}
          >
            <span className="font-['Space_Grotesk'] font-medium text-[14px] md:text-[18px] leading-4.5 text-white">
              Explore Our Work
            </span>
            <div className="w-7 h-7 rounded-[14px] bg-white flex items-center justify-center">
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
