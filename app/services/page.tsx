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


const services = [
  {
    icon: HeartPulse,
    title: "Personal Care Support",
    desc: "Assistance with daily activities while promoting dignity and autonomy.",
    detail:
      "Dignity is at the heart of what we do. We provide discreet assistance with morning and evening routines, hygiene, and dressing, ensuring you feel confident and ready for the day.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    desc: "Safe administration and monitoring of prescribed medication.",
    detail:
      "Peace of mind for you and your loved ones. Our trained staff ensure prescriptions are ordered, stored safely, and taken on time, with rigorous record-keeping to track your health.",
  },
  {
    icon: Brain,
    title: "Emotional & Behavioural Support",
    desc: "Positive behaviour strategies, counselling access, and daily emotional care",
    detail:
      "We provide a safe space to talk and grow. Using positive reinforcement and personalized coping strategies, we help navigate life’s ups and downs while connecting you to specialist counseling when needed.",
  },
  {
    icon: Users,
    title: "Community Integration",
    desc: "Encouraging participation in local activities, education, and volunteering.",
    detail:
      "Your neighborhood is your home. We support you in finding local clubs, attending college courses, or volunteering for causes you care about, helping you build a strong social network.",
  },
  {
    icon: Home,
    title: "Skills Development",
    desc: "Support for cooking, budgeting, and household management.",
    detail:
      "Building the tools for independence. From mastering a new recipe to managing a weekly budget, we work alongside you to sharpen the practical skills needed for modern living.",
  },
  {
    icon: Utensils,
    title: "Health & Nutrition Monitoring",
    desc: "Regular check-ins, balanced meals, and liaison with healthcare professionals.",
    detail:
      "A healthy body supports a happy mind. We help with meal planning, grocery shopping for fresh ingredients, and coordinating appointments with your GP or dentist.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* 🔥 HERO SECTION */}
      <section className="relative py-24 px-6 lg:px-16 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 via-white to-accent/5"></div>

        <div className="relative max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Our Services
          </h1>

          <div className="mt-6 w-20 h-[3px] mx-auto bg-gradient-to-r from-primary to-accent rounded-full"></div>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We provide a range of supported living services tailored to individual needs, enabling residents to live meaningful and independent lives.
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

                <button
                  disabled
                  className="
                    relative mt-6
                    inline-flex items-center gap-2
                    px-4 py-2
                    rounded-xl
                    border border-primary/30
                    text-primary
                    text-sm font-medium
                    opacity-70
                    cursor-not-allowed
                    whitespace-nowrap
                  "
                >
                  See More
                </button>

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

    </main>
  );
}