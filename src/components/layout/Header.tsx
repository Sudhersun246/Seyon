import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '@/utils'
import { useScrollPosition, useMediaQuery } from '@/hooks'
import { siteConfig, navItems } from '@/constants'
import { Button } from '@/components/common'

export function Header(): React.ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { y: scrollY } = useScrollPosition()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isScrolled = scrollY > 20

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav
        className="container-wrapper"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="text-xl font-bold text-secondary-900 font-heading"
            aria-label={`${siteConfig.name} - Home`}
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'text-secondary-600 hover:text-primary-600 font-medium transition-colors',
                      isActive && 'text-primary-600'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Button href="/contact" size="sm">
                Get Started
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-secondary-600 hover:text-secondary-900"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobile && (
          <div
            id="mobile-menu"
            className={cn(
              'md:hidden overflow-hidden transition-all duration-300',
              isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
            )}
          >
            <ul className="flex flex-col gap-4 pt-4 border-t border-secondary-200">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      cn(
                        'block py-2 text-secondary-600 hover:text-primary-600 font-medium transition-colors',
                        isActive && 'text-primary-600'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Button href="/contact" onClick={closeMobileMenu} className="w-full">
                  Get Started
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
