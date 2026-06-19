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

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
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
        background: scrolled ? "rgba(255,248,241,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(92,64,51,0.08)" : "none",
        borderBottom: scrolled ? "1px solid rgba(249,115,22,0.12)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
        <a
          href="#"
          className="font-bold text-lg sm:text-xl flex-shrink-0"
          style={{ color: "#F97316" }}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          Idara<span style={{ color: "#5C4033" }}>.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className="text-sm font-medium transition-colors duration-200 hover:text-orange-500 whitespace-nowrap"
              style={{ color: "#1F2937" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}cv/IDARA_JOHNSON_PM_CV.docx`}
            download="IDARA_JOHNSON_PM_CV.docx"
            className="px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 whitespace-nowrap"
            style={{ background: "linear-gradient(135deg,#F97316,#5C4033)" }}
          >
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg flex-shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#5C4033" }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-6 pt-2 flex flex-col gap-1"
          style={{ background: "rgba(255,248,241,0.98)", backdropFilter: "blur(16px)" }}
        >
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className="text-left text-base font-medium py-3 border-b w-full"
              style={{ color: "#1F2937", borderColor: "rgba(249,115,22,0.1)" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}cv/IDARA_JOHNSON_PM_CV.docx`}
            download="IDARA_JOHNSON_PM_CV.docx"
            className="px-4 py-2.5 rounded-full text-sm font-semibold text-white text-center mt-3"
            style={{ background: "linear-gradient(135deg,#F97316,#5C4033)" }}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
