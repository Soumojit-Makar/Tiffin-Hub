"use client";
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

interface Review {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  en: string | null;
}

const reviews: Review[] = [
  { name: "Sunita Dey", location: "Naihati", avatar: "SD", rating: 5, comment: "আমি গৃহিণী ছিলাম, কিন্তু Tiffin Hub-এর সঙ্গে যুক্ত হওয়ার পর এখন প্রতি মাসে ভালো আয় করছি। কোনো বিনিয়োগ লাগেনি, শুধু রান্নার ভালোবাসা কাজে লেগেছে!", en: "I was a housewife, but after joining Tiffin Hub I now earn well every month. No investment needed — just my love of cooking." },
  { name: "Rina Mondal", location: "Bhatpara", avatar: "RM", rating: 5, comment: "They send confirmed orders every morning before I start cooking. The pickup team is always on time. I feel like a real entrepreneur now!", en: null },
  { name: "Prabhati Sarkar", location: "Kankinara", avatar: "PS", rating: 5, comment: "প্রথমে ভয় পেয়েছিলাম, কিন্তু টিম খুব সহযোগী। এখন আমার রান্না অনেক মানুষ খাচ্ছে — এটা সত্যিই আনন্দের।", en: "I was nervous at first, but the team is very supportive. Now many people are eating my cooking — that's truly joyful." },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < n ? "fill-amber-400 text-amber-400" : "text-stone-200 fill-stone-200"} />
      ))}
    </div>
  );
}

export default function PartnerTestimonials() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="reviews" ref={ref} className="section-pad bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 rounded-full px-4 py-1.5 text-sm font-medium text-pink-700 mb-4">
            💬 Partner Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
            Real Women,{" "}
            <span style={{ background: "linear-gradient(135deg,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Real Earnings
            </span>
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Hear from the home chefs who turned their kitchens into income.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={r.name}
              className={`rounded-3xl p-6 border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ background: "linear-gradient(160deg, #fdf2f8 0%, #fff 100%)", borderColor: "#fce7f3", transitionDelay: `${i * 150}ms` }}>
              <div className="text-4xl text-pink-200 font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 text-sm leading-relaxed mb-3 font-medium">{r.comment}</p>
              {r.en && (
                <p className="text-stone-400 text-xs italic leading-relaxed mb-4 border-l-2 border-pink-200 pl-3">{r.en}</p>
              )}
              <div className="flex items-center gap-3 pt-4 border-t border-pink-100">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: "linear-gradient(135deg,#ec4899,#f97316)" }}>
                  {r.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-stone-800 text-sm">{r.name}</div>
                  <div className="text-stone-400 text-xs">{r.location}</div>
                </div>
                <Stars n={r.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
