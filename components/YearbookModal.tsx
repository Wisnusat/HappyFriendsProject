"use client"

import { useState, useEffect, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Unified Yearbook-Style Modal Component for all popups
export function YearbookModal({
  isOpen,
  onClose,
  images,
  title,
  type = "image",
  modalSize = "default",
  initialIndex = 0,
}: {
  isOpen: boolean
  onClose: () => void
  images: string[]
  title: string
  type?: "image" | "video"
  modalSize?: "default" | "wide" | "tall"
  initialIndex?: number
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [images.length, isOpen, initialIndex])

  if (!isOpen) return null

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const openFullVideo = () => {
    if (type === "video") {
      // Open full screen video
      const videoSrc = images[currentIndex]
      const newWindow = window.open("", "_blank")
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head><title>Video - ${title}</title></head>
            <body style="margin:0;background:#000;display:flex;align-items:center;justify-content:center;height:100vh;">
              <video controls autoplay style="max-width:100%;max-height:100%;">
                <source src="${videoSrc}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </body>
          </html>
        `)
      }
    }
  }

  // Dynamic sizing based on modalSize prop
  const getModalClasses = () => {
    switch (modalSize) {
      case "wide":
        return "max-w-2xl max-h-[70vh]" // Wider for horizontal images
      case "tall":
        return "max-w-lg max-h-[90vh]" // Taller for vertical images
      default:
        return "max-w-md max-h-[80vh]" // Default size
    }
  }

  const getImageClasses = () => {
    switch (modalSize) {
      case "wide":
        return "h-64" // Shorter height for wide modal
      case "tall":
        return "h-96" // Taller height for tall modal
      default:
        return "h-80" // Default height
    }
  }

  return (
    <div className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className={`relative ${getModalClasses()} w-full`}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Yearbook-style frame */}
        <div className="bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 rounded-3xl p-6 shadow-2xl border-4 border-amber-200">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-4 shadow-inner border-2 border-amber-300">
            {/* Main content area */}
            <div className="relative">
              <div
                className={`relative ${getImageClasses()} rounded-xl overflow-hidden bg-white shadow-lg border-4 border-gray-200`}
              >
                {type === "video" ? (
                  <div className="relative w-full h-full group cursor-pointer" onClick={openFullVideo}>
                    <video
                      ref={videoRef}
                      src={images[currentIndex] || "/placeholder.mp4"}
                      className="w-full h-full object-cover"
                      muted
                      autoPlay
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-0 h-0 border-l-[8px] border-l-gray-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`${title} ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Navigation arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-800" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-800" />
                    </button>
                  </>
                )}
              </div>

              {/* Title and description */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-black text-amber-800 mb-2">{title}</h3>
                <p className="text-amber-700 font-bold text-sm">
                  {currentIndex + 1} of {images.length}
                </p>
              </div>

              {/* Dots navigation */}
              {images.length > 1 && (
                <div className="flex justify-center mt-3 space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-amber-600 shadow-lg scale-110" : "bg-amber-400/50 hover:bg-amber-500"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
