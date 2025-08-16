"use client"

interface MobileMenuProps {
  isMenuOpen: boolean
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export function MobileMenu({ isMenuOpen, activeSection, scrollToSection }: MobileMenuProps) {
  if (!isMenuOpen) return null

  return (
    <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm md:hidden">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <button
          onClick={() => scrollToSection("home")}
          className={`text-2xl transition-colors font-bold ${
            activeSection === "home" ? "text-purple-400" : "text-white hover:text-yellow-300"
          }`}
        >
          HOME
        </button>
        <button
          onClick={() => scrollToSection("services")}
          className={`text-2xl transition-colors font-bold ${
            activeSection === "services" ? "text-purple-400" : "text-white hover:text-yellow-300"
          }`}
        >
          SERVICES
        </button>
        <button
          onClick={() => scrollToSection("portfolio")}
          className={`text-2xl transition-colors font-bold ${
            activeSection === "portfolio" ? "text-purple-400" : "text-white hover:text-yellow-300"
          }`}
        >
          PORTFOLIO
        </button>
        <button
          onClick={() => scrollToSection("client")}
          className={`text-2xl transition-colors font-bold ${
            activeSection === "client" ? "text-purple-400" : "text-white hover:text-yellow-300"
          }`}
        >
          CLIENT
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`text-2xl transition-colors font-bold ${
            activeSection === "about" ? "text-purple-400" : "text-white hover:text-yellow-300"
          }`}
        >
          ABOUT
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`text-2xl transition-colors font-bold ${
            activeSection === "contact" ? "text-purple-400" : "text-white hover:text-yellow-300"
          }`}
        >
          CONTACT
        </button>
      </div>
    </div>
  )
}
