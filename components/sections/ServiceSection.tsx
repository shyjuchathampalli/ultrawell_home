"use client";

import Image from "next/image";
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
    image: "/service_1.jpg",
    title: "Personal Care Support",
    desc: "Assistance with daily activities while promoting dignity and autonomy.",
  },
  {
    icon: Pill,
    image: "/service_2.jpg",
    title: "Medication Management",
    desc: "Safe administration and monitoring of prescribed medication.",
  },
  {
    icon: Brain,
    image: "/service_3.jpg",
    title: "Emotional & Behavioural Support",
    desc: "Positive behaviour strategies and access to counselling support.",
  },
  {
    icon: Users,
    image: "/service_4.jpg",
    title: "Community Integration",
    desc: "Encouraging participation in local activities and social engagement.",
  },
  {
    icon: Home,
    image: "/service_5.jpg",
    title: "Skills Development",
    desc: "Support for cooking, budgeting, and independent living skills.",
  },
  {
    icon: Utensils,
    image: "/service_6.jpg",
    title: "Health & Nutrition Monitoring",
    desc: "Balanced meals, check-ins, and coordination with healthcare teams.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">

      {/* 🔥 BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_10%_20%,rgba(193,46,90,0.08),transparent_40%),
             radial-gradient(circle_at_90%_30%,rgba(255,165,0,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our Services
          </h2>
          <div className="mt-4 w-16 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full"></div>
          <p className="mt-6 text-gray-600">
            Tailored support designed to empower independence, wellbeing,
            and a meaningful everyday life.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border border-gray-200 overflow-hidden bg-white p-6 hover:shadow-xl transition-all duration-300"
              >

                {/* 🔥 BACKGROUND IMAGE (SUBTLE) */}
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 🔥 SOFT COLOR LAYER */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition" />

                {/* 🔥 TOP ACCENT */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-accent" />

                {/* CONTENT */}
                <div className="relative">

                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition">
                    <Icon className="text-primary" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-5">
                    <span className="text-sm font-medium text-primary group-hover:underline cursor-pointer">
                      Learn more →
                    </span>
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}