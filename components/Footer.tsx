"use client";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/constants";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import Image from "next/image";
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Why Us", href: "#features" },
  { label: "Order", href: "#order" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
  { icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, label: "WhatsApp" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/icon.png" alt="Tiffin Hub Logo" width={40} height={40}  className="rounded-full" />
              <span className="font-bold text-2xl text-white">
                Tiffin<span className="text-orange-400">Hub</span>
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed text-sm mb-5 max-w-sm">
              Fresh, hygienic, and affordable homemade meals delivered daily
              across Bhatpara and nearby areas. Because home-cooked food is a
              right, not a luxury.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-stone-800 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-stone-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <span className="break-all">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{CONTACT_INFO.serviceArea}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>⏰</span>
                <span>Mon–Sat 8 AM–9 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Tiffin Hub. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-400">♥</span> in Bhatpara, West Bengal
          </p>
        </div>
      </div>
    </footer>
  );
}
