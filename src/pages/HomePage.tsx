import { Hero } from "@/components/Hero";
import {
  WhyChooseSeyon,
  CoreServices,
  ProjectShowcase,
  MeetExperts,
  ContactSection,
} from "@/components/sections";

export function HomePage(): React.ReactElement {
  return (
    <>
      <title>Seyon - Foundation for the Future</title>
      <meta
        name="description"
        content="Elite Builders delivers top tier commercial construction services across Miami, turning blueprints into reality with precision and expertise."
      />
      <meta property="og:title" content="Seyon - Foundation for the Future" />
      <meta
        property="og:description"
        content="Elite Builders delivers top tier commercial construction services across Miami, turning blueprints into reality with precision and expertise."
      />
      <meta property="og:type" content="website" />

      <Hero />
      <WhyChooseSeyon />
      <CoreServices />
      <ProjectShowcase />
      <MeetExperts />
      <ContactSection />
    </>
  );
}
