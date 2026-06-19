import { useEffect, useRef, useState } from "react";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

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

function AnimatedCounter({ target, suffix = "", inView }: { target: number; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count}{suffix}</span>;
}

const values = [
  { icon: Target, title: "Product Thinking", desc: "Identifying real user problems and designing intentional solutions grounded in research and feedback." },
  { icon: Users, title: "Community First", desc: "Building spaces where learning, collaboration, and practical skill development go hand in hand." },
  { icon: Lightbulb, title: "Continuous Learning", desc: "Staying curious about emerging technologies, EdTech, and how products can create measurable impact." },
  { icon: Heart, title: "Empowering Others", desc: "Passionate about helping people navigate technology, develop relevant skills, and access opportunities." },
];

const stats = [
  { num: 1000, suffix: "+", label: "Community Members" },
  { num: 5, suffix: "+", label: "Programs Executed" },
  { num: 3, suffix: "+", label: "Speaking Events" },
  { num: 2, suffix: "+", label: "Years Leading" },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3" style={{ color: "#F97316" }}>About Me</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: "#1F2937" }}>
              Building with{" "}
              <span className="gradient-text">Purpose</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4" style={{ color: "#6B7280" }}>
              I believe the best products begin with understanding people.
            </p>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 sm:mb-20">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: "#1F2937" }}>My Story</h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed" style={{ color: "#4B5563" }}>
                <p>
                  I'm an early-career Product Manager with hands-on experience building and managing community-driven products, educational programs, and user-focused initiatives. As the founder of <strong style={{ color: "#F97316" }}>Techpulse</strong>, I've grown a tech community of over 1,000 members dedicated to helping students and early-career professionals navigate technology.
                </p>
                <p>
                  My approach to product management is rooted in identifying real problems, designing intentional solutions, and continuously improving through feedback and collaboration. I work at the intersection of technology, digital growth, and community building.
                </p>
                <p>
                  In addition to Techpulse, I serve as the <strong style={{ color: "#5C4033" }}>Director of Media and Publicity</strong> at LASU Tech Society, where I apply my expertise in social media management, videography, and content creation.
                </p>
                <p>
                  I'm passionate about EdTech, emerging technologies, and creating products that simplify access to education and opportunities in the digital economy.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: "#1F2937" }}>My Values</h3>
              <div className="grid gap-3 sm:gap-4">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl card-hover"
                    style={{ background: "#FFF8F1", border: "1px solid rgba(249,115,22,0.1)" }}
                  >
                    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#F97316,#5C4033)" }}>
                      <v.icon size={16} color="white" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1" style={{ color: "#1F2937" }}>{v.title}</div>
                      <div className="text-xs sm:text-sm" style={{ color: "#6B7280" }}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl glass-card card-hover"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                  <AnimatedCounter target={s.num} suffix={s.suffix} inView={inView} />
                </div>
                <div className="text-xs sm:text-sm font-medium" style={{ color: "#6B7280" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
