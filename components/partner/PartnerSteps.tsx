"use client";
import { useEffect, useRef, useState } from "react";

interface Step {
  n: string;
  emoji: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { n: "01", emoji: "📝", title: "Fill the Form", desc: "Submit your details using the application form below. Takes less than 2 minutes." },
  { n: "02", emoji: "📞", title: "We Call You", desc: "Our team calls you within 24 hours to discuss your cooking speciality and capacity." },
  { n: "03", emoji: "👩‍🍳", title: "Start Cooking", desc: "We send you confirmed advance orders. You prepare the meals in your kitchen." },
  { n: "04", emoji: "🛵", title: "We Pick Up", desc: "Our delivery team comes to your door to collect the packed meals — right on time." },
  { n: "05", emoji: "💰", title: "You Get Paid", desc: "Earn per meal delivered. Weekly payouts directly to your bank account or UPI." },
];

export default function PartnerSteps() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="steps" ref={ref} className="section-pad bg-[#FFF9F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 text-sm font-medium text-orange-700 mb-4">
            🗺️ How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
            From Kitchen to{" "}
            <span style={{ background: "linear-gradient(135deg,#f97316,#eab308)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Cash
            </span>{" "}
            in 5 Steps
          </h2>
          <p className="text-stone-500 text-lg">Simple, transparent, and completely risk-free.</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 via-orange-200 to-yellow-200 -translate-x-1/2 hidden sm:block" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.n}
                className={`flex gap-6 items-start sm:items-center transition-all duration-500 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 120}ms` }}>
                <div className={`flex-1 bg-white rounded-3xl p-6 shadow-sm border border-orange-100 hover:shadow-lg transition-all hover:-translate-y-0.5 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                  <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                    <span className="text-3xl">{step.emoji}</span>
                    <div>
                      <div className="text-xs font-bold text-pink-500 uppercase tracking-widest">Step {step.n}</div>
                      <h3 className="text-lg font-bold text-stone-800">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                <div className="hidden sm:flex w-10 h-10 shrink-0 rounded-full items-center justify-center font-bold text-white text-sm shadow-lg z-10"
                  style={{ background: "linear-gradient(135deg,#ec4899,#f97316)" }}>
                  {step.n}
                </div>
                <div className="flex-1 hidden sm:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
