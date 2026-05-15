import { useScrollReveal } from "../hooks/useScrollReveal";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks",
    skills: ["Django", "Angular"],
  },
  {
    title: "Database",
    skills: ["SQL"],
  },
  {
    title: "Concepts",
    skills: ["Machine Learning", "NLP"],
  },
  {
    title: "Tools",
    skills: ["GitHub"],
  },
];

const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="section-title text-center fade-up">Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto fade-up">
          Technologies I work with
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className="glass-card p-6 fade-up"
              style={{ transitionDelay: `${gi * 100}ms` }}
            >
              <h3 className="text-primary font-semibold mb-4 text-sm uppercase tracking-wider">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-card px-4 py-2 text-sm text-foreground"
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
  );
};

export default SkillsSection;
