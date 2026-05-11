"use client";

import { motion } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  Smile,
} from "lucide-react";

const values = [
  {
    title: "Respect",
    desc: "We treat every resident as an individual.",
    icon: Users,
  },
  {
    title: "Dignity",
    desc: "We uphold personal rights and self-expression.",
    icon: Sparkles,
  },
  {
    title: "Safety",
    desc: "We provide structured, professional care in a homely setting.",
    icon: ShieldCheck,
  },
  {
    title: "Empowerment",
    desc: "We encourage self-confidence and participation.",
    icon: Heart,
  },
  {
    title: "Well-being",
    desc: "We promote holistic health — physical, mental, and emotional.",
    icon: Smile,
  },
];

export default function AboutFeatures() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-primary text-xl font-semibold uppercase tracking-[0.25em]">
            Our Values
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-4 leading-tight">
            The principles that shape
            <span className="text-primary"> every aspect of our care</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At UltraWell Home, our values guide how we support,
            protect, and empower every resident to live with
            confidence, dignity, and purpose.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {values.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="p-8 border border-gray-200 rounded-3xl hover:shadow-lg transition-all duration-300 bg-white"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-relaxed text-base">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}