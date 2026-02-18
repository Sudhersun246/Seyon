import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    id: "feature-1",
    title: "Expert Engineering Teams",
    description:
      "Highly skilled professionals with deep technical expertise and industry experience.",
    icon: "engineers",
  },
  {
    id: "feature-2",
    title: "Assured Quality & Safety",
    description:
      "Rigorous quality control and safety-first culture across all project phases.",
    icon: "quality",
  },
  {
    id: "feature-3",
    title: "Transparent Collaboration",
    description:
      "Open communication and partnership approach with clients and stakeholders.",
    icon: "collaboration",
  },
  {
    id: "feature-4",
    title: "On-Time Delivery",
    description:
      "Disciplined project management ensuring timely completion without compromise.",
    icon: "delivery",
  },
];

function FeatureIcon({ icon }: { icon: string }): React.ReactElement {
  switch (icon) {
    case "engineers":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "quality":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "collaboration":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case "delivery":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return <></>;
  }
}

export function WhyChooseSeyon(): React.ReactElement {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section
      className="relative w-full -mt-[50px] z-10 px-4 md:px-8 pb-[100px]"
      aria-labelledby="why-choose-heading"
    >
      <div
        ref={sectionRef}
        className="max-w-[1316px] mx-auto rounded-[30px] p-[16px] md:p-[24px] lg:p-[30px]"
        style={{
          backgroundColor: "#FFF8F5",
          boxShadow: "0px 4px 50px rgba(22, 15, 114, 0.20)",
          borderBottom: "4px solid #F9773B",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Section Label */}
        <div
          className={`text-center mb-[12px] scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="inline-flex items-center gap-[8px]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#DF440E]" />
            <span className="font-['Space_Grotesk'] font-medium text-[16px] leading-[20px] uppercase tracking-[3px] text-[#FF6B35]">
              Why CHOOSE SEYON
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2
          id="why-choose-heading"
          className={`text-center font-['Space_Grotesk'] font-medium text-[24px] md:text-[32px] lg:text-[40px] leading-[51px] tracking-[-0.32px] text-black mb-[40px] scroll-fade-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          Built on Trust, Delivered with Excellence
        </h2>

        {/* Features Grid - 2x2 */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-[16px] gap-y-[20px] mb-[40px] stagger-children ${isVisible ? "visible" : ""}`}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-[16px] rounded-[24px] border-[0.5px] border-[#FF6900] bg-white p-[24px] hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-[50px] h-[50px] rounded-full bg-[#F9773B] flex items-center justify-center">
                <FeatureIcon icon={feature.icon} />
              </div>
              {/* Text */}
              <div>
                <h3 className="font-['Space_Grotesk'] font-bold text-[20px] leading-[31px] text-[#2D2D2D] mb-[4px]">
                  {feature.title}
                </h3>
                <p className="font-['Space_Grotesk'] font-normal text-[18px] leading-[23px] text-[#3A3A3A]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center scroll-fade-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "400ms" }}
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-[10px] bg-[#DF440E] rounded-[10px] px-[30px] py-[14px]"
          >
            <span className="font-['Space_Grotesk'] font-medium text-[18px] leading-[18px] text-white">
              Learn More About Us
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
