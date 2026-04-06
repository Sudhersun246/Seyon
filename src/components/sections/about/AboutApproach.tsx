import badge from "@/assets/images/home/badge.png";

export function AboutApproach(): React.ReactElement {
  return (
    <section className="relative z-10 w-full -mt-65 mb-0 px-4">
      {/* Badge overlapping into the card from above */}
      <div className="flex justify-center relative z-10 mb-[-68px]">
        <div style={{ width: "136px", height: "136px" }}>
          <img
            src={badge}
            alt="100% Quality"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* White card */}
      <div
        className="max-w-[1300px] mx-auto bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] px-2.5 md:px-[48px] pt-[88px] pb-[52px] flex flex-col items-center text-center"
        style={{ borderBottom: "1px solid #DF440E" }}
      >
        <h2 className="font-['Space_Grotesk'] font-bold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.5px] text-[#0A1A3A] mb-[20px]">
          The Seyon Approach!
        </h2>

        <p className="font-['Space_Grotesk'] font-normal text-[16px] md:text-[18px] leading-[30px] text-[#4A5568]">
          We are a multidisciplinary engineering and contracting company — but
          more importantly, we are a team of people who take full accountability
          for what we build. Our work spans Civil, MEP, Mechanical, and
          Infrastructure projects across residential, commercial, industrial,
          and institutional sectors. Every project reflects the experience,
          care, and ownership of the people behind it. Over the years, we have
          grown from an execution-focused team into a trusted partner for
          clients across the full spectrum — from local developers who rely on
          us for consistent, reliable delivery to international organisations
          who need a single accountable partner capable of managing India
          infrastructure programmes to global quality and governance standards.
          From planning and installation to testing, commissioning, and final
          handover — our approach remains what it has always been: do the job
          right, work safely, and deliver lasting value. For every client. On
          every project.
        </p>
      </div>
    </section>
  );
}
