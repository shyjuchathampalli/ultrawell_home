"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Strength Based Approach",
    desc: "We focus on what residents want to achieve, empowering independence through guided support.",
  },
  {
    title: "Specialized for Transitions",
    desc: "Our 18–25 program helps young adults move confidently into independent life.",
  },
  {
    title: "Technology Enabled Support",
    desc: "Real-time care insights ensure safety while respecting dignity and privacy.",
  },
  {
    title: "Culturally Competent",
    desc: "We embrace diversity and reflect the Croydon community in our care approach.",
  },
];

export default function AboutFeatures() {
  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold text-gray-900 mb-12">
          Local Care, Global Ambition
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 border rounded-2xl hover:shadow-lg transition"
            >
              <CheckCircle className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}