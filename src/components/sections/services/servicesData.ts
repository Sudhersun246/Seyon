import project1 from "@/assets/images/projects/project-1.jpg";
import project2 from "@/assets/images/projects/project-2.jpg";
import project3 from "@/assets/images/projects/project-3.jpg";
import project4 from "@/assets/images/projects/project-4.jpg";
import project5 from "@/assets/images/projects/project-5.jpg";
import project6 from "@/assets/images/projects/project-6.jpg";
import civil from "@/assets/images/services/icons/civil.png";
import mechanical from "@/assets/images/services/icons/mechanical.png";
import mep from "@/assets/images/services/icons/mcp.png";
import structural from "@/assets/images/services/icons/structural.png";
import fitout from "@/assets/images/services/icons/fit-out.png";
import civilImage from "@/assets/images/services/civil.png";
import mepImage from "@/assets/images/services/mep.png";
import mechanicalImage from "@/assets/images/services/mechanical.png";
import structuralImage from "@/assets/images/services/structural.png";
import fitoutImage from "@/assets/images/services/fit-out.png";

export const serviceDetails = [
  {
    id: "civil",
    number: "01",
    label: "CIVIL & INFRASTRUCTURE",
    title: "Civil & Infrastructure Works",
    description:
      "Our civil and infrastructure division undertakes comprehensive site development, structural construction, and utility network installations. Every project is executed with engineering rigour, ensuring long-term structural performance and compliance with regulatory standards.",
    bullets: [
      "Earthworks and site development",
      "RCC structures — foundations, columns, slabs",
      "External development works and hard-landscaping",
      "Stormwater drainage systems",
      "Utility networks and complete infrastructure works",
    ],
    image: civilImage,
    imageLabel: "CIVIL WORKS",
    imageLeft: true,
  },
  {
    id: "mep",
    number: "02",
    label: "MEP & BUILDING SERVICES",
    title: "MEP & Building Services",
    description:
      "Our MEP team delivers fully coordinated mechanical, electrical, and plumbing installations, integrated with fire-fighting systems and building services across commercial, industrial, and institutional projects.",
    bullets: [
      "Internal and external plumbing systems",
      "Fire fighting and safety installations",
      "Complete electrical installations",
      "MEP coordination and integration",
    ],
    image: mepImage,
    imageLabel: "MEP SYSTEMS",
    imageLeft: false,
  },
  {
    id: "hvac",
    number: "03",
    label: "MECHANICAL INSTALLATIONS",
    title: "Mechanical HVAC Systems",
    description:
      "We design, supply, and install HVAC systems engineered for thermal efficiency, occupant comfort, and operational reliability — from central plant to final air distribution in buildings of all scales and occupancy types.",
    bullets: [
      "HVAC system design and installation",
      "Ductwork fabrication and installation",
      "Chilled water and hot water systems",
      "Testing, balancing, and commissioning",
    ],
    image: mechanicalImage,
    imageLabel: "HVAC SYSTEMS",
    imageLeft: true,
  },
  {
    id: "structural",
    number: "04",
    label: "STRUCTURAL & INDUSTRIAL",
    title: "Structural & Industrial Works",
    description:
      "Our structural team handles steel fabrication, heavy industrial installations, and specialist structural works for manufacturing, warehousing, and infrastructure facilities — executed with precision and rigorous technical control.",
    bullets: [
      "Structural steel fabrication and erection",
      "Industrial plant installations",
      "Pre-engineered building systems",
      "Foundation and anchor systems",
      "Specialist structural retrofits and upgrades",
    ],
    image: structuralImage,
    imageLabel: "STRUCTURAL",
    imageLeft: false,
  },
  {
    id: "fitout",
    number: "05",
    label: "INTERIOR, EXTERIOR & FIT-OUT",
    title: "Interior & Fit-Out Solutions",
    description:
      "From shell-and-core to fully fitted spaces, our fit-out team delivers high-quality interior and exterior works that balance functionality, aesthetics, and durability across commercial, institutional, and hospitality sectors.",
    bullets: [
      "False ceilings, partitions & flooring systems",
      "Facade cladding and external finishing",
      "Specialist joinery and millwork",
      "Painting and surface treatments",
      "Landscaping and external works",
    ],
    image: fitoutImage,
    imageLabel: "FIT-OUT",
    imageLeft: true,
  },
];

