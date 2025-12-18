export default function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-12 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-lg border border-primary/30 bg-background hover:border-primary/70 transition-smooth group">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  Bachelor of Engineering in Computer Science
                </h3>
                <p className="text-primary font-semibold text-lg">PPG Institute of Technology</p>
              </div>
              <p className="text-muted-foreground font-mono text-sm mt-2 md:mt-0">2023 – 2027</p>
            </div>
            <div className="space-y-3 mb-4">
              <p className="text-muted-foreground">
                <span className="text-primary font-semibold">CGPA:</span> 8.2 / 10
              </p>
              <p className="text-muted-foreground">
                Specializing in Frontend Development and AI-based applications with coursework in Data Structures &
                Algorithms, Web Technologies, and Machine Learning.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/50">
                Computer Science
              </span>
              <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/50">
                Frontend Development
              </span>
              <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/50">
                AI/ML
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
