import servicesBgImage from "@/assets/images/services/services-bg.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import "./style.scss";

const services = [
  {
    id: "service-1",
    title: "Mechanical (HVAC) Installations",
    description:
      "Our integrated design & build approach streamlines construction by handling architectural planning and a smooth workflow from concept to completion.",
    icon: "hvac",
  },
  {
    id: "service-2",
    title: "Civil & Infrastructure Works",
    description:
      "Comprehensive civil engineering solutions for residential, commercial, and infrastructure projects.",
    icon: "civil",
  },
  {
    id: "service-3",
    title: "Structural & Industrial Works",
    description:
      "Robust structural engineering for industrial facilities and heavy-duty applications.",
    icon: "structural",
  },
  {
    id: "service-4",
    title: "MEP & Building Services",
    description:
      "Advanced HVAC systems ensuring optimal climate control and energy efficiency.",
    icon: "mep",
  },
];

function ServiceIcon({ icon }: { icon: string }): React.ReactElement {
  const color = "#DF440E";

  switch (icon) {
    case "hvac":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" />
          <path
            d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "civil":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 21h22"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9 7h1m-1 4h1m4-4h1m-1 4h1"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9 21v-5a1 1 0 011-1h4a1 1 0 011 1v5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "structural":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 20h20M4 20V8l8-5 8 5v12"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 20v-4h6v4M9 12h6M12 8v4"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "mep":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="7"
            height="7"
            rx="1"
            stroke={color}
            strokeWidth="1.5"
          />
          <rect
            x="14"
            y="3"
            width="7"
            height="7"
            rx="1"
            stroke={color}
            strokeWidth="1.5"
          />
          <rect
            x="3"
            y="14"
            width="7"
            height="7"
            rx="1"
            stroke={color}
            strokeWidth="1.5"
          />
          <path
            d="M14 17.5h7M17.5 14v7"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return <></>;
  }
}

// SVG clip path for the notched card shape
const serviceCardClipPath =
  "M348 0C365.673 0 380 14.3269 380 32L380 325C380 331.627 374.627 337 368 337L331.232 337C324.605 337 319.232 342.373 319.232 349L319.232 388C319.232 394.627 313.86 400 307.232 400L32 400C14.3269 400 0 385.673 0 368L0 32C0 14.3269 14.3269 0 32 0L348 0Z";

export function CoreServices(): React.ReactElement {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section
      className="relative w-full pt-[80px] pb-[240px] overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={servicesBgImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(12, 18, 32, 0.90)" }}
          aria-hidden="true"
        />
      </div>

      <div
        ref={sectionRef}
        className="relative max-w-[1592px] mx-auto px-[16px] md:px-[40px] lg:px-[60px]"
      >
        {/* Section Header */}
        <div
          className={`text-center mb-[40px] scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="inline-flex items-center gap-[8px] mb-[16px]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#DF440E]" />
            <span className="font-['Space_Grotesk'] font-medium text-[16px] leading-[20px] uppercase tracking-[4.2px] text-[#FF6B35]">
              Core Services
            </span>
          </div>
          <h2
            id="services-heading"
            className="font-['Space_Grotesk'] font-medium text-[40px] leading-[51px] tracking-[-0.32px] text-white"
          >
            Our expertise in commercial construction
          </h2>
        </div>

        {/* Services Cards */}
        <div className="relative">
          {/* Left arrow */}
          <button
            className="absolute -left-[50px] top-1/2 -translate-y-1/2 w-[80px] h-[38px] rounded-[19px] border border-white hidden md:flex items-center justify-center hover:bg-white/10 transition-colors z-10 opacity-50"
            style={{ boxShadow: "0px 5.43px 5.43px rgba(0,0,0,0.25)" }}
            aria-label="Previous services"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 19l-7-7 7-7"
                stroke="white"
                strokeWidth="1.36"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            className="absolute -right-[50px] top-1/2 -translate-y-1/2 w-[80px] h-[38px] rounded-[19px] border border-white hidden md:flex items-center justify-center hover:bg-white/10 transition-colors z-10"
            style={{ boxShadow: "0px 5.43px 5.43px rgba(0,0,0,0.25)" }}
            aria-label="Next services"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke="white"
                strokeWidth="1.36"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] stagger-children ${isVisible ? "visible" : ""}`}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="card-single-container relative overflow-hidden group cursor-pointer"
                style={{ width: "100%", aspectRatio: "380/400" }}
              >
                {/* White notched shape via SVG */}
                <svg
                  className="backgound-svg absolute inset-0 w-full h-full"
                  viewBox="0 0 380 400"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d={serviceCardClipPath} fill="#FFFFFF" />
                </svg>
                {/* Content on top */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                  style={{ padding: "7.5% 7.9%", paddingBottom: "18%" }}
                >
                  {/* Icon */}
                  <div className="w-[87px] h-[87px] rounded-[16px] bg-[#FFF5F0] flex items-center justify-center mb-[20px] transition-transform duration-300 group-hover:-translate-y-[10px]">
                    <ServiceIcon icon={service.icon} />
                  </div>

                  {/* Title */}
                  <h3 className="font-['Space_Grotesk'] font-medium text-[24px] leading-[31px] tracking-[-0.32px] text-[#DF440E] mb-[12px] transition-transform duration-300 group-hover:-translate-y-[10px]">
                    {service.title}
                  </h3>

                  {/* Description - hidden by default, shown on hover */}
                  <p className="font-['Geist','Space_Grotesk'] font-normal text-[16px] leading-[24px] tracking-[-0.32px] text-[#DF440E] opacity-0 translate-y-[20px] max-h-0 overflow-hidden transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[200px]">
                    {service.description}
                  </p>
                </div>

                {/* Arrow button positioned at the notch */}
                <div
                  className="absolute flex items-center justify-center bg-white rounded-[9px] hover:bg-gray-50 transition-colors cursor-pointer"
                  style={{
                    width: "50px",
                    height: "50px",
                    right: "0px",
                    bottom: "0px",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transform -rotate-45"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#DF440E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-[8px] mt-[30px]">
          <span className="w-[10px] h-[10px] rounded-full bg-[#DF440E]" />
          <span className="w-[10px] h-[10px] rounded-full bg-white/30" />
          <span className="w-[10px] h-[10px] rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  );
}
