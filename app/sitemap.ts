import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { getAbsoluteUrl } from "@/lib/site-url";

const staticRoutes = ["", "projects", "services", "about", "contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: getAbsoluteUrl(route),
  }));
  const projectEntries = projects.map((project) => ({
    url: getAbsoluteUrl(`projects/${project.slug}`),
  }));

  return [...staticEntries, ...projectEntries];
}
