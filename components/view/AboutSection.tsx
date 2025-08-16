"use client"

import { Card, CardContent } from "@/components/ui/card"

interface Stat {
  number: string
  label: string
  subtitle: string
}

interface AboutSectionProps {
  stats: Stat[]
}

export function AboutSection({ stats }: AboutSectionProps) {
  return (
    <section id="about" className="relative z-10 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            #BEHAPPYWITHYOURFRIENDS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-pink-500 to-purple-600 border-2 border-pink-300/50 shadow-xl rounded-3xl transform hover:scale-105 transition-all"
            >
              <CardContent className="p-6 text-center rounded-3xl">
                <div className="text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-lg">{stat.number}</div>
                <div className="text-xl md:text-2xl font-black text-yellow-300 mb-1 drop-shadow-lg">{stat.label}</div>
                <div className="text-sm text-white font-bold">{stat.subtitle}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
