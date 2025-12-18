export default function Skills() {
  const skills = [
    { category: "Languages", items: ["Python", "Java", "JavaScript", "HTML", "CSS"] },
    { category: "Frontend", items: ["React", "Tailwind CSS", "CSS", "Responsive Design"] },
    { category: "Backend & DB", items: ["Django", "MySQL", "Firebase"] },
    { category: "Tools & Other", items: ["Git", "GitHub", "DSA Basics", "NLTK", "scikit-learn"] },
  ]

  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-6 rounded-lg border border-primary/30 bg-background hover:border-primary/70 hover:shadow-lg hover:shadow-primary/20 transition-smooth"
            >
              <h3 className="text-lg font-bold text-primary mb-4">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="text-foreground/80 hover:text-primary transition-smooth flex items-center gap-2"
                  >
                    <span className="text-primary">▸</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
