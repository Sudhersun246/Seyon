import React from "react";
import servicesBgImage from "@/assets/images/services/services-bg.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import "./style.scss";
import hvacIcon from "@/assets/images/home/mech.png";
import civilIcon from "@/assets/images/home/civil.png";
import structuralIcon from "@/assets/images/home/structure.png";
import mepIcon from "@/assets/images/home/mep.png";

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

function ServiceCard({ service }: { service: typeof services[0] }) {
  const outerRef = React.useRef<HTMLDivElement>(null);
  const [dims, setDims] = React.useState({ width: 300, height: 300 });

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
  const notchW = 68;
  const notchH = 68;
  const outerR = 16;
  const outerNotchR = 12;
  const innerNotchR = 16;

  const clipPath = `path('M ${outerR},0 L ${W - outerR},0 Q ${W},0 ${W},${outerR} L ${W},${H - notchH - outerNotchR} Q ${W},${H - notchH} ${W - outerNotchR},${H - notchH} L ${W - notchW + innerNotchR},${H - notchH} Q ${W - notchW},${H - notchH} ${W - notchW},${H - notchH + innerNotchR} L ${W - notchW},${H - outerR} Q ${W - notchW},${H} ${W - notchW - outerR},${H} L ${outerR},${H} Q 0,${H} 0,${H - outerR} L 0,${outerR} Q 0,0 ${outerR},0 Z')`;

  return (
    <div
      ref={outerRef}
      className="card-single-container relative group cursor-pointer"
      style={{ width: "100%", aspectRatio: "380/400" }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white group-hover:bg-[#DF440E] transition-colors duration-300"
        style={{ clipPath, WebkitClipPath: clipPath, padding: "7.5% 7.9%", paddingBottom: "18%" }}
      >
        <div className="w-[87px] h-[87px] rounded-[16px] p-3 bg-[#FFF5F0] group-hover:bg-white flex items-center justify-center mb-[20px] transition-all duration-300 group-hover:-translate-y-[10px]">
          <img src={service.icon} alt={service.title} />
        </div>
        <h3 className="font-['Space_Grotesk'] font-medium text-[24px] leading-[31px] tracking-[-0.32px] text-[#DF440E] group-hover:text-white mb-[12px] transition-all duration-300 group-hover:-translate-y-[10px]">
          {service.title}
        </h3>
        <p className="font-['Geist','Space_Grotesk'] font-normal text-[16px] leading-[24px] tracking-[-0.32px] text-white opacity-0 translate-y-[20px] max-h-0 overflow-hidden transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[200px]">
          {service.description}
        </p>
      </div>
      <div
        className="group absolute flex items-center justify-center bg-white rounded-[10px] hover:bg-gray-50 transition-colors cursor-pointer group-hover:rounded-4xl "
        style={{ width: "50px", height: "50px", right: "6px", bottom: "6px" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transform -rotate-45 group-hover:rotate-0 transition duration-300" aria-hidden="true">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#DF440E" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

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
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] stagger-children ${isVisible ? "visible" : ""}`}
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
