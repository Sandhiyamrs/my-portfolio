"use client"

import { useState } from "react"

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "EmotionSense - AI-Powered Emotion Detection",
      description:
        "NLP-based model to decode and classify emotions from social media text using Python, scikit-learn, NLTK, and Streamlit for interactive visualization.",
      image: "/placeholder.svg?key=rg8d3",
      tags: ["Python", "NLP", "Machine Learning", "Streamlit"],
      link: "#",
    },
    {
      id: 2,
      title: "Scoop Delight - Interactive Ice Cream Website",
      description:
        "Dynamic frontend with animated flavor cards, local storage cart, and brand modals. Built with modern web technologies for engaging user experience.",
      image: "/placeholder.svg?key=kch4p",
      tags: ["HTML", "CSS", "JavaScript", "Firebase", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "Syncura - AI-Powered Health Analyzer",
      description:
        "AI-powered app that tracks physical and mental health, offers mood insights, and works securely on cloud and offline. Simple, smart, and accessible for everyone.",
      image: "/placeholder.svg?key=33pi6",
      tags: ["AI/ML", "Health Tech", "Cloud", "Mobile-friendly"],
      link: "#",
    },
    {
      id: 4,
      title: "Food Waste Reduction Platform",
      description:
        "Web app connecting restaurants with NGOs to minimize food waste. Features real-time donation tracking and smart matching algorithm.",
      image: "/placeholder.svg?key=kmq3o",
      tags: ["Web App", "Real-time", "Algorithm", "Sustainability"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border border-primary/30 bg-background hover:border-primary/70 transition-smooth"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/20 text-primary rounded border border-primary/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2 px-4 bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground rounded transition-smooth font-semibold">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