export const scrollImages = [
  { image: project1, label: "CIVIL WORKS" },
  { image: project2, label: "MEP SYSTEMS" },
  { image: project3, label: "HVAC SYSTEMS" },
  { image: project4, label: "STRUCTURAL" },
  { image: project5, label: "FIT-OUT" },
  { image: project6, label: "PROJECTS" },
];

export const deliveryStages = [
  {
    number: "01",
    title: "REQUIREMENT & ENGINEERING REVIEW",
    description: "Understanding project scope, technical requirements, and client objectives before mobilisation",
    icon: "📋",
  },
  {
    number: "02",
    title: "SITE EVALUATION & FEASIBILITY",
    description: "On-site assessment, geotechnical inputs, and feasibility review to inform execution planning",
    icon: "🗺️",
  },
  {
    number: "03",
    title: "RESOURCE PLANNING",
    description: "Material procurement, manpower scheduling, and equipment allocation aligned to project programme",
    icon: "📦",
  },
  {
    number: "04",
    title: "EXPERT-LED EXECUTION",
    description: "On-site supervision by experienced engineers with real-time progress tracking and issue resolution",
    icon: "⚙️",
  },
  {
    number: "05",
    title: "MULTI-LEVEL QUALITY INSPECTIONS",
    description: "Staged QA/QC inspections at every critical milestone to ensure workmanship and specification compliance",
    icon: "🔍",
  },
  {
    number: "06",
    title: "SAFETY COMPLIANCE",
    description: "Dedicated safety officers enforcing HSE protocols, method statements, and regulatory requirements on site",
    icon: "🦺",
  },
  {
    number: "07",
    title: "TESTING, COMMISSIONING & DOCUMENTATION",
    description: "System commissioning, performance testing, and full documentation package for every discipline",
    icon: "✏️",
  },
  {
    number: "08",
    title: "FINAL HANDOVER",
    description: "Structured handover with operation & maintenance manuals, as-built drawings, and performance reports",
    icon: "🏁",
  },
];

export const disciplineCards = [
  { icon: civil, title: "Civil & Infrastructure", desc: "Earthworks, RCC, drainage, and complete site infrastructure development", anchor: "civil" },
  { icon: mep, title: "MEP Services", desc: "Plumbing, fire safety, electrical systems fully coordinated and code-compliant", anchor: "mep" },
  { icon: mechanical, title: "Mechanical / HVAC", desc: "HVAC systems designed for performance, energy efficiency, and occupant comfort", anchor: "hvac" },
  { icon: structural, title: "Structural & Industrial", desc: "Steel structures, industrial installations, and precision fabrication works", anchor: "structural" },
  { icon: fitout, title: "Fit-Out Solutions", desc: "Interior, exterior, and specialist fit-out works functional and refined", anchor: "fitout" },
];

export const whyStandOutItems = [
  { title: "Multi-Discipline Capability", description: "Civil, MEP, structural, mechanical, and fit-out under one roof — no fragmented subcontracting." },
  { title: "Engineering-Led Delivery", description: "Every project is managed by qualified engineers, not just project administrators." },
  { title: "Integrated QA Framework", description: "ITP-driven inspection plans at every trade stage, not just at completion." },
  { title: "HSE-First Culture", description: "Statutory compliance embedded in daily site operations, not treated as an afterthought." },
  { title: "Documentation Rigour", description: "Full as-built, O&M, and commissioning documentation delivered as standard." },
  { title: "Client-Facing Reporting", description: "Regular progress reporting and transparent communication throughout project lifecycle." },
];
