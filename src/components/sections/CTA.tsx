import { Button } from '@/components/common'
import { ctaContent } from '@/constants'

export function CTA(): React.ReactElement {
  return (
    <section
      className="bg-gradient-to-r from-primary-600 to-primary-700 section-padding"
      aria-labelledby="cta-heading"
    >
      <div className="container-wrapper text-center">
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          {ctaContent.headline}
        </h2>
        <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
          {ctaContent.description}
        </p>
        <Button
          href={ctaContent.buttonLink}
          variant="secondary"
          size="lg"
          ariaLabel={ctaContent.buttonText}
        >
          {ctaContent.buttonText}
        </Button>
      </div>
    </section>
  )
}
