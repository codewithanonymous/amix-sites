export type EcommerceProject = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  demoUrl: string;
  previewImage: string;
  tech: string[];
  features: string[];
  achievements: string[];
  accent: "blue" | "purple" | "cyan";
};

export const ecommerceProjects: EcommerceProject[] = [
  {
    slug: "cutiebox",
    name: "CutieBox",
    category: "Personalized Gifts",
    tagline: "Personalized Magazine & Gift Hamper Store",
    description:
      "A beautifully crafted e-commerce platform for personalized magazines and gift hampers. Features custom product builder, real-time preview, and seamless checkout experience.",
    demoUrl: "https://cutiebox.vercel.app/",
    previewImage: "/cutiebox-WEbpreview-img.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    features: [
      "Custom Product Builder",
      "Real-time Preview",
      "Gift Wrapping Options",
      "Order Tracking",
      "Wishlist & Favorites",
      "Mobile-First Design",
    ],
    achievements: [
      "95+ Lighthouse performance score",
      "Sub-2s page load time",
      "40% higher conversion vs previous site",
      "Seamless mobile checkout flow",
    ],
    accent: "purple",
  },
  {
    slug: "maison",
    name: "Maison",
    category: "Luxury Fashion",
    tagline: "Luxury Fashion E-Commerce Store",
    description:
      "An elevated luxury fashion e-commerce experience with editorial-grade product presentation, size guides, and a premium checkout flow designed for high-end buyers.",
    demoUrl: "https://maison-rose-six.vercel.app/",
    previewImage: "/maison-rose-web.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    features: [
      "Editorial Product Pages",
      "Advanced Filtering",
      "Size & Fit Guides",
      "Wishlist System",
      "Express Checkout",
      "Lookbook Gallery",
    ],
    achievements: [
      "Editorial-grade visual design",
      "60% lower cart abandonment",
      "Multi-currency support",
      "Premium unboxing experience integration",
    ],
    accent: "blue",
  },
  {
    slug: "shrikha-organics",
    name: "Shrikha Organics",
    category: "Organic Products",
    tagline: "Organic Products E-Commerce Store",
    description:
      "A clean, nature-inspired e-commerce platform for organic and natural products. Features ingredient transparency, subscription boxes, and eco-friendly packaging options.",
    demoUrl: "https://shrikha-organics.netlify.app/",
    previewImage: "/shrikha-organics-webPReview.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    features: [
      "Ingredient Transparency",
      "Subscription Boxes",
      "Eco-Packaging Options",
      "Product Reviews",
      "Auto-Reorder",
      "Loyalty Rewards",
    ],
    achievements: [
      "100% eco-friendly digital experience",
      "35% repeat purchase rate",
      "Integrated sustainability scoring",
      "Fast mobile-native checkout",
    ],
    accent: "cyan",
  },
];
