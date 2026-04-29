"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePanel } from "@/context/PanelContext";
import {
  Heart,
  ShieldCheck,
  Users,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    text: "24/7 Compassionate Support",
  },
  {
    icon: ShieldCheck,
    text: "Fully Equipped Croydon Home",
  },
  {
    icon: Users,
    text: "Person-Centred Approach",
  },
];

export default function Hero() {
  const { setPanel } = usePanel();
  return (
    <section className="relative w-full min-h-[90vh] flex items-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/hero-care.jpg"
          alt="Care Home"
          fill
          priority
          className="object-cover"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-24 py-20">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white max-w-xl"
        >
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Safe, Supported Living 
            <br />
            <span className="text-accent">
              Where Every Resident Thrives
            </span>
          </h1>

          {/* ✅ SUBTEXT */}
          <p className="mt-5 text-sm md:text-base text-white/85 leading-relaxed max-w-lg">
            At UltraWell Home, we provide personalised support for adults with learning disabilities, mental health needs, and physical disabilities — empowering them to live with dignity, safety, and purpose.
          </p>

          {/* ✅ CTA BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            
            {/* Primary */}
            <button
            onClick={() => setPanel("enquire")}
            className="
              bg-primary text-white 
              px-6 py-3 
              rounded-full 
              text-sm md:text-base font-medium
              shadow-md hover:opacity-90 transition
              w-full sm:w-auto
            ">
              Get started today
            </button>

            {/* Secondary */}
            <button
            onClick={() => setPanel("refer")}
            className="
              border border-white/40 text-white 
              px-6 py-3 
              rounded-full 
              text-sm md:text-base font-medium
              backdrop-blur-sm hover:bg-white/10 transition
              w-full sm:w-auto
            ">
              Make a Referral
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}