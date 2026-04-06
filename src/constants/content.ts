import type { Feature, Service, TeamMember, ContactInfo } from '@/types'
import quality from '@/assets/images/services/icons/quality.svg'
import tick from "@/assets/images/services/icons/tick.svg";
import warning from "@/assets/images/services/icons/danger.svg";
import step1 from "@/assets/images/projects/icons/step1.png";
import step2 from "@/assets/images/projects/icons/step2.png";
import step3 from "@/assets/images/projects/icons/step3.png";
import step4 from "@/assets/images/projects/icons/step4.png";
import iso from "@/assets/images/projects/icons/iso.png";
import safety from "@/assets/images/projects/icons/safety.png";
import sustain from "@/assets/images/projects/icons/sustain.png";
import expertTeam from "@/assets/images/contact/icons/expertTeam.png";
import communication from "@/assets/images/contact/icons/communication.png";
import reliable from "@/assets/images/contact/icons/reliable.png";
import quality1 from "@/assets/images/contact/icons/quality.png";
import greg from "@/assets/images/about/greg.webp";
import eliz from "@/assets/images/about/eliz.webp";
import brian from "@/assets/images/about/brian.webp";
import brooke from "@/assets/images/about/brooke.webp";
import ian from "@/assets/images/about/ian.webp";
import adam from "@/assets/images/about/adam.webp";
import ryan from "@/assets/images/about/ryan.webp";
import romel from "@/assets/images/about/romel.webp";
import olivia from "@/assets/images/about/olivia.webp";
import faith from "@/assets/images/about/faith.webp";
import sarah from "@/assets/images/about/sarah.webp";
import donovan from "@/assets/images/about/donovan.webp";
import kelley from "@/assets/images/about/kelley.webp";
import alianny from "@/assets/images/about/alianny.webp";
import tom from "@/assets/images/about/tom.webp";
import akhtar from "@/assets/images/about/akhtar.webp";
import taylor from "@/assets/images/about/taylor.webp";
import nick from "@/assets/images/about/nick.webp";
import seth from "@/assets/images/about/seth.webp";

// ONGOING PROJECTS
import GPNPalaceGardens from "@/assets/images/projects/ongoing_project/GPN Palace (Gardens).webp";
import PoliceQuarters from "@/assets/images/projects/ongoing_project/Police Quarters.webp";
import SingaporeGlobalDataCentre from "@/assets/images/projects/ongoing_project/Singapore Global Data Centre.webp";
import Warehouse from "@/assets/images/projects/ongoing_project/Warehouse.webp";
import GPNFoodCourt from "@/assets/images/projects/ongoing_project/GPN Food Court.webp";
import GraceSuperMarket from "@/assets/images/projects/ongoing_project/Grace Super Market.webp";
import IronMount from "@/assets/images/projects/ongoing_project/Iron Mount.webp";
import SIPCOT from "@/assets/images/projects/ongoing_project/SIPCOT.webp";
import SNJGummudi from "@/assets/images/projects/ongoing_project/SNJ-gummudi.webp";
import SNJPondy from "@/assets/images/projects/ongoing_project/SNJ-pondy.webp";
import VBJNewShowroom from "@/assets/images/projects/ongoing_project/VBJ - New Showroom.webp";
import WaterSump from "@/assets/images/projects/ongoing_project/Water Sump.webp";

// COMPLETED PROJECTS
import BhimmasGuestHouse from "@/assets/images/projects/completed_project/Bhimmas Guest House.webp";
import BhimmasTempleTree from "@/assets/images/projects/completed_project/Bhimmas Temple Tree.webp";
import GPNPalace1 from "@/assets/images/projects/completed_project/GPN Palace 1.webp";
import JKumarCastingYard from "@/assets/images/projects/completed_project/J Kumar Casting Yard.webp";
import JKumarRegionalOffice from "@/assets/images/projects/completed_project/J Kumar Regional Office.webp";
import LTCastingYard from "@/assets/images/projects/completed_project/L&T Casting Yard.webp";
import RKTRHeatTreatmentArea from "@/assets/images/projects/completed_project/RKTR – Heat Treatment Area.webp";
import ShravidBeachHouse from "@/assets/images/projects/completed_project/Shravid Beach House.webp";

