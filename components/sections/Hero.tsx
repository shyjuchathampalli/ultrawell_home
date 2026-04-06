"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Users,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    text: "Compassionate recovery care",
  },
  {
    icon: ShieldCheck,
    text: "Safe & structured environment",
  },
  {
    icon: Users,
    text: "Highly trained professionals",
  },
  {
    icon: Activity,
    text: "24/7 personalised support",
  },
];

export default function Hero() {
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
            Empowering Independence
            <br />
            <span className="text-accent">
              Through Compassionate Care
            </span>
          </h1>
        </motion.div>

        {/* ✅ FEATURES (FIXED STRUCTURE) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10"
        >

          {/* DESKTOP GRID */}
          <div className="hidden sm:grid grid-cols-2 gap-4 max-w-2xl">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-4 rounded-xl text-white hover:scale-[1.02] transition"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>

                  <p className="text-sm font-medium">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* 🔥 MOBILE SLIDER */}
          <div className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide">

            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="min-w-[85%] snap-start flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-4 rounded-xl text-white"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>

                  <p className="text-sm font-medium">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>
        </motion.div>
      </div>
    </section>
  );
}