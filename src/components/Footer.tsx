import { Mail, Linkedin, Twitter, Heart } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Mail, href: "mailto:idarajohnson841@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com/in/idara-johnson", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/techpulse_hq", label: "Twitter" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#1F2937" }} className="pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4" style={{ color: "#F97316" }}>
              Idara<span style={{ color: "#FFF8F1" }}>.</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#9CA3AF" }}>
              Product Manager, Community Builder, and Program Manager based in Lagos, Nigeria. Founder of Techpulse — building intentional products that create real impact.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(249,115,22,0.15)", color: "#F97316" }}
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-semibold mb-4" style={{ color: "#F3F4F6" }}>Quick Links</div>
            <div className="space-y-2.5">
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="block text-sm transition-colors duration-200 hover:text-orange-400"
                  style={{ color: "#9CA3AF" }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="font-semibold mb-4" style={{ color: "#F3F4F6" }}>Contact</div>
            <div className="space-y-3">
              <div>
                <div className="text-xs mb-0.5" style={{ color: "#6B7280" }}>Email</div>
                <a href="mailto:idarajohnson841@gmail.com" className="text-sm hover:text-orange-400 transition-colors" style={{ color: "#9CA3AF" }}>
                  idarajohnson841@gmail.com
                </a>
              </div>
              <div>
                <div className="text-xs mb-0.5" style={{ color: "#6B7280" }}>Location</div>
                <div className="text-sm" style={{ color: "#9CA3AF" }}>Lagos, Nigeria</div>
              </div>
              <div>
                <div className="text-xs mb-0.5" style={{ color: "#6B7280" }}>Community</div>
                <div className="text-sm" style={{ color: "#F97316" }}>Techpulse — 1,000+ Members</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "#6B7280" }}
        >
          <div>© 2026 Idara Johnson. All rights reserved.</div>
          <div className="flex items-center gap-1">
            Designed with excellence and <Heart size={12} className="mx-1" style={{ color: "#F97316" }} /> attention to detail.
          </div>
        </div>
      </div>
    </footer>
  );
}
