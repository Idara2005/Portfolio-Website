import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Send, Linkedin, Twitter } from "lucide-react";

function useInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const socials = [
  { icon: Mail, label: "Email", value: "idarajohnson841@gmail.com", href: "mailto:idarajohnson841@gmail.com", color: "#F97316" },
  { icon: Linkedin, label: "LinkedIn", value: "Idara Johnson", href: "https://linkedin.com/in/idara-johnson", color: "#0077B5" },
  { icon: Twitter, label: "Twitter / X", value: "@techpulse_hq", href: "https://twitter.com/techpulse_hq", color: "#1DA1F2" },
  { icon: MapPin, label: "Location", value: "Lagos, Nigeria", href: "#", color: "#5C4033" },
];

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: "0.75rem",
  fontSize: "0.875rem",
  outline: "none",
  background: "#FFFFFF",
  border: "1.5px solid rgba(249,115,22,0.2)",
  color: "#1F2937",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1200);
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "#F97316";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(249,115,22,0.2)";
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FFF8F1" }}>
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3" style={{ color: "#F97316" }}>Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: "#1F2937" }}>
              Let's{" "}
              <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4" style={{ color: "#6B7280" }}>
              Open to product management roles, community partnerships, speaking engagements, and collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: info */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: "#1F2937" }}>Get in Touch</h3>
              <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8" style={{ color: "#4B5563" }}>
                Whether you're looking for a Product Manager, want to collaborate on a community initiative, or have a speaking opportunity — I'd love to hear from you!
              </p>

              <div className="space-y-3 sm:space-y-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl card-hover group"
                    style={{ background: "#FFFFFF", border: "1px solid rgba(249,115,22,0.1)", textDecoration: "none" }}
                  >
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${s.color}15` }}
                    >
                      <s.icon size={16} style={{ color: s.color }} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium" style={{ color: "#9CA3AF" }}>{s.label}</div>
                      <div className="text-xs sm:text-sm font-semibold truncate" style={{ color: "#1F2937" }}>{s.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div
                className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl"
                style={{ background: "linear-gradient(135deg,#F97316,#5C4033)" }}
              >
                <div className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Download My CV</div>
                <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">Get the full picture of my experience, skills, and achievements.</p>
                <a
                  href="/portfolio/cv/Idara_Johnson_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm"
                  style={{ background: "white", color: "#F97316" }}
                >
                  <Send size={13} />
                  Download CV
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: "#1F2937" }}>Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5" style={{ color: "#374151" }}>Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5" style={{ color: "#374151" }}>Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5" style={{ color: "#374151" }}>Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="What's this about?"
                    style={inputStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5" style={{ color: "#374151" }}>Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your opportunity or project..."
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || sent}
                  className="w-full py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-70"
                  style={{
                    background: sent ? "#10B981" : "linear-gradient(135deg,#F97316,#5C4033)",
                    boxShadow: "0 8px 24px rgba(249,115,22,0.25)",
                  }}
                >
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending...</>
                  ) : sent ? (
                    <>✓ Message Sent! I'll get back to you soon.</>
                  ) : (
                    <><Send size={16} />Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
