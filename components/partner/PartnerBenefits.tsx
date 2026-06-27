"use client";
import { useEffect, useRef, useState } from "react";

interface Benefit {
  emoji: string;
  title: string;
  desc: string;
  color: string;
}

const benefits: Benefit[] = [
  { emoji: "💸", title: "Zero Investment", desc: "No money needed to start. Your only investment is your talent and time.", color: "bg-green-50 border-green-200" },
  { emoji: "📋", title: "Advance Orders", desc: "We give you confirmed orders before you even start cooking. No waste, no risk.", color: "bg-blue-50 border-blue-200" },
  { emoji: "🚴", title: "Doorstep Pickup", desc: "Our delivery team collects food directly from your home. You never leave your kitchen.", color: "bg-orange-50 border-orange-200" },
  { emoji: "🏠", title: "Work From Home", desc: "Cook in your own kitchen, on your own schedule. No commute, no boss.", color: "bg-purple-50 border-purple-200" },
  { emoji: "📈", title: "Extra Income", desc: "Earn a steady additional income every month without leaving your home.", color: "bg-yellow-50 border-yellow-200" },
  { emoji: "📣", title: "Marketing & Support", desc: "We handle orders, delivery, and customer support. You just cook.", color: "bg-pink-50 border-pink-200" },
];

export default function PartnerBenefits() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="benefits" ref={ref} className="section-pad bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 rounded-full px-4 py-1.5 text-sm font-medium text-pink-700 mb-4">
            ✨ Partner Benefits
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
            Everything You Get,{" "}
            <span style={{ background: "linear-gradient(135deg,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Risk-Free
            </span>
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            We&apos;ve built the entire business infrastructure so you can focus on what you love — cooking.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {benefits.map((b, i) => (
            <div key={b.title}
              className={`border-2 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default group ${b.color} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">{b.emoji}</div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">{b.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className={`rounded-3xl p-8 text-center transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ background: "linear-gradient(135deg, #fdf2f8, #fff7ed)" }}>
          <div className="text-4xl mb-4">🌸</div>
          <blockquote className="text-xl sm:text-2xl font-bold text-stone-700 italic mb-4 max-w-2xl mx-auto">
            &ldquo;রান্না যদি আপনার ভালোবাসা হয়, আয় হোক তার পুরস্কার!&rdquo;
          </blockquote>
          <p className="text-stone-500 text-sm">If cooking is your passion, let it be your reward.</p>
          <button onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-6 inline-flex items-center gap-2 text-white font-bold px-8 py-3 rounded-2xl hover:scale-105 transition-all shadow-lg"
            style={{ background: "linear-gradient(135deg,#ec4899,#f97316)" }}>
            Apply Now — It&apos;s Free →
          </button>
        </div>
      </div>
    </section>
  );
}
