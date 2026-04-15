import skyLine from "@/assets/images/projects/skyline.webp";
import oceanView from "@/assets/images/projects/oceanview.webp";
import summit from "@/assets/images/projects/summit.webp";
import vertex from "@/assets/images/projects/vertex.webp";
import project5 from "@/assets/images/projects/harbor-point.webp";
import project6 from "@/assets/images/projects/apex-tower.webp";
import civil from "@/assets/images/services/icons/civil.png";
// import mechanical from "@/assets/images/services/icons/mechanical.png";
import mep from "@/assets/images/services/icons/mcp.png";
import structural from "@/assets/images/services/icons/structural.png";
import fitout from "@/assets/images/services/icons/fit-out.png";
import civilImage from "@/assets/images/services/civil.webp";
import mepImage from "@/assets/images/services/mep.webp";
// import mechanicalImage from "@/assets/images/services/mechanical.webp";
import structuralImage from "@/assets/images/services/structural.webp";
import fitoutImage from "@/assets/images/services/fit-out.webp";
import requirement from "@/assets/images/services/icons/requirement.png";
import evaluation from "@/assets/images/services/icons/evaluation.png";
import resource from "@/assets/images/services/icons/resource.png";
import expert from "@/assets/images/services/icons/expert.png";
import multi from "@/assets/images/services/icons/multi.png";
import safety from "@/assets/images/services/icons/safety.png";
import testing from "@/assets/images/services/icons/testing.png";
import final from "@/assets/images/services/icons/final.png";
import expert1 from "@/assets/images/services/icons/expert1.png";
import precision from "@/assets/images/services/icons/precision.png";
import scope from "@/assets/images/services/icons/scope.png";
import shake from "@/assets/images/services/icons/shake.png";

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
  // {
  //   id: "hvac",
  //   number: "03",
  //   label: "MECHANICAL INSTALLATIONS",
  //   title: "Mechanical HVAC Systems",
  //   description:
  //     "We design, supply, and install HVAC systems engineered for thermal efficiency, occupant comfort, and operational reliability — from central plant to final air distribution in buildings of all scales and occupancy types.",
  //   bullets: [
  //     "HVAC system design and installation",
  //     "Ductwork fabrication and installation",
  //     "Chilled water and hot water systems",
  //     "Testing, balancing, and commissioning",
  //   ],
  //   image: mechanicalImage,
  //   imageLabel: "HVAC SYSTEMS",
  //   imageLeft: true,
  // },
  {
    id: "structural",
    number: "03",
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
    imageLeft: true,
  },
  {
    id: "fitout",
    number: "04",
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
    imageLeft: false,
  },
];

export const scrollImages = [
  { image: skyLine, label: "CIVIL WORKS" },
  { image: oceanView, label: "MEP SYSTEMS" },
  { image: summit, label: "HVAC SYSTEMS" },
  { image: vertex, label: "STRUCTURAL" },
  { image: project5, label: "FIT-OUT" },
  { image: project6, label: "PROJECTS" },
];

export const deliveryStages = [
  {
    number: "01",
    title: "REQUIREMENT & ENGINEERING REVIEW",
    description: "Understanding project scope, technical requirements, and client objectives before mobilisation",
    icon: requirement,
  },
  {
    number: "02",
    title: "SITE EVALUATION & FEASIBILITY",
    description: "On-site assessment, geotechnical inputs, and feasibility review to inform execution planning",
    icon: evaluation,
  },
  {
    number: "03",
    title: "RESOURCE PLANNING",
    description: "Material procurement, manpower scheduling, and equipment allocation aligned to project programme",
    icon: resource,
  },
  {
    number: "04",
    title: "EXPERT-LED EXECUTION",
    description: "On-site supervision by experienced engineers with real-time progress tracking and issue resolution",
    icon: expert,
  },
  {
    number: "05",
    title: "MULTI-LEVEL QUALITY INSPECTIONS",
    description: "Staged QA/QC inspections at every critical milestone to ensure workmanship and specification compliance",
    icon: multi,
  },
  {
    number: "06",
    title: "SAFETY COMPLIANCE",
    description: "Dedicated safety officers enforcing HSE protocols, method statements, and regulatory requirements on site",
    icon: safety,
  },
  {
    number: "07",
    title: "TESTING, COMMISSIONING & DOCUMENTATION",
    description: "System commissioning, performance testing, and full documentation package for every discipline",
    icon: testing,
  },
  {
    number: "08",
    title: "FINAL HANDOVER",
    description: "Structured handover with operation & maintenance manuals, as-built drawings, and performance reports",
    icon: final,
  },
];

export const disciplineCards = [
  { icon: civil, title: "Civil & Infrastructure", desc: "Earthworks, RCC, drainage, and complete site infrastructure development", anchor: "civil" },
  { icon: mep, title: "MEP Services", desc: "Plumbing, fire safety, electrical systems fully coordinated and code-compliant", anchor: "mep" },
  // { icon: mechanical, title: "Mechanical / HVAC", desc: "HVAC systems designed for performance, energy efficiency, and occupant comfort", anchor: "hvac" },
  { icon: structural, title: "Structural & Industrial", desc: "Steel structures, industrial installations, and precision fabrication works", anchor: "structural" },
  { icon: fitout, title: "Fit-Out Solutions", desc: "Interior, exterior, and specialist fit-out works functional and refined", anchor: "fitout" },
];

export const whyStandOutItems = [
  { number: "01", icon: expert1, title: "Expert Teams", description: "Qualified engineers, certified supervisors, and specialist tradespeople across all disciplines — not generalists, but domain experts on every site." },
  { number: "02", icon: precision, title: "Engineering Precision", description: "Every installation, structure, and system is planned, calculated, and executed with the rigour that engineering standards demand — no shortcuts, no guesswork." },
  { number: "03", icon: scope, title: "Modern Practices", description: "Adoption of contemporary construction methodologies, digital coordination, and modern project management tools for efficient, transparent delivery." },
  { number: "04", icon: shake, title: "Full Accountability", description: "We take ownership from mobilization to handover — disciplined execution, clear reporting, and dependable partnerships built on delivery." },
];
