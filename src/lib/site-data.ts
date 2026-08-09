import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import person4 from "@/assets/person4.jpg";

export const company = {
  name: "Nexvora Technologies",
  tagline: "IT solutions built in India, scaled worldwide",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@nexvora.in",
  address: "4th Floor, Prestige Tech Park, Outer Ring Road, Bengaluru, Karnataka 560103",
  hours: "Mon – Sat · 10:00 AM – 7:00 PM IST",
  gst: "GSTIN 29ABCDE1234F1Z5",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    short: "Fast, SEO-ready corporate and e-commerce websites.",
    description:
      "Custom websites engineered for Indian and global audiences — Core Web Vitals optimised, multilingual ready and integrated with Razorpay, UPI and WhatsApp.",
    points: ["Corporate & e-commerce builds", "Headless CMS", "Razorpay / UPI checkout", "Core Web Vitals tuning"],
    image: project1,
  },
  {
    slug: "saas-development",
    title: "SaaS Product Development",
    short: "Multi-tenant platforms from MVP to scale.",
    description:
      "We design, build and operate subscription products — multi-tenant architecture, billing, analytics and role-based access, shipped in agile sprints.",
    points: ["MVP in 8–12 weeks", "Multi-tenant architecture", "Subscription billing", "Usage analytics"],
    image: project2,
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    short: "Agents and workflows that remove manual work.",
    description:
      "RAG chatbots, document intelligence and workflow agents wired into your CRM, ERP and WhatsApp Business API so your team stops doing repetitive work.",
    points: ["RAG chatbots", "Document intelligence", "WhatsApp automation", "CRM & ERP integrations"],
    image: project3,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "SEO, content and social that compounds.",
    description:
      "Technical SEO, regional content and social storytelling that grows organic demand across Google, Instagram and YouTube in Tier 1 and Tier 2 markets.",
    points: ["Technical & local SEO", "Content engine", "Social media growth", "Marketing automation"],
    image: project4,
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    short: "Paid media managed against ROAS, not vanity clicks.",
    description:
      "Google, Meta and LinkedIn campaigns with clean attribution, creative testing and landing pages built by the same team that runs the ads.",
    points: ["Google & Meta Ads", "Creative testing", "Server-side tracking", "ROAS dashboards"],
    image: project5,
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    short: "React Native and Flutter apps for Bharat scale.",
    description:
      "Low-bandwidth friendly apps with offline sync, vernacular UI and native performance on entry-level Android devices.",
    points: ["React Native & Flutter", "Offline-first sync", "Vernacular UI", "Play Store & App Store launch"],
    image: project1,
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "AWS and Azure infrastructure that stays up.",
    description:
      "Cloud migration, CI/CD pipelines, cost optimisation and 24×7 monitoring so releases are boring and predictable.",
    points: ["AWS / Azure migration", "CI/CD pipelines", "Cost optimisation", "24×7 monitoring"],
    image: project2,
  },
  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    short: "Research-led product and brand design.",
    description:
      "Discovery workshops, design systems and high-fidelity prototypes validated with real users before a line of code is written.",
    points: ["Discovery workshops", "Design systems", "Prototyping", "Usability testing"],
    image: project5,
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    short: "Dashboards leadership actually opens.",
    description:
      "Warehouse setup, ETL pipelines and BI dashboards that turn scattered spreadsheets into a single source of truth.",
    points: ["Data warehousing", "ETL pipelines", "BI dashboards", "Predictive models"],
    image: project3,
  },
];

export type Project = {
  slug: string;
  name: string;
  clientCompany: string;
  category: string;
  summary: string;
  details: string;
  image: string;
  result: string;
};

export const projects: Project[] = [
  {
    slug: "kirana-connect",
    name: "Kirana Connect Commerce",
    clientCompany: "Shubh Retail Pvt. Ltd.",
    category: "Website Development",
    summary: "D2C storefront for a 120-store grocery chain across Maharashtra.",
    details:
      "A headless storefront with hyperlocal delivery slots, UPI-first checkout and Marathi + English support, integrated with their existing Tally ERP.",
    image: project1,
    result: "3.2× online orders in 6 months",
  },
  {
    slug: "medisync-saas",
    name: "MediSync Clinic Cloud",
    clientCompany: "Arogya HealthTech",
    category: "SaaS Development",
    summary: "Multi-tenant clinic management SaaS used by 400+ doctors.",
    details:
      "Appointments, e-prescriptions, ABDM-compliant records and subscription billing, delivered from MVP to public launch in five months.",
    image: project2,
    result: "400+ clinics onboarded",
  },
  {
    slug: "logistics-ai",
    name: "RouteMind AI Dispatcher",
    clientCompany: "Bharat Freight Lines",
    category: "AI Automation",
    summary: "AI dispatch and document intelligence for a logistics operator.",
    details:
      "An agent that reads e-way bills, assigns fleets by route economics and answers driver queries on WhatsApp in Hindi.",
    image: project3,
    result: "37% lower dispatch time",
  },
  {
    slug: "edufirst-growth",
    name: "EduFirst Growth Engine",
    clientCompany: "EduFirst Academy",
    category: "Performance Marketing",
    summary: "Full-funnel paid acquisition for an ed-tech across 8 cities.",
    details:
      "Google and Meta campaigns with server-side tracking, regional creatives and a lead-scoring pipeline pushed into their CRM.",
    image: project4,
    result: "₹42 cost per qualified lead",
  },
  {
    slug: "paylite-app",
    name: "PayLite Merchant App",
    clientCompany: "Paylite Fintech",
    category: "Mobile Apps",
    summary: "Offline-first merchant payments app for small businesses.",
    details:
      "React Native app with QR collections, settlement reports and vernacular onboarding tuned for entry-level Android devices.",
    image: project5,
    result: "1.8L+ merchant installs",
  },
  {
    slug: "urban-brand",
    name: "Urban Threads Brand Growth",
    clientCompany: "Urban Threads Apparel",
    category: "Digital Marketing",
    summary: "SEO and content programme for a fashion D2C brand.",
    details:
      "Technical SEO cleanup, a 120-article content engine and influencer-led social storytelling across Instagram and YouTube.",
    image: project4,
    result: "5.6× organic sessions",
  },
];

