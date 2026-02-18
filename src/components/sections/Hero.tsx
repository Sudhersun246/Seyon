import { Button } from '@/components/common'
import { heroContent } from '@/constants'

export function Hero(): React.ReactElement {
  return (
    <section
      className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 section-padding"
      aria-labelledby="hero-heading"
    >
      <div className="container-wrapper">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight animate-fade-in"
          >
            {heroContent.headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-secondary-600 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            {heroContent.subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-200">
            <Button href={heroContent.primaryCtaLink} size="lg">
              {heroContent.primaryCta}
            </Button>
            <Button href={heroContent.secondaryCtaLink} variant="outline" size="lg">
              {heroContent.secondaryCta}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      />
    </section>
  )
}
