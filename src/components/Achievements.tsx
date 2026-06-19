import { useEffect, useRef, useState } from "react";
import { Award, Mic, Users, Star, TrendingUp, BookOpen } from "lucide-react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

const speakingEngagements = [
  {
    title: "AI & The Future: How Women Can Lead in Emerging Technologies",
    org: "NACOS LASUSTECH",
    role: "Panelist",
    image: "/images/lasu-id.jpeg",
    desc: "Shared perspectives on AI, emerging technologies, and the future of women in technology. Discussed opportunities, challenges, and skills required to thrive in emerging tech spaces.",
    color: "#F97316",
  },
  {
    title: "Breaking Into Tech",
    org: "Techpulse Learning Sessions",
    role: "Webinar Host & Moderator",
    image: "/images/breaking-into-tech.jpeg",
    desc: "Designed, organized, and facilitated educational webinars featuring experts in software engineering, AI, product management, data analysis, and Web3 community management.",
    color: "#5C4033",
  },
  {
    title: "Conversations That Built Me",
    org: "With Oluwaferanmi Famawode",
    role: "Panelist",
    image: "/images/panel1.jpeg",
    desc: "Invited to share insights on personal growth, leadership, and building opportunities in technology. Discussed lessons from community building, overcoming self-doubt, and creating impact through consistency.",
    color: "#F97316",
  },
];

const achievements = [
  {
    icon: Users,
    title: "1,000+ Community Members",
    desc: "Founded and scaled Techpulse from zero to a thriving community of over 1,000 members dedicated to tech education.",
    color: "#F97316",
  },
  {
    icon: Mic,
    title: "Tech Speaker & Panelist",
    desc: "Received invitations to speak at technology events and panels on AI, emerging technologies, and leadership.",
    color: "#5C4033",
  },
  {
    icon: TrendingUp,
    title: "Multiple Webinars Executed",
    desc: "Successfully designed and delivered multiple educational webinars and learning sessions covering various tech domains.",
    color: "#F97316",
  },
  {
    icon: Star,
    title: "Executive Council Member",
    desc: "Appointed as Director of Media & Publicity on the 1st LASU Tech Society Executive Council (2025/2026).",
    color: "#5C4033",
  },
  {
    icon: Award,
    title: "Strategic Partnerships",
    desc: "Built impactful collaborations with GDG Lagos, LASU TechX, Creao, Uri Sales Academy, and other tech organizations.",
    color: "#F97316",
  },
  {
    icon: BookOpen,
    title: "Educational Programs Designer",
    desc: "Created structured learning initiatives including Web3 and Open Source programs for students and early-career professionals.",
    color: "#5C4033",
  },
];

export default function Achievements() {
  const { ref, inView } = useInView();

  return (
    <section id="achievements" className="py-24 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#F97316" }}>Recognition</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#1F2937" }}>
              Achievements &{" "}
              <span className="gradient-text">Speaking</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Milestones reached through intentional action, community leadership, and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {achievements.map((a, i) => (
              <div
                key={a.title}
                className="p-5 rounded-2xl card-hover text-center"
                style={{
                  background: "#FFF8F1",
                  border: `1px solid ${a.color}20`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(20px)",
                  transition: `all 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `linear-gradient(135deg, ${a.color}, ${a.color === "#F97316" ? "#ea6c0a" : "#4a3028"})` }}
                >
                  <a.icon size={20} color="white" />
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: "#1F2937" }}>{a.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>{a.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: "#1F2937" }}>
            Speaking <span className="gradient-text">Engagements</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {speakingEngagements.map((eng, i) => (
              <div
                key={eng.title}
                className="rounded-2xl overflow-hidden card-hover group"
                style={{
                  background: "#FFF8F1",
                  border: `1px solid ${eng.color}20`,
                  boxShadow: "0 4px 16px rgba(92,64,51,0.06)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(20px)",
                  transition: `all 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.15}s`,
                }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={eng.image}
                    alt={eng.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${eng.color}cc 0%, transparent 60%)` }}
                  />
                  <span
                    className="absolute bottom-3 left-3 px-2 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(255,255,255,0.9)", color: eng.color }}
                  >
                    {eng.role}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold mb-1" style={{ color: eng.color }}>{eng.org}</div>
                  <h4 className="font-bold text-sm mb-2 leading-snug" style={{ color: "#1F2937" }}>{eng.title}</h4>
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
