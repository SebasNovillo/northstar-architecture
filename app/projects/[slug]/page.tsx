import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
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

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const title = `${project.title} | Northstar Architecture`;
  const description = `${project.title} is a ${project.category.toLowerCase()} architecture project by Northstar Architecture in ${project.location}, ${project.status.toLowerCase()} in ${project.year}. ${project.statement}`;
  const projectImage = {
    url: project.image,
    alt: project.imageAlt,
  };

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/projects/${project.slug}`,
      siteName: "Northstar Architecture",
      type: "website",
      images: [projectImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [projectImage],
    },
  };
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

      <Footer />
    </div>
  );
}
