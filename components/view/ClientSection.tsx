"use client"

interface ClientSectionProps {
  clientLogos: string[]
}

export function ClientSection({ clientLogos }: ClientSectionProps) {
  return (
    <section id="client" className="relative z-10 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            OUR CLIENT
          </h2>
          <p className="text-xl text-gray-700 font-medium">Partners who trust us</p>
        </div>

        {/* Animated Client Logos Grid - Fixed for continuous looping */}
        <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 rounded-3xl p-8 border-4 border-purple-200 shadow-2xl overflow-hidden">
          <div className="relative">
            {/* First Row - Moving Right - Continuous loop */}
            <div className="flex animate-scroll-right mb-6 whitespace-nowrap">
              {/* Triple the logos to ensure seamless looping */}
              {[...clientLogos.slice(0, 10), ...clientLogos.slice(0, 10), ...clientLogos.slice(0, 10)].map(
                (logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-20 h-20 mx-4 bg-white rounded-full shadow-lg border-2 border-purple-200 flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                  >
                    <img
                      src={logo || "/placeholder.svg"}
                      alt={`Client ${(index % 10) + 1}`}
                      className="w-12 h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ),
              )}
            </div>

            {/* Second Row - Moving Left - Continuous loop */}
            <div className="flex animate-scroll-left whitespace-nowrap">
              {/* Triple the logos to ensure seamless looping */}
              {[...clientLogos.slice(10, 20), ...clientLogos.slice(10, 20), ...clientLogos.slice(10, 20)].map(
                (logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-20 h-20 mx-4 bg-white rounded-full shadow-lg border-2 border-pink-200 flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                  >
                    <img
                      src={logo || "/placeholder.svg"}
                      alt={`Client ${(index % 10) + 11}`}
                      className="w-12 h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 w-8 h-8 bg-purple-400 rounded-full opacity-20"></div>
          <div className="absolute top-8 right-8 w-6 h-6 bg-pink-400 rounded-full opacity-30"></div>
          <div className="absolute bottom-4 left-1/3 w-4 h-4 bg-orange-400 rounded-full opacity-25"></div>
          <div className="absolute bottom-8 right-1/4 w-10 h-10 bg-purple-300 rounded-full opacity-15"></div>
        </div>
      </div>
    </section>
  )
}
