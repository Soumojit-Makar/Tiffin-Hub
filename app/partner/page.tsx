import type { Metadata } from "next";
import PartnerNavbar from "@/components/partner/PartnerNavbar";
import PartnerHero from "@/components/partner/PartnerHero";
import PartnerBenefits from "@/components/partner/PartnerBenefits";
import PartnerSteps from "@/components/partner/PartnerSteps";
import PartnerTestimonials from "@/components/partner/PartnerTestimonials";
import PartnerForm from "@/components/partner/PartnerForm";
import PartnerFAQ from "@/components/partner/PartnerFAQ";
import PartnerFooter from "@/components/partner/PartnerFooter";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Become a Food Partner — Tiffin Hub",
  description:
    "Love cooking? Turn your passion into profit. Join Tiffin Hub as a home chef partner. Zero investment, advance orders, doorstep pickup. Apply today!",
  openGraph: {
    title: "Earn From Your Kitchen — Tiffin Hub Food Partner",
    description:
      "No investment. Advance orders. Work from home. Join Tiffin Hub's home chef network today.",
    type: "website",
  },
};

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      <PartnerNavbar />
      <PartnerHero />
      <PartnerBenefits />
      <PartnerSteps />
      <PartnerTestimonials />
      <PartnerForm />
      <PartnerFAQ />
      <PartnerFooter />
      <ScrollToTop />
    </main>
  );
}
