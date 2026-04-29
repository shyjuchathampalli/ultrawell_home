"use client";

import { motion } from "framer-motion";
import {
  Target,
  GraduationCap,
  Cpu,
  Globe2,
} from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "A Strength Based Approach",
    text: "We align with Croydon Council’s Adults Living Independently Strategy. We focus on what residents want to achieve — from using the tram independently to managing personal budgets. We coach, not just care.",
  },
  {
    icon: GraduationCap,
    title: "Specialised for Transitions",
    text: "Our 18–25 launchpad programme supports young adults moving from children’s services into independence — building vocational and social skills with the right safety net.",
  },
  {
    icon: Cpu,
    title: "Technology Enabled Support",
    text: "Using digital care platforms and assistive technology, we provide real-time insights to families and professionals — ensuring safety without compromising dignity.",
  },
  {
    icon: Globe2,
    title: "Culturally Competent",
    text: "We reflect Croydon’s diverse community by respecting cultural backgrounds and building a team that truly understands the people we support.",
  },
];

export default function DifferentiatorsSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0f172a]">
            What Sets Us Apart
          </h2>

          <div className="mt-3 w-12 h-[3px] bg-accent rounded-full"></div>

          <p className="mt-6 text-[#475569] leading-relaxed">
            We believe every individual deserves the opportunity to live independently within a safe and nurturing environment.
          </p>

          <p className="mt-4 text-[#475569] leading-relaxed">
            UltraWell Home combines professional care with a warm, family-like atmosphere to help residents build confidence and life skills.
          </p>
        </motion.div>

        {/* SECONDARY HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-[#f59e0b]">
            Local Care, Global Ambition
          </h3>
        </motion.div>

        {/* GRID */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {differentiators.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="
                  bg-white 
                  border border-[#e2e8f0]
                  rounded-2xl 
                  p-6 
                  hover:shadow-lg transition
                "
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10">
                  <Icon size={20} className="text-primary" />
                </div>

                {/* TITLE */}
                <h4 className="mt-4 font-semibold text-[#0f172a]">
                  {item.title}
                </h4>

                {/* TEXT */}
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}