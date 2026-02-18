import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import logoImage from '@/assets/images/header/logo.png'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Approach', href: '/about' },
  { label: 'Quality & Safety', href: '/about' },
]

const serviceLinks = [
  { label: 'Civil & Infrastructure', href: '/services' },
  { label: 'MEP & Building Services', href: '/services' },
  { label: 'HVAC Installations', href: '/services' },
  { label: 'Structural & Industrial', href: '/services' },
  { label: 'Interior & Fit-out', href: '/services' },
]

export function Footer(): React.ReactElement {
  const { ref: footerRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: '#101828' }}
      role="contentinfo"
    >
      <div ref={footerRef} className="max-w-[1920px] mx-auto px-[16px] md:px-[60px] lg:px-[133px] pt-[53px] pb-[53px]">
        {/* Main Footer Content */}
        <div className={`flex flex-col lg:flex-row justify-between gap-[67px] mb-[50px] scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          {/* Brand Column */}
          <div className="max-w-[400px]">
            <Link to="/" className="inline-block mb-[24px]">
              <img
                src={logoImage}
                alt="Seyon"
                className="h-[40px] object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-['Space_Grotesk'] font-normal text-[21px] leading-[35px] text-[#99A1AF] mb-[24px]">
              A multidisciplinary engineering and contracting company delivering civil, MEP,
              mechanical, and infrastructure solutions with excellence.
            </p>
            {/* Three dots */}
            <div className="flex items-center gap-[11px]">
              <span
                className="w-[11px] h-[11px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #FF6900 0%, #FB2C37 100%)' }}
              />
              <span
                className="w-[11px] h-[11px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #FF6900 0%, #FB2C37 100%)' }}
              />
              <span
                className="w-[11px] h-[11px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #FF6900 0%, #FB2C37 100%)' }}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Space_Grotesk'] font-bold text-[24px] leading-[37px] text-white mb-[20px]">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-[16px]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-['Space_Grotesk'] font-normal text-[21px] leading-[32px] text-[#99A1AF] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-['Space_Grotesk'] font-bold text-[24px] leading-[37px] text-white mb-[20px]">
              Services
            </h3>
            <ul className="flex flex-col gap-[16px]">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-['Space_Grotesk'] font-normal text-[19px] leading-[27px] text-[#99A1AF] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Scroll to top button */}
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="w-[64px] h-[64px] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
              style={{
                background: 'linear-gradient(135deg, #F54900 0%, #FF6900 100%)',
                boxShadow: '0px 10.67px 13.33px -8px rgba(0,0,0,0.10), 0px 26.67px 33.33px -6.67px rgba(0,0,0,0.10)',
              }}
              aria-label="Scroll to top"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 19V5M5 12l7-7 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-[24px]" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-[16px]">
          <p className="font-['Space_Grotesk'] font-normal text-[19px] leading-[27px] text-[#99A1AF]">
            &copy; 2026 Seyon Constrotech Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-[32px]">
            <Link
              to="/privacy"
              className="font-['Space_Grotesk'] font-normal text-[19px] leading-[27px] text-[#99A1AF] hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-['Space_Grotesk'] font-normal text-[19px] leading-[27px] text-[#99A1AF] hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
