"use client";

import { motion } from "framer-motion";

export default function AboutWhoWeAre() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Section Label */}
          <p className="text-primary font-semibold uppercase tracking-[0.25em]">
            Who We Are
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-5 leading-tight">
            Taking care of each person’s humanity
            <span className="text-primary"> in times of vulnerability</span>
          </h2>

          {/* Main Content */}
          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            UltraWell Home is a Croydon-based supported living provider
            dedicated to helping adults with learning disabilities,
            mental health challenges, and physical disabilities lead
            fulfilling, independent lives.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Our focus is on empowerment through compassion, ensuring that
            every resident feels safe, respected, and supported to reach
            their potential.
          </p>

          {/* Mission Section */}
          <div className="mt-14 border-t border-gray-200 pt-10">
            <p className="text-primary font-semibold uppercase mt-10 tracking-[0.25em]">
              Our Mission
            </p>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              To deliver personalised support that promotes independence,
              dignity, and wellbeing in every aspect of life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}