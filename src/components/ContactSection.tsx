import { useState, FormEvent } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const ContactSection = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  const errs = validate();
  setErrors(errs);

  if (Object.keys(errs).length === 0) {
    const response = await fetch("https://formspree.io/f/xwvyddoj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSent(false), 3000);
    }
  }
};
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="section-title text-center fade-up">Contact</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto fade-up">
          Let's connect
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5 fade-up">
            <div>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
              name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
              name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="neon-glow-btn text-primary-foreground w-full">
              {sent ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>

          <div className="flex flex-col gap-4 fade-up" style={{ transitionDelay: "150ms" }}>
            <div className="glass-card p-6">
              <h3 className="text-primary font-semibold mb-4 uppercase text-sm tracking-wider">Contact Details</h3>
              <div className="space-y-3 text-muted-foreground text-sm">
                <p>📧 <a href="mailto:sirishamanchala1@gmail.com" className="hover:text-primary transition-colors">sirishamanchala1@gmail.com</a></p>
                <p>📱 +91 8333068161</p>
                <p>📍 Andhra Pradesh, India</p>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-primary font-semibold mb-4 uppercase text-sm tracking-wider">Social Links</h3>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="outline-glow-btn py-2 px-4 text-sm">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="outline-glow-btn py-2 px-4 text-sm">
                  LinkedIn
                </a>
                <a href="mailto:sirishamanchala1@gmail.com" className="outline-glow-btn py-2 px-4 text-sm">
                  Email
                </a>
              </div>
            </div>

            <div className="glass-card p-6 text-center">
              <p className="text-muted-foreground text-sm mb-3">Download my resume</p>
              <a href="/Sirisha_Resume.pdf" download className="neon-glow-btn text-primary-foreground inline-block text-sm">
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
