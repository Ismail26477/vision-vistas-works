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
  name: "D-Code Studio",
  tagline: "Digital growth & technology solutions",
  phone: "+91 70205 03794",
  whatsapp: "917020503794",
  email: "dcodestudio.agency@gmail.com",
  website: "dcodestudio.agency",
  address: "Nagpur, Maharashtra, India",
  hours: "Mon – Sat · 10:00 AM – 7:00 PM IST",
  gst: "Full-service digital transformation & web engineering agency",
  instagram: "https://www.instagram.com/dcodestudio.agency",
  linkedin: "https://www.linkedin.com/company/d-code-studio",
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
    slug: "web-engineering",
    title: "Web Engineering",
    short: "Custom web applications and blazing-fast platforms.",
    description:
      "Custom web applications, fast WordPress platforms and React.js / Node.js systems engineered for speed, stability and conversion.",
    points: [
      "Custom web applications",
      "Fast WordPress platforms",
      "React.js / Node.js systems",
      "High-converting landing pages",
    ],
    image: project1,
  },
  {
    slug: "branding-identity",
    title: "Branding & Identity",
    short: "Brand systems and conversion-focused UI/UX.",
    description:
      "Brand identity systems, visual style guides and corporate collateral, paired with conversion-focused UI/UX prototyping validated before build.",
    points: ["Brand identity systems", "Visual style guides", "Corporate collateral", "UI/UX prototyping"],
    image: project5,
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    short: "Meta and Google campaigns run against ROAS.",
    description:
      "Meta Ads (Facebook / Instagram) and Google PPC search and display campaigns, built around lead generation funnels, advanced retargeting and ruthless ROAS optimisation.",
    points: ["Meta Ads (FB / IG)", "Google PPC search & display", "Lead generation funnels", "ROAS optimisation"],
    image: project4,
  },
  {
    slug: "seo-organic-growth",
    title: "SEO & Organic Growth",
    short: "Technical SEO, content and local search.",
    description:
      "Technical on-page and off-page SEO, content architecture, local search optimisation and social brand management that compounds month after month.",
    points: ["On-page & off-page SEO", "Content architecture", "Local search optimisation", "Social brand management"],
    image: project3,
  },
  {
    slug: "ai-workflows",
    title: "AI Workflows & Automation",
    short: "AI lead routing and support automation.",
    description:
      "Custom AI lead routing, conversational support bots, automated data operations and process streamlining that remove manual work from your team's day.",
    points: ["AI lead routing", "Conversational support bots", "Automated data operations", "Process streamlining"],
    image: project3,
  },
  {
    slug: "custom-crm",
    title: "Custom CRM Development",
    short: "Bespoke WhatsApp-integrated sales CRMs.",
    description:
      "Bespoke WhatsApp API integration, multi-channel lead scoring, sales pipelines and operations dashboards — built around how your team actually sells.",
    points: ["WhatsApp API integration", "Multi-channel lead scoring", "Sales pipelines", "Operations dashboards"],
    image: project2,
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    short: "Storefronts, payments and cart recovery.",
    description:
      "E-commerce storefronts with payment gateway integration, UPI-first checkout and abandoned cart recovery automation for Indian retail brands.",
    points: ["E-commerce storefronts", "Payment gateway integration", "Abandoned cart recovery", "Catalogue operations"],
    image: project1,
  },
  {
    slug: "booking-lead-funnels",
    title: "Booking & Lead Funnels",
    short: "Direct booking engines and enquiry funnels.",
    description:
      "Direct booking engines, patient and student acquisition funnels, and automated follow-up sequences that convert enquiries while your team sleeps.",
    points: ["Direct booking engines", "Acquisition funnels", "Automated follow-ups", "Enquiry routing"],
    image: project5,
  },
  {
    slug: "analytics-tracking",
    title: "Analytics & Tracking",
    short: "Clean attribution and operations dashboards.",
    description:
      "Server-side tracking, Google Analytics 4 setup and live operations dashboards so every rupee of spend can be traced to pipeline and revenue.",
    points: ["GA4 & server-side tracking", "Conversion attribution", "Live dashboards", "KPI reporting"],
    image: project2,
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
    slug: "grabdeal-crm",
    name: "GrabDeal CRM — SaaS & Sales Automation",
    clientCompany: "GrabDeal Enterprise",
    category: "Custom CRM Development",
    summary: "Cloud CRM with embedded WhatsApp automation for inbound sales.",
    details:
      "Engineered a custom cloud CRM with embedded WhatsApp API automation to centralise inbound sales inquiries, standardise team lead handling and track live pipeline activity. Tech stack: React.js, Node.js, MongoDB, WhatsApp API, Tailwind CSS.",
    image: project2,
    result: "300% faster inquiry response · +45% lead conversion",
  },
  {
    slug: "bright-reality",
    name: "Bright Reality International — Real Estate Platform",
    clientCompany: "Bright Reality International",
    category: "Web Engineering",
    summary: "Property display engine with automated inquiry routing.",
    details:
      "Built a high-converting property display engine and lead capture framework linked directly with automated inquiry routing and targeted performance campaigns. Tech stack: WordPress, PHP, Meta Ads, Google Analytics, Figma.",
    image: project1,
    result: "150+ monthly qualified leads · 65% mobile engagement growth",
  },
  {
    slug: "gode-engineering",
    name: "Gode Engineering — Industrial Product Showcase",
    clientCompany: "Gode Engineering",
    category: "Web Engineering",
    summary: "Legacy catalogue rebuilt as a modern industrial portal.",
    details:
      "Re-engineered a static legacy catalogue into a modern industrial web portal complete with technical spec downloads and automated Request For Quote (RFQ) handling. Tech stack: HTML5, CSS3, JavaScript, Laravel, technical SEO engine.",
    image: project3,
    result: "+200% inbound RFQ growth · 4 new states",
  },
  {
    slug: "hospitality-booking",
    name: "Direct Booking Engine — Hospitality",
    clientCompany: "Deccan Hospitality Group",
    category: "Booking & Lead Funnels",
    summary: "Direct booking engine and guest management portal.",
    details:
      "A commission-free booking engine, guest management portal and localised search marketing programme that shifted demand away from OTAs.",
    image: project5,
    result: "Direct bookings overtook OTA channels",
  },
  {
    slug: "clinic-funnels",
    name: "Patient Acquisition Funnels — Healthcare",
    clientCompany: "Bloom Skin Clinics",
    category: "AI Workflows & Automation",
    summary: "Patient booking funnel with WhatsApp reminder automation.",
    details:
      "Patient booking funnels, a clinical enquiry portal and compliant digital marketing, wired to automated WhatsApp appointment reminders.",
    image: project4,
    result: "Sharp drop in appointment no-shows",
  },
  {
    slug: "admission-bot",
    name: "Admission Counselling Bot — Education",
    clientCompany: "Vidya Global School",
    category: "AI Workflows & Automation",
    summary: "Student acquisition funnel with an AI counselling bot.",
    details:
      "A student acquisition funnel, LMS portal integration and an automated admission counselling bot that handles first response around the clock.",
    image: project3,
    result: "Counsellors speak only to qualified parents",
  },
];

