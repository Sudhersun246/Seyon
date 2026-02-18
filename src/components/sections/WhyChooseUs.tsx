const reasons = [
  {
    id: 'reason-1',
    icon: 'quality',
    title: 'Quality Craftsmanship',
    description:
      'Every project reflects our unwavering commitment to superior quality and attention to detail.',
  },
  {
    id: 'reason-2',
    icon: 'clock',
    title: 'On-Time Delivery',
    description:
      'We respect deadlines and deliver projects on schedule without compromising on quality.',
  },
  {
    id: 'reason-3',
    icon: 'safety',
    title: 'Safety First',
    description:
      'Rigorous safety protocols ensure a secure work environment for our team and your property.',
  },
  {
    id: 'reason-4',
    icon: 'team',
    title: 'Expert Team',
    description:
      'Our seasoned professionals bring decades of combined experience to every project.',
  },
  {
    id: 'reason-5',
    icon: 'budget',
    title: 'Budget Transparency',
    description:
      'No hidden costs. We provide detailed estimates and keep you informed at every stage.',
  },
  {
    id: 'reason-6',
    icon: 'support',
    title: 'Ongoing Support',
    description:
      'Our relationship doesn\'t end at handover. We provide continued support and warranty service.',
  },
]

function ReasonIcon({ icon }: { icon: string }): React.ReactElement {
  const iconClass = 'w-[28px] h-[28px] text-white'

  switch (icon) {
    case 'quality':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    case 'clock':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'safety':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    case 'team':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    case 'budget':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'support':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    default:
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
  }
}

export function WhyChooseUs(): React.ReactElement {
  return (
    <section
      className="w-full py-[100px] relative overflow-hidden"
      style={{ backgroundColor: '#061033' }}
      aria-labelledby="why-choose-heading"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <span className="font-['Space_Grotesk'] font-semibold text-[14px] uppercase tracking-[3px] text-[#DF440E]">
            Why Choose Us
          </span>
          <h2
            id="why-choose-heading"
            className="mt-[16px] font-['Space_Grotesk'] font-bold text-[44px] leading-[52px] tracking-[-0.5px] text-white"
          >
            Building with{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #FF8902 0%, #FF6900 50%, #FB2C37 100%)',
              }}
            >
              Excellence
            </span>
          </h2>
          <p className="mt-[16px] max-w-[600px] mx-auto font-['Space_Grotesk'] font-normal text-[16px] leading-[28px] text-white/70">
            Discover what sets us apart and why clients trust us with their most important
            construction projects.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group rounded-[16px] p-[32px] border border-white/10 hover:border-[#DF440E]/50 transition-all duration-300 backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              <div className="w-[56px] h-[56px] rounded-[14px] bg-[#DF440E] flex items-center justify-center mb-[20px]">
                <ReasonIcon icon={reason.icon} />
              </div>
              <h3 className="font-['Space_Grotesk'] font-bold text-[20px] leading-[28px] text-white mb-[12px]">
                {reason.title}
              </h3>
              <p className="font-['Space_Grotesk'] font-normal text-[15px] leading-[26px] text-white/60">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
