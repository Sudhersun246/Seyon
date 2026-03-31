import { siteConfig } from "@/constants";
import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";
import { ProjectsOverview } from "@/components/sections/projects/ProjectsOverview";
import { CompletedProjects } from "@/components/sections/projects/CompletedProjects";
import { OngoingProjects } from "@/components/sections/projects/OngoingProjects";
import { ProjectDelivery } from "@/components/sections/projects/ProjectDelivery";
import { ProjectQualitySafety } from "@/components/sections/projects/ProjectQualitySafety";

export function ProjectsPage(): React.ReactElement {
  return (
    <>
      <title>{`Our Projects - ${siteConfig.name}`}</title>
      <meta
        name="description"
        content="Explore Seyon Constrotech's portfolio of completed and ongoing projects across industrial, commercial, residential, and institutional sectors."
      />
      <ProjectsHero />
      <ProjectsOverview />
      <CompletedProjects />
      <OngoingProjects />
      <ProjectDelivery />
      <ProjectQualitySafety />
    </>
  );
}