export const heroContent = {
  headline: 'Innovative Solutions for a Digital World',
  subheadline:
    'We help businesses transform their ideas into powerful digital experiences that drive growth and success.',
  primaryCta: 'Get Started',
  secondaryCta: 'Learn More',
  primaryCtaLink: '/contact',
  secondaryCtaLink: '/about',
}

export const features: Feature[] = [
  {
    id: 'feature-1',
    icon: 'rocket',
    title: 'Fast Performance',
    description:
      'Lightning-fast load times and optimized performance ensure your users have the best experience possible.',
  },
  {
    id: 'feature-2',
    icon: 'shield',
    title: 'Secure by Design',
    description:
      'Built with security in mind from the ground up, protecting your data and your customers.',
  },
  {
    id: 'feature-3',
    icon: 'chart',
    title: 'Scalable Solutions',
    description:
      'Our solutions grow with your business, from startup to enterprise-level operations.',
  },
  {
    id: 'feature-4',
    icon: 'users',
    title: 'User-Centric',
    description:
      'Designed with users in mind, creating intuitive experiences that delight and engage.',
  },
  {
    id: 'feature-5',
    icon: 'code',
    title: 'Modern Technology',
    description:
      'Built using the latest technologies and best practices for maintainable, future-proof solutions.',
  },
  {
    id: 'feature-6',
    icon: 'support',
    title: '24/7 Support',
    description:
      'Round-the-clock support ensures you always have help when you need it most.',
  },
]

export const services: Service[] = [
  {
    id: 'service-1',
    icon: 'globe',
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks and technologies for optimal performance.',
    features: [
      'Responsive design',
      'Progressive Web Apps',
      'E-commerce solutions',
      'CMS integration',
    ],
  },
  {
    id: 'service-2',
    icon: 'mobile',
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: [
      'iOS development',
      'Android development',
      'Cross-platform apps',
      'App Store optimization',
    ],
  },
  {
    id: 'service-3',
    icon: 'cloud',
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and services to power your applications and data.',
    features: [
      'Cloud migration',
      'Infrastructure setup',
      'DevOps automation',
      'Monitoring & logging',
    ],
  },
  {
    id: 'service-4',
    icon: 'palette',
    title: 'UI/UX Design',
    description:
      'User-centered design that creates intuitive and engaging digital experiences.',
    features: [
      'User research',
      'Wireframing',
      'Prototyping',
      'Design systems',
    ],
  },
]

export const aboutContent = {
  headline: 'About Our Company',
  intro:
    'Founded in 2020, Acme Inc has grown from a small startup to a trusted technology partner for businesses worldwide.',
  mission: {
    title: 'Our Mission',
    description:
      'To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.',
  },
  vision: {
    title: 'Our Vision',
    description:
      'To be the leading technology partner for businesses seeking to transform and thrive in an ever-evolving digital landscape.',
  },
  values: [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new possibilities.',
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty and transparency in everything we do.',
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in our work and relationships.',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership.',
    },
  ],
}

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Sarah has over 15 years of experience in technology leadership and entrepreneurship.',
  },
  {
    id: 'team-2',
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Michael leads our technical strategy with expertise in cloud architecture and software development.',
  },
  {
    id: 'team-3',
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    bio: 'Emily brings creative vision and user-centered design principles to all our projects.',
  },
  {
    id: 'team-4',
    name: 'David Kim',
    role: 'Lead Developer',
    bio: 'David is a full-stack expert who ensures our solutions are robust and scalable.',
  },
]

export const contactInfo: ContactInfo = {
  email: 'hello@acme-inc.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Innovation Way',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    country: 'United States',
  },
  socialLinks: [
    { platform: 'Twitter', url: 'https://twitter.com/acmeinc', icon: 'twitter' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/acmeinc', icon: 'linkedin' },
    { platform: 'GitHub', url: 'https://github.com/acmeinc', icon: 'github' },
  ],
}

export const contactFormContent = {
  headline: 'Get in Touch',
  description:
    "Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  submitButton: 'Send Message',
  successMessage: 'Thank you for your message! We will get back to you soon.',
}

