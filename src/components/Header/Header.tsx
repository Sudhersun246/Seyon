import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "@/assets/images/header/logo.png";
import "./index.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
];

export function Header(): React.ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 bg-transparent"
      style={{ height: "100px" }}
    >
      {/* Navy background behind the clip shape */}
      <div className="absolute inset-0" />

      {/* White clipped background using exact Figma SVG path */}
      <svg
        className="header-clip-shape"
        viewBox="0 0 1920 101"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M1920 2.5C1920 3.88071 1918.88 5 1917.5 5L1731 5C1714.43 5 1701 18.4315 1701 35L1701 71C1701 87.5685 1687.57 101 1671 101L243 101C226.431 101 213 87.5685 213 71L213 35C213 18.4315 199.569 5 183 5L2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0L1917.5 0C1918.88 0 1920 1.11929 1920 2.5Z"
          fill="#FFFFFF"
        />
      </svg>

      <nav
        className="md:max-w-4/5 max-w-full w-full md:py-5 md:px-14 p-4 relative mx-auto h-24 z-10 flex items-center justify-between rounded-[10px]"
        style={{
          boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" aria-label="Seyon - Home">
          <img
            src={logoImage}
            alt="Seyon"
            className="object-contain"
            style={{ width: "108px", height: "50px" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "font-[Space_Grotesk] text-[16px] font-bold uppercase leading-4 tracking-[0px] text-[#DF440E] underline underline-offset-4"
                    : "font-[Space_Grotesk] text-[16px] font-normal uppercase leading-4 tracking-[0px] text-black hover:text-[#DF440E] transition-colors"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden lg:flex items-center gap-2.5 bg-[#DF440E] rounded-[10px] px-7.5 py-3.5"
        >
          <span className="font-[Space_Grotesk] font-bold text-[16px] uppercase leading-4 tracking-[0px] text-white">
            Contact Us
          </span>
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="-rotate-45"
              aria-hidden="true"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#DF440E"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-black hover:text-[#DF440E] transition-colors"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-white rounded-[10px] mt-2 shadow-[0_1px_8px_rgba(0,0,0,0.05)] transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-100 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-12.5">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 font-[Space_Grotesk] text-[16px] font-bold uppercase leading-4 tracking-[0px] text-[#DF440E] underline underline-offset-4"
                    : "block py-2 font-[Space_Grotesk] text-[16px] font-normal uppercase leading-4 tracking-[0px] text-black hover:text-[#DF440E] transition-colors"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2.5 bg-[#DF440E] rounded-[10px] px-7.5 py-3.5 mt-2"
            >
              <span className="font-[Space_Grotesk] font-bold text-[16px] uppercase leading-4 tracking-[0px] text-white">
                Contact Us
              </span>
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="-rotate-45"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#DF440E"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
