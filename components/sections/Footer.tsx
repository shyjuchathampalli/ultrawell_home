"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { usePanel } from "@/context/PanelContext";

export default function Footer() {
  const socials = [FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram];

  const { setPanel } = usePanel();

  const links = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Visit Us", href: "/visit" },
    { label: "Referrals", href: "/referrals" },
    { label: "FAQ", href: "/faq" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
    { label: "Policies & Compliance", href: "/policies" },
  ];

  return (
    <footer className="relative overflow-hidden">

      {/* 🔥 CTA STRIP */}
      <div className="bg-gradient-to-r from-[#c12e5a] via-[#c12e5a] to-[#f59e0b] px-6 lg:px-16 py-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT TEXT */}
          <div className="text-white max-w-xl">
            <h3 className="text-xl md:text-2xl font-semibold">
              Looking for the right support?
            </h3>
            <p className="text-white/90 text-sm md:text-base mt-2">
              Speak with our team to explore personalised supported living options tailored to your needs.
            </p>
          </div>

          {/* CTA BUTTON */}
          <button
          onClick={() => setPanel("enquire")}
          className="bg-white text-[#c12e5a] px-6 py-3 rounded-xl font-semibold 
          hover:opacity-90 transition shadow-md"
        >
          Enquire Now →
        </button>

        </div>
      </div>

      {/* 🔥 MAIN FOOTER */}
      <div className="bg-[#0f2f3a] text-white px-6 lg:px-16 py-16">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* LEFT - BRAND + ACCESSIBILITY */}
          <div>
            {/* LOGO */}
            <div className="mb-6">
              <Image
                src="/logo_white.png"
                alt="UltraWell Home"
                width={160}
                height={50}
                className="object-contain"
              />
            </div>

            {/* ACCESSIBILITY CARD */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition">
              <h3 className="font-semibold text-lg mb-3">
                Digital Accessibility
              </h3>

              <p className="text-sm text-white/80 leading-relaxed">
                We strive to make our digital services accessible to everyone. Learn more about our accessibility commitments and compliance in our Policies & Compliance section.
              </p>

              <Link
                href="/policies"
                className="mt-4 inline-block text-sm font-medium text-[#f59e0b] hover:underline"
              >
                Find out more →
              </Link>
            </div>
          </div>

          {/* CENTER - NAVIGATION */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white/50 mb-6">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-[#f59e0b] transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT - CONTACT + SOCIAL */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white/50 mb-6">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-white/80">
              <p>
                UltraWell Home<br />
                Croydon, London
              </p>

              <p className="hover:text-[#f59e0b] transition cursor-pointer">
                020-8664 9220
              </p>

              <p className="hover:text-[#f59e0b] transition cursor-pointer">
                admin@ultrawellhome.co.uk
              </p>
            </div>

            {/* SOCIAL */}
            <div className="mt-10">
              <p className="text-sm uppercase text-white/50 mb-4">
                Follow Us
              </p>

              <div className="flex gap-4">
                {socials.map((Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center 
                    rounded-full border border-white/20 
                    bg-white/5 backdrop-blur-md
                    hover:bg-[#f59e0b] hover:text-white hover:border-[#f59e0b]
                    hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 🔥 BOTTOM BAR */}
      <div className="bg-[#0b232c] text-white/60 text-sm px-6 lg:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="flex gap-6 flex-wrap">
          <Link href="/policies" className="hover:text-white transition">
            Legal notice
          </Link>
          <Link href="/policies" className="hover:text-white transition">
            Privacy policy
          </Link>
          <Link href="/policies" className="hover:text-white transition">
            Cookies
          </Link>
          <Link href="/sitemap" className="hover:text-white transition">
            Sitemap
          </Link>
        </div>

        <div className="text-white/50">
          © UltraWell {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}