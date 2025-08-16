"use client"

interface BackgroundElementsProps {
  mousePosition: { x: number; y: number }
}

export function BackgroundElements({ mousePosition }: BackgroundElementsProps) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, #FF1493, #FF69B4)`,
          opacity: 0.1,
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      <div
        className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, #00BFFF, #1E90FF)`,
          opacity: 0.08,
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, #FFD700, #FFA500)`,
          opacity: 0.1,
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
        }}
      />
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, #8A2BE2, #9370DB)`,
          opacity: 0.08,
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.01}px)`,
        }}
      />
      {/* HP Logo Silhouette Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-96 h-96 opacity-5 transform rotate-12"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hp-removebg-preview-mWbCO2m0mEnyTiYjULaSWk7YyKUTKs.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: `rotate(12deg) translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
          }}
        />
      </div>
    </div>
  )
}
