import { useScrollReveal } from "../hooks/useScrollReveal";

const projects = [
  {
    title: "Fake Profile Identification in Social Media",
    description:
      "Built a machine learning-based system to detect fake profiles using NLP and user behavior analysis.",
    tech: ["Python", "Machine Learning", "Django", "NLP"],
    highlight: "Improved social media security with high accuracy detection",
  },
  {
    title: "Machine Learning System for Data Analysis",
    description:
      "Developed a system for data analysis, pattern recognition, and predictive modeling using Python.",
    tech: ["Python", "Pandas", "Django"],
    highlight: "Accurate predictions and data insights",
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="section-title text-center fade-up">Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto fade-up">
          What I've built
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="glass-card p-8 flex flex-col fade-up group"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                {p.description}
              </p>
              <p className="text-sm text-accent mb-4 italic">✨ {p.highlight}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="#" className="outline-glow-btn text-sm py-2 px-4">
                  View Code
                </a>
                <a href="#" className="text-sm py-2 px-4 text-muted-foreground hover:text-foreground transition-colors">
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
