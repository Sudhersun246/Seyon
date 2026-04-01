import servicesBgImage from "@/assets/images/services/services-bg.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import "./style.scss";
import hvacIcon from "@/assets/images/home/mech.png";
import civilIcon from "@/assets/images/home/civil.png";
import structuralIcon from "@/assets/images/home/structure.png";
import mepIcon from "@/assets/images/home/mep.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  {
    id: "service-1",
    title: "Mechanical (HVAC) Installations",
    description:
      "Our integrated design & build approach streamlines construction by handling architectural planning and a smooth workflow from concept to completion.",
    icon: hvacIcon,
  },
  {
    id: "service-2",
    title: "Civil & Infrastructure Works",
    description:
      "Comprehensive civil engineering solutions for residential, commercial, and infrastructure projects.",
    icon: civilIcon,
  },
  {
    id: "service-3",
    title: "Structural & Industrial Works",
    description:
      "Robust structural engineering for industrial facilities and heavy-duty applications.",
    icon: structuralIcon,
  },
  {
    id: "service-4",
    title: "MEP & Building Services",
    description:
      "Advanced HVAC systems ensuring optimal climate control and energy efficiency.",
    icon: mepIcon,
  },
];

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
            <ArrowLeft size={16} color="white" />
          </button>

          {/* Right arrow */}
          <button
            className="absolute -right-12.5 top-1/2 -translate-y-1/2 w-20 h-9.5 rounded-[19px] border border-white hidden md:flex items-center justify-center hover:bg-white/10 transition-colors z-10"
            style={{ boxShadow: "0px 5.43px 5.43px rgba(0,0,0,0.25)" }}
            aria-label="Next services"
          >
            <ArrowRight size={16} color="white" />
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
                  <div className="w-[87px] h-[87px] rounded-[16px] p-3 bg-[#FFF5F0] flex items-center justify-center mb-[20px] transition-transform duration-300 group-hover:-translate-y-[10px]">
                    <img src={service.icon} alt={service.title} />
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
      </div>
    </section>
  );
}
