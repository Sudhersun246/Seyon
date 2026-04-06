import { Link, useLocation } from 'react-router-dom'
import ctaBgImage from '@/assets/images/contact/projectInMind.webp'
import serviceBgImage from '@/assets/images/services/service-sec.webp'

interface CTASectionProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'contact' | 'services';
}

export function CTASection({
  heading = 'Have a Project in Mind?',
  description = "Connect with Seyon Constrotech today and let's build solutions that stand strong in performance, value, and reliability.",
  buttonText = 'Contact Our Team',
  buttonLink = '/contact',
  variant = 'contact',
}: CTASectionProps): React.ReactElement {
  const location = useLocation();
  const bgImage = variant === 'services' ? serviceBgImage : ctaBgImage;

  function handleClick() {
    if (location.pathname === buttonLink) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <section
      className="relative w-full py-[100px] overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(6, 16, 51, 1) 0%, rgba(6, 16, 51, 0.3) 100%)' }}
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-[800px] mx-auto px-4 text-center">
        <h2
          id="cta-heading"
          className="font-['Space_Grotesk'] font-bold text-[44px] leading-[52px] tracking-[-0.5px] text-white"
        >
          {heading}
        </h2>
        <p className="mt-[20px] font-['Space_Grotesk'] font-normal text-[18px] leading-[30px] text-white/80">
          {description}
        </p>

        <div className="mt-[40px] flex items-center justify-center">
          <Link
            to={buttonLink}
            onClick={handleClick}
            className="inline-flex items-center gap-[10px] bg-[#DF440E] rounded-[10px] px-[30px] py-[16px] hover:bg-[#c53a0c] transition-colors duration-200"
          >
            <span className="font-['Space_Grotesk'] font-medium text-[18px] leading-[18px] text-white">
              {buttonText}
            </span>
            <div className="w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transform -rotate-45">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#DF440E" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
