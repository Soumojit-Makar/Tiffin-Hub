"use client";
import { useEffect, useRef, useState } from "react";
import { features } from "@/data/features";

export default function Features() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="features" ref={ref} className="section-pad bg-white" >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 text-sm font-medium text-orange-700 mb-4">
            ✨ Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
            More Than Just a{" "}
            <span className="text-gradient">Tiffin Service</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            We obsess over every detail so you can enjoy a perfect meal without
            thinking twice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className={`border-2 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default group ${feature.color} transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">
                {feature.emoji}
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">{feature.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className={`mt-14 bg-gradient-to-r from-orange-500 to-rose-500 rounded-3xl p-8 text-white text-center transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h3 className="text-2xl font-bold mb-2">🎉 First Order Discount!</h3>
          <p className="text-orange-100 mb-6 max-w-md mx-auto">
            New customer? Get 10% off your first order. Use code{" "}
            <strong className="bg-white/20 px-2 py-0.5 rounded-lg">NEWBIE10</strong> at checkout.
          </p>
          <button
            onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-3 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Claim Offer →
          </button>
        </div>
      </div>
    </section>
  );
}
