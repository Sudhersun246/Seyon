import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { teamMembersAbout } from "@/constants/content";
import linkedInIcon from "@/assets/images/contact/icons/linkedIn.png";

export function AboutTeam(): React.ReactElement {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      className="w-full py-25 bg-white"
      aria-labelledby="team-heading"
    >
      <style>{`
  /* Flip Card */
  .flip-card {
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(-180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 16px;
    overflow: hidden;
  }

  .flip-card-back {
    transform: rotateY(-180deg);
  }

  /* Hide Scrollbar (Clean + Cross-browser) */
  .hide-scrollbar {
    -ms-overflow-style: none;   /* IE & Edge */
    scrollbar-width: none;      /* Firefox */
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none;              /* Chrome, Safari */
  }

  /* Scroll Hint (Fade effect to indicate scrollable content) */
  .scroll-fade {
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  }

  /* Optional: Smooth scrolling feel */
  .smooth-scroll {
    scroll-behavior: smooth;
  }
`}</style>

      <div className="max-w-400 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-15" ref={ref}>
          <span
            className={`inline-flex items-center gap-2 font-['Space_Grotesk'] font-semibold text-[14px] uppercase tracking-[3px] text-[#DF440E] scroll-fade-up ${isVisible ? "visible" : ""}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#DF440E] inline-block" />
            Team
          </span>
          <h2
            id="team-heading"
            className={`mt-4 font-['Space_Grotesk'] font-bold text-[44px] leading-13 tracking-[-0.5px] text-[#0A1A3A] scroll-fade-up ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            Our Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembersAbout.map((member, index) => (
            <div
              key={member.id}
              className="flip-card aspect-4/5 shadow-md"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-5 py-4"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(6,16,51,0.85) 0%, rgba(6,16,51,0.5) 70%, transparent 100%)",
                    }}
                  >
                    <p className="font-['Space_Grotesk'] font-bold text-[15px] tracking-[1.5px] uppercase text-white leading-tight">
                      {member.name}
                    </p>
                    <p className="font-['Space_Grotesk'] font-normal text-[13px] text-white/75 mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="flip-card-back flex flex-col p-6"
                  style={{
                    background:
                      "linear-gradient(160deg, #1a2a6c 0%, #2a3f8f 50%, #3a5298 100%)",
                  }}
                >
                  {/* Header row */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-13 h-13 rounded-full object-cover object-top shrink-0 border-2 border-white/30"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-['Space_Grotesk'] font-bold text-[13px] tracking-[1px] uppercase text-white leading-tight truncate">
                        {member.name}
                      </p>
                      <p className="font-['Space_Grotesk'] font-normal text-[11px] text-white/70 mt-0.5 leading-tight">
                        {member.role}
                      </p>
                    </div>
                    <img
                      src={linkedInIcon}
                      alt="LinkedIn"
                      className="w-7 h-7 shrink-0"
                    />
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/20 mb-3.5" />

                  {/* Bio */}
                  <div className="flex-1 overflow-y-auto hide-scrollbar scroll-fade smooth-scroll pb-4">
                    {" "}
                    <p className="font-['Space_Grotesk'] font-normal text-[11.5px] leading-[1.7] text-white/85">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
