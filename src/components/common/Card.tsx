import { cn } from '@/utils'
import type { CardProps } from '@/types'

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({
  children,
  className,
  padding = 'md',
  hover = false,
}: CardProps): React.ReactElement {
  return (
    <div
      className={cn(
        'rounded-xl bg-white border border-secondary-200 shadow-sm',
        paddingStyles[padding],
        hover && 'transition-shadow duration-200 hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  )
}
