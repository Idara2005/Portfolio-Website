import { useEffect, useRef, useState } from "react";
import { Award, Mic, Users, Star, TrendingUp, BookOpen } from "lucide-react";

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

const speakingEngagements = [
  {
    title: "AI & The Future: How Women Can Lead in Emerging Technologies",
    org: "NACOS LASUSTECH",
    role: "Panelist",
    image: "nacos-panelist-bio.jpeg",
    desc: "Shared perspectives on AI, emerging technologies, and the future of women in technology. Discussed opportunities, challenges, and skills required to thrive.",
    color: "#F97316",
  },
  {
    title: "Breaking Into Tech",
    org: "Techpulse Learning Sessions",
    role: "Webinar Host & Moderator",
    image: "breaking-into-tech.jpeg",
    desc: "Designed, organized, and facilitated educational webinars featuring experts in software engineering, AI, product management, data analysis, and Web3.",
    color: "#5C4033",
  },
  {
    title: "Conversations That Built Me",
    org: "With Oluwaferanmi Famawode",
    role: "Panelist",
    image: "panel1.jpeg",
    desc: "Invited to share insights on personal growth, leadership, and building opportunities in technology. Discussed lessons from community building and creating impact.",
    color: "#F97316",
  },
];

const achievements = [
  { icon: Users, title: "1,000+ Community Members", desc: "Founded and scaled Techpulse from zero to a thriving community of over 1,000 members dedicated to tech education.", color: "#F97316" },
  { icon: Mic, title: "Tech Speaker & Panelist", desc: "Received invitations to speak at technology events and panels on AI, emerging technologies, and leadership.", color: "#5C4033" },
  { icon: TrendingUp, title: "Multiple Webinars Executed", desc: "Successfully designed and delivered multiple educational webinars covering Web3, Open Source, AI, and more.", color: "#F97316" },
  { icon: Star, title: "Executive Council Member", desc: "Appointed as Director of Media & Publicity on the 1st LASU Tech Society Executive Council (2025/2026).", color: "#5C4033" },
  { icon: Award, title: "Strategic Partnerships", desc: "Built impactful collaborations with GDG Lagos, LASU TechX, Creao, Uri Sales Academy, and other tech organizations.", color: "#F97316" },
  { icon: BookOpen, title: "Educational Programs Designer", desc: "Created structured learning initiatives including Web3 and Open Source programs for students and early-career professionals.", color: "#5C4033" },
];

export default function Achievements() {
  const { ref, inView } = useInView();

  return (
    <section id="achievements" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }}>
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
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3" style={{ color: "#F97316" }}>Recognition</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: "#1F2937" }}>
              Achievements &{" "}
              <span className="gradient-text">Speaking</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4" style={{ color: "#6B7280" }}>
              Milestones reached through intentional action, community leadership, and continuous learning.
            </p>
          </div>

          {/* Achievement cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16">
            {achievements.map((a, i) => (
              <div
                key={a.title}
                className="p-4 sm:p-5 rounded-xl sm:rounded-2xl card-hover text-center"
                style={{
                  background: "#FFF8F1",
                  border: `1px solid ${a.color}20`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(20px)",
                  transition: `all 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`,
                }}
              >
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
                  style={{ background: `linear-gradient(135deg, ${a.color}, ${a.color === "#F97316" ? "#ea6c0a" : "#4a3028"})` }}
                >
                  <a.icon size={18} color="white" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm mb-1.5 sm:mb-2" style={{ color: "#1F2937" }}>{a.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>{a.desc}</p>
              </div>
            ))}
          </div>

          {/* Speaking */}
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8" style={{ color: "#1F2937" }}>
            Speaking <span className="gradient-text">Engagements</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {speakingEngagements.map((eng, i) => (
              <div
                key={eng.title}
                className="rounded-xl sm:rounded-2xl overflow-hidden card-hover group"
                style={{
                  background: "#FFF8F1",
                  border: `1px solid ${eng.color}20`,
                  boxShadow: "0 4px 16px rgba(92,64,51,0.06)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(20px)",
                  transition: `all 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.15}s`,
                }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={`${import.meta.env.BASE_URL}images/${eng.image}`}
                    alt={eng.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${eng.color}cc 0%, transparent 60%)` }}
                  />
                  <span
                    className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 px-2 py-0.5 sm:py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(255,255,255,0.9)", color: eng.color }}
                  >
                    {eng.role}
                  </span>
                </div>
                <div className="p-3 sm:p-5">
                  <div className="text-xs font-semibold mb-1" style={{ color: eng.color }}>{eng.org}</div>
                  <h4 className="font-bold text-xs sm:text-sm mb-1.5 sm:mb-2 leading-snug" style={{ color: "#1F2937" }}>{eng.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>{eng.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
