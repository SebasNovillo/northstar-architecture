import { notFound } from "next/navigation";

import { Header } from "@/components/layout/Header";
import { ProjectDetailHero } from "@/components/projects/ProjectDetailHero";
import { ProjectDetailOverview } from "@/components/projects/ProjectDetailOverview";
import { ProjectDesignApproach } from "@/components/projects/ProjectDesignApproach";
import { ProjectFacts } from "@/components/projects/ProjectFacts";
import { ProjectFeatureImage } from "@/components/projects/ProjectFeatureImage";
import { ProjectImageStory } from "@/components/projects/ProjectImageStory";
import { ProjectNextProject } from "@/components/projects/ProjectNextProject";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative bg-[#f2eee8]">
      <Header variant="solid" activeItem="projects" />

      <main id="main-content">
        <ProjectDetailHero project={project} />
        <ProjectDetailOverview project={project} />
        <ProjectFacts project={project} />
        <ProjectImageStory project={project} />
        <ProjectDesignApproach project={project} />
        <ProjectFeatureImage project={project} />
        <ProjectNextProject currentProject={project} projects={projects} />
      </main>
    </div>
  );
}
