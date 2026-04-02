import dot from "@/assets/images/services/icons/dot.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { serviceDetails } from "./servicesData";

function BulletPoint({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-[10px]">
      <img src={dot} alt="" aria-hidden="true" className="mt-[5px] flex-shrink-0 w-[14px] h-[14px] object-contain" />
      <span className="font-['Space_Grotesk'] font-normal text-[16px] leading-[26px] text-[#2D2D2D]">
        {text}
      </span>
    </li>
  );
}

function ServiceDetailItem({
  service,
  index,
}: {
  service: (typeof serviceDetails)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const imgFade = service.imageLeft ? "scroll-fade-left" : "scroll-fade-right";
  const txtFade = service.imageLeft ? "scroll-fade-right" : "scroll-fade-left";

  return (
    <div
      id={`service-${service.id}`}
      ref={ref}
      className={`flex flex-col ${service.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-[40px] lg:gap-[80px] items-center py-[60px]`}
    >
      <div
        className={`w-full lg:w-[48%] ${imgFade} ${isVisible ? "visible" : ""}`}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        <div className="relative overflow-hidden rounded-[16px] aspect-[4/3]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[20px] left-[20px]">
            <span className="bg-[#DF440E] text-white font-['Space_Grotesk'] font-semibold text-[12px] tracking-[2px] uppercase px-[14px] py-[8px] rounded-[6px]">
              {service.imageLabel}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`w-full lg:w-[52%] ${txtFade} ${isVisible ? "visible" : ""}`}
        style={{ transitionDelay: `${index * 50 + 150}ms` }}
      >
        <div className="flex items-center gap-[8px] mb-[16px]">
          <span className="w-[9px] h-[9px] rounded-full bg-[#DF440E]" />
          <span className="font-['Space_Grotesk'] font-medium text-[13px] uppercase tracking-[3px] text-[#DF440E]">
            {service.number} — {service.label}
          </span>
        </div>
        <h3 className="font-['Space_Grotesk'] font-bold text-[32px] leading-10 tracking-[-0.5px] text-[#0A1A3A] mb-5">
          {service.title}
        </h3>
        <p className="font-['Space_Grotesk'] font-normal text-[16px] leading-7 text-[#4A5568] mb-6 text-justify">
          {service.description}
        </p>
        <ul className="space-y-3">
          {service.bullets.map((bullet, i) => (
            <BulletPoint key={i} text={bullet} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ServiceDetailSections(): React.ReactElement {
  return (
    <section className="w-full bg-white">
      <div className="max-w-400 mx-auto px-4 md:px-8">
        {serviceDetails.map((service, index) => (
          <ServiceDetailItem key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
