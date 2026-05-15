import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <div className="relative">
      <div className="particles-bg" />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
        <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
          <p>© 2024 Manchala Sirisha. Built with ❤️</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