export const ctaContent = {
  headline: 'Ready to Get Started?',
  description:
    'Transform your business with our innovative solutions. Contact us today for a free consultation.',
  buttonText: 'Contact Us',
  buttonLink: '/contact',
}

export const notFoundContent = {
  headline: '404',
  title: 'Page Not Found',
  description: "Sorry, we couldn't find the page you're looking for.",
  buttonText: 'Go Home',
  buttonLink: '/',
}


export const qualityPoints = [
  "Standardised installation methods and material approval processes",
  "In-process inspection test plans (ITP) at every critical stage",
  "Dedicated HSE officers on all active project sites",
  "Full testing and commissioning documentation before handover",
  "Third-party audit and certification support where required",
];

export const qualityCards = [
  {
    icon: quality,
    title: "QUALITY ASSURANCE",
    desc: "Standardised methods, material controls, and ITP-driven inspections across every trade",
  },
  {
    icon: tick,
    title: "SAFETY COMPLIANCE",
    desc: "Trained safety officers, method statements, and statutory HSE compliance on every project",
  },
  {
    icon: warning,
    title: "RISK MANAGEMENT",
    desc: "Proactive risk registers, hazard controls, and incident prevention protocols embedded in delivery",
  },
];

export const featureProjects = [
  {
    title: "Multi-Sector Projects",
    desc: "Industrial, Commercial, Residential & Institutional Developments",
  },
  {
    title: "Integrated Engineering",
    desc: "Civil | MEP | Mechanical | Structural",
  },
  {
    title: "Quality Execution",
    desc: "Structured planning, supervision, and safety compliance",
  },
  {
    title: "Trusted Delivery",
    desc: "Reliable outcomes through disciplined project management",
  },
];

