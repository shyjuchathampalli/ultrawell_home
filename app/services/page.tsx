"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Pill,
  Brain,
  Users,
  Home,
  Utensils,
} from "lucide-react";
import FAQSection from "@/components/ui/FAQSection";
import { faqTabs } from "@/lib/faqData";

const services = [
  {
    icon: HeartPulse,
    title: "Personal Care Support",
    desc: "Assistance with daily activities while promoting dignity and autonomy.",
    detail:
      "Our team provides respectful, person-centred assistance with daily routines such as personal hygiene, mobility, and self-care. We focus on empowering residents to maintain independence while ensuring comfort, dignity, and confidence in everyday life.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    desc: "Safe administration and monitoring of prescribed medication.",
    detail:
      "We ensure accurate medication administration with professional oversight, reducing risks and promoting wellbeing. Our staff work closely with healthcare professionals to monitor effects, maintain compliance, and support long-term health outcomes.",
  },
  {
    icon: Brain,
    title: "Emotional & Behavioural Support",
    desc: "Positive behaviour strategies, counselling access, and daily emotional care.",
    detail:
      "We provide structured emotional support tailored to individual needs, including behaviour management strategies and access to counselling. Our goal is to create a stable, supportive environment where residents feel understood and emotionally secure.",
  },
  {
    icon: Users,
    title: "Community Integration",
    desc: "Encouraging participation in local activities, education, and volunteering.",
    detail:
      "We actively encourage residents to engage with their community through social activities, education, and volunteering. This builds confidence, social skills, and a strong sense of belonging beyond their home environment.",
  },
  {
    icon: Home,
    title: "Skills Development",
    desc: "Support for cooking, budgeting, and household management.",
    detail:
      "We help residents develop essential life skills such as cooking, budgeting, and managing their home. These practical abilities empower individuals to live more independently and confidently in the long term.",
  },
  {
    icon: Utensils,
    title: "Health & Nutrition Monitoring",
    desc: "Regular check-ins, balanced meals, and liaison with healthcare professionals.",
    detail:
      "Our approach includes regular health monitoring, nutritious meal planning, and coordination with healthcare providers. We ensure residents maintain a healthy lifestyle while receiving the care they need.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* 🔥 HERO SECTION */}
      <section className="relative py-24 px-6 lg:px-16 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5"></div>

        <div className="relative max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Our Services
          </h1>

          <div className="mt-6 w-20 h-[3px] mx-auto bg-gradient-to-r from-primary to-accent rounded-full"></div>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Tailored support designed to empower independence, wellbeing,
            and a meaningful everyday life for every resident.
          </p>
        </div>
      </section>

      {/* 🔥 SERVICES GRID */}
      <section className="px-6 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >

                {/* BACKGROUND GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/5 to-accent/5"></div>

                {/* TOP STRIP */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-accent"></div>

                {/* ICON */}
                <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-5">
                  <Icon className="text-primary" />
                </div>

                {/* TITLE */}
                <h3 className="relative text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* SHORT DESC */}
                <p className="relative mt-2 text-sm text-gray-600">
                  {item.desc}
                </p>

                {/* DETAIL */}
                <p className="relative mt-4 text-sm text-gray-600 leading-relaxed">
                  {item.detail}
                </p>

              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 🔥 CTA STRIP */}
      <section className="px-6 lg:px-16 pb-24">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-primary to-accent rounded-3xl p-10 text-white text-center shadow-xl">

          <h3 className="text-2xl font-semibold">
            Need help choosing the right support?
          </h3>

          <p className="mt-3 text-white/90">
            Our team is here to guide you every step of the way.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-primary px-6 py-3 rounded-xl font-medium hover:opacity-90">
              Enquire Now
            </button>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-primary transition">
              Make a Referral
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">

      <div className="w-full mx-auto">

          <FAQSection tabs={faqTabs} />

      </div>

      </section>

    </main>
  );
}