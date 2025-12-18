"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const socialLinks = [
    { name: "GitHub", icon: "👨‍💻", link: "https://github.com/Sandhiyamrs" },
    { name: "LinkedIn", icon: "🔗", link: "#" },
    { name: "Email", icon: "✉️", link: "mailto:sandhiyamrs2006@gmail.com" },
    { name: "Phone", icon: "📱", link: "tel:+919487358504" },
  ]

  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="slide-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-primary/30 rounded-lg text-foreground focus:border-primary focus:outline-none transition-smooth"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-foreground font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-primary/30 rounded-lg text-foreground focus:border-primary focus:outline-none transition-smooth"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-foreground font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-primary/30 rounded-lg text-foreground focus:border-primary focus:outline-none transition-smooth resize-none"
                  placeholder="Your message..."
                  rows={5}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-smooth transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="slide-right space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Connect With Me</h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to collaborate on interesting projects, discuss ideas, or just chat about tech. Feel
                free to reach out through any of these channels!
              </p>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    className="p-4 rounded-lg border border-primary/30 bg-background hover:border-primary/70 hover:bg-primary/10 transition-smooth text-center"
                  >
                    <div className="text-3xl mb-2">{social.icon}</div>
                    <div className="text-sm font-semibold text-foreground">{social.name}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10">
              <p className="text-foreground font-semibold mb-2">Based In</p>
              <p className="text-muted-foreground text-sm">
                Coimbatore, Tamil Nadu | Available for freelance projects, internships, and full-time opportunities.
                Passionate about AI-driven web experiences and open-source contribution.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>Crafted with passion using HTML, CSS, JavaScript, React & Next.js</p>
          <p className="mt-2 text-sm">© 2025 Sandhiya M. All rights reserved. Hosted on Vercel</p>
        </div>
      </div>
    </section>
  )
}
