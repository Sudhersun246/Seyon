const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Robert Martinez',
    role: 'CEO, Martinez Development Group',
    quote:
      'Seyon delivered our office complex ahead of schedule and under budget. Their professionalism and attention to detail are unmatched in the industry.',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Jennifer Thompson',
    role: 'Director, Coastal Properties LLC',
    quote:
      'Working with Seyon on our waterfront project was an exceptional experience. They brought our vision to life with remarkable precision and creativity.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'David Chen',
    role: 'Owner, Chen Hospitality Group',
    quote:
      'From planning to handover, Seyon kept us informed every step of the way. The quality of their work speaks for itself. Highly recommended.',
    rating: 5,
  },
]

function StarRating({ count }: { count: number }): React.ReactElement {
  return (
    <div className="flex gap-[4px]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#DF440E"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection(): React.ReactElement {
  return (
    <section
      className="w-full py-[100px]"
      style={{ backgroundColor: '#F8FAFC' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <span className="font-['Space_Grotesk'] font-semibold text-[14px] uppercase tracking-[3px] text-[#DF440E]">
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="mt-[16px] font-['Space_Grotesk'] font-bold text-[44px] leading-[52px] tracking-[-0.5px] text-[#0A1A3A]"
          >
            What Our{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #FF8902 0%, #FF6900 50%, #FB2C37 100%)',
              }}
            >
              Clients Say
            </span>
          </h2>
          <p className="mt-[16px] max-w-[600px] mx-auto font-['Space_Grotesk'] font-normal text-[16px] leading-[28px] text-[#4A5568]">
            Don't just take our word for it. Here's what our valued clients have to say about
            working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[16px] p-[32px] border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="mb-[20px]">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H10V18H0Z"
                    fill="#DF440E"
                    opacity="0.15"
                  />
                </svg>
              </div>

              {/* Rating */}
              <StarRating count={testimonial.rating} />

              {/* Quote */}
              <p className="mt-[16px] font-['Space_Grotesk'] font-normal text-[15px] leading-[26px] text-[#4A5568]">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="mt-[24px] flex items-center gap-[12px]">
                <div
                  className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#DF440E' }}
                >
                  <span className="font-['Space_Grotesk'] font-bold text-[16px] text-white">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <p className="font-['Space_Grotesk'] font-bold text-[15px] leading-[20px] text-[#0A1A3A]">
                    {testimonial.name}
                  </p>
                  <p className="font-['Space_Grotesk'] font-normal text-[13px] leading-[18px] text-[#4A5568]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
