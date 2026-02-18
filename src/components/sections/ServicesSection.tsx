import { Link } from 'react-router-dom'

const services = [
  {
    id: 'service-1',
    icon: 'building',
    title: 'Commercial Construction',
    description:
      'Full-scale commercial projects including offices, retail spaces, and industrial facilities built to the highest standards.',
  },
  {
    id: 'service-2',
    icon: 'home',
    title: 'Residential Construction',
    description:
      'Custom homes and multi-family residences crafted with attention to detail and modern design principles.',
  },
  {
    id: 'service-3',
    icon: 'renovation',
    title: 'Renovation & Remodeling',
    description:
      'Transform existing spaces with expert renovation services that breathe new life into any structure.',
  },
  {
    id: 'service-4',
    icon: 'blueprint',
    title: 'Pre-Construction Planning',
    description:
      'Comprehensive planning and consulting services to ensure your project starts on the right foundation.',
  },
  {
    id: 'service-5',
    icon: 'management',
    title: 'Project Management',
    description:
      'End-to-end project management ensuring timely delivery, budget adherence, and quality control.',
  },
  {
    id: 'service-6',
    icon: 'interior',
    title: 'Interior Build-Out',
    description:
      'Expert interior construction and finishing services for commercial and residential spaces.',
  },
]

function ServiceIcon({ icon }: { icon: string }): React.ReactElement {
  const iconClass = 'w-[32px] h-[32px] text-[#DF440E]'

  switch (icon) {
    case 'building':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    case 'home':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    case 'renovation':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      )
    case 'blueprint':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    case 'management':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    case 'interior':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
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

export function ServicesSection(): React.ReactElement {
  return (
    <section
      className="w-full py-[100px]"
      style={{ backgroundColor: '#F8FAFC' }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <span className="font-['Space_Grotesk'] font-semibold text-[14px] uppercase tracking-[3px] text-[#DF440E]">
            What We Do
          </span>
          <h2
            id="services-heading"
            className="mt-[16px] font-['Space_Grotesk'] font-bold text-[44px] leading-[52px] tracking-[-0.5px] text-[#0A1A3A]"
          >
            Our{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #FF8902 0%, #FF6900 50%, #FB2C37 100%)',
              }}
            >
              Services
            </span>
          </h2>
          <p className="mt-[16px] max-w-[600px] mx-auto font-['Space_Grotesk'] font-normal text-[16px] leading-[28px] text-[#4A5568]">
            We provide comprehensive construction solutions tailored to meet the unique needs
            of every project, big or small.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-[16px] p-[32px] border border-[#E2E8F0] hover:border-[#DF440E]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-[4px]"
            >
              <div className="w-[64px] h-[64px] rounded-[14px] bg-[#DF440E]/10 flex items-center justify-center mb-[24px] group-hover:bg-[#DF440E] transition-colors duration-300">
                <div className="group-hover:[&_svg]:text-white transition-colors duration-300">
                  <ServiceIcon icon={service.icon} />
                </div>
              </div>
              <h3 className="font-['Space_Grotesk'] font-bold text-[20px] leading-[28px] text-[#0A1A3A] mb-[12px]">
                {service.title}
              </h3>
              <p className="font-['Space_Grotesk'] font-normal text-[15px] leading-[26px] text-[#4A5568]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-[50px]">
          <Link
            to="/services"
            className="inline-flex items-center gap-[10px] bg-[#DF440E] rounded-[10px] px-[30px] py-[14px] group"
          >
            <span className="font-['Space_Grotesk'] font-medium text-[16px] leading-[16px] text-white">
              View All Services
            </span>
            <div className="w-[28px] h-[28px] rounded-[14px] bg-white flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="transform -rotate-45"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#DF440E"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
