import { useScrollReveal } from "../hooks/useScrollReveal";

const stats = [
  { value: "2+", label: "Projects" },
  { value: "5+", label: "Certifications" },
  { value: "8.12", label: "CGPA" },
];

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="section-title text-center fade-up">About Me</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto fade-up">
          Get to know me better
        </p>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 glass-card p-8 fade-up">
            <p className="text-foreground leading-relaxed mb-4">
              I'm a <span className="text-primary font-semibold">B.Tech graduate in Information Technology</span> with a strong academic record (8.12 CGPA). As a full-stack developer skilled in Java, Python, and modern web technologies, I'm passionate about building intelligent, data-driven applications.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              My experience spans machine learning-based applications, scalable web solutions, and AI-driven systems. I'm currently working as a <span className="text-accent font-semibold">Full Stack Java Trainer (Training Phase)</span>, deepening my expertise in enterprise-grade development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I thrive on problem-solving, continuous learning, and turning complex ideas into real-world applications that make a difference.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center fade-up"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold neon-text mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
