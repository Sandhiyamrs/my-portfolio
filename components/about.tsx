export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 slide-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science student specializing in Frontend Development and AI-based applications.
              With a strong foundation in Python, JavaScript, and modern web tools, I'm dedicated to building
              intelligent, user-friendly web solutions that make a real impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey spans designing mobile and web interfaces, exploring AI/ML trends, and contributing to
              open-source projects. I believe in combining creative UI design with clean, efficient code to deliver
              exceptional digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my Bachelor's in Computer Science at PPG Institute of Technology with a CGPA of 8.2/10.
              I'm enthusiastic about continuous learning, innovation, and pushing the boundaries of what's possible with
              web technologies and artificial intelligence.
            </p>
          </div>

          <div className="slide-right">
            <div className="relative p-8 rounded-lg border-2 border-primary/30 bg-card/50 backdrop-blur hover:border-primary/70 transition-smooth">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg" />
              <div className="relative space-y-4">
                <h3 className="text-2xl font-bold text-primary mb-4">Key Highlights</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3">
                    <span className="text-primary">→</span> Frontend: React, HTML, CSS, JavaScript, Tailwind CSS
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">→</span> Backend: Python, Django, Firebase, MySQL
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">→</span> AI/ML: NLP, Machine Learning, Streamlit
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">→</span> Mobile: Cross-platform app development
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">→</span> Version Control: Git, GitHub, Open-source Collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
