"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const floats = ["🍛", "🥘", "🍲", "🥗", "🫕", "🍜", "🧆", "🥙"];

export default function PartnerHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fff0f6 0%, #ffe4e6 40%, #fef3c7 100%)" }}>

      {mounted && floats.map((e, i) => (
        <div key={i} className="absolute text-4xl opacity-10 pointer-events-none select-none"
          style={{ left: `${8 + i * 11}%`, top: `${12 + (i % 4) * 22}%`, animation: `float ${3 + (i % 2)}s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}>
          {e}
        </div>
      ))}

      <div className="absolute top-24 right-8 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 left-8 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-white/90 border border-pink-200 rounded-full px-5 py-2 text-sm font-semibold text-pink-700 shadow-sm mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Now Accepting Home Chef Partners
        </div>

        <div className="mb-3 text-base sm:text-lg font-semibold text-pink-600 tracking-wide uppercase">
          Love Cooking? Earn From It.
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-stone-800 mb-6">
          Your Kitchen.{" "}
          <span style={{ background: "linear-gradient(135deg, #ec4899, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Your Business.
          </span>
          <br />
          Your{" "}
          <span style={{ background: "linear-gradient(135deg, #f97316, #eab308)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Earnings.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Do your family and friends always praise your cooking? Now let your recipes reach
          hundreds of happy customers — and earn from every meal you make.
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-10">
          {[
            { emoji: "👩‍🍳", line1: "You Cook", line2: "with love" },
            { emoji: "🛵", line1: "We Deliver", line2: "on time" },
            { emoji: "💰", line1: "You Earn", line2: "every day" },
          ].map((s) => (
            <div key={s.line1} className="flex flex-col items-center gap-1">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl mb-1">{s.emoji}</div>
              <span className="font-bold text-stone-800">{s.line1}</span>
              <span className="text-xs text-stone-500">{s.line2}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollTo("apply")}
            className="flex items-center justify-center gap-2 text-white font-bold text-lg px-10 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #ec4899, #f97316)", boxShadow: "0 12px 30px rgba(236,72,153,0.35)" }}>
            👩‍🍳 Join as Food Partner
          </button>
          <button onClick={() => scrollTo("benefits")}
            className="flex items-center justify-center gap-2 bg-white hover:bg-pink-50 text-pink-600 border-2 border-pink-200 hover:border-pink-400 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-200">
            Learn More ↓
          </button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {["✅ Zero Investment", "✅ Work From Home", "✅ Advance Orders", "✅ Doorstep Pickup"].map((b) => (
            <span key={b} className="bg-white/80 border border-green-200 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">{b}</span>
          ))}
        </div>
      </div>

      <button onClick={() => scrollTo("benefits")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 hover:text-pink-500 transition-colors animate-bounce" aria-label="Scroll down">
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
