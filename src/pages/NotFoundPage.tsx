import { Button } from '@/components/common'
import { siteConfig, notFoundContent } from '@/constants'

export function NotFoundPage(): React.ReactElement {
  return (
    <>
      <title>{`Page Not Found - ${siteConfig.name}`}</title>
      <meta name="description" content="The page you're looking for doesn't exist." />

      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center section-padding">
        <div className="container-wrapper">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-9xl font-bold text-primary-600 mb-4">
              {notFoundContent.headline}
            </h1>
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {notFoundContent.title}
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              {notFoundContent.description}
            </p>
            <Button href={notFoundContent.buttonLink} size="lg">
              {notFoundContent.buttonText}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
