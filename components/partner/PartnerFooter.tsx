"use client";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/constants";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import Image from "next/image";
const socials = [
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
  { icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, label: "WhatsApp" },
];

const partnerLinks: { href: string; label: string }[] = [
  { href: "#benefits", label: "Benefits" },
  { href: "#steps", label: "How It Works" },
  { href: "#reviews", label: "Partner Stories" },
  { href: "#apply", label: "Apply Now" },
  { href: "#faq", label: "FAQ" },
];

export default function PartnerFooter() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <span className="text-3xl">🍱</span> */}
              <Image src="/icon.png" alt="TiffinHub Logo" width={80} height={80} className="rounded-full" />
              <div>
                <span className="font-bold text-xl text-white">Tiffin<span className="text-orange-400">Hub</span></span>
                <div className="text-xs text-pink-400">Food Partner Program</div>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-5">
              Empowering home cooks across Bhatpara and surrounding areas to turn
              their passion into a steady income — zero investment, all heart.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 bg-stone-800 hover:bg-pink-500 rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Partner Portal</h4>
            <ul className="space-y-2.5 text-sm">
              {partnerLinks.map((l) => (
                <li key={l.label}>
                  <button onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-stone-400 hover:text-pink-400 transition-colors">{l.label}</button>
                </li>
              ))}
              <li>
                <a href="/" className="text-stone-400 hover:text-orange-400 transition-colors">← Back to Main Site</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2"><span>📞</span><span>{CONTACT_INFO.phone}</span></li>
              <li className="flex items-start gap-2"><span>✉️</span>
                <a href="mailto:hr@digitalindian.co.in" className="hover:text-pink-400 transition-colors break-all">hr@digitalindian.co.in</a>
              </li>
              <li className="flex items-start gap-2"><span>📍</span><span>{CONTACT_INFO.serviceArea}</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Tiffin Hub. All rights reserved.</p>
          <p className="flex items-center gap-1">Empowering women, one meal at a time <span className="text-pink-400">♥</span></p>
        </div>
      </div>
    </footer>
  );
}
