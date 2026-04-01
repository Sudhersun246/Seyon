import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import partnerImg from "@/assets/images/contact/business.png";
import rotate from "@/assets/images/contact/rotate.png";

export function BusinessEnquiries(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="w-full py-[80px] px-4 md:px-[60px] lg:px-[100px] bg-white">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        {/* Label + heading */}
        <div
          className={`mb-[32px] scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center gap-[8px] mb-[10px]">
            <span
              className="w-[8px] h-[8px] rounded-full bg-[#DF440E]"
              aria-hidden="true"
            />
            <span className="font-['Space_Grotesk'] font-medium text-[11px] uppercase tracking-[3px] text-[#DF440E]">
              Partner With Us
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] font-bold text-[28px] md:text-[36px] leading-[1.2] text-[#160F72]">
            Business Enquiries &amp; Partnerships
          </h2>
        </div>

        {/* Image card */}
        <div
          className={`relative scroll-fade-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="rounded-[20px] overflow-hidden">
            <img
              src={partnerImg}
              alt="Team discussing project plans on construction site"
              className="w-full object-cover"
              style={{ height: "560px" }}
            />
          </div>

          {/* Rotating badge — pinned to top-right corner of the image */}
          <div className="absolute top-2 right-2 w-16 h-16 md:-top-10 md:-right-10 md:w-24 md:h-24">
            <img src={rotate} alt="Rotating badge" className="w-full h-full" />
          </div>

          {/* Caption overlay */}
          <div
            className="absolute bottom-3 left-3 right-3 rounded-xl px-3.5 py-3 md:bottom-5 md:left-20 md:right-20 md:px-6 md:py-4.5"
            style={{ backgroundColor: "#DF440E" }}
          >
            <p className="font-['Space_Grotesk'] font-normal text-[13px] leading-4.5 md:text-[18px] md:leading-6 text-white">
              We welcome discussions with clients, consultants, suppliers, and
              partners who value engineering excellence, disciplined execution,
              and dependable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
