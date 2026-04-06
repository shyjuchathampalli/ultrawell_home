"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Brain,
  Home,
} from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    title: "Personalised Care",
    desc: "Compassion-led support tailored to each individual's journey.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    desc: "Structured, secure spaces that promote dignity and confidence.",
  },
  {
    icon: Brain,
    title: "Holistic Support",
    desc: "Addressing mental, physical, and emotional wellbeing together.",
  },
  {
    icon: Home,
    title: "Independent Living",
    desc: "Helping residents build skills for a meaningful future.",
  },
];

export default function CareOverviewSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">

      {/* 🔥 RIGHT SIDE GRADIENT GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 via-accent/10 to-transparent blur-3xl opacity-60"></div>

      {/* 🔥 SUBTLE DOT PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:40px_40px]"></div>

      {/* 🔥 OPTIONAL SOFT SHAPE (RIGHT SIDE) */}
      <div className="hidden lg:block absolute right-[-120px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          {/* SUBTITLE */}
          <p className="text-lg text-accent font-semibold">
            Safe, Supported Living Where Every Resident Thrives
          </p>

          {/* DIVIDER */}
          <div className="mt-4 w-16 h-[3px] bg-primary rounded-full"></div>

          {/* TEXT */}
          <p className="mt-8 text-gray-600 leading-relaxed">
            At UltraWell Home, we support adults with learning disabilities,
            mental health needs, and physical disabilities to move forward
            with confidence.
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Through compassionate care, we build independence and wellbeing,
            delivering real outcomes for a safe and purposeful future.
          </p>
        </motion.div>

        {/* FEATURE GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >

                {/* TOP ACCENT BAR */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-accent"></div>

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition">
                  <Icon className="text-primary" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* HOVER BORDER */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition pointer-events-none"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}