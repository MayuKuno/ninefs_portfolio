export interface CertificationGroup {
  title: string;
  sparkle?: string;
  badges: {
    badge: string;
    alt: string;
    credlyUrl: string;
  }[];
}

export const certificationGroups: CertificationGroup[] = [
  {
    title: "AWS Certification",
    sparkle: "AWS All Certifications Holder!⭐️",
    badges: [
      { badge: "cpf.png", alt: "AWS Certified Professional", credlyUrl: "https://www.credly.com/badges/48ea7c8c-9bee-4e25-8fc0-57e0e0404cd1/public_url" },
      { badge: "aif.png", alt: "AWS Certified Professional", credlyUrl: "https://www.credly.com/badges/855376f2-19c9-4172-9fdf-0556710f5f7a/public_url" },
      { badge: "dea.png", alt: "AWS Certified Professional", credlyUrl: "https://www.credly.com/badges/e23c9b4e-b421-4cdc-9c69-27d974456938/public_url" },
      { badge: "dpa.png", alt: "AWS Certified Professional", credlyUrl: "https://www.credly.com/badges/56c10739-3382-4394-948f-91399d68dc1e/public_url" },
      { badge: "mla.png", alt: "AWS Certified Professional", credlyUrl: "https://www.credly.com/badges/92ba66c6-a0bd-4b3f-9e9a-baf310312b3e/public_url" },
      { badge: "saa.png", alt: "AWS Certified Professional", credlyUrl: "https://www.credly.com/badges/63fa15cc-0f85-4755-a762-75890eb31aad/public_url" },
      { badge: "soa.png", alt: "AWS Certified Professional", credlyUrl: "https://www.credly.com/badges/bc77f086-b783-4403-82e3-0e5e900ff347/public_url" },
      { badge: "ans.png", alt: "AWS Certified Professional", credlyUrl: "https://www.credly.com/badges/0d79ed63-884a-429a-9ef1-99d61eba43bf/public_url" },
      { badge: "mls.png", alt: "AWS Certified Professional", credlyUrl: "https://www.credly.com/badges/92ba66c6-a0bd-4b3f-9e9a-baf310312b3e/public_url" },
      { badge: "scp.png", alt: "AWS Certified Professional", credlyUrl: "https://www.credly.com/badges/9f63d6ec-35c8-4b85-89a4-681bd86b175c/public_url" },
      { badge: "sap.png", alt: "AWS Certified Professional", credlyUrl: "https://www.credly.com/badges/20eb0a2e-4a74-4238-a2c0-d2b063cd91d4/public_url" },
      { badge: "dop.png", alt: "AWS Certified Professional", credlyUrl: "https://www.credly.com/badges/242d733e-1b1a-412c-9956-29a1958b2817/public_url" },
    ],
  },
  {
    title: "Scrum Master",
    badges: [
      { badge: "psm1.png", alt: "AWS Certified Professional", credlyUrl: "https://www.credly.com/badges/30fafc12-bded-4836-af86-a8ef36a9ded4/public_url" },
    ],
  },
];
