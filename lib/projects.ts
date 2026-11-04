export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  role?: string;
  location?: string;
  categories: string[];
  tags: string[];
  shortDescription: string;
  overview: string;
  roleTitle?: string;
  roleDescription?: string;
  myRole: string[];
  keyFeatures: string[];
  tech: { name: string; color: string }[];
  challenges?: string;
  learned?: string;
  images: {
    hero: ProjectImage;
    gallery: ProjectImage[];
  };
  liveUrl: string;
  githubUrl?: string;
  liveButtonText?: string;
  liveMayBeUnreliable?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "generalsolusindo",
    title: "GeneralSolusindo Internal Portal",
    subtitle: "Centralized Work Applications Portal",
    role: "Frontend Developer",
    categories: ["Frontend", "UI/UX", "Responsive Web"],
    tags: ["HTML", "CSS", "JavaScript"],
    shortDescription:
      "An internal employee portal designed to provide quick access to company applications and daily operational resources.",
    overview:
      "The GeneralSolusindo Internal Portal is a web-based internal portal built to help employees access their daily work tools and company resources from a single, centralized interface. The portal displays a personalized time-based greeting, the current date, and organizes work applications by category — making it easier for staff to navigate their day-to-day needs without switching between multiple platforms.",
    roleTitle: "Frontend UI Development",
    myRole: [
      "Designed and built the complete frontend interface using HTML, CSS, and Vanilla JavaScript",
      "Implemented the time-based greeting system that changes based on the current time of day",
      "Structured and organized the application links by category (Operasional Bisnis, SDM & Kepegawaian)",
      "Built the sidebar navigation and responsive layout",
      "Deployed the project to Netlify",
    ],
    keyFeatures: [
      "Time-based greeting (Selamat pagi / siang / sore / malam)",
      "Live date display",
      "Centralized access to work applications (CRM, Inventaris, Izin & Cuti, HRD, Rekrutmen, and more)",
      "Categorized application layout (Operasional Bisnis, SDM & Kepegawaian)",
      "Sidebar navigation with Beranda and Aplikasi sections",
      "Application search bar",
      "Responsive interface",
    ],
    tech: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JavaScript", color: "yellow" },
    ],
    challenges:
      "One of the main challenges was organizing a large number of internal application links in a way that felt intuitive and not overwhelming. Deciding on the right information hierarchy — what to show on the home screen vs. the applications page — required careful thought about how employees would actually use the portal day-to-day.",
    learned:
      "Building this project taught me a lot about structuring real-world UI for internal tools. I learned how to implement time-based logic in JavaScript, think about user experience from a practical workplace perspective, and deliver a responsive interface without relying on any external frameworks.",
    images: {
      hero: {
        src: "/images/generalsolusindo-hero.png",
        alt: "GeneralSolusindo Internal Portal — homepage with time-based greeting and application links",
      },
      gallery: [
        {
          src: "/images/generalsolusindo-hero.png",
          alt: "Portal homepage showing time-based greeting and work application links",
          caption: "Portal Homepage",
        },
      ],
    },
    liveUrl: "https://fanciful-mousse-a47265.netlify.app/",
    githubUrl: "https://github.com/alfrdaann/generalsolusindo-portal",
  },
  {
    id: 2,
    slug: "inventory-management",
    title: "Inventory Management System",
    subtitle: "Stock Tracking & Borrowing Management Dashboard",
    role: "Full-Stack Developer",
    categories: ["Backend", "Database", "CRUD"],
    tags: ["Laravel", "PHP", "SQLite", "Git"],
    shortDescription:
      "A web-based inventory management system for managing categories, products, stock, borrowing, and inventory information.",
    overview:
      "Inventarisasi Barang is a full-stack inventory management system built with Laravel 11 and PHP. The system provides a comprehensive admin dashboard for managing product inventory, categories, and borrowing records. It features real-time stock tracking, low-stock alerts, and a visual stock-per-category chart — making it practical for small to medium inventory environments.",
    roleTitle: "Backend & Database Implementation",
    myRole: [
      "Built the backend using Laravel 11 with PHP",
      "Designed and implemented the SQLite database schema including relationships between items, categories, and borrowing records",
      "Developed the full CRUD operations for Kelola Barang, Kelola Kategori, and Kelola Peminjaman",
      "Implemented the Dashboard Admin with stats cards and Grafik Stok Per Kategori",
      "Built the \"Stok Menipis\" (low stock alert) feature with Update Stok action",
      "Deployed the project to Railway",
    ],
    keyFeatures: [
      "Dashboard Admin with total items, categories, and stock overview",
      "Low-stock alert system (Stok Menipis) with quick update action",
      "Stock per category bar chart (Grafik Stok Per Kategori)",
      "Complete item management (Kelola Barang) with CRUD",
      "Category management (Kelola Kategori) with CRUD",
      "Borrowing management (Kelola Peminjaman) with CRUD",
      "Database relationships between items, categories, and loans",
      "User authentication system",
    ],
    tech: [
      { name: "Laravel", color: "red" },
      { name: "PHP", color: "purple" },
      { name: "SQLite", color: "blue" },
      { name: "Git", color: "orange" },
    ],
    challenges:
      "The biggest challenge was designing a database schema that correctly handled the relationships between items, categories, and borrowing records — especially managing stock counts as items were borrowed and returned. Getting the Eloquent relationships right in Laravel and ensuring data integrity across operations required careful planning.",
    learned:
      "This project gave me my first real hands-on experience with Laravel and backend development. I learned how MVC architecture works in practice, how to use Eloquent ORM to work with a database, how to build CRUD operations, and how to think about data relationships. Deploying to Railway also taught me the basics of cloud deployment for PHP applications.",
    images: {
      hero: {
        src: "/images/inventory-dashboard.png",
        alt: "Inventory Management System — Dashboard Admin showing stock overview and low-stock alerts",
      },
      gallery: [
        {
          src: "/images/inventory-dashboard.png",
          alt: "Dashboard Admin with total items, categories, stock stats and low-stock alert table",
          caption: "Dashboard Overview",
        },
      ],
    },
    liveUrl: "https://inventarisasi-barang-production.up.railway.app/",
    githubUrl: "https://github.com/alfrdaann/inventarisasi-barang",
    liveMayBeUnreliable: true,
  },
  {
    id: 3,
    slug: "qeebee",
    title: "CV. QEE BEE",
    subtitle: "Company Profile & Custom Apparel Ordering System",
    role: "Full Website Development",
    location: "Sidoarjo, Indonesia",
    categories: ["Business Website"],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    shortDescription:
      "A responsive business website featuring an apparel catalog, production portfolio, and custom quotation request system integrated with Supabase.",
    overview:
      "CV. QEE BEE is a custom apparel and garment supplier based in Sidoarjo, Indonesia.\n\nThis project focuses on developing a modern digital platform to introduce the company, showcase apparel products, display production results, and simplify customer quotation requests.",
    roleTitle: "End-to-End Website Development",
    roleDescription:
      "Responsible for developing the website from the user interface to the implementation of its business features, ensuring a responsive and accessible experience across different devices.",
    myRole: [
      "Designed and developed the responsive company profile and apparel catalog from ground up using Next.js, React, and Tailwind CSS",
      "Built the interactive multi-step quotation request form capturing detailed apparel specifications, quantities, and materials",
      "Implemented database integration with Supabase for secure handling and storage of customer quotation submissions",
      "Integrated direct WhatsApp communication channels for quick customer consultations and order follow-ups",
      "Integrated Google Maps for interactive workshop location and navigation in Sidoarjo",
      "Optimized performance, SEO, accessibility, and responsive layouts across desktop, tablet, and mobile devices",
    ],
    keyFeatures: [
      "Company Profile — Presents company information, business identity, and services.",
      "Digital Product Catalog — Showcases apparel categories including T-shirts, jackets, jerseys, uniforms, polo shirts, hats, bags, vests, and other custom products.",
      "Production Portfolio — Displays examples of apparel products and production results.",
      "Custom Quotation Request Form — Allows customers to submit contact information, WhatsApp number, email, company or organization, product category, product model, order quantity, required date, material selection, color selection, size specifications, and logo application/finishing requirements.",
      "Supabase Database Integration — Uses Supabase on the backend for managing quotation submission data securely with server-side validation.",
      "WhatsApp Integration — Provides customers with a direct communication channel for inquiries and quotation follow-ups.",
      "Production Workflow — Displays the transparent 7-step ordering flow (Consultation → Product Selection → Specification → Production Preparation → Sewing → Finishing & Quality Control → Delivery).",
      "Google Maps Integration — Displays the company's workshop location and interactive directions in Sidoarjo.",
    ],
    tech: [
      { name: "Next.js", color: "white" },
      { name: "React", color: "cyan" },
      { name: "TypeScript", color: "blue" },
      { name: "Tailwind CSS", color: "sky" },
      { name: "Supabase", color: "emerald" },
    ],
    challenges:
      "Developing an end-to-end custom apparel quotation system that captures comprehensive product specifications (materials, colors, sizes, finishing, and quantities) while maintaining a clean, intuitive multi-section form experience. Ensuring reliable data persistence with Supabase alongside seamless WhatsApp communication for customer follow-up.",
    learned:
      "Deepened practical experience with modern Next.js App Router and Server Actions, designing structured database schemas in Supabase, managing interactive client form states with real-time feedback, and building a high-conversion company profile for a real garment manufacturer.",
    images: {
      hero: {
        src: "/images/qeebee-hero.png",
        alt: "CV. QEE BEE — Company profile homepage and custom apparel hero section",
      },
      gallery: [
        {
          src: "/images/qeebee-hero.png",
          alt: "CV. QEE BEE Homepage Hero Section with apparel display and quick action buttons",
          caption: "Homepage Hero — Solusi Apparel Custom untuk Berbagai Kebutuhan",
        },
        {
          src: "/images/qeebee-quotation-form.png",
          alt: "CV. QEE BEE Interactive Quotation Request Form for custom apparel orders",
          caption: "Interactive Quotation Request Form — Customer identity, product specifications, and order details",
        },
        {
          src: "/images/qeebee-production.png",
          alt: "CV. QEE BEE 7-Step Production Workflow from consultation to delivery",
          caption: "Production Workflow — 7-step ordering process from consultation to delivery",
        },
        {
          src: "/images/qeebee-catalog.png",
          alt: "CV. QEE BEE Custom Apparel Showcase and Consultation Call to Action",
          caption: "Custom Apparel Showcase — Digital product categories and WhatsApp consultation CTA",
        },
        {
          src: "/images/qeebee-location.png",
          alt: "CV. QEE BEE Workshop Location with Google Maps integration in Sidoarjo",
          caption: "Workshop Location — Integrated Google Maps and directions in Sidoarjo, East Java",
        },
      ],
    },
    liveUrl: "https://qeebee-website.vercel.app/",
    githubUrl: "https://github.com/alfrdaann/qeebee-website",
    liveButtonText: "Live Website",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
