import { useRef } from "react";
import { scrollImages } from "./servicesData";

export function ServicesImageGallery(): React.ReactElement {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="w-full py-[60px] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-7.5 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-[8px] mb-[8px]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#DF440E]" />
            <span className="font-['Space_Grotesk'] font-medium text-[13px] uppercase tracking-[4px] text-[#DF440E]">
              Our Work
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] font-bold text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.3px] text-[#0A1A3A]">
            Services in Action
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-[12px]">
          <button
            onClick={scrollLeft}
            className="w-[44px] h-[44px] rounded-full border border-[#E2E8F0] flex items-center justify-center hover:border-[#DF440E] hover:bg-[#DF440E]/5 transition-colors"
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 19l-7-7 7-7" stroke="#0A1A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="w-[44px] h-[44px] rounded-full border border-[#E2E8F0] flex items-center justify-center hover:border-[#DF440E] hover:bg-[#DF440E]/5 transition-colors"
            aria-label="Scroll right"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 5l7 7-7 7" stroke="#0A1A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-[20px] overflow-x-auto scrollbar-hide pl-4 md:pl-[max(16px,calc((100vw-1168px)/2))] pr-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {scrollImages.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[280px] md:w-[340px] relative overflow-hidden rounded-[16px] group"
            style={{ aspectRatio: "4/3", scrollSnapAlign: "start" }}
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-[16px] left-[16px]">
              <span className="bg-[#DF440E] text-white font-['Space_Grotesk'] font-semibold text-[11px] tracking-[2px] uppercase px-[12px] py-[6px] rounded-[6px]">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
