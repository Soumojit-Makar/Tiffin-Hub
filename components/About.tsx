"use client";
import { useEffect, useRef, useState } from "react";

const highlights = [
  { emoji: "🌿", label: "Fresh Ingredients", desc: "Locally sourced, daily" },
  { emoji: "🧼", label: "Hygienic Kitchen", desc: "FSSAI certified" },
  { emoji: "💰", label: "Affordable", desc: "From ₹80 per meal" },
  { emoji: "🚴", label: "Daily Delivery", desc: "On time, every time" },
  { emoji: "🏠", label: "Home-Style Taste", desc: "Just like Ma's cooking" },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="section-pad bg-white" style={{ backgroundImage: "url('/service.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-3xl p-8 border border-orange-100">
                <div className="text-center mb-6">
                  <div className="text-7xl mb-4" style={{ animation: "float 3s ease-in-out infinite" }}>👨‍🍳</div>
                  <h3 className="text-2xl font-bold text-stone-800">Cooking Since 2019</h3>
                  <p className="text-stone-500 mt-1">Serving love in every bite</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { n: "500+", l: "Customers" },
                    { n: "8+", l: "Menu Items" },
                    { n: "6", l: "Days a week" },
                    { n: "45 min", l: "Avg delivery" },
                  ].map((s) => (
                    <div key={s.l} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-orange-50">
                      <div className="text-xl font-bold text-orange-600">{s.n}</div>
                      <div className="text-xs text-stone-500 mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative badge */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-2xl px-4 py-2 shadow-lg">
                <div className="text-sm font-bold">⭐ Top Rated</div>
                <div className="text-xs opacity-80">in Bhatpara</div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-1 py-1.5 text-sm font-medium text-orange-700 mb-4">
              🍱 About Tiffin Hub
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-300 mb-6 leading-tight">
              Real Food, Made with{" "}
              <span className="text-gradient">Real Care</span>
            </h2>
            <p className="text-stone-100 text-lg leading-relaxed mb-6">
              Tiffin Hub was born from a simple belief: everyone deserves a
              nourishing, home-cooked meal — especially when you&apos;re too
              busy to cook. We started in a small kitchen in Bhatpara and have
              grown into the area&apos;s most loved tiffin service.
            </p>
            <p className="text-stone-100 leading-relaxed mb-8">
              Every meal is prepared fresh each morning using seasonal
              ingredients. No preservatives, no compromises — just honest,
              wholesome food that reminds you of home.
            </p>

            {/* Highlights */}
            <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`flex items-center gap-4 p-3 rounded-xl hover:bg-orange-50 transition-all duration-300 ${
                    visible ? "opacity-100 translate-y-0 bg-orange-100" : "opacity-0 translate-y-4 bg-orange-50"
                  }`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                >
                  <span className="text-2xl w-10 text-center">{h.emoji}</span>
                  <div>
                    <div className="font-semibold text-stone-800">{h.label}</div>
                    <div className="text-sm text-stone-600">{h.desc}</div>
                  </div>
                  <span className="ml-auto text-green-500">✓</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
