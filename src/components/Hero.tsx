import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download, Mail, FolderOpen } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "linear-gradient(135deg,#FFF8F1 0%,#fff3e8 60%,#ffecd6 100%)" }}
    >
      <div
        className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-20 animate-float"
        style={{ background: "radial-gradient(circle,#F97316,transparent 70%)" }}
      />
      <div
        className="absolute bottom-32 left-10 w-48 h-48 rounded-full opacity-10 animate-float"
        style={{ background: "radial-gradient(circle,#5C4033,transparent 70%)", animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle,#F97316,transparent 70%)", animation: "float 6s ease-in-out infinite", animationDelay: "1s" }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={ref}
            className="order-2 lg:order-1"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(40px)",
              transition: "all 0.9s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: "rgba(249,115,22,0.12)", color: "#F97316" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#F97316" }} />
              Available for opportunities
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4" style={{ color: "#1F2937" }}>
              Idara
              <span className="block gradient-text">Johnson</span>
            </h1>

            <p className="text-xl font-semibold mb-4" style={{ color: "#5C4033" }}>
              Product Manager · Community Builder · Program Manager
            </p>

            <p className="text-lg leading-relaxed mb-8" style={{ color: "#4B5563", maxWidth: "520px" }}>
              Building innovative products through technology, community, and intentional leadership. Founder of Techpulse — a growing tech community of 1,000+ members.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/cv/Idara_Johnson_CV.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                style={{ background: "linear-gradient(135deg,#F97316,#ea6c0a)", boxShadow: "0 8px 24px rgba(249,115,22,0.3)" }}
              >
                <Download size={18} />
                Download CV
              </a>
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 border-2"
                style={{ color: "#F97316", borderColor: "#F97316", background: "transparent" }}
              >
                <Mail size={18} />
                Contact Me
              </button>
              <button
                onClick={() => scrollTo("#projects")}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{ color: "#5C4033", background: "rgba(92,64,51,0.08)" }}
              >
                <FolderOpen size={18} />
                View Projects
              </button>
            </div>

            <div className="flex gap-10 mt-12">
              {[
                { num: "1,000+", label: "Community Members" },
                { num: "5+", label: "Projects Led" },
                { num: "3+", label: "Speaking Engagements" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold gradient-text">{stat.num}</div>
                  <div className="text-sm mt-1" style={{ color: "#6B7280" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="order-1 lg:order-2 flex justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(40px)",
              transition: "all 1s cubic-bezier(0.4,0,0.2,1) 0.2s",
            }}
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-30"
                style={{ background: "linear-gradient(135deg,#F97316,#5C4033)", filter: "blur(20px)" }}
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ width: "380px", height: "480px" }}>
                <img
                  src="/images/hero.jpeg"
                  alt="Idara Johnson"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center top" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(92,64,51,0.3) 0%, transparent 60%)" }}
                />
              </div>

              <div
                className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 shadow-lg"
              >
                <div className="text-xs font-medium" style={{ color: "#6B7280" }}>Techpulse Community</div>
                <div className="text-sm font-bold" style={{ color: "#1F2937" }}>Founder & Product Lead</div>
              </div>

              <div
                className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-lg"
              >
                <div className="text-xs font-medium" style={{ color: "#6B7280" }}>Lagos State University</div>
                <div className="text-sm font-bold" style={{ color: "#F97316" }}>Dir. Publicity & Media</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
        style={{ color: "#5C4033" }}
      >
        <span className="text-xs font-medium">Scroll Down</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
