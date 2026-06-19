import { useEffect, useRef, useState } from "react";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
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
  return <span ref={ref}>{count}{suffix}</span>;
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
    <section id="about" className="py-24 px-6" style={{ background: "#FFFFFF" }}>
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#F97316" }}>About Me</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#1F2937" }}>
              Building with{" "}
              <span className="gradient-text">Purpose</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              I believe the best products begin with understanding people.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#1F2937" }}>My Story</h3>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#4B5563" }}>
                <p>
                  I'm an early-career Product Manager with hands-on experience building and managing community-driven products, educational programs, and user-focused initiatives. As the founder of <strong style={{ color: "#F97316" }}>Techpulse</strong>, I've grown a tech community of over 1,000 members dedicated to helping students and early-career professionals navigate technology and access opportunities.
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
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#1F2937" }}>My Values</h3>
              <div className="grid grid-cols-1 gap-4">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-4 p-4 rounded-2xl card-hover" style={{ background: "#FFF8F1", border: "1px solid rgba(249,115,22,0.1)" }}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#F97316,#5C4033)" }}>
                      <v.icon size={18} color="white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1" style={{ color: "#1F2937" }}>{v.title}</div>
                      <div className="text-sm" style={{ color: "#6B7280" }}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center p-6 rounded-2xl glass-card card-hover"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  <AnimatedCounter target={s.num} suffix={s.suffix} />
                </div>
                <div className="text-sm font-medium" style={{ color: "#6B7280" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
