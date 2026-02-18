const teamMembers = [
  {
    id: 'team-1',
    name: 'Carlos Rivera',
    role: 'Founder & CEO',
    bio: 'With 25+ years in commercial construction, Carlos leads Seyon with a vision for quality and innovation.',
    initials: 'CR',
  },
  {
    id: 'team-2',
    name: 'Maria Santos',
    role: 'VP of Operations',
    bio: 'Maria oversees project operations ensuring every build meets our exacting standards of excellence.',
    initials: 'MS',
  },
  {
    id: 'team-3',
    name: 'James Mitchell',
    role: 'Chief Architect',
    bio: 'James brings creative architectural solutions that blend form, function, and sustainability.',
    initials: 'JM',
  },
  {
    id: 'team-4',
    name: 'Angela Foster',
    role: 'Project Director',
    bio: 'Angela\'s meticulous planning and leadership ensure projects are delivered on time and on budget.',
    initials: 'AF',
  },
]

export function TeamSection(): React.ReactElement {
  return (
    <section className="w-full py-[100px] bg-white" aria-labelledby="team-heading">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <span className="font-['Space_Grotesk'] font-semibold text-[14px] uppercase tracking-[3px] text-[#DF440E]">
            Our Team
          </span>
          <h2
            id="team-heading"
            className="mt-[16px] font-['Space_Grotesk'] font-bold text-[44px] leading-[52px] tracking-[-0.5px] text-[#0A1A3A]"
          >
            Meet the{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #FF8902 0%, #FF6900 50%, #FB2C37 100%)',
              }}
            >
              Experts
            </span>
          </h2>
          <p className="mt-[16px] max-w-[600px] mx-auto font-['Space_Grotesk'] font-normal text-[16px] leading-[28px] text-[#4A5568]">
            Our leadership team brings decades of combined experience in construction,
            architecture, and project management.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group text-center rounded-[16px] p-[32px] border border-[#E2E8F0] hover:border-[#DF440E]/30 bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* Avatar */}
              <div
                className="w-[100px] h-[100px] mx-auto rounded-full flex items-center justify-center mb-[20px] group-hover:scale-105 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, #DF440E 0%, #FF8902 100%)',
                }}
              >
                <span className="font-['Space_Grotesk'] font-bold text-[32px] text-white">
                  {member.initials}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-['Space_Grotesk'] font-bold text-[18px] leading-[24px] text-[#0A1A3A]">
                {member.name}
              </h3>
              <p className="mt-[4px] font-['Space_Grotesk'] font-medium text-[14px] leading-[20px] text-[#DF440E]">
                {member.role}
              </p>
              <p className="mt-[12px] font-['Space_Grotesk'] font-normal text-[14px] leading-[24px] text-[#4A5568]">
                {member.bio}
              </p>

              {/* Social links */}
              <div className="mt-[16px] flex items-center justify-center gap-[12px]">
                <a
                  href="#"
                  className="w-[36px] h-[36px] rounded-full bg-[#F1F5F9] hover:bg-[#DF440E] flex items-center justify-center transition-colors duration-200 group/link"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#4A5568] group-hover/link:text-white transition-colors duration-200"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-[36px] h-[36px] rounded-full bg-[#F1F5F9] hover:bg-[#DF440E] flex items-center justify-center transition-colors duration-200 group/link"
                  aria-label={`${member.name} on Twitter`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#4A5568] group-hover/link:text-white transition-colors duration-200"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