export const industries = [
  { title: "Real Estate", text: "Property display portals, lead routing CRMs and automated follow-up funnels." },
  { title: "Hospitality", text: "Direct booking engines, guest management portals and localised search marketing." },
  { title: "Healthcare", text: "Patient booking funnels, clinical portals and compliant digital marketing stacks." },
  { title: "Education", text: "Student acquisition funnels, LMS portals and automated admission counselling bots." },
  { title: "Retail & E-Commerce", text: "Storefronts, payment gateway integration and abandoned cart recovery." },
  { title: "Manufacturing & B2B", text: "Industrial digital catalogues, spec databases and automated RFQ workflows." },
];

export const coreValues = [
  {
    title: "Innovation-First",
    text: "Integrating high-performance web frameworks, custom AI interfaces and scalable marketing stacks tailored to business models.",
  },
  {
    title: "Client-Centric",
    text: "Designing custom technical architectures tailored directly to organisational goals, operational workflows and end-user needs.",
  },
  {
    title: "Measurable ROI",
    text: "Focusing ruthlessly on key performance indicators: lead velocity, user conversion rates and reduced customer acquisition costs.",
  },
];

export const processSteps = [
  { title: "Discovery", text: "Objectives, timeline and scope definition agreed in writing before work starts." },
  { title: "Analysis", text: "Market research, persona mapping and specification planning." },
  { title: "Strategy", text: "Stack selection and roadmap architectural design." },
  { title: "UI / UX", text: "High-fidelity wireframing and prototype validation." },
  { title: "Engineering", text: "Scalable front-end and robust back-end build." },
  { title: "QA & Testing", text: "Responsive checks, security review and speed audits." },
  { title: "Deployment", text: "Server configuration, analytics setup and launch." },
  { title: "Optimization", text: "Continuous iteration and performance scaling." },
];

