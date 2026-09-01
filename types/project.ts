export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectImageStory = readonly [
  ProjectImage,
  ProjectImage,
  ProjectImage,
  ProjectImage,
];

export type ProjectDesignApproach = {
  statement: string;
  paragraphs: readonly [string, string];
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  year: number;
  image: string;
  imageAlt: string;
  featured: boolean;
  statement: string;
  description: string[];
  area: string;
  scope: string;
  status: string;
  imageStory: ProjectImageStory;
  designApproach: ProjectDesignApproach;
  featureImage: ProjectImage;
};
