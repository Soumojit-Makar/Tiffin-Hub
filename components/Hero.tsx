"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const floatingEmojis = ["🍛", "🥘", "🍱", "🫓", "🥗", "🍚", "🧆", "🍲"];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToOrder = () => {
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      id="home"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
      {/* Floating background emojis */}
      {mounted &&
        floatingEmojis.map((emoji, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-10 pointer-events-none select-none"
            style={{
              left: `${10 + i * 11}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animation: `float ${3 + (i % 2)}s ease-in-out infinite`,
            }}
          >
            {emoji}
          </div>
        ))}

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="
backdrop-blur-md
bg-white/10
border border-white/20
rounded-3xl
p-8
lg:p-10
max-w-xl
shadow-2xl
">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 border border-orange-200 rounded-full px-4 py-2 text-sm font-medium text-orange-700 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Now Delivering Across Kolkata & Nearby Areas
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white/90">
              Fresh{" "}
              <span className="text-gradient">Homemade</span>{" "}
              <br />Meals Delivered{" "}
              <span className="text-gradient">Daily</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-lg mx-auto lg:mx-0 leading-relaxed mt-4 mb-8">
              Wholesome, hygienic, and affordable tiffin service — because
              everyone deserves a real home-cooked meal, every day.
            </p>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 mb-8 text-white/80">
              {[
                { value: "500+", label: "Happy Customers" },
                { value: "₹80", label: "Starting Price" },
                { value: "45 min", label: "Fast Delivery" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{stat.value}</div>
                  <div className="text-xs text-white/70 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={scrollToOrder}
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 shadow-xl shadow-orange-200 hover:shadow-orange-300 hover:scale-105 active:scale-95"
              >
                🛵 Order Now
              </button>
              <button
                onClick={scrollToMenu}
                className="flex items-center justify-center gap-2 bg-white hover:bg-orange-50 text-orange-600 border-2 border-orange-200 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 hover:border-orange-400"
              >
                🍽️ View Menu
              </button>
            </div>
          </div>

          {/* Illustration panel */}
          {/* <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"> */}
          {/* Main circle */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full shadow-2xl shadow-orange-300/50 flex items-center justify-center">
                <span className="text-8xl sm:text-9xl" style={{ animation: "float 3s ease-in-out infinite" }}>
                  🍱
                </span>
              </div> */}
          {/* Orbiting icons */}
          {/* {[
                { emoji: "🥗", top: "-8%", left: "50%", delay: "0s" },
                { emoji: "🍛", top: "50%", left: "-8%", delay: "0.5s" },
                { emoji: "🍚", top: "108%", left: "50%", delay: "1s" },
                { emoji: "☕", top: "50%", left: "108%", delay: "1.5s" },
              ].map((item) => (
                <div
                  key={item.emoji}
                  className="absolute w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: item.top,
                    left: item.left,
                    animation: `float 3s ease-in-out infinite`,
                    animationDelay: item.delay,
                  }}
                >
                  {item.emoji}
                </div>
              ))} */}
          {/* Rating badge */}
          {/* <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <div>
                  <div className="text-xs font-bold text-stone-800">4.9/5</div>
                  <div className="text-xs text-stone-500">200+ reviews</div>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 hover:text-orange-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
