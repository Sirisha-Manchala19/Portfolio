import { useScrollReveal } from "../hooks/useScrollReveal";

const blogs = [
  {
    title: "Getting Started with Machine Learning",
    desc: "A beginner-friendly guide to understanding the fundamentals of ML, key algorithms, and how to build your first model.",
  },
  {
    title: "How I Built My First Django Project",
    desc: "A walkthrough of building a full-stack web application with Django, from setup to deployment.",
  },
  {
    title: "Basics of Web Development",
    desc: "Everything you need to know about HTML, CSS, and JavaScript to start your web development journey.",
  },
];

const BlogSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="blog" className="py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="section-title text-center fade-up">Blog</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto fade-up">
          Thoughts & tutorials
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <div
              key={b.title}
              className="glass-card p-6 flex flex-col fade-up group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-2 w-16 rounded-full mb-6" style={{
                background: "linear-gradient(90deg, hsl(210 100% 60%), hsl(270 80% 65%))"
              }} />
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {b.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                {b.desc}
              </p>
              <a href="#" className="text-primary text-sm font-medium hover:underline">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
