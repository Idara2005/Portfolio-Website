import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(255,248,241,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(92,64,51,0.08)" : "none",
        borderBottom: scrolled ? "1px solid rgba(249,115,22,0.12)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-bold text-xl"
          style={{ color: "#F97316" }}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          Idara<span style={{ color: "#5C4033" }}>.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className="text-sm font-medium transition-colors duration-200 hover:text-orange-500"
              style={{ color: "#1F2937" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="/cv/Idara_Johnson_CV.pdf"
            download
            className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg,#F97316,#5C4033)" }}
          >
            Download CV
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#5C4033" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(255,248,241,0.97)", backdropFilter: "blur(16px)" }}
        >
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className="text-left text-base font-medium py-2 border-b"
              style={{ color: "#1F2937", borderColor: "rgba(249,115,22,0.12)" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="/cv/Idara_Johnson_CV.pdf"
            download
            className="px-4 py-2 rounded-full text-sm font-semibold text-white text-center mt-2"
            style={{ background: "linear-gradient(135deg,#F97316,#5C4033)" }}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
