import { useState } from "react";
import { NavLink } from "react-router";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/skills", label: "Skills", end: false },
  { to: "/projects", label: "Projects", end: false },
  { to: "/certifications", label: "Certifications", end: false },
];

const CONTACT_BUTTON_CLASS =
  "inline-flex items-center justify-center bg-black text-white hover:bg-gray-800 transition-colors px-4 py-1.5 rounded-lg text-sm font-medium";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? "text-black" : "text-gray-600 hover:text-gray-900"}`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-2 py-3 rounded-lg text-sm font-medium transition-colors ${
      isActive ? "bg-gray-100 text-black" : "text-gray-600 hover:bg-gray-50"
    }`;

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" onClick={closeMenu} className="text-xl font-bold text-gray-900 tracking-tight">
            MyFirstApp
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={desktopLinkClass}>
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className={CONTACT_BUTTON_CLASS}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="lg:hidden p-2 -mr-2 text-gray-700 hover:text-black transition-colors cursor-pointer"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-4 border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} onClick={closeMenu} className={mobileLinkClass}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={closeMenu} className={`mt-2 ${CONTACT_BUTTON_CLASS}`}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}