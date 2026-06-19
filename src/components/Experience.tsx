import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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

const experiences = [
  {
    role: "Founder & Product Lead",
    org: "Techpulse",
    period: "August 2025 – Present",
    location: "Lagos, Nigeria",
    type: "Founder",
    color: "#F97316",
    desc: "Techpulse is a student-led technology initiative focused on helping students and early-career professionals discover opportunities in technology through education, community, and practical learning experiences.",
    responsibilities: [
      "Defined the vision and strategic direction of the initiative based on user needs and ecosystem opportunities",
      "Identified community pain points through feedback, engagement patterns, and direct interactions",
      "Designed and executed educational programs and learning initiatives for 1,000+ members",
      "Created systems for onboarding, communication, and community engagement",
      "Planned and coordinated webinars, workshops, and learning programs from ideation to execution",
      "Managed relationships with speakers, volunteers, and external partners",
    ],
    achievements: [
      "Built and managed a community of over 1,000 members",
      "Successfully organized multiple educational webinars and learning sessions",
      "Built partnerships with technology communities and organizations",
    ],
  },
  {
    role: "Director of Media & Publicity",
    org: "LASU Tech Society",
    period: "2025 – Present",
    location: "Lagos State University, Nigeria",
    type: "Leadership",
    color: "#5C4033",
    desc: "Leading media and publicity efforts for the 1st LTS Executive Council, applying expertise in social media management, videography, and content creation.",
    responsibilities: [
      "Leading social media strategy and content creation for the society",
      "Managing videography and media production for events and programs",
      "Coordinating publicity initiatives to promote tech opportunities for students",
      "Collaborating with cross-functional teams on technology education initiatives",
    ],
    achievements: [
      "Successfully executed media strategy for major tech events",
      "Increased society's digital presence and student engagement",
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 px-6" style={{ background: "#FFFFFF" }}>
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#F97316" }}>Career</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#1F2937" }}>
              Work{" "}
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              A track record of building, leading, and delivering impact across communities and organizations.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block"
              style={{ background: "linear-gradient(to bottom, #F97316, #5C4033)" }}
            />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div
                  key={exp.role}
                  className="flex gap-8 relative"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateX(-20px)",
                    transition: `all 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.2}s`,
                  }}
                >
                  <div className="hidden md:flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg z-10"
                      style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color === "#F97316" ? "#ea6c0a" : "#4a3028"})` }}
                    >
                      <Briefcase size={22} color="white" />
                    </div>
                  </div>

                  <div
                    className="flex-1 p-6 rounded-2xl card-hover"
                    style={{ background: "#FFF8F1", border: `1px solid ${exp.color}22`, boxShadow: "0 4px 16px rgba(92,64,51,0.06)" }}
                  >
                    <div className="flex flex-wrap items-start gap-4 mb-4">
                      <div className="flex-1">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                          style={{ background: `${exp.color}15`, color: exp.color }}
                        >
                          {exp.type}
                        </span>
                        <h3 className="text-xl font-bold" style={{ color: "#1F2937" }}>{exp.role}</h3>
                        <div className="text-base font-semibold mt-1" style={{ color: exp.color }}>{exp.org}</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1.5 text-sm mb-1" style={{ color: "#6B7280" }}>
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5 text-sm" style={{ color: "#6B7280" }}>
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>{exp.desc}</p>

                    <div className="mb-4">
                      <div className="font-semibold text-sm mb-2" style={{ color: "#1F2937" }}>Key Responsibilities</div>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm" style={{ color: "#4B5563" }}>
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-sm mb-2" style={{ color: "#1F2937" }}>Achievements</div>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((a) => (
                          <span
                            key={a}
                            className="px-3 py-1.5 rounded-full text-xs font-medium"
                            style={{ background: `${exp.color}12`, color: exp.color, border: `1px solid ${exp.color}30` }}
                          >
                            ✓ {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
