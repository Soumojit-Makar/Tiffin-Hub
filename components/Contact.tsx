"use client";
import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/constants";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const cards = [
    {
      icon: Phone,
      title: "Phone",
      value: CONTACT_INFO.phone,
      sub: "Call us anytime",
      href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
      color: "bg-orange-50 border-orange-200 text-orange-600",
    },
    {
      icon: Mail,
      title: "Email",
      value: CONTACT_INFO.email,
      sub: "We reply within 2 hrs",
      href: `mailto:${CONTACT_INFO.email}`,
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      icon: MapPin,
      title: "Service Area",
      value: CONTACT_INFO.serviceArea,
      sub: "Free delivery in all areas",
      href: "#",
      color: "bg-green-50 border-green-200 text-green-600",
    },
    {
      icon: Clock,
      title: "Hours",
      value: CONTACT_INFO.businessHours.split("\n")[0],
      sub: CONTACT_INFO.businessHours.split("\n")[1],
      href: "#",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-pad bg-[#FFF9F0]" style={{ backgroundImage: "url('/see.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 text-sm font-medium text-orange-700 mb-4">
            📞 Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
            We&apos;re Here to <span className="text-gradient">Help</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Questions about the menu, delivery, or subscriptions? Reach out — we&apos;re friendly!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                className={`border-2 rounded-3xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block ${card.color} ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                  <Icon size={20} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">{card.title}</div>
                <div className="font-semibold text-stone-800 text-sm leading-snug mb-1 break-words">{card.value}</div>
                <div className="text-xs text-stone-500">{card.sub}</div>
              </a>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className={`bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 text-white text-center transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h3 className="text-xl font-bold mb-2">Prefer WhatsApp? 💬</h3>
          <p className="text-green-100 mb-5 text-sm">
            Chat with us directly on WhatsApp for quick orders, menu queries, or any help.
          </p>
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-green-50 font-bold px-6 py-3 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
