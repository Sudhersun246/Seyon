import { siteConfig } from "@/constants";
import { ContactHero, GetInTouch, WhyConnect, BusinessEnquiries } from "@/components/sections/contact";
import { CTASection } from "@/components/sections/CTASection";

export function ContactPage(): React.ReactElement {
  return (
    <>
      <title>{`Contact Us - ${siteConfig.name}`}</title>
      <meta
        name="description"
        content="Get in touch with Seyon Constrotech Private Limited. We're ready to assist with your next engineering or construction project."
      />
      <ContactHero />
      <GetInTouch />
      <WhyConnect />
      <BusinessEnquiries />
      <CTASection />
    </>
  );
}
