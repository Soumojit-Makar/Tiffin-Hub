"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  { q: "Do I need to invest any money to join?", a: "Absolutely not. There is zero investment required. You only need your kitchen, basic cooking equipment (which you already have), and your cooking skills." },
  { q: "How will I receive orders?", a: "You will receive confirmed advance orders every morning via WhatsApp or phone call — before you start cooking. No uncertainty, no waste." },
  { q: "Will someone come to my house to collect the food?", a: "Yes! Our delivery team picks up the packed meals directly from your doorstep at the agreed time. You never need to step out." },
  { q: "How much can I earn per month?", a: "Earnings depend on your daily capacity and meal slot. On average, home chef partners earn between ₹5,000 to ₹20,000+ per month, depending on volume." },
  { q: "Do I need any certification or license?", a: "A basic FSSAI registration is recommended (we can guide you through this), but it is not mandatory to start. We will help you with all formalities." },
  { q: "What type of food can I make?", a: "Bengali meals, North Indian, rice dishes, biryani, snacks, sweets — anything you cook well is welcome. We will match you with orders based on your specialty." },
  { q: "Can I work part-time or with flexible hours?", a: "Yes. You choose your meal slot — breakfast, lunch, or dinner — and how many meals you can handle. Start small and scale up as you grow confident." },
];

function Item({ q, a }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? "border-pink-300 shadow-md" : "border-stone-200"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-pink-50/50 transition-colors">
        <span className="font-semibold text-stone-800 text-sm sm:text-base">{q}</span>
        <ChevronDown size={18} className={`shrink-0 text-pink-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">{a}</div>
      )}
    </div>
  );
}

export default function PartnerFAQ() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref} className="section-pad bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 rounded-full px-4 py-1.5 text-sm font-medium text-pink-700 mb-4">
            ❓ FAQ
          </div>
          <h2 className="text-3xl font-bold text-stone-800 mb-3">Common Questions</h2>
          <p className="text-stone-500">Everything you need to know before joining.</p>
        </div>

        <div className={`space-y-3 transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
          {faqs.map((f) => <Item key={f.q} {...f} />)}
        </div>

        <div className={`mt-10 text-center p-6 rounded-3xl transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ background: "linear-gradient(135deg,#fdf2f8,#fff7ed)" }}>
          <p className="text-stone-600 mb-4">Still have questions? We&apos;re happy to help!</p>
          <a href="mailto:hr@digitalindian.co.in" className="inline-flex items-center gap-2 font-semibold text-pink-600 hover:text-pink-700 transition-colors">
            ✉️ hr@digitalindian.co.in
          </a>
        </div>
      </div>
    </section>
  );
}
