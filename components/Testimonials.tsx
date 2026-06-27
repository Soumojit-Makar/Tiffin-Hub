"use client";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

function StarRating({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < n ? "fill-amber-400 text-amber-400" : "text-stone-200 fill-stone-200"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={ref} className="section-pad bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 text-sm font-medium text-orange-700 mb-4">
            💬 Customer Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it — hear from the people who eat with us every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`bg-gradient-to-b from-orange-50/60 to-white border border-orange-100 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Quote mark */}
              <div className="text-5xl text-orange-200 font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">{t.comment}</p>

              {/* Footer */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-orange-100">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-stone-800 text-sm truncate">{t.name}</div>
                  <div className="text-stone-400 text-xs">{t.location} · {t.date}</div>
                </div>
                <StarRating n={t.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className={`mt-10 flex flex-wrap justify-center items-center gap-6 text-center transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          <div>
            <div className="text-4xl font-bold text-stone-800">4.9</div>
            <div className="flex justify-center mt-1 mb-1"><StarRating n={5} /></div>
            <div className="text-sm text-stone-500">Average Rating</div>
          </div>
          <div className="w-px h-12 bg-stone-200 hidden sm:block" />
          <div>
            <div className="text-4xl font-bold text-stone-800">200+</div>
            <div className="text-sm text-stone-500 mt-1">Happy Reviews</div>
          </div>
          <div className="w-px h-12 bg-stone-200 hidden sm:block" />
          <div>
            <div className="text-4xl font-bold text-stone-800">98%</div>
            <div className="text-sm text-stone-500 mt-1">Repeat Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
