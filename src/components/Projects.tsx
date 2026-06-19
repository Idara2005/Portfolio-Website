import { useEffect, useRef, useState } from "react";
import { ExternalLink, Tag } from "lucide-react";

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

const projects = [
  {
    title: "Techpulse Community Platform",
    category: "Community Product",
    image: "/images/techpulse-partner.jpeg",
    description: "Built and scaled a student-led technology initiative from zero to 1,000+ members. Designed onboarding systems, educational programs, and engagement frameworks to help students navigate tech careers.",
    tags: ["Product Strategy", "Community Building", "Program Management", "EdTech"],
    color: "#F97316",
    highlight: "1,000+ members",
  },
  {
    title: "AgriCoPilot",
    category: "Product Initiative",
    image: "/images/ai-bootcamp.jpeg",
    description: "Led product management for an agriculture-focused technology initiative aimed at helping farmers make informed decisions through accessible digital solutions and information.",
    tags: ["Product Discovery", "User Research", "Roadmapping", "AgriTech"],
    color: "#5C4033",
    highlight: "Product Led",
  },
  {
    title: "Web3 Educational Webinar Series",
    category: "Learning Initiative",
    image: "/images/web3-talk.jpeg",
    description: "Identified a gap in Web3 understanding among beginners. Designed and executed a structured webinar series making complex Web3 concepts accessible to students and early-career professionals.",
    tags: ["Program Management", "Stakeholder Mgmt", "Content Strategy", "Web3"],
    color: "#F97316",
    highlight: "Community Impact",
  },
  {
    title: "Open Source Learning Initiative",
    category: "Education Program",
    image: "/images/breaking-into-tech.jpeg",
    description: "Created a structured learning initiative to make Open Source more accessible to students. Identified knowledge gaps, designed beginner-friendly content, and coordinated speaker outreach.",
    tags: ["Education Design", "Speaker Coordination", "Community Engagement", "Open Source"],
    color: "#5C4033",
    highlight: "Accessibility Focused",
  },
  {
    title: "Breaking Into Tech Webinar",
    category: "Event Production",
    image: "/images/breaking-into-tech.jpeg",
    description: "Hosted and moderated a multi-session webinar series featuring industry professionals across software engineering, AI, product management, and data analysis. Achieved strong attendance and engagement.",
    tags: ["Event Management", "Moderation", "Facilitation", "Community"],
    color: "#F97316",
    highlight: "Multi-session Event",
  },
  {
    title: "LASU TechX 5.0 Partnership",
    category: "Partnerships",
    image: "/images/techpulse-partner.jpeg",
    description: "Developed and managed a strategic partnership with LASU TechX 5.0, a Google Developer Group event. Coordinated collaboration to amplify community exposure and educational opportunities.",
    tags: ["Partnership Dev", "Strategic Communication", "Community Growth", "GDG"],
    color: "#5C4033",
    highlight: "Strategic Partnership",
  },
];

export default function Projects() {
  const { ref, inView } = useInView();
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Community Product", "Product Initiative", "Learning Initiative", "Education Program", "Event Production", "Partnerships"];
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6" style={{ background: "#FFF8F1" }}>
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#F97316" }}>Portfolio</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#1F2937" }}>
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              Initiatives and products I've built, led, and delivered — from concept to impact.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["All", "Community Product", "Product Initiative", "Learning Initiative", "Event Production"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <div
                key={project.title}
                className="rounded-2xl overflow-hidden card-hover group"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(249,115,22,0.1)",
                  boxShadow: "0 4px 16px rgba(92,64,51,0.06)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(20px)",
                  transition: `all 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`,
                }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${project.color}cc, transparent 60%)` }}
                  />
                  <span
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(255,255,255,0.9)", color: project.color }}
                  >
                    {project.highlight}
                  </span>
                  <span
                    className="absolute bottom-3 left-3 text-xs font-medium px-2 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(4px)" }}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-base mb-2" style={{ color: "#1F2937" }}>{project.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B7280" }}>{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{ background: `${project.color}10`, color: project.color }}
                      >
                        <Tag size={10} />
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
