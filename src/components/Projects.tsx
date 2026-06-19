import { useEffect, useRef, useState } from "react";
import { Tag } from "lucide-react";

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

const projects = [
  {
    title: "Techpulse Community Platform",
    category: "Community Product",
    image: "techpulse-partner.jpeg",
    description: "Built and scaled a student-led technology initiative from zero to 1,000+ members. Designed onboarding systems, educational programs, and engagement frameworks.",
    tags: ["Product Strategy", "Community Building", "Program Management", "EdTech"],
    color: "#F97316",
    highlight: "1,000+ members",
  },
  {
    title: "AgriCoPilot",
    category: "Product Initiative",
    image: "agricopilot-leaf.png",
    description: "Led product management for an agriculture-focused technology initiative aimed at helping farmers make informed decisions through accessible digital solutions.",
    tags: ["Product Discovery", "User Research", "Roadmapping", "AgriTech"],
    color: "#5C4033",
    highlight: "Product Led",
  },
  {
    title: "Web3 Educational Webinar Series",
    category: "Learning Initiative",
    image: "web3-talk.jpeg",
    description: "Designed and executed a structured webinar series making complex Web3 concepts accessible to students and early-career professionals.",
    tags: ["Program Management", "Stakeholder Mgmt", "Content Strategy", "Web3"],
    color: "#F97316",
    highlight: "Community Impact",
  },
  {
    title: "Open Source Learning Initiative",
    category: "Education Program",
    image: "ai-bootcamp-event.jpeg",
    description: "Created a structured learning initiative to make Open Source more accessible to students. Identified knowledge gaps and designed beginner-friendly content.",
    tags: ["Education Design", "Speaker Coordination", "Community Engagement"],
    color: "#5C4033",
    highlight: "Accessibility Focused",
  },
  {
    title: "Breaking Into Tech Webinar",
    category: "Event Production",
    image: "breaking-into-tech.jpeg",
    description: "Hosted and moderated a multi-session webinar series featuring industry professionals across software engineering, AI, product management, and data analysis.",
    tags: ["Event Management", "Moderation", "Facilitation", "Community"],
    color: "#F97316",
    highlight: "Multi-session Event",
  },
  {
      title: "Techpulse × URI Sales Academy Partnership",
      category: "Partnerships",
      image: "uri-partnership.jpeg",
      description: "Secured and managed a strategic community partnership with URI Sales Academy to equip Techpulse members with practical, revenue-generating digital sales skills and improve employability outcomes.",
      tags: ["Partnership Dev", "Community Growth", "Strategic Communication", "Sales"],
      color: "#F97316",
      highlight: "Community Partnership",
    },
    {
      title: "LASU TechX 5.0 Partnership",
    category: "Partnerships",
    image: "techpulse-partner.jpeg",
    description: "Developed and managed a strategic partnership with LASU TechX 5.0, a Google Developer Group event, to amplify community exposure and educational opportunities.",
    tags: ["Partnership Dev", "Strategic Communication", "Community Growth", "GDG"],
    color: "#5C4033",
    highlight: "Strategic Partnership",
  },
];

const filters = ["All", "Community Product", "Product Initiative", "Learning Initiative", "Event Production", "Partnerships"];

export default function Projects() {
  const { ref, inView } = useInView();
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FFF8F1" }}>
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
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3" style={{ color: "#F97316" }}>Portfolio</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: "#1F2937" }}>
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4" style={{ color: "#6B7280" }}>
              Initiatives and products I've built, led, and delivered — from concept to impact.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
            {filters.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200"
                style={
                  filter === cat
                    ? { background: "linear-gradient(135deg,#F97316,#5C4033)", color: "white" }
                    : { background: "white", color: "#6B7280", border: "1px solid rgba(249,115,22,0.2)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filtered.map((project, i) => (
              <div
                key={project.title}
                className="rounded-xl sm:rounded-2xl overflow-hidden card-hover group"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(249,115,22,0.1)",
                  boxShadow: "0 4px 16px rgba(92,64,51,0.06)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(20px)",
                  transition: `all 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`,
                }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={`${import.meta.env.BASE_URL}images/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${project.color}cc, transparent 60%)` }}
                  />
                  <span
                    className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(255,255,255,0.9)", color: project.color }}
                  >
                    {project.highlight}
                  </span>
                  <span
                    className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-xs font-medium px-2 py-0.5 sm:py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(4px)" }}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="p-3 sm:p-5">
                  <h3 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2" style={{ color: "#1F2937" }}>{project.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4" style={{ color: "#6B7280" }}>{project.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium"
                        style={{ background: `${project.color}10`, color: project.color }}
                      >
                        <Tag size={9} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
