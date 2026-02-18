import type { Feature, Service, TeamMember, ContactInfo } from '@/types'

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
