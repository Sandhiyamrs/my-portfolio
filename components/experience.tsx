export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc",
      period: "2023 - Present",
      description:
        "Leading frontend architecture for high-performance applications with focus on user experience and accessibility.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co",
      period: "2021 - 2023",
      description:
        "Developed and maintained multiple web applications, implemented APIs, and mentored junior developers.",
      skills: ["React", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Labs",
      period: "2020 - 2021",
      description: "Started my journey building responsive web applications and learning modern web technologies.",
      skills: ["JavaScript", "React", "CSS", "Git"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 md:px-12 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-primary/30 bg-background hover:border-primary/70 transition-smooth group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <p className="text-muted-foreground font-mono text-sm mt-2 md:mt-0">{exp.period}</p>
              </div>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
