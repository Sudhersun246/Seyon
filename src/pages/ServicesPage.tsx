import { siteConfig } from "@/constants";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServiceDisciplines } from "@/components/sections/services/ServiceDisciplines";
import { ServiceDetailSections } from "@/components/sections/services/ServiceDetailSections";
import { DeliveryApproach } from "@/components/sections/services/DeliveryApproach";
import { QualitySafety } from "@/components/sections/services/QualitySafety";
import { WhyServicesStandOut } from "@/components/sections/services/WhyServicesStandOut";
import { CTASection } from "@/components/sections/CTASection";

export function ServicesPage(): React.ReactElement {
  return (
    <>
      <title>{`Our Services - ${siteConfig.name}`}</title>
      <meta
        name="description"
        content="Seyon Constrotech provides comprehensive engineering and contracting services across Civil, MEP, Mechanical, Structural, and Fit-Out disciplines."
      />
      <ServicesHero />
      <ServiceDisciplines />
      <ServiceDetailSections />
      <DeliveryApproach />
      <QualitySafety />
      <WhyServicesStandOut />
      <CTASection
        variant="services"
        heading="Let's Build with Confidence"
        description="Partner with Seyon Constrotech for engineering excellence, disciplined execution, and construction you can trust."
        buttonText="Contact Our Team"
        buttonLink="/contact"
      />
    </>
  );
}
