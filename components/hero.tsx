"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="text-center z-10 px-4 slide-left">
        <div className="mb-6 inline-block">
          <div className="px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-mono pulse-border">
            Frontend Developer | Mobile App Developer | AI Enthusiast
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="block text-foreground">Hi, I'm</span>
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent neon-text">
            Sandhiya M
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Computer Science student at PPG Institute of Technology crafting beautiful, intelligent web experiences with
          modern technologies and AI innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-smooth transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-smooth"
          >
            Get In Touch
          </a>
        </div>

        {/* Floating tech icons */}
        <div className="mt-20 grid grid-cols-3 md:grid-cols-5 gap-4 max-w-2xl mx-auto text-3xl md:text-5xl float-animation">
          <div className="animate-bounce">⚛️</div>
          <div className="animate-bounce delay-100">🎨</div>
          <div className="animate-bounce delay-200">✨</div>
          <div className="animate-bounce delay-300">🚀</div>
          <div className="animate-bounce delay-400">💡</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
