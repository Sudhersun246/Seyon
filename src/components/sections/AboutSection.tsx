import aboutImage from '@/assets/images/about/about.jpg'

const highlights = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
]

export function AboutSection(): React.ReactElement {
  return (
    <section className="w-full py-[100px] bg-white" aria-labelledby="about-heading">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-[60px]">
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full h-[500px] rounded-[20px] overflow-hidden">
            <img
              src={aboutImage}
              alt="Construction workers on site"
              className="w-full h-full object-cover"
            />
            {/* Orange accent bar */}
            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#DF440E]" />
          </div>
          {/* Experience badge */}
          <div
            className="absolute -bottom-[30px] -right-[20px] lg:right-[-30px] w-[180px] h-[180px] rounded-[20px] flex flex-col items-center justify-center"
            style={{ backgroundColor: '#DF440E' }}
          >
            <span className="font-['Space_Grotesk'] font-bold text-[48px] leading-[1] text-white">
              25+
            </span>
            <span className="font-['Space_Grotesk'] font-normal text-[14px] leading-[20px] text-white/90 text-center mt-1">
              Years of
              <br />
              Experience
            </span>
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2">
          <span className="font-['Space_Grotesk'] font-semibold text-[14px] uppercase tracking-[3px] text-[#DF440E]">
            Who We Are
          </span>
          <h2
            id="about-heading"
            className="mt-[16px] font-['Space_Grotesk'] font-bold text-[44px] leading-[52px] tracking-[-0.5px] text-[#0A1A3A]"
          >
            Building Dreams Into{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #FF8902 0%, #FF6900 50%, #FB2C37 100%)',
              }}
            >
              Reality
            </span>
          </h2>
          <p className="mt-[24px] font-['Space_Grotesk'] font-normal text-[16px] leading-[28px] text-[#4A5568]">
            Since our founding, Seyon has grown into one of Miami's most trusted construction
            firms. We specialize in delivering high-quality commercial and residential projects
            that stand the test of time. Our commitment to excellence, safety, and innovation
            drives everything we do.
          </p>
          <p className="mt-[16px] font-['Space_Grotesk'] font-normal text-[16px] leading-[28px] text-[#4A5568]">
            From concept to completion, our team of seasoned professionals ensures every project
            is delivered on time, within budget, and to the highest standards of craftsmanship.
          </p>

          {/* Highlights */}
          <div className="mt-[40px] flex flex-wrap gap-[24px]">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-[12px] px-[20px] py-[12px] rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC]"
              >
                <span className="font-['Space_Grotesk'] font-bold text-[28px] leading-[1] text-[#DF440E]">
                  {item.value}
                </span>
                <span className="font-['Space_Grotesk'] font-normal text-[14px] leading-[18px] text-[#4A5568]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
