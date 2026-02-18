export interface NavItem {
  label: string
  href: string
}

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
}

export interface ContactInfo {
  email: string
  phone: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  socialLinks: SocialLink[]
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  ogImage: string
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  href?: string
  ariaLabel?: string
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

export interface InputProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel' | 'textarea'
  placeholder?: string
  required?: boolean
  className?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}
