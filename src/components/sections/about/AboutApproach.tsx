import badge from "@/assets/images/home/badge.png";

export function AboutApproach(): React.ReactElement {
  return (
    <section className="relative z-10 w-full -mt-65 mb-0 px-4">
      {/* Badge overlapping into the card from above */}
      <div className="flex justify-center relative z-10 mb-[-68px]">
        <div style={{ width: "136px", height: "136px" }}>
          <img src={badge} alt="100% Quality" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* White card */}
      <div
        className="max-w-[1300px] mx-auto bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] px-[48px] pt-[88px] pb-[52px] flex flex-col items-center text-center"
        style={{ borderBottom: "1px solid #DF440E" }}
      >
        <h2 className="font-['Space_Grotesk'] font-bold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.5px] text-[#0A1A3A] mb-[20px]">
          The Seyon Approach!
        </h2>

        <p className="font-['Space_Grotesk'] font-normal text-[16px] md:text-[18px] leading-[30px] text-[#4A5568]">
          Seyon Constrotech was founded from a unique perspective on engineering
          and construction services. We are a multidisciplinary firm that thinks
          like a value creator. Through our experiences in the market, we saw an
          opportunity to not only uplevel the industry in terms of consistent
          quality service but to also bring the perspective of long-term value in
          everyday decisions, communication, and reporting.
        </p>
      </div>
    </section>
  );
}
