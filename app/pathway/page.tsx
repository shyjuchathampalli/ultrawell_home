"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  MessageCircleHeart,
  ClipboardList,
  FileCheck,
  Home,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const journeySteps = [
  {
    step: "01",
    title: "Initial Inquiry",
    icon: PhoneCall,
    desc: "We welcome Local Authorities, Social Workers, and families to reach out with referrals or initial questions. Our team provides vacancy details, guidance, and specialized support information.",
    action: "Contact us via email or our online enquiry form.",
  },
  {
    step: "02",
    title: "Getting to Know You",
    icon: MessageCircleHeart,
    desc: "We arrange a thoughtful conversation to understand the individual’s history, goals, personality, and specific care needs to ensure the right environment and support fit.",
    action: "A compassionate consultation focused on understanding aspirations.",
  },
  {
    step: "03",
    title: "Holistic Assessment",
    icon: ClipboardList,
    desc: "Our Registered Manager conducts a full in-person assessment to understand communication style, personality, daily routines, and safety requirements.",
    action: "Comprehensive, person-centered assessment beyond paperwork.",
  },
  {
    step: "04",
    title: "Bespoke Support Proposal",
    icon: FileCheck,
    desc: "We develop a tailored support package including care hours, environmental adaptations, and a clear funding proposal for local authority approval.",
    action: "Customized support planning for long-term success.",
  },
  {
    step: "05",
    title: "A Warm Welcome & Transition",
    icon: Home,
    desc: "We support a phased transition, helping individuals meet housemates and staff gradually so they feel safe, welcomed, and at home from day one.",
    action: "A supported move-in journey built around comfort and trust.",
  },
];

export default function JourneyPage() {
  return (
    <main className="bg-white">

      <section className="relative px-6 lg:px-16 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 via-white to-accent/10" />

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900">
            Your Journey to UltraWell
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Every transition is unique. We’ve designed a clear five-step journey
            to ensure every resident feels welcomed, safe, and truly at home
            from the very beginning.
          </p>
        </div>
      </section>

    <section className="px-6 lg:px-16 py-24">
    <div className="max-w-6xl mx-auto relative">

        {/* CENTER VERTICAL CONNECTOR LINE */}
        <div className="absolute left-8 md:left-[52px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/20 via-primary/40 to-accent/30 rounded-full" />

        <div className="space-y-16">
        {journeySteps.map((item, i) => {
            const Icon = item.icon;

            return (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="relative grid lg:grid-cols-[120px_1fr] gap-8 items-start"
            >

                {/* STEP INDICATOR */}
                <div className="relative flex justify-center">

                {/* PERFECT CIRCLE */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center text-xl font-semibold shadow-lg border-4 border-white mt-4">
                    {item.step}
                </div>

                </div>

                {/* CARD */}
                <div className="group rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition overflow-hidden">

                {/* HEADER */}
                <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-primary/5 to-accent/5">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                        <Icon className="text-primary" size={24} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                        {item.title}
                        </h2>

                        <p className="text-primary font-medium mt-1">
                        Step {item.step}
                        </p>
                    </div>

                    </div>
                </div>

                {/* BODY */}
                <div className="p-8">
                    <p className="text-gray-600 leading-relaxed text-lg">
                    {item.desc}
                    </p>

                    <div className="mt-6 flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <CheckCircle2
                        className="text-primary mt-0.5 shrink-0"
                        size={20}
                    />

                    <p className="text-sm font-medium text-gray-700">
                        {item.action}
                    </p>
                    </div>
                </div>

                </div>

            </motion.div>
            );
        })}
        </div>

    </div>
    </section>

      {/* 🔥 CTA */}
      <section className="px-6 lg:px-16 pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-primary to-accent text-white text-center p-12 shadow-xl">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Start the journey with confidence
          </h2>

          <p className="mt-4 text-white/90 max-w-3xl mx-auto text-lg">
            Whether you’re exploring care options, making a referral, or seeking
            guidance, our team is here to support every step with clarity,
            compassion, and expertise.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-medium hover:opacity-90 transition"
          >
            Begin Your Journey <ArrowRight size={18} />
          </a>

        </div>
      </section>

    </main>
  );
}