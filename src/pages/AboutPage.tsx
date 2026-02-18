import { SectionHeading, Card } from '@/components/common'
import { CTA } from '@/components/sections'
import { siteConfig, aboutContent, teamMembers } from '@/constants'

export function AboutPage(): React.ReactElement {
  return (
    <>
      <title>{`About Us - ${siteConfig.name}`}</title>
      <meta
        name="description"
        content={`Learn about ${siteConfig.name}'s mission, vision, and the team behind our success.`}
      />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-secondary-50 to-white section-padding">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 mb-6">
              {aboutContent.headline}
            </h1>
            <p className="text-lg text-secondary-600">{aboutContent.intro}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                {aboutContent.mission.title}
              </h2>
              <p className="text-secondary-600">{aboutContent.mission.description}</p>
            </Card>
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                {aboutContent.vision.title}
              </h2>
              <p className="text-secondary-600">{aboutContent.vision.description}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary-50">
        <div className="container-wrapper">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.values.map((value, index) => (
              <Card key={index} hover className="text-center">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-wrapper">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The talented people behind our success."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} hover className="text-center">
                <div
                  className="w-24 h-24 mx-auto mb-4 rounded-full bg-linear-to-br from-primary-400 to-accent-400 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-3xl font-bold text-white">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">
                  {member.name}
                </h3>
                <p className="text-primary-600 text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-secondary-600 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
