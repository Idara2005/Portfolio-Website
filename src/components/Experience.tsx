import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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
      "Defined the vision and strategic direction of the initiative based on user needs",
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
    image: "techpulse-logo.jpeg",
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
    image: "lasu-exec-card.jpeg",
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }}>
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
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3" style={{ color: "#F97316" }}>Career</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: "#1F2937" }}>
              Work{" "}
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4" style={{ color: "#6B7280" }}>
              A track record of building, leading, and delivering impact across communities and organizations.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line — desktop only */}
            <div
              className="absolute left-7 sm:left-8 top-0 bottom-0 w-0.5 hidden md:block"
              style={{ background: "linear-gradient(to bottom, #F97316, #5C4033)" }}
            />

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, i) => (
                <div
                  key={exp.role}
                  className="flex gap-4 sm:gap-6 lg:gap-8 relative"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateX(-20px)",
                    transition: `all 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.2}s`,
                  }}
                >
                  {/* Icon — desktop only */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg z-10"
                      style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color === "#F97316" ? "#ea6c0a" : "#4a3028"})` }}
                    >
                      <Briefcase size={20} color="white" />
                    </div>
                  </div>

                  <div
                    className="flex-1 min-w-0 p-4 sm:p-6 rounded-xl sm:rounded-2xl card-hover"
                    style={{ background: "#FFF8F1", border: `1px solid ${exp.color}22`, boxShadow: "0 4px 16px rgba(92,64,51,0.06)" }}
                  >
                    {/* Mobile icon + header */}
                    <div className="flex items-start gap-3 mb-3 sm:mb-4">
                      <div
                        className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color === "#F97316" ? "#ea6c0a" : "#4a3028"})` }}
                      >
                        <Briefcase size={16} color="white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold mb-1"
                          style={{ background: `${exp.color}15`, color: exp.color }}
                        >
                          {exp.type}
                        </span>
                        <h3 className="text-base sm:text-xl font-bold leading-tight" style={{ color: "#1F2937" }}>{exp.role}</h3>
                        <div className="text-sm sm:text-base font-semibold mt-0.5" style={{ color: exp.color }}>{exp.org}</div>
                      </div>
                    </div>

                    {/* Period & location */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 sm:mb-4">
                      <div className="flex items-center gap-1 text-xs sm:text-sm" style={{ color: "#6B7280" }}>
                        <Calendar size={12} className="flex-shrink-0" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-xs sm:text-sm" style={{ color: "#6B7280" }}>
                        <MapPin size={12} className="flex-shrink-0" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4" style={{ color: "#4B5563" }}>{exp.desc}</p>

                    <div className="mb-3 sm:mb-4">
                      <div className="font-semibold text-xs sm:text-sm mb-2" style={{ color: "#1F2937" }}>Key Responsibilities</div>
                      <ul className="space-y-1 sm:space-y-1.5">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: "#4B5563" }}>
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-xs sm:text-sm mb-2" style={{ color: "#1F2937" }}>Achievements</div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.achievements.map((a) => (
                          <span
                            key={a}
                            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium"
                            style={{ background: `${exp.color}12`, color: exp.color, border: `1px solid ${exp.color}30` }}
                          >
                            ✓ {a}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Role image */}
                    {exp.image && (
                      <div className="mt-4 rounded-xl overflow-hidden" style={{ border: `1px solid ${exp.color}25` }}>
                        <img
                          src={`${import.meta.env.BASE_URL}images/${exp.image}`}
                          alt={exp.role}
                          className="w-full object-cover"
                        />
                      </div>
                    )}
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
