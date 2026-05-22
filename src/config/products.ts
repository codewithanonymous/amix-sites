/**
 * AMIX SITES — Live Product Embeds
 * Swap any `embedUrl` here to point at your real demo — no component edits needed.
 */
export type Product = {
  id: string;
  title: string;
  tagline: string;
  features: string[];
  embedUrl: string;
  thumbnail: string;
  accent: "blue" | "purple" | "cyan";
};

export const products: Product[] = [
  {
    id: "restaurant-qr",
    title: "Restaurant QR Ordering",
    tagline: "Scan. Order. Serve.",
    features: ["QR Menu", "Table Ordering", "Live Kitchen Status", "Billing", "Waiter App", "Reports"],
    embedUrl: "https://demo.example.com/restaurant-qr",
    thumbnail:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1280&q=70",
    accent: "blue",
  },
  {
    id: "hrm",
    title: "HR Management Dashboard",
    tagline: "Your people, one panel.",
    features: ["Employee Directory", "Attendance", "Payroll", "Leave Workflow", "Performance", "Analytics"],
    embedUrl: "https://demo.example.com/hrm",
    thumbnail:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1280&q=70",
    accent: "purple",
  },
  {
    id: "school",
    title: "School Management ERP",
    tagline: "From classroom to admin office.",
    features: ["Student Portal", "Attendance", "Fees & Receipts", "Parent App", "Timetable", "Exams"],
    embedUrl: "https://demo.example.com/school-erp",
    thumbnail:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1280&q=70",
    accent: "cyan",
  },
];
