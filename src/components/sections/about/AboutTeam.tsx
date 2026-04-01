import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { teamMembersAbout } from "@/constants/content";


export function AboutTeam(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      className="w-full py-[100px] bg-white"
      aria-labelledby="team-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-[60px]" ref={ref}>
          <span
            className={`inline-flex items-center gap-[8px] font-['Space_Grotesk'] font-semibold text-[14px] uppercase tracking-[3px] text-[#DF440E] scroll-fade-up ${isVisible ? "visible" : ""}`}
          >
            <span className="w-[8px] h-[8px] rounded-full bg-[#DF440E] inline-block" />
            Team
          </span>
          <h2
            id="team-heading"
            className={`mt-[16px] font-['Space_Grotesk'] font-bold text-[44px] leading-[52px] tracking-[-0.5px] text-[#0A1A3A] scroll-fade-up ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            Our Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {teamMembersAbout.map((member, index) => (
            <div
              key={member.id}
              className="group relative rounded-[16px] overflow-hidden aspect-[4/5] shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{
                animationDelay: `${index * 60}ms`,
              }}
            >
              {/* Photo */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay name/role strip */}
              <div
                className="absolute bottom-0 left-0 right-0 px-[20px] py-[16px]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(6,16,51,0.85) 0%, rgba(6,16,51,0.5) 70%, transparent 100%)",
                }}
              >
                <p className="font-['Space_Grotesk'] font-bold text-[15px] tracking-[1.5px] uppercase text-white leading-tight">
                  {member.name}
                </p>
                <p className="font-['Space_Grotesk'] font-normal text-[13px] text-white/75 mt-[2px]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
