"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
  activeSection: string
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  scrollToSection: (sectionId: string) => void
}

export function Header({ 
  isScrolled, 
  activeSection, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollToSection 
}: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50" : "bg-transparent"
      }`}
    >
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hp-removebg-preview-mWbCO2m0mEnyTiYjULaSWk7YyKUTKs.png"
            alt="Happy Friends Project Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            HAPPY FRIENDS PROJECT
          </h1>
          <p className="text-xs text-gray-600">#BEHAPPYWITHYOURFRIENDS</p>
        </div>
      </div>

      <nav className="hidden md:flex space-x-8">
        <button
          onClick={() => scrollToSection("home")}
          className={`transition-colors font-bold ${
            activeSection === "home" ? "text-purple-600" : "text-gray-800 hover:text-purple-600"
          }`}
        >
          HOME
        </button>
        <button
          onClick={() => scrollToSection("services")}
          className={`transition-colors font-bold ${
            activeSection === "services" ? "text-purple-600" : "text-gray-800 hover:text-purple-600"
          }`}
        >
          SERVICES
        </button>
        <button
          onClick={() => scrollToSection("portfolio")}
          className={`transition-colors font-bold ${
            activeSection === "portfolio" ? "text-purple-600" : "text-gray-800 hover:text-purple-600"
          }`}
        >
          PORTFOLIO
        </button>
        <button
          onClick={() => scrollToSection("client")}
          className={`transition-colors font-bold ${
            activeSection === "client" ? "text-purple-600" : "text-gray-800 hover:text-purple-600"
          }`}
        >
          CLIENT
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`transition-colors font-bold ${
            activeSection === "about" ? "text-purple-600" : "text-gray-800 hover:text-purple-600"
          }`}
        >
          ABOUT
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`transition-colors font-bold ${
            activeSection === "contact" ? "text-purple-600" : "text-gray-800 hover:text-purple-600"
          }`}
        >
          CONTACT
        </button>
      </nav>

      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-gray-800 hover:text-purple-600"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </Button>
    </header>
  )
}
