"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { usePanel } from "@/context/PanelContext";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pathway", href: "/pathway" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
  { label: "Policies and Compliance", href: "/policies" },
  { label: "Referrals", href: "/referrals" },
  { label: "Visit us", href: "/visit-us" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { setPanel } = usePanel();
  const pathname = usePathname();

  return (
    
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100">

      {/* TOP BAR */}
      <div className="hidden lg:block border-b">
        <div className="w-full px-6 lg:px-12 xl:px-24 py-2 flex items-center justify-between text-sm">

            {/* LEFT: TAGLINE */}

            {/* RIGHT: PHONE */}
            <div className="flex items-center gap-2">
            <Phone size={16} className="text-primary" />
            <span className="font-semibold text-primary">
                +44 7872 908711
            </span>
            </div>

        </div>
        </div>

      {/* MAIN NAV */}
      <div className="w-full px-6 lg:px-12 xl:px-24 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="UltraWell Home"
            width={130}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative group transition ${
                  isActive ? "text-primary font-semibold" : "text-gray-700"
                }`}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all 
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* CTA BUTTONS */}
        <div className="hidden lg:flex items-center gap-3">

          {/* PRIMARY */}
            <button onClick={() => setPanel("enquire")} className="border-2 border-primary text-primary px-5 py-2 rounded-xl hover:bg-primary hover:text-white transition duration-300 font-semibold">
            Enquire
            </button>

            {/* SECONDARY */}
            <button onClick={() => setPanel("refer")} className="border-2 border-accent text-accent px-5 py-2 rounded-xl hover:bg-accent hover:text-white transition duration-300 font-semibold">
            Refer
            </button>
        </div>

        {/* MOBILE ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 bg-white border-t">

          {/* PHONE */}
          <div className="flex items-center gap-2 text-sm text-muted">
            <Phone size={16} className="text-primary" />
            <span>+44 114 258 7769</span>
          </div>

          {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="py-2 border-b text-gray-700"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}

          {/* MOBILE BUTTONS */}
          <button
            onClick={() => {
              setPanel("enquire");
              setOpen(false);
            }}
            className="mt-4 border border-primary text-primary px-4 py-3 rounded-xl hover:bg-primary hover:text-white transition"
          >
            Enquire
          </button>

          <button
            onClick={() => {
              setPanel("refer");
              setOpen(false);
            }}
            className="border border-accent text-accent px-4 py-3 rounded-xl hover:bg-accent hover:text-white transition"
          >
            Refer
          </button>
        </div>
      </div>
    </header>
  );
}