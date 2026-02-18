import { cn } from '@/utils'
import type { InputProps } from '@/types'

export function Input({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  className,
  value,
  onChange,
}: InputProps): React.ReactElement {
  const inputId = `input-${name}`
  const baseInputStyles = cn(
    'block w-full rounded-lg border border-secondary-300 px-4 py-3',
    'bg-white text-secondary-900 placeholder:text-secondary-400',
    'transition-colors duration-200',
    'focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20',
    'focus:outline-none'
  )

  return (
    <div className={cn('space-y-2', className)}>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-secondary-700"
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          rows={4}
          className={baseInputStyles}
          aria-required={required}
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={baseInputStyles}
          aria-required={required}
        />
      )}
    </div>
  )
}
