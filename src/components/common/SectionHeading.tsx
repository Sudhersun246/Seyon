import { cn } from '@/utils'
import type { SectionHeadingProps } from '@/types'

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps): React.ReactElement {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-secondary-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
