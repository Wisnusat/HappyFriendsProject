"use client"

import { PortfolioCarousel } from "../PortfolioCarousel"

interface PortfolioSectionProps {
  portfolioLeftTopImages: string[]
  portfolioLeftBottomImages: string[]
  portfolioCenterImages: string[]
  portfolioRightTopImages: string[]
  portfolioRightBottomImages: string[]
  setPortfolioLeftTopModalIndex: (index: number) => void
  setPortfolioLeftTopModalOpen: (open: boolean) => void
  setPortfolioLeftBottomModalIndex: (index: number) => void
  setPortfolioLeftBottomModalOpen: (open: boolean) => void
  setPortfolioCenterModalIndex: (index: number) => void
  setPortfolioCenterModalOpen: (open: boolean) => void
  setPortfolioRightTopModalIndex: (index: number) => void
  setPortfolioRightTopModalOpen: (open: boolean) => void
  setPortfolioRightBottomModalIndex: (index: number) => void
  setPortfolioRightBottomModalOpen: (open: boolean) => void
}

export function PortfolioSection({
  portfolioLeftTopImages,
  portfolioLeftBottomImages,
  portfolioCenterImages,
  portfolioRightTopImages,
  portfolioRightBottomImages,
  setPortfolioLeftTopModalIndex,
  setPortfolioLeftTopModalOpen,
  setPortfolioLeftBottomModalIndex,
  setPortfolioLeftBottomModalOpen,
  setPortfolioCenterModalIndex,
  setPortfolioCenterModalOpen,
  setPortfolioRightTopModalIndex,
  setPortfolioRightTopModalOpen,
  setPortfolioRightBottomModalIndex,
  setPortfolioRightBottomModalOpen,
}: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="relative z-10 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-[3rem] p-4 border-4 border-gray-900 shadow-2xl">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-[2.5rem] p-8 border-2 border-white">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-6xl font-black text-orange-600 mb-4 drop-shadow-lg">Photo</h2>
              <p className="text-orange-700 text-xl font-bold">A gallery of unforgettable moments</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left Column - 2 photos stacked - make slightly taller */}
              <div className="space-y-4 flex flex-col justify-center">
                <PortfolioCarousel
                  images={portfolioLeftTopImages}
                  title="Portfolio Left Top"
                  height="h-40"
                  autoAdvanceDelay={5000}
                  onImageClick={(idx) => {
                    setPortfolioLeftTopModalIndex(idx)
                    setPortfolioLeftTopModalOpen(true)
                  }}
                />
                <PortfolioCarousel
                  images={portfolioLeftBottomImages}
                  title="Portfolio Left Bottom"
                  height="h-40"
                  autoAdvanceDelay={5500}
                  onImageClick={(idx) => {
                    setPortfolioLeftBottomModalIndex(idx)
                    setPortfolioLeftBottomModalOpen(true)
                  }}
                />
              </div>

              {/* Center Column - 1 large featured photo - make much taller */}
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <PortfolioCarousel
                    images={portfolioCenterImages}
                    title="Portfolio Center Featured"
                    height="h-96"
                    autoAdvanceDelay={6000}
                    onImageClick={(idx) => {
                      setPortfolioCenterModalIndex(idx)
                      setPortfolioCenterModalOpen(true)
                    }}
                  />
                </div>
              </div>

              {/* Right Column - 2 photos stacked - make slightly taller */}
              <div className="space-y-4 flex flex-col justify-center">
                <PortfolioCarousel
                  images={portfolioRightTopImages}
                  title="Portfolio Right Top"
                  height="h-40"
                  autoAdvanceDelay={5200}
                  onImageClick={(idx) => {
                    setPortfolioRightTopModalIndex(idx)
                    setPortfolioRightTopModalOpen(true)
                  }}
                />
                <PortfolioCarousel
                  images={portfolioRightBottomImages}
                  title="Portfolio Right Bottom"
                  height="h-40"
                  autoAdvanceDelay={4800}
                  onImageClick={(idx) => {
                    setPortfolioRightBottomModalIndex(idx)
                    setPortfolioRightBottomModalOpen(true)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
