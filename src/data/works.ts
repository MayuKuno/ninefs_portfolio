export interface TechStack {
  name: string;
  category: string;
}

export interface WorkImage {
  image: string;
  is_main: boolean;
}

export interface Work {
  id: number;
  title: string;
  description: string;
  status: number;
  readme_url: string;
  website_url: string;
  features: string;
  tech_stacks: TechStack[];
  images: WorkImage[];
}

export const works: Work[] = [
  {
    id: 1,
    title: "My Portfolio",
    description:
      "A personal portfolio showcasing my work, skills, and experience as a software engineer.",
    status: 1,
    readme_url: "https://github.com/MayuKuno/ninefs_portfolio",
    website_url: "https://ninefsportfolio.vercel.app",
    features: "・Tags\n・Responsive UI\n・Pride Mode",
    tech_stacks: [
      { name: "Astro", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Sass", category: "Frontend" },
      { name: "Vercel", category: "Hosting" },
    ],
    images: [
      { image: "portfolio.png", is_main: true },
      { image: "portfolio_2.gif", is_main: false },
    ],
  },
  {
    id: 2,
    title: "Pride Frame",
    description:
      "An empowering web app where users can upload photos, add vibrant pride-themed frames, and share their creations on social media.",
    status: 1,
    readme_url: "https://github.com/MayuKuno/pride-frame",
    website_url: "https://prideframe.com/",
    features:
      "・Create Pride Profile Pictures  \n・Upload Custom Pride Frames  \n・Browse and Share in the Gallery",
    tech_stacks: [
      { name: "Vue 3", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Vuetify", category: "Frontend" },
      { name: "AWS Lambda", category: "Backend" },
      { name: "AWS API Gateway", category: "Backend" },
      { name: "Amazon S3", category: "Storage" },
      { name: "DynamoDB", category: "Database" },
      { name: "CloudFront", category: "Hosting" },
      { name: "Serverless Framework", category: "Deployment" },
      { name: "GitHub Actions", category: "DevOps" },
    ],
    images: [
      { image: "prideframe.gif", is_main: true },
      { image: "prideframe_2.gif", is_main: false },
    ],
  },
  {
    id: 3,
    title: "How would you step in?",
    description:
      "A scenario-based learning app about active bystandership and microaggressions. Users read realistic workplace/everyday scenarios, choose how they'd respond, and see feedback on their choice along with how other users answered.",
    status: 1,
    readme_url: "https://github.com/MayuKuno/bystander-app",
    website_url: "https://bystander-app.vercel.app",
    features:
      "・Scenario-Based Learning on Active Bystandership\n・Diagnosis Mode for Your Response Tendency\n・Bilingual Japanese / English Support",
    tech_stacks: [
      { name: "Nuxt 3", category: "Frontend" },
      { name: "Vue 3", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Nuxt i18n", category: "Frontend" },
      { name: "Nitro", category: "Backend" },
      { name: "Drizzle ORM", category: "Database" },
      { name: "libSQL", category: "Database" },
      { name: "Turso", category: "Database" },
      { name: "Vercel", category: "Hosting" },
    ],
    images: [{ image: "default_image.png", is_main: true }],
  },
];

export const publishedWorks: Work[] = works.filter((w) => w.status === 1);

export function taggedWorks(tag: string): Work[] {
  return publishedWorks.filter((w) =>
    w.tech_stacks.some((t) => t.name === tag),
  );
}

export function findWork(id: string | number): Work | undefined {
  return works.find((w) => String(w.id) === String(id));
}

export function mainImage(work: Work): WorkImage | undefined {
  return work.images.find((img) => img.is_main);
}

export function formatFeatures(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}
