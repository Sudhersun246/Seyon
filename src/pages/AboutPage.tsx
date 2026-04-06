import { siteConfig } from '@/constants'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutApproach } from '@/components/sections/about/AboutApproach'
import { AboutTeam } from '@/components/sections/about/AboutTeam'
// import { CTASection } from '@/components/sections/CTASection'
import { GetInTouch } from '@/components/sections/contact'

export function AboutPage(): React.ReactElement {
  return (
    <>
      <title>{`About Us - ${siteConfig.name}`}</title>
      <meta
        name="description"
        content={`Learn about ${siteConfig.name}'s mission, vision, and the team behind our success.`}
      />

      <AboutHero />
      <AboutApproach />
      <AboutTeam />
      {/* <CTASection
        heading="Let's Build Something Great Together"
        description="Get in touch with Seyon Constrotech for a consultation or quote on your next commercial project."
        buttonText="Contact Our Team"
        buttonLink="/contact"
      /> */}
      <GetInTouch />
    </>
  )
}
