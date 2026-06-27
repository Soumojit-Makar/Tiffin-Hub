"use client";
import { useState, useEffect, useRef } from "react";
import { menuItems } from "@/data/menu";
import { formatPrice } from "@/lib/utils";
import type { MenuItem } from "@/types";

const categories = [
  { id: "all", label: "All", emoji: "🍽️" },
  { id: "thali", label: "Thali", emoji: "🥘" },
  { id: "combo", label: "Combos", emoji: "🍚" },
  { id: "snack", label: "Snacks", emoji: "🥪" },
  { id: "beverage", label: "Beverages", emoji: "☕" },
];

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-orange-50 group">
      {/* Image area */}
      <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 h-36 flex items-center justify-center overflow-hidden">
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        )}
        {/* <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {item.emoji}
        </span> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
        {item.popular && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
            🔥 Popular
          </span>
        )}
        <span
          className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${
            item.veg
              ? "bg-green-100 text-green-700 border border-green-200"
              : "bg-red-100 text-red-700 border border-red-200"
          }`}
        >
          {item.veg ? "🟢 Veg" : "🔴 Non-Veg"}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-stone-800 text-base leading-tight">{item.name}</h3>
          <span className="text-orange-600 font-bold text-lg whitespace-nowrap">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
        <button
          onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-4 w-full bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white border border-orange-200 hover:border-orange-500 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
        >
          Order This
        </button>
      </div>
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState("all");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const filtered = active === "all" ? menuItems : menuItems.filter((m) => m.category === active);

  return (
    <section id="menu" ref={ref} className="section-pad bg-[#FFF9F0]" style={{ backgroundImage: "url('/food.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 text-sm font-medium text-orange-700 mb-4">
            🍽️ Today&apos;s Menu
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
            What&apos;s <span className="text-gradient">Cooking Today?</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Fresh, balanced meals prepared every morning. Pick your favourite
            and we&apos;ll deliver it hot to your door.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat.id
                  ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                  : "bg-white text-stone-600 border border-stone-200 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}