export const processSteps = [
  {
    title: "Discovery & Audit",
    text: "We map your business goals, audit existing systems and define measurable outcomes before quoting a single hour.",
  },
  {
    title: "Strategy & Blueprint",
    text: "Architecture, scope, timeline and budget locked into a written blueprint you approve.",
  },
  {
    title: "Design & Prototype",
    text: "Clickable prototypes and a design system reviewed with your team, not delivered as a surprise.",
  },
  {
    title: "Build & Integrate",
    text: "Two-week agile sprints with demos, staging links and integrations into your existing stack.",
  },
  {
    title: "Test & Launch",
    text: "QA, security review, performance tuning and a controlled go-live with rollback plans.",
  },
  {
    title: "Grow & Support",
    text: "Monitoring, monthly reporting and an SLA-backed support retainer that keeps improving results.",
  },
];

export const testimonials = [
  {
    name: "Rohit Deshmukh",
    role: "Director, Shubh Retail Pvt. Ltd.",
    image: person1,
    rating: 5,
    quote:
      "Nexvora rebuilt our storefront in eleven weeks and orders tripled. They understood Indian buying behaviour better than any agency we spoke to.",
  },
  {
    name: "Ananya Iyer",
    role: "Co-founder, Arogya HealthTech",
    image: person2,
    rating: 5,
    quote:
      "From MVP to 400 clinics without a single major outage. Their sprint discipline and ABDM knowledge saved us months of rework.",
  },
  {
    name: "Karthik Nair",
    role: "CTO, Bharat Freight Lines",
    image: person3,
    rating: 5,
    quote:
      "The AI dispatcher pays for itself every month. Our drivers use it in Hindi on WhatsApp — zero training required.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Marketing Head, EduFirst Academy",
    image: person4,
    rating: 4,
    quote:
      "Cost per qualified lead dropped by more than half. Weekly reporting is honest, and they kill campaigns that don't work.",
  },
  {
    name: "Vikram Singh",
    role: "Founder, Urban Threads Apparel",
    image: person1,
    rating: 5,
    quote:
      "Organic traffic went from an afterthought to our largest channel. Genuinely a partner, not a vendor.",
  },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A marketing website takes 4–6 weeks, a SaaS MVP 8–12 weeks and AI automation pilots 3–5 weeks. You get a fixed timeline in the blueprint stage before work starts.",
  },
  {
    q: "What does a project cost?",
    a: "Websites start at ₹75,000, SaaS builds from ₹6,00,000 and marketing retainers from ₹40,000 per month. Every quote is itemised with no hidden charges; GST is billed separately.",
  },
  {
    q: "Do you work with startups as well as enterprises?",
    a: "Yes. Roughly half our clients are funded startups and the rest are established manufacturing, healthcare and retail companies across India.",
  },
  {
    q: "Who owns the code and data?",
    a: "You do. Full source code, cloud accounts and credentials are transferred to your organisation on final delivery.",
  },
  {
    q: "Do you provide support after launch?",
    a: "We offer SLA-backed support retainers covering monitoring, bug fixes, security patches and a monthly improvement backlog.",
  },
];

export const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    image: person1,
    bio: "16 years across product engineering and consulting. Leads client strategy and delivery governance.",
  },
  {
    name: "Priya Raghavan",
    role: "Co-Founder & COO",
    image: person2,
    bio: "Ex-enterprise programme manager. Runs operations, hiring and client success across all accounts.",
  },
  {
    name: "Aditya Sharma",
    role: "Head of Engineering",
    image: person3,
    bio: "Cloud architect specialising in multi-tenant SaaS, AWS and AI systems in production.",
  },
  {
    name: "Meera Nambiar",
    role: "Head of Growth",
    image: person4,
    bio: "Performance marketer managing ₹12Cr+ in annual ad spend across Google, Meta and LinkedIn.",
  },
];

export const milestones = [
  { year: "2016", title: "Founded in Bengaluru", text: "Two engineers, one rented desk and a first e-commerce client in Pune." },
  { year: "2018", title: "First SaaS product shipped", text: "Launched our first multi-tenant platform and grew the team to 14." },
  { year: "2020", title: "Remote-first across India", text: "Distributed teams in Pune, Hyderabad and Kochi supporting clients through the pandemic." },
  { year: "2022", title: "AI practice launched", text: "Dedicated automation unit delivering RAG and document intelligence systems." },
  { year: "2024", title: "Global clients", text: "Expanded delivery to clients in the UAE, Singapore and the UK." },
  { year: "2026", title: "160+ projects delivered", text: "A 60-person team across engineering, design and growth." },
];

export const stats = [
  { value: "160+", label: "Projects delivered" },
  { value: "60+", label: "Specialists in-house" },
  { value: "9 yrs", label: "In business" },
  { value: "4.9/5", label: "Average client rating" },
];
