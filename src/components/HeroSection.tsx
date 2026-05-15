import { useState, useEffect } from "react";

const roles = ["Java Developer", "Python Developer", "ML Enthusiast", "Web Developer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-3xl mx-auto fade-up visible">
        <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-widest uppercase">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 neon-text leading-tight">
          Manchala Sirisha
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-2">
          Full Stack Developer
        </h2>
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-lg md:text-xl font-mono text-accent">
            {roles[roleIndex].slice(0, charIndex)}
          </span>
          <span className="typing-cursor text-primary text-xl ml-0.5">|</span>
        </div>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          I build intelligent and scalable web applications using modern technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="neon-glow-btn text-primary-foreground text-center">
            View Projects
          </a>
          <a href="/Sirisha_Resume.pdf" download className="outline-glow-btn text-center">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
