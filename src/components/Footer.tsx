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
    <footer style={{ background: "#1F2937" }} className="pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: "#F97316" }}>
              Idara<span style={{ color: "#FFF8F1" }}>.</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6" style={{ color: "#9CA3AF" }}>
              Product Manager, Community Builder, and Program Manager based in Lagos, Nigeria. Founder of Techpulse — building intentional products that create real impact.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(249,115,22,0.15)", color: "#F97316" }}
                  aria-label={s.label}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-semibold text-sm sm:text-base mb-3 sm:mb-4" style={{ color: "#F3F4F6" }}>Quick Links</div>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-4">
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-xs sm:text-sm transition-colors duration-200 hover:text-orange-400"
                  style={{ color: "#9CA3AF" }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-sm sm:text-base mb-3 sm:mb-4" style={{ color: "#F3F4F6" }}>Contact</div>
            <div className="space-y-3">
              <div>
                <div className="text-xs mb-0.5" style={{ color: "#6B7280" }}>Email</div>
                <a href="mailto:idarajohnson841@gmail.com" className="text-xs sm:text-sm hover:text-orange-400 transition-colors break-all" style={{ color: "#9CA3AF" }}>
                  idarajohnson841@gmail.com
                </a>
              </div>
              <div>
                <div className="text-xs mb-0.5" style={{ color: "#6B7280" }}>Location</div>
                <div className="text-xs sm:text-sm" style={{ color: "#9CA3AF" }}>Lagos, Nigeria</div>
              </div>
              <div>
                <div className="text-xs mb-0.5" style={{ color: "#6B7280" }}>Community</div>
                <div className="text-xs sm:text-sm font-medium" style={{ color: "#F97316" }}>Techpulse — 1,000+ Members</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "#6B7280" }}
        >
          <div>© 2026 Idara Johnson. All rights reserved.</div>
          <div className="flex items-center gap-1">
            Designed with excellence and <Heart size={11} className="mx-1" style={{ color: "#F97316" }} /> attention to detail.
          </div>
        </div>
      </div>
    </footer>
  );
}
