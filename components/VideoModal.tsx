"use client"

import { X } from "lucide-react"

// Video Modal Component - Full screen video popup
export function VideoModal({
  isOpen,
  onClose,
  videoSrc,
  videoTitle,
}: {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  videoTitle: string
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          <video
            src={videoSrc}
            className="w-full h-auto max-h-[80vh]"
            controls
            autoPlay
          >
            Your browser does not support the video tag.
          </video>
          <div className="p-4 bg-gray-900">
            <h3 className="text-white font-bold text-lg">{videoTitle}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
