import { useEffect, useRef, useState } from "react";

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

  const galleryItems = [
    { image: "nacos-panelist-bio.jpeg", caption: "NACOS LASUSTECH — AI & The Future Panelist" },
    { image: "lasu-exec-card.jpeg", caption: "LASU Tech Society — Director of Media & Publicity" },
    { image: "panel1.jpeg", caption: "Conversations That Built Me — Panelist" },
      { image: "ai-bootcamp-event.jpeg", caption: "AI Bootcamp Event" },
    { image: "breaking-into-tech.jpeg", caption: "Breaking Into Tech Webinar" },
    { image: "web3-talk.jpeg", caption: "Web3 Educational Talk" },
    { image: "partnership.jpeg", caption: "Strategic Partnership" },
    { image: "techpulse-partner.jpeg", caption: "Techpulse Community" },
    { image: "uri-partnership.jpeg", caption: "Techpulse × URI Sales Academy Partnership" },
    { image: "lasu-id.jpeg", caption: "LASU Tech Society Event" },
  ];

  export default function Gallery() {
    const { ref, inView } = useInView();
    const [selected, setSelected] = useState<string | null>(null);

    return (
      <section id="gallery" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#FFF8F1" }}>
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
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3" style={{ color: "#F97316" }}>Moments</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: "#1F2937" }}>
                Event{" "}
                <span className="gradient-text">Gallery</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4" style={{ color: "#6B7280" }}>
                A visual journey through speaking engagements, community events, and impactful moments.
              </p>
            </div>

            {/* Masonry-style grid */}
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
              {galleryItems.map((item, i) => (
                <div
                  key={item.image}
                  className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative"
                  style={{
                    boxShadow: "0 4px 16px rgba(92,64,51,0.10)",
                    border: "1px solid rgba(249,115,22,0.12)",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateY(20px)",
                    transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 0.07}s`,
                  }}
                  onClick={() => setSelected(item.image)}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/${item.image}`}
                    alt={item.caption}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 flex items-end p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, rgba(31,41,55,0.85) 0%, transparent 60%)" }}
                  >
                    <p className="text-white text-xs font-medium leading-snug">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
            onClick={() => setSelected(null)}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${selected}`}
              alt="Gallery"
              className="max-w-full max-h-full rounded-2xl object-contain"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl"
              style={{ background: "rgba(249,115,22,0.8)" }}
              onClick={() => setSelected(null)}
            >
              ×
            </button>
          </div>
        )}
      </section>
    );
  }
  