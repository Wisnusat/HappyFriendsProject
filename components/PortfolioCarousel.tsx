"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Portfolio Carousel Component for the new layout with Navigation Arrows
export function PortfolioCarousel({
  images,
  title,
  height = "h-32",
  autoAdvanceDelay = 4000,
  onImageClick,
}: {
  images: string[]
  title: string
  height?: string
  autoAdvanceDelay?: number
  onImageClick?: (index: number) => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoAdvanceDelay)
    return () => clearInterval(interval)
  }, [images.length, autoAdvanceDelay])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative group">
      {/* Main Image Display */}
      <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-lg">
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${title} ${currentIndex + 1}`}
          className={`w-full ${height} object-cover transition-all duration-1000 ease-in-out cursor-pointer hover:scale-105`}
          onClick={() => onImageClick && onImageClick(currentIndex)}
        />

        {/* Navigation Arrows - Only visible on hover */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10"
        >
          <ChevronLeft className="w-3 h-3 text-gray-800" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10"
        >
          <ChevronRight className="w-3 h-3 text-gray-800" />
        </button>

        {/* Overlay with dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white shadow-lg scale-110" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
