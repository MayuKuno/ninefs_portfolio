export interface ExperienceRole {
  role: string;
  description: string;
  skillsGained: string[];
}

export interface ExperienceEntry {
  icon: "building" | "graduation-cap";
  company: string;
  badges: ("current" | "main" | "sub")[];
  dateRange: string;
  roles: ExperienceRole[];
}

export const experience: ExperienceEntry[] = [
  {
    icon: "building",
    company: "Works Human Intelligence",
    badges: ["current", "main"],
    dateRange: "2021 Nov-\nPresent",
    roles: [
      {
        role: "Full-Stack Developer",
        description:
          "I started working as a full-stack developer, marking the beginning of my career as a software engineer. I contributed to both frontend and backend development of an enterprise HR system, focusing on improving efficiency, scalability, and user experience. I served as the primary developer for a core product that consolidates HR job processes across multiple internal systems and enables scheduled, automated execution. This product significantly improved operational efficiency and reduced manual effort.",
        skillsGained: [
          "AWS (Lambda, API Gateway, S3, DynamoDB, CloudWatch etc.. & All Certifications)",
          "Full-Stack Web Development (Vue, Typescript)",
          "Serverless Development",
        ],
      },
    ],
  },
  {
    icon: "building",
    company: "Tokyo Rainbow Pride",
    badges: ["current", "sub"],
    dateRange: "2024 Nov-\nPresent",
    roles: [
      {
        role: "Sponsorship Team Member",
        description:
          "Working with the Sponsorship Team at Tokyo Rainbow Pride to promote LGBTQ+ inclusion and visibility. Responsible for communicating with partner companies and organizations, managing sponsorship proposals, and building long-term relationships through meaningful external collaborations.",
        skillsGained: ["Business Communication", "Sales & Partnership Management"],
      },
    ],
  },
  {
    icon: "building",
    company: "Rakuten",
    badges: [],
    dateRange: "2018 Oct-\n2021 Oct",
    roles: [
      {
        role: "Digital Advertising Sales – LinkShare Japan (2018 Oct – 2020 Mar)",
        description:
          "Worked as a sales representative at LinkShare Japan, a digital advertising agency under Rakuten Group. Focused on affiliate marketing, providing consultation and digital ad solutions to corporate clients. Gained practical experience in proposal writing, client communication, and media strategy.",
        skillsGained: ["Digital Marketing & Advertising", "Sales & Negotiation"],
      },
      {
        role: "Quality Management – Rakuten Mobile (2020 Apr – 2021 Oct)",
        description:
          "Transferred internally to Rakuten Mobile and worked in the Quality Management department. Our department led a customer-centric quality improvement initiative based on VOC (Voice of Customer) data. We established a Quality Management Committee involving executive leadership and delivered regular reports to drive continuous service improvement.",
        skillsGained: [
          "Cross-Functional Communication",
          "Project Management",
          "Executive Stakeholder Communication",
        ],
      },
    ],
  },
  {
    icon: "graduation-cap",
    company: "Akita International University",
    badges: [],
    dateRange: "2018 Aug",
    roles: [
      {
        role: "Bachelor's Degree in Global Business",
        description:
          "After graduating from high school in Canada, I pursued liberal arts with a concentration in global business. The program emphasized cross-cultural understanding and global perspectives, which continue to inform my communication and teamwork today.",
        skillsGained: ["Cross-Cultural Communication", "Critical Thinking"],
      },
    ],
  },
];
