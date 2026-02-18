import { Link } from 'react-router-dom'
import { cn } from '@/utils'
import type { ButtonProps } from '@/types'

const variantStyles = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
  secondary:
    'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus:ring-secondary-500',
  outline:
    'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  ghost:
    'text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900 focus:ring-secondary-500',
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled = false,
  type = 'button',
  onClick,
  href,
  ariaLabel,
}: ButtonProps): React.ReactElement {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if (href) {
    return (
      <Link to={href} className={baseStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={baseStyles}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
