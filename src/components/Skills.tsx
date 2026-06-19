import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
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

const skillCategories = [
  {
    title: "Product Management",
    color: "#F97316",
    skills: [
      { name: "Product Strategy", level: 88 },
      { name: "Product Discovery", level: 85 },
      { name: "User Research", level: 87 },
      { name: "Requirements Gathering", level: 90 },
      { name: "Feature Prioritization", level: 85 },
      { name: "Product Roadmapping", level: 82 },
    ],
  },
  {
    title: "Program & Project Management",
    color: "#5C4033",
    skills: [
      { name: "Program Management", level: 90 },
      { name: "Project Planning & Execution", level: 88 },
      { name: "Stakeholder Management", level: 86 },
      { name: "Cross-functional Collaboration", level: 90 },
      { name: "Operations Management", level: 85 },
      { name: "Risk Management", level: 80 },
    ],
  },
  {
    title: "Community & Growth",
    color: "#F97316",
    skills: [
      { name: "Community Building", level: 95 },
      { name: "Community Operations", level: 92 },
      { name: "Event Planning & Execution", level: 90 },
      { name: "Partnership Development", level: 85 },
      { name: "Strategic Communication", level: 88 },
      { name: "User Engagement", level: 92 },
    ],
  },
];

const tools = [
  "Notion", "Google Workspace", "Microsoft Office", "Canva", "Figma",
  "Trello", "Asana", "Google Analytics", "Linear", "Slack",
];

const softSkills = [
  "Systems Thinking", "Public Speaking", "Facilitation", "Leadership",
  "Problem Solving", "Adaptability", "Empathy", "Strategic Thinking",
];

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  return (
    <div className="mb-3 sm:mb-4">
      <div className="flex justify-between items-center mb-1 sm:mb-1.5">
        <span className="text-xs sm:text-sm font-medium" style={{ color: "#1F2937" }}>{name}</span>
        <span className="text-xs font-semibold ml-2 flex-shrink-0" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 sm:h-2 rounded-full overflow-hidden" style={{ background: "rgba(249,115,22,0.1)" }}>
        <div
          className="h-full rounded-full"
          style={{
            width: animate ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color === "#F97316" ? "#ea6c0a" : "#4a3028"})`,
            transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FFF8F1" }}>
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
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3" style={{ color: "#F97316" }}>Expertise</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: "#1F2937" }}>
              Skills &{" "}
              <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4" style={{ color: "#6B7280" }}>
              A comprehensive toolkit built through hands-on experience in product, community, and program management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-12">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl card-hover"
                style={{ background: "#FFFFFF", border: "1px solid rgba(249,115,22,0.1)", boxShadow: "0 4px 16px rgba(92,64,51,0.06)" }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                  <h3 className="font-bold text-sm sm:text-base" style={{ color: "#1F2937" }}>{cat.title}</h3>
                </div>
                {cat.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} animate={inView} />
                ))}
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl" style={{ background: "#FFFFFF", border: "1px solid rgba(249,115,22,0.1)" }}>
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-5" style={{ color: "#1F2937" }}>Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium card-hover cursor-default"
                    style={{ background: "rgba(249,115,22,0.08)", color: "#F97316", border: "1px solid rgba(249,115,22,0.2)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl" style={{ background: "#FFFFFF", border: "1px solid rgba(249,115,22,0.1)" }}>
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-5" style={{ color: "#1F2937" }}>Soft Skills</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium card-hover cursor-default"
                    style={{ background: "rgba(92,64,51,0.08)", color: "#5C4033", border: "1px solid rgba(92,64,51,0.2)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