export const ongoingProjects = [
  {
    id: "op-1",
    image: GPNPalaceGardens,
    title: "GPN Palace (Gardens)",
    location: "Thiruverkadu",
    area: "110,000 Sqft",
    // description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-2",
    image: PoliceQuarters,
    title: "Police Quarters",
    location: "Coimbatore",
    area: "100,000 Sqft",
    // description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-3",
    image: SingaporeGlobalDataCentre,
    title: "Singapore Global Data Centre",
    location: "Ambattur",
    area: "23,000 Sqft",
    // description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-4",
    image: Warehouse,
    title: "Warehouse",
    location: "Thiruverkadu",
    area: "10,000 Sqft",
    // description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-5",
    image: GPNFoodCourt,
    title: "GPN Food Court",
    location: "Thiruverkadu",
    area: "24,000 Sqft",
    // description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-6",
    image: GraceSuperMarket,
    title: "Grace Super Market",
    location: "Thiruverkadu",
    area: "24,000 Sqft",
    // description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-7",
    image: SIPCOT,
    title: "SIPCOT Development",
    location: "Kandharvakottai",
    area: "200 Acres",
    // description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-8",
    image: IronMount,
    title: "Iron Mount",
    location: "Ambattur",
    area: "—",
    // description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-9",
    image: WaterSump,
    title: "Water Sump",
    location: "Thiruthani",
    area: "10,00,000 Liters",
    // description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-10",
    image: SNJPondy,
    title: "SNJ Project (Pondicherry)",
    location: "Pondicherry",
    area: "—",
    // description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-11",
    image: SNJGummudi,
    title: "SNJ Project (Gummidipoondi)",
    location: "Gummidipoondi",
    area: "—",
    // description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
  {
    id: "op-12",
    image: VBJNewShowroom,
    title: "VBJ Showroom",
    location: "Annasalai",
    area: "—",
    // description: "A 35-story business hub with modern workspaces and a rooftop garden.",
  },
];

export const completedProjects = [
  {
    id: "cp-1",
    image: GPNPalace1,
    title: "GPN Palace 1",
    location: "Thiruverkadu",
    area: "150,000 Sqft",
    tags: ["Civil", "PHE", "Fire Protection Systems", "Electrical", "HVAC"],
  },
  {
    id: "cp-2",
    image: BhimmasTempleTree,
    title: "Bhimmas Temple Tree",
    location: "Vadapalani",
    area: "75,000 Sqft",
    tags: ["Civil", "PHE", "Fire Protection Systems", "Electrical", "HVAC"],
  },
  {
    id: "cp-3",
    image: ShravidBeachHouse,
    title: "Shravid Beach House",
    location: "ECR",
    area: "10,000 Sqft (Building) + 9,000 Sqft (Landscape)",
    tags: ["Civil", "PHE", "Fire Protection Systems", "Electrical", "HVAC"],
  },
  {
    id: "cp-4",
    image: BhimmasGuestHouse,
    title: "Bhimmas Guest House",
    location: "Vadapalani",
    area: "—",
    tags: ["Civil", "PHE", "Fire Protection Systems", "Electrical", "HVAC"],
  },
  {
    id: "cp-5",
    image: RKTRHeatTreatmentArea,
    title: "RKTR – Heat Treatment Area",
    location: "Puduvayal",
    area: "30,000 Sqft",
    tags: ["Civil", "PHE", "Fire Protection Systems", "Electrical", "HVAC"],
  },
  {
    id: "cp-6",
    image: LTCastingYard,
    title: "L&T Casting Yard",
    location: "Shollinganallur",
    area: "—",
    tags: ["Civil"],
  },
  {
    id: "cp-7",
    image: JKumarCastingYard,
    title: "J Kumar Casting Yard",
    location: "EVP Film City",
    area: "—",
    tags: ["Civil"],
  },
  {
    id: "cp-8",
    image: JKumarRegionalOffice,
    title: "J Kumar Regional Office",
    location: "Maduravoyal",
    area: "—",
    tags: ["Interior Fitouts"],
  },
];

export const deliveryStages = [
  {
    number: "01.",
    title: "ENGINEERING REVIEW",
    description: "Detailed assessment of blueprints and structural feasibility.",
    icon: step1,
  },
  {
    number: "02.",
    title: "EXECUTION PHASE",
    description: "Core civil works and core structural implementation.",
    icon: step2,
  },
  {
    number: "03.",
    title: "SYSTEMS INTEGRATION",
    description: "PHE, electrical, and mechanical infrastructure installation.",
    icon: step3,
  },
  {
    number: "04.",
    title: "PROJECT HANDOVER",
    description: "Final quality audits and client asset transfer.",
    icon: step4,
  },
];

export const items = [
  {
    title: "ISO CERTIFIED QUALITY",
    description:
      "Strict adherence to international construction standards and quality benchmarks.",
    icon: iso,
  },
  {
    title: "SAFETY FIRST PROTOCOL",
    description:
      "Zero-incident goal driven by rigorous site safety management systems.",
    icon: safety,
  },
  {
    title: "SUSTAINABLE BUILDING",
    description:
      "Eco-conscious engineering to minimize carbon footprint across project lifecycles.",
    icon: sustain,
  },
];

export 
const whyItems = [
  {
    title: "Expert Engineering Teams",
    description:
      "Highly skilled professionals with deep expertise in construction and engineering disciplines.",
    icon: expertTeam,
  },
  {
    title: "Transparent Communication",
    description:
      "Open dialogue and regular updates throughout every stage of your project journey.",
    icon: communication,
  },
  {
    title: "Quality & Safety Commitment",
    description:
      "Unwavering dedication to the highest standards of quality control and workplace safety.",
    icon: quality1,
  },
  {
    title: "Reliable Project Delivery",
    description:
      "Proven track record of delivering projects on time and within budget specifications.",
    icon: reliable,
  },
  ];

  export const teamMembersAbout = [
    {
      id: 1,
      name: "Greg Hughes",
      role: "Managing Partner",
      image: greg,
      bio: "Greg is co-founder and Managing Partner of Seyon Management. Prior to starting Seyon Management, Greg served as Executive Vice President and Market Leader for Madison Marquette (formerly PMRG) where he was responsible for all aspects of the region's strategic management, operation and oversight of several service lines including asset management, property management, development, construction, and leasing. Prior to joining Madison Marquette, Greg worked for CBRE within the Global Corporate Advisory Services Group. Greg is a graduate of Bentley University.\n\nGreg is an active supporter of The Seal Legacy Foundation; dedicated to providing support to families of wounded and fallen United States Navy SEALs (www.seallegacy.org) and The Room to Dream Foundation (http://roomtodreamfoundatio.org/).",
    },
    {
      id: 2,
      name: "Elizabeth Sousa",
      role: "Chief Accounting Officer",
      image: eliz,
      bio: "Elizabeth Sousa serves as Chief Accounting Officer at Seyon Management where she is responsible for overseeing all accounting and financial reporting activities.  Prior to joining SM, Elizabeth served as Real Estate Controller for MIT Investment Management Company (MITIMCo) where she provided leadership, management and strategic direction for accounting and reporting activities related to the direct real estate portfolio.  Prior to joining MITIMCo, Elizabeth was part of Bain Capital Real Estate's (BCRE) founding team serving as a Finance Manager primarily responsible for ensuring that proper accounting and reporting was maintained for a sub-portfolio of direct real estate investments, compiling periodic financial reports for management and maintaining the integrity of the portfolio accounting systems and general ledger. Elizabeth is a graduate of Bentley University.",
    },
    {
      id: 3,
      name: "Brian Beck, PE",
      role: "Vice President, Project Management",
      image: brian,
      bio: "Brian serves as the Vice President of Project Management and is responsible for overseeing the management of all construction projects for the clients of Seyon Management. Brian's project management experience ranges from ground-up development to tenant improvement projects. During his time at Seyon Management Brian has been responsible for the project management of over $200mil in development and construction. Brian understands the specific needs of our clients and is well versed at leading construction teams, permitting projects, risk management, and financial reporting. Brian adds tremendous value for our clients when assisting with property acquisition due diligence. Brian is a is a licensed professional civil engineer.",
    },
    {
      id: 4,
      name: "Brooke Simonds",
      role: "Vice President, Property Management",
      image: brooke,
      bio: "Brooke serves as the Vice President of Property Management and is responsible for overseeing property management functions at Seyon Management in the Northeast, Mid-Atlantic and Southeast regions. Brooke has extensive commercial real estate experience working in both Boston and New York City's urban and suburban markets in a variety of asset classes including commercial office, medical, retail, industrial, development and re-development assets. Prior to joining Seyon, Brooke spent several years at Normandy Real Estate Partners, Rockhill Management and FoxRock Properties, having involvement in several management structures consisting of owner-operator, joint venture and third-party management. She has worked closely with asset management groups on leasing efforts, building repositioning, tenant improvement projects and portfolio management, capital planning, budgeting and execution alongside construction and project management teams. Brooke's tenant portfolio has consisted of several high-profile tenants like TripAdvisor, Peloton, Boston Celtics, Welch's, Kayak, Cornell University and Boies Schiller Law. Brooke earned her Bachelor of Business Administration and Marketing from Endicott College.",
    },
    {
      id: 5,
      name: "Ian Frates",
      role: "Senior Accounting Specialist",
      image: ian,
      bio: "Ian serves as Senior Accounting Specialist for Seyon Management. In his role, Ian focuses on a variety of cash management duties at both the real estate and corporate levels of the organization. Ian is responsible for the timely recording of cash activity at various levels in addition to managing monthly billing procedures on both the real estate and corporate sides of the business. Ian also serves as a liaison between Property Accounting and Property Management, providing critical support for both the Accounts Receivable and Accounts Payable functions. Prior to joining Seyon Management, Ian served as Operations Manager for Madison Marquette (formerly PMRG), where he serviced several large institutional clients while overseeing the operations of a portfolio of more than 8M square feet. Prior to joining Madison Marquette, Ian worked for Healthcare Administrative Services. Ian earned his Bachelor of Arts in Psychology from Quinnipiac University.",
    },
    {
      id: 6,
      name: "Adam Leonard",
      role: "Senior Property Manager",
      image: adam,
      bio: "Adam serves as Senior Property Manager in Seyon Management's Boston office. In his role, Adam is responsible for all property management functions for over 2 million square feet of commercial property across multiple client portfolios. Prior to joining Seyon Management Adam served as Property Manager for Rockhill Management, overseeing a Class A office tower in Downtown Boston. Before Rockhill, he worked for Hunneman, assisting in managing commercial properties throughout Massachusetts. Adam earned his Bachelor of Science in Managerial Economics from Bentley University.",
    },
    {
      id: 7,
      name: "Ryan Macaulay",
      role: "General Manager",
      image: ryan,
      bio: "With over 8 years of Commercial Real Estate experience, Ryan has held roles ranging from Property Coordinator to Asset Manager. At COFE Management, LLC, Ryan spearheaded initiatives including construction projects, tenant improvements, and financial reporting processes. Ryan's responsibilities included ensuring accurate financial reporting and driving successful leasing strategies to maximize occupancy. Previously, Ryan served as Senior Property Manager and Property Manager at Franklin Street, LLC, honing his skills in day-to-day operations and capital project management. Additionally, Ryan has been a licensed Florida Real Estate Sales Associate since 2019.",
    },
    {
      id: 8,
      name: "Romel Bryan",
      role: "Field Engineer",
      image: romel,
      bio: "Romel serves as Field Engineer for Seyon Management's southeast division where he is responsible for day to day operation and management of all properties under management. Prior to joining SM, Romel managed several high profile assets in the South Florida market, including the Lynn Financial Center in Boca Raton. Romel is experienced in dealing with complex building system related issues and carries several certifications.",
    },
    {
      id: 9,
      name: "Olivia DeLonais",
      role: "Office Manager",
      image: olivia,
      bio: "....",
    },
    {
      id: 10,
      name: "Faith Farnham",
      role: "Property Manager",
      image: faith,
      bio: "Faith serves as Property Manager in Seyon Management's Boston office. In her role, Faith is responsible for all property management functions for a portfolio of over 1.3 million square feet. Faith has over 8 years of commercial real estate experience in the Boston market having previously worked at CBRE, Rockhill Management, and FoxRock Properties. Her portfolio has included high-rise buildings, commercial condominiums, industrial, medical, and retail spaces where she worked with several management structures including third-party management, joint venture, and owner operated. She received her bachelor's degree from Salem State University.",
    },
    {
      id: 11,
      name: "Sarah Hernando",
      role: "Tenant Coordinator",
      image: sarah,
      bio: "Sarah serves as Tenant Coordinator for Seyon Management and is responsible for assisting property management and operations. Sarah assists with tenant & vendor relations, annual budgeting, reforecasting and reconciliation activities. Prior to joining Seyon Management, Sarah served as Patient Services Coordinator for North Shore Medical Center, where she performed patient service and administrative duties, coordinated diagnostic test referrals, and tracked appointment visits and authorizations, verified insurance information, prepared billing, collected data, and generated reports, and acted as a liaison with other hospital departments. Sarah earned her Bachelor of Arts in Elementary Education from Salem State University.",
    },
    {
      id: 12,
      name: "Donovan Prozinski",
      role: "Property Manager",
      image: donovan,
      bio: "Donovan serves as Assistant Property Manager for Seyon Management and is responsible for the day-to-day management, accounting, and operations on behalf of several institutional clients.\nPrior to his role at Seyon Management, Donovan worked as an Assistant Property Manager with Hunneman managing a wide variety of properties throughout the Boston area. Donovan earned his Bachelor of Science in Finance from the Charlton College of Business at The University of Massachusetts Dartmouth and earned his Masters in Business Administration from The University of Massachusetts Boston.",
    },
    {
      id: 13,
      name: "Kelley Manley",
      role: "Property Administrator",
      image: kelley,
      bio: "Kelley serves as a Property Administrator at Seyon Management, supporting the property management and accounting teams with various administrative and operational tasks related to the daily management of client properties. A graduate of the University of Tampa, Kelley brings a diverse set of skills and perspectives to the team.",
    },
    {
      id: 14,
      name: "Alianny Silverio",
      role: "Property Accountant",
      image: alianny,
      bio: "Alianny serves as a Property Accountant for Seyon Management and is primarily responsible for analyzing general ledger activity for accuracy, recording financial transactions, preparing reporting packages, filing monthly sales tax returns, and loan compliance reporting for assigned portfolios. Alianny also participates in budgeting, reforecasting, recovery reconciliation and lease administration processes. Prior to joining Seyon Management, Alianny worked as a Real Estate Accountant at CBRE, Inc., assigned to a portfolio of commercial real estate properties in Massachusetts. Alianny earned a Bachelor of Science in Finance and Management and a Master of Science in Finance at the University of Massachusetts Lowell.",
    },
    {
      id: 15,
      name: "Tom Manganiello",
      role: "Senior Property Accountant",
      image: tom,
      bio: "Tom serves as a Property Accountant for Seyon Management and is primarily responsible for analyzing general ledger activity for accuracy, recording financial transactions, preparing reporting packages, tax filings for certain municipalities, and loan compliance reporting for assigned portfolios. Tom also participates in budgeting, reforecasting, recovery reconciliation and lease administration processes. Prior to joining Seyon Management, Tom worked as a Real Estate Accountant at CBRE, Inc. assigned to a portfolio of commercial properties including industrial, office, and retail. Tom earned a Bachelor of Science in Business Administration from Suffolk University.",
    },
    {
      id: 16,
      name: "Seth Occeus",
      role: "Property Accountant",
      image: seth,
      bio: "Seth Occeus serves as a Property Accountant for Seyon Management, where he is responsible for analyzing general ledger activity, recording financial transactions, preparing reporting packages, filing monthly sales tax returns, and ensuring loan compliance for assigned portfolios. He also participates in budgeting, reforecasting, recovery reconciliation, and lease administration processes. Prior to joining Seyon Management, Seth spent three years at CBRE, where he expanded his accounting expertise while managing financial reporting for a portfolio of commercial real estate properties. Seth earned a Bachelor of Business Administration with a concentration in Accounting from Northeastern University.",
    },
    {
      id: 17,
      name: "Mehrose Akhtar",
      role: "Property Accountant",
      image: akhtar,
      bio: "Mehrose Akhtar serves as a Property Accountant for Seyon Management, where she is responsible for analyzing general ledger activity, recording financial transactions, preparing reporting packages, filing monthly sales tax returns, and ensuring loan compliance for assigned portfolios. She also participates in budgeting, reforecasting, recovery reconciliation, and lease administration processes. Prior to joining Seyon Management, Mehrose spent two years at Synergy, where she expanded her accounting expertise while managing financial reporting for a portfolio of commercial and residential real estate properties. Mehrose earned a Bachelor of Business Administration with a concentration in Finance from Suffolk University.",
    },
    {
      id: 18,
      name: "Taylor Darrow",
      role: "Human Resources Director",
      image: taylor,
      bio: "Taylor serves as the Director of Human Resources at Seyon Management, where she oversees all aspects of HR operations across the company's Northeast, Mid-Atlantic, and Southeast portfolios. With over six years of experience in human resources, Taylor brings a strong background in employee relations, compliance, process improvement, and strategic HR leadership within fast-paced, multi-state environments.\nPrior to joining Seyon, Taylor held roles in both in-house and agency settings, supporting teams across industries including real estate, supply chain, and professional services. She has played a key role in shaping company policies, streamlining onboarding and payroll systems, and building performance review frameworks that align with company goals. Taylor's collaborative approach and clear communication style have made her a trusted partner to leadership teams and employees alike.\nTaylor holds a Master's degree in Public Relations, Advertising, and Applied Communication from Richmond, The American International University in London. She is passionate about fostering an engaging, inclusive workplace culture and supporting the growth and success of both individuals and the broader organization.",
    },
    {
      id: 19,
      name: "Nicholas Vardakas",
      role: "Tenant Coordinator",
      image: nick,
      bio: "Nick serves as Tenant Coordinator for Seyon Management and is responsible for assisting day-to-day property management and operations on behalf of several institutional clients. Additionally, Nick maintains tenant relations and ensures clear communication between management and tenants.\nPrior to Seyon Management, Nick worked as a Financial Analyst for Dalkia Aegis, EDF Group. Nick is a recent graduate of Northeastern University with a Bachelor of Science in Business Administrations, concentrating in Entrepreneurship.",
    },
  ];