export type Showcase = {
  title: string;
  highlights: string[];
  ctaLabel: string;
  sections: { title: string; description: string; items: string[] }[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  accent: "blue" | "purple" | "cyan";
  tech: string[];
  features: string[];
  benefits: string[];
  demoUrl?: string;
  showcase?: Showcase;
};

export const projects: Project[] = [
  {
    slug: "e-commerce-website",
    name: "E-Commerce Website",
    tagline: "Premium online stores that convert visitors into customers.",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1600&q=70",
    accent: "blue",
    tech: ["Next.js", "Stripe", "TypeScript", "Tailwind", "PostgreSQL"],
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Checkout System",
      "Payment Integration",
      "Order Management",
      "Customer Accounts",
      "Admin Dashboard",
      "Analytics",
    ],
    benefits: [
      "Mobile-optimized checkout that lifts conversion",
      "Built-in SEO + sitemap + JSON-LD product schema",
      "Plug-and-play payments (Stripe, Razorpay, PayPal)",
      "Scales from 10 to 10,000+ SKUs",
    ],
    demoUrl: "https://maison-rose-six.vercel.app/",
  },
  {
    slug: "restaurant-pos",
    name: "Restaurant POS Software",
    tagline: "QR-first ordering, kitchen display, billing — one operating system for your restaurant.",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=70",
    accent: "purple",
    tech: ["React", "Node.js", "Supabase", "WebSockets", "Tailwind"],
    features: [
      "QR Menu & Table Ordering",
      "Kitchen Display System",
      "Billing & Invoicing",
      "Waiter App",
      "Inventory Tracking",
      "Customer Loyalty",
      "Daily Reports",
      "Multi-outlet Support",
    ],
    benefits: [
      "Cuts order time by ~40% with QR self-ordering",
      "Real-time kitchen sync — no paper tickets",
      "Owner dashboard works from anywhere",
      "Reduces billing errors to near-zero",
    ],
    demoUrl: "https://dineinflowd.vercel.app/login",
  },
  {
    slug: "school-management",
    name: "School Management Software",
    tagline: "From classroom to admin office — one ERP for your entire campus.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=70",
    accent: "cyan",
    tech: ["React", "Node.js", "MongoDB", "AWS", "TypeScript"],
    features: [
      "Student Management",
      "Attendance Tracking",
      "Exam Management",
      "Timetable",
      "Parent Portal",
      "Fee Management",
      "Teacher Dashboard",
      "Reports",
    ],
    benefits: [
      "Halves admin workload across departments",
      "Parents stay informed via app + SMS",
      "Centralized records — exportable any time",
      "Works across multiple branches",
    ],
    demoUrl: "https://schooldemo-amixsites.vercel.app/",
  },
  {
    slug: "hrm-software",
    name: "HRM Software",
    tagline: "Your people, your processes, your dashboards — all in one panel.",
    category: "HR Tech",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=70",
    accent: "blue",
    tech: ["Next.js", "Postgres", "Prisma", "Tailwind", "AWS"],
    features: [
      "Employee Records",
      "Attendance System",
      "Leave Management",
      "Payroll",
      "Recruitment",
      "Performance Tracking",
      "Department Management",
      "Reports",
    ],
    benefits: [
      "Replaces 5+ spreadsheets with one source of truth",
      "Automated payroll & payslip generation",
      "Self-serve leave + attendance for staff",
      "Role-based access for managers and HR",
    ],
    showcase: {
      title: "Enterprise HR Solution",
      highlights: ["Employee Management", "Attendance Tracking", "Leave Management", "Payroll Processing"],
      ctaLabel: "Explore Features",
      sections: [
        {
          title: "Product Screens",
          description: "A unified workspace for HR teams, managers, and employees.",
          items: ["Employee directory with smart filters", "Manager approval inbox", "Self-serve employee portal", "Payroll run dashboard"],
        },
        {
          title: "Core Modules",
          description: "Everything an HR team needs, modular and role-aware.",
          items: ["Attendance with geo + biometric sync", "Leave workflows with policies", "Payroll, payslips & tax reports", "Performance reviews & OKRs"],
        },
        {
          title: "Workflow",
          description: "How a leave request flows end-to-end.",
          items: ["Employee submits request", "Manager approves in inbox", "HR auto-syncs to payroll", "Notifications to all stakeholders"],
        },
      ],
    },
  },
  {
    slug: "fee-management",
    name: "Fee Management Software",
    tagline: "Online fee collection, reminders, receipts — built for schools and tuition centres.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=70",
    accent: "purple",
    tech: ["React", "Node.js", "Supabase", "Razorpay", "Tailwind"],
    features: [
      "Fee Collection",
      "Online Payments",
      "Due Reminders",
      "Receipt Generation",
      "Student Accounts",
      "Reports",
      "Payment History",
      "Dashboard",
    ],
    benefits: [
      "Collect fees online via UPI, cards, net banking",
      "Automatic due reminders via SMS + email",
      "PDF receipts generated instantly",
      "Cuts manual collection effort by 70%",
    ],
    showcase: {
      title: "Fee Management Suite",
      highlights: ["Fee Collection", "Online Payments", "Due Tracking", "Automated Receipts"],
      ctaLabel: "See Module Overview",
      sections: [
        {
          title: "Collection & Payments",
          description: "Accept fees the way parents prefer to pay.",
          items: ["UPI, cards, net banking, wallets", "Partial payments & installments", "Auto-reconciliation with ledger", "Concessions & scholarships"],
        },
        {
          title: "Due Tracking",
          description: "Never chase a payment manually again.",
          items: ["Automated SMS + email reminders", "Class / batch level dashboards", "Parent payment history", "Aging reports for finance"],
        },
        {
          title: "Receipts & Reports",
          description: "Compliance-ready paperwork, generated instantly.",
          items: ["Branded PDF receipts", "GST & tax-ready exports", "Daily collection reports", "Audit logs for every transaction"],
        },
      ],
    },
  },
  {
    slug: "saas-product-development",
    name: "SaaS Product Development",
    tagline: "From MVP to scaled platform — multi-tenant SaaS built the right way.",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=70",
    accent: "cyan",
    tech: ["Next.js", "TypeScript", "Postgres", "Stripe", "AWS"],
    features: [
      "Multi-Tenant Architecture",
      "Subscription Billing",
      "User Management",
      "Analytics",
      "API Integration",
      "Cloud Hosting",
      "Security Management",
      "Admin Controls",
    ],
    benefits: [
      "Production-grade architecture from day one",
      "Stripe-powered subscriptions + dunning",
      "RBAC + audit logs out of the box",
      "Built to scale across tenants and regions",
    ],
    demoUrl: "https://demo.example.com/saas",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
