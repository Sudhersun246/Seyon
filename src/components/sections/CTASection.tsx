import { Link } from 'react-router-dom'
import ctaBgImage from '@/assets/images/cta/cta-bg.jpg'

export function CTASection(): React.ReactElement {
  return (
    <section
      className="relative w-full py-[100px] overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ctaBgImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(6, 16, 51, 0.9)' }}
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-[800px] mx-auto px-4 text-center">
        <span className="font-['Space_Grotesk'] font-semibold text-[14px] uppercase tracking-[3px] text-[#DF440E]">
          Get Started
        </span>
        <h2
          id="cta-heading"
          className="mt-[16px] font-['Space_Grotesk'] font-bold text-[44px] leading-[52px] tracking-[-0.5px] text-white"
        >
          Ready to Build Your{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #FF8902 0%, #FF6900 50%, #FB2C37 100%)',
            }}
          >
            Next Project?
          </span>
        </h2>
        <p className="mt-[20px] font-['Space_Grotesk'] font-normal text-[18px] leading-[30px] text-white/80">
          Let's discuss how we can bring your construction vision to life. Contact us today
          for a free consultation and project estimate.
        </p>

        <div className="mt-[40px] flex flex-col sm:flex-row items-center justify-center gap-[16px]">
          {/* Primary CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-[10px] bg-[#DF440E] rounded-[10px] px-[30px] py-[16px] group hover:bg-[#c53a0c] transition-colors duration-200"
          >
            <span className="font-['Space_Grotesk'] font-medium text-[18px] leading-[18px] text-white">
              Get Free Estimate
            </span>
            <div className="w-[28px] h-[28px] rounded-[14px] bg-white flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="transform -rotate-45"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#DF440E"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-[10px] rounded-[10px] px-[30px] py-[16px] border border-white/30 hover:border-white/60 transition-colors duration-200"
          >
            <span className="font-['Space_Grotesk'] font-medium text-[18px] leading-[18px] text-white">
              View Our Work
            </span>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-[50px] flex flex-wrap items-center justify-center gap-[32px]">
          <div className="flex items-center gap-[8px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                stroke="#DF440E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-['Space_Grotesk'] font-normal text-[14px] text-white/70">
              Licensed & Insured
            </span>
          </div>
          <div className="flex items-center gap-[8px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="#DF440E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-['Space_Grotesk'] font-normal text-[14px] text-white/70">
              Free Consultation
            </span>
          </div>
          <div className="flex items-center gap-[8px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                stroke="#DF440E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-['Space_Grotesk'] font-normal text-[14px] text-white/70">
              5-Star Rated
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
