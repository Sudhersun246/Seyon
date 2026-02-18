import { Helmet } from 'react-helmet-async'
import { SectionHeading, Card } from '@/components/common'
import { CTA } from '@/components/sections'
import { siteConfig, services } from '@/constants'
import type { Service } from '@/types'

export function ServicesPage(): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>{`Our Services - ${siteConfig.name}`}</title>
        <meta
          name="description"
          content={`Explore ${siteConfig.name}'s comprehensive range of technology services including web development, mobile apps, cloud solutions, and UI/UX design.`}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg text-secondary-600">
              We offer a comprehensive range of technology services to help your
              business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-wrapper">
          <SectionHeading
            title="Our Process"
            subtitle="A proven approach to delivering exceptional results."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

interface ServiceCardProps {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps): React.ReactElement {
  return (
    <Card padding="lg" hover>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center">
          <ServiceIcon icon={service.icon} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-secondary-900 mb-2">
            {service.title}
          </h3>
          <p className="text-secondary-600 mb-4">{service.description}</p>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-secondary-600">
                <svg
                  className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}

interface ServiceIconProps {
  icon: string
}

function ServiceIcon({ icon }: ServiceIconProps): React.ReactElement {
  const iconClass = 'w-7 h-7 text-primary-600'

  switch (icon) {
    case 'globe':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    case 'mobile':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    case 'cloud':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    case 'palette':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    default:
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
  }
}

const processSteps = [
  {
    title: 'Discovery',
    description: 'We learn about your business, goals, and requirements.',
  },
  {
    title: 'Planning',
    description: 'We create a detailed roadmap and project timeline.',
  },
  {
    title: 'Development',
    description: 'Our team builds your solution with regular updates.',
  },
  {
    title: 'Launch',
    description: 'We deploy your solution and provide ongoing support.',
  },
]
