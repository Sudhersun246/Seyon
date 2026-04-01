import contactHero from "@/assets/images/contact/contact-bg.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ContactHero(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative w-full min-h-212 flex items-center justify-center overflow-hidden -mt-25.5">
      <img
        src={contactHero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0A1A3A]/70" aria-hidden="true" />

      <div ref={ref} className="relative z-10 flex flex-col items-center text-center px-4 pt-32 pb-24 mx-auto max-w-175">
        <h1
          className={`font-['Space_Grotesk'] font-bold text-[48px] md:text-[60px] leading-[1.1] text-white mb-5 scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          Contact <span style={{ color: "#DF440E" }}>Us</span>
        </h1>

        <p
          className={`font-['Space_Grotesk'] font-normal text-[16px] leading-[26px] text-white/80 mb-9 scroll-fade-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          At Seyon Constrotech Private Limited, we believe strong partnerships
          begin with clear communication. Whether you are planning a new
          project, need engineering support, or are looking for a reliable
          construction partner, our team is ready to assist you.
        </p>

        <a
          href="#get-in-touch"
          className={`inline-flex items-center gap-2.5 bg-[#DF440E] rounded-[10px] px-7 py-3.5 hover:bg-[#c53a0c] transition-colors scroll-fade-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "300ms" }}
        >
          <span className="font-['Space_Grotesk'] font-medium text-[15px] text-white">
            Get In Touch
          </span>
          <div className="size-6 rounded-full bg-white flex items-center justify-center">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              className="-rotate-45"
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
    </section>
  );
}
