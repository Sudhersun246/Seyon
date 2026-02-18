import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import wadeImg from "@/assets/images/team/wade.jpg";
import darrellImg from "@/assets/images/team/darrell.jpg";
import dustinImg from "@/assets/images/team/dustin.jpg";

const teamMembers = [
  {
    id: "member-1",
    name: "Wade",
    role: "Trust Administrator",
    image: wadeImg,
  },
  {
    id: "member-2",
    name: "Darrell",
    role: "Accountant",
    image: darrellImg,
  },
  {
    id: "member-3",
    name: "Dustin",
    role: "Regional Manager",
    image: dustinImg,
  },
];

export function MeetExperts(): React.ReactElement {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section
      className="w-full pt-[50px] pb-[50px] bg-white"
      aria-labelledby="experts-heading"
    >
      <div ref={sectionRef} className="max-w-full mx-auto">
        {/* Section Label */}
        <div
          className={`text-center mb-[12px] scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="inline-flex items-center gap-[8px]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#DF440E]" />
            <span className="font-['Space_Grotesk'] font-medium text-[16px] leading-[20px] uppercase tracking-[4.2px] text-[#FF6B35]">
              Meet Our Experts
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2
          id="experts-heading"
          className={`text-center font-['Space_Grotesk'] font-medium text-[40px] leading-[51px] tracking-[-0.32px] text-black mb-[40px] scroll-fade-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          Personalized Guidance, Proven Expertise
        </h2>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left Orange Panel */}
          <div
            className={`relative w-full lg:w-5/12 flex-shrink-0 overflow-hidden p-[40px] flex flex-col justify-end min-h-[300px] lg:min-h-[444px] scroll-fade-left ${isVisible ? "visible" : ""}`}
            style={{
              background: "linear-gradient(135deg, #DF440E 0%, #FF7342 100%)",
              transitionDelay: "200ms",
            }}
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1.48px, transparent 1.48px), linear-gradient(90deg, rgba(255,255,255,0.5) 1.48px, transparent 1.48px)",
                backgroundSize: "41.55px 41.55px",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h3 className="font-['Space_Grotesk'] font-bold text-[28px] leading-[36px] md:text-[34px] md:leading-[44px] lg:text-[40px] lg:leading-[58px] tracking-[-0.48px] text-white mb-[20px]">
                Let's Build Strong, Reliable, and Lasting Structures Together.
              </h3>
              <p className="font-['Space_Grotesk'] font-normal text-[20px] leading-[31px] text-white/90 mb-[30px]">
                Ready to start your next construction or engineering project?
                Our team is here to deliver excellence from concept to
                completion.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-[10px] bg-[#160F72] rounded-[10px] px-[30px] py-[14px]"
              >
                <span className="font-['Space_Grotesk'] font-medium text-[18px] leading-[18px] text-white">
                  Contact Us
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
                      stroke="#160F72"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Right - Team Members */}
          <div
            className={`flex-1 bg-[#F6F6F6] rounded-r-[20px] p-[20px] scroll-fade-right ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex flex-col">
                  {/* Photo */}
                  <div className="w-full aspect-square rounded-[19px] overflow-hidden mb-[13px]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Info */}
                  <h4 className="font-['Space_Grotesk'] font-medium text-[24px] leading-[31px] tracking-[-0.26px] text-[#161616]">
                    {member.name}
                  </h4>
                  <p className="font-['Space_Grotesk'] font-normal text-[16px] leading-[20px] tracking-[-0.26px] text-[#161616]">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
