"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSplitSection() {
  return (
    <section className="w-full relative overflow-hidden">

      {/* 🔥 MAIN BACKGROUND (CRIMSON GRADIENT) */}
      <div className="absolute inset-0 
        bg-gradient-to-br 
        from-[#c12e5a] 
        via-[#a3264c] 
        to-[#7e1d3a]">
      </div>

      {/* 🔥 GOLDEN ACCENT GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] 
        bg-[#f59e0b]/20 blur-3xl rounded-full">
      </div>

      {/* 🔥 SOFT LIGHT OVERLAY FOR DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_40%)]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 relative">

        {/* LEFT CONTENT */}
        <div className="px-6 lg:px-16 py-20 flex items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl text-white"
          >

            {/* LABEL */}
            <p className="text-sm font-semibold text-white/80 uppercase tracking-wide">
              All About Us
            </p>

            {/* TITLE */}
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              What Sets Us Apart
            </h2>

            {/* DIVIDER */}
            <div className="mt-4 w-12 h-[3px] bg-accent rounded-full"></div>

            {/* TEXT */}
            <p className="mt-8 text-white/90 leading-relaxed text-base md:text-lg">
              We believe every individual deserves the opportunity to live
              independently within a safe and nurturing environment.
            </p>

            <p className="mt-6 text-white/80 leading-relaxed">
              UltraWell Home combines professional care with a warm,
              family-like atmosphere to help residents build confidence
              and life skills.
            </p>

            {/* CTA (GLASS STYLE) */}
            <button className="mt-8 px-6 py-3 rounded-xl 
              border border-white/30 
              bg-white/10 backdrop-blur-md 
              text-white font-medium 
              hover:bg-white hover:text-primary transition">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[400px] lg:h-auto">

          <Image
            src="/our-approach.jpg"
            alt="Our Approach"
            fill
            className="object-cover"
          />

          {/* 🔥 BRAND OVERLAY (KEY FIX) */}
          <div className="absolute inset-0 
            bg-gradient-to-l 
            from-[#c12e5a]/40 
            via-[#c12e5a]/20 
            to-transparent">
          </div>

        </div>

      </div>
    </section>
  );
}