export const testimonials = [
  {
    name: "Managing Director",
    role: "Bright Reality International",
    image: person3,
    rating: 5,
    quote:
      "D-Code Studio restructured our entire web and lead management pipeline. The custom platform and automated workflows significantly improved our client acquisition efficiency.",
  },
  {
    name: "Operations Lead",
    role: "GrabDeal Enterprise",
    image: person1,
    rating: 5,
    quote:
      "The CRM engineering provided by D-Code Studio gave us full control over our sales team's daily activity. Their team built an intuitive system tailored to our exact process.",
  },
  {
    name: "Rahul Chowdhury",
    role: "COO, Gode Engineering",
    image: person3,
    rating: 5,
    quote:
      "Our legacy catalogue became a proper industrial portal. RFQs now arrive with complete specs, no more phone tag.",
  },
  {
    name: "Imran Shaikh",
    role: "Director, Deccan Hospitality Group",
    image: person1,
    rating: 5,
    quote:
      "Direct bookings finally beat the OTAs. The booking engine is fast, clean and our front desk actually enjoys using it.",
  },
  {
    name: "Neha Agarwal",
    role: "Founder, Bloom Skin Clinics",
    image: person4,
    rating: 5,
    quote:
      "Appointment no-shows dropped sharply after the WhatsApp reminder automation went live. Simple idea, brilliant execution.",
  },
  {
    name: "Divya Menon",
    role: "Principal, Vidya Global School",
    image: person2,
    rating: 5,
    quote:
      "The admission funnel and counselling bot handle the first response at 11 pm. Our counsellors only speak to serious parents.",
  },
  {
    name: "Priyanka Joshi",
    role: "Head of Digital, Sahyadri Realty",
    image: person2,
    rating: 5,
    quote:
      "Our property portal now routes every enquiry automatically. Site visits booked per month went up 2.4x in one quarter.",
  },
  {
    name: "Sandeep Rao",
    role: "VP Sales, NovaMart Retail",
    image: person1,
    rating: 5,
    quote:
      "Full visibility of the sales floor at last. Response time to inbound leads is now minutes, not hours.",
  },
  {
    name: "Aakash Patel",
    role: "Founder, FinEdge Advisors",
    image: person3,
    rating: 5,
    quote:
      "Cost per acquisition fell 38% in the first 90 days while lead quality improved. They cut what didn't work, fast.",
  },
  {
    name: "Shruti Bansal",
    role: "Brand Lead, Aarambh Foods",
    image: person2,
    rating: 5,
    quote:
      "Design, build and campaigns from one team meant no finger-pointing. Launch happened on the exact promised date.",
  },
  {
    name: "Fatima Qureshi",
    role: "Marketing Manager, Urban Threads Apparel",
    image: person4,
    rating: 4,
    quote:
      "Abandoned cart recovery alone paid for the whole engagement within two months. Reporting is refreshingly honest.",
  },
  {
    name: "Karthik Nair",
    role: "CTO, Bharat Freight Lines",
    image: person3,
    rating: 5,
    quote:
      "The AI workflow pays for itself every month. Our drivers use it in Hindi on WhatsApp — zero training required.",
  },
  {
    name: "Ananya Iyer",
    role: "Co-founder, Arogya HealthTech",
    image: person2,
    rating: 5,
    quote:
      "From prototype to production without a single major outage. Their sprint discipline saved us months of rework.",
  },
  {
    name: "Rohit Deshmukh",
    role: "Director, Shubh Retail Pvt. Ltd.",
    image: person1,
    rating: 5,
    quote:
      "D-Code rebuilt our storefront and orders tripled. They understood Indian buying behaviour better than any agency we spoke to.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Marketing Head, EduFirst Academy",
    image: person4,
    rating: 4,
    quote:
      "Cost per qualified lead dropped by more than half. Weekly reporting is honest, and they kill campaigns that don't work.",
  },
];

export const faqs = [
  {
    q: "Where is D-Code Studio based?",
    a: "We're headquartered in Nagpur, Maharashtra and work with startups, regional enterprises and commercial brands across India and abroad.",
  },
  {
    q: "How long does a typical project take?",
    a: "A high-converting website takes 4–6 weeks, a custom CRM or web application 8–12 weeks and AI automation pilots 3–5 weeks. Timelines are fixed during the discovery and strategy phases.",
  },
  {
    q: "Do you only build, or do you run growth too?",
    a: "Both. The same team handles engineering, branding, performance marketing, SEO and AI automation — so there are no handovers between vendors.",
  },
  {
    q: "Who owns the code and data?",
    a: "You do. Full source code, hosting accounts and credentials are transferred to your organisation on final delivery.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes — optimisation is step eight of our methodology. We stay on for continuous iteration, monitoring and performance scaling.",
  },
];

export const team = [
  {
    name: "Derick",
    role: "Founder & Growth Strategist",
    image: person1,
    bio: "Leads client strategy, technical architecture and growth systems designed to accelerate revenue pipeline velocity.",
  },
  {
    name: "Engineering Practice",
    role: "Web & Application Development",
    image: person3,
    bio: "React.js, Node.js, Laravel and WordPress engineers building scalable front-ends and robust back-ends.",
  },
  {
    name: "Design Practice",
    role: "Branding & UI / UX",
    image: person2,
    bio: "Brand identity systems, style guides and conversion-focused prototypes validated before a line of code is written.",
  },
  {
    name: "Growth Practice",
    role: "Performance Marketing & SEO",
    image: person4,
    bio: "Meta and Google campaign specialists focused on lead velocity, ROAS and lower customer acquisition cost.",
  },
];

export const milestones = [
  {
    year: "Phase 1",
    title: "Inception",
    text: "Custom web development and visual brand architecture for our first regional clients.",
  },
  {
    year: "Phase 2",
    title: "Expansion",
    text: "Performance marketing and lead acquisition engines added as a full in-house practice.",
  },
  {
    year: "Phase 3",
    title: "AI & CRM",
    text: "Bespoke WhatsApp CRMs and AI workflow automations built for sales and operations teams.",
  },
  {
    year: "Phase 4",
    title: "Scaling",
    text: "50+ projects delivered across 10+ industry verticals with 98% client retention.",
  },
];

export const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "35+", label: "Enterprise clients" },
  { value: "10+", label: "Industries served" },
  { value: "98%", label: "Client retention" },
];
