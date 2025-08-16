"use client"

import { ServiceCarousel } from "../ServiceCarousel"

interface ServicesSectionProps {
  yearbookImages: string[]
  photographyImages: string[]
  videoFiles: string[]
  setYearbookModalIndex: (index: number) => void
  setYearbookModalOpen: (open: boolean) => void
  setPhotographyModalIndex: (index: number) => void
  setPhotographyModalOpen: (open: boolean) => void
  setVideoModalOpen: (open: boolean) => void
}

export function ServicesSection({
  yearbookImages,
  photographyImages,
  videoFiles,
  setYearbookModalIndex,
  setYearbookModalOpen,
  setPhotographyModalIndex,
  setPhotographyModalOpen,
  setVideoModalOpen,
}: ServicesSectionProps) {
  return (
    <section id="services" className="relative z-10 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-700 font-medium">All the best choice come from us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Yearbook Design Card */}
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 border-4 border-black shadow-2xl">
            <h3 className="text-4xl font-black text-white mb-2">Fully Custom Packaging</h3>
            <p className="text-white text-lg mb-8 font-bold">For Your Lasting Memories</p>

            {/* Image container with white border */}
            <div className="bg-white/10 rounded-2xl p-4 mb-8 border-4 border-white">
              <ServiceCarousel
                images={yearbookImages}
                title="Yearbook Design"
                onImageClick={(idx: number) => {
                  setYearbookModalIndex(idx)
                  setYearbookModalOpen(true)
                }}
              />
            </div>

            {/* Bottom badges - Fixed to be perfect circles and properly aligned */}
            <div className="flex justify-between items-center px-2">
              <div className="bg-cyan-400 rounded-full w-16 h-16 flex items-center justify-center border-2 border-white flex-shrink-0">
                <span className="text-orange-600 font-black text-xs text-center leading-tight">
                  HAPPY
                  <br />
                  2025
                </span>
              </div>
              <div className="bg-black/30 rounded-full px-4 py-2 border-2 border-white flex-shrink-0">
                <span className="text-white font-black text-xs">#BEHAPPYWITHYOURFRIENDS</span>
              </div>
            </div>
          </div>

          {/* Photography Card */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 border-4 border-black shadow-2xl">
            <h3 className="text-4xl font-black text-yellow-300 mb-2">Exclusive Yearbook Design</h3>
            <p className="text-white text-lg mb-8 font-bold">Memories crafted with love</p>

            {/* Image container */}
            <div className="bg-white/10 rounded-2xl p-4 mb-8 border-4 border-white">
              <ServiceCarousel
                images={photographyImages}
                title="Photography"
                onImageClick={(idx: number) => {
                  setPhotographyModalIndex(idx)
                  setPhotographyModalOpen(true)
                }}
              />
            </div>

            {/* Bottom badges - Fixed to be perfect circles and properly aligned */}
            <div className="flex justify-between items-center px-2">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center border-2 border-white flex-shrink-0">
                <span className="text-purple-600 font-black text-xs text-center leading-tight">
                  HAPPY
                  <br />
                  2025
                </span>
              </div>
              <div className="bg-black/30 rounded-full px-4 py-2 border-2 border-white flex-shrink-0">
                <span className="text-white font-black text-xs">#BEHAPPYWITHYOURFRIENDS</span>
              </div>
            </div>
          </div>

          {/* Video Production Card - Updated to show popup first */}
          <div className="bg-gradient-to-br from-gray-800 to-black rounded-3xl p-8 border-4 border-black shadow-2xl">
            <h3 className="text-4xl font-black text-red-400 mb-2">Timeless Cinematic Video</h3>
            <p className="text-white text-lg mb-8 font-bold">Stories that come alive on screen</p>

            {/* Video container with click to open popup first */}
            <div className="bg-white/10 rounded-2xl p-4 mb-8 border-4 border-white">
              <div
                className="relative h-40 rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setVideoModalOpen(true)}
              >
                <video
                  src={videoFiles[0] || "/placeholder.mp4"}
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out hover:scale-105"
                  muted
                  autoPlay
                  loop
                  playsInline
                  poster="/placeholder.svg?height=200&width=300&text=Video+Production+1"
                />
              </div>
            </div>

            {/* Bottom badges - Fixed to be perfect circles and properly aligned */}
            <div className="flex justify-between items-center px-2">
              <div className="bg-red-400 rounded-full w-16 h-16 flex items-center justify-center border-2 border-white flex-shrink-0">
                <span className="text-gray-800 font-black text-xs text-center leading-tight">
                  HAPPY
                  <br />
                  2025
                </span>
              </div>
              <div className="bg-black/30 rounded-full px-4 py-2 border-2 border-white flex-shrink-0">
                <span className="text-white font-black text-xs">#BEHAPPYWITHYOURFRIENDS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
