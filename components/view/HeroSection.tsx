"use client"

import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="relative z-10 px-4 py-20 lg:py-28 pt-32">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-2xl">
              Your Ideas,
            </span>
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
              Our Passion,
            </span>
            <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              Built With Love.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            We create unforgettable yearbooks that capture your precious moments with friends. Let's make your school
            memories last forever!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 text-lg font-black shadow-2xl border-2 border-gray-900 transform hover:scale-105 transition-all rounded-xl"
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 text-lg font-black shadow-2xl border-2 border-gray-900 transform hover:scale-105 transition-all rounded-xl"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
