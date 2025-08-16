"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Service Carousel Component with Auto-advance, Click to Modal, and Navigation Arrows
export function ServiceCarousel({
  images,
  title,
  onImageClick,
}: {
  images: string[]
  title: string
  onImageClick?: (index: number) => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

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
      <div className="relative h-40 rounded-xl overflow-hidden">
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${title} ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out cursor-pointer hover:scale-105"
          onClick={() => onImageClick && onImageClick(currentIndex)}
        />

        {/* Navigation Arrows - Only visible on hover */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10"
        >
          <ChevronLeft className="w-4 h-4 text-gray-800" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10"
        >
          <ChevronRight className="w-4 h-4 text-gray-800" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white shadow-lg scale-110" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
