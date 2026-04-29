"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ClipboardCheck,
  Home,
  ArrowRight,
  Users,
  ShieldCheck,
  Building2,
} from "lucide-react";

import ReferForm from "@/components/ui/forms/ReferForm";

const referralSteps = [
  {
    icon: FileText,
    title: "Complete our referral form",
    desc: "Provide key resident and referrer details so our team can begin the review process.",
  },
  {
    icon: ClipboardCheck,
    title: "Initial needs assessment",
    desc: "Our care coordination team evaluates care requirements, suitability, and support priorities.",
  },
  {
    icon: Home,
    title: "Transition & move-in planning",
    desc: "We coordinate onboarding, support plans, and a smooth transition into care.",
  },
];

export default function ReferralsPage() {
  return (
    <main className="bg-white">

      {/* 🔥 HERO */}
      <section className="px-6 lg:px-16 pt-20 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Referrals to UltraWell Home
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We welcome referrals from Local Authorities, NHS professionals,
            family members, and advocates seeking compassionate, structured,
            and person-centered care solutions.
          </p>
        </div>
      </section>

      {/* 🔥 WHO CAN REFER */}
      <section className="relative px-6 lg:px-16 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-accent/10" />

        <div className="relative max-w-6xl mx-auto">
            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 lg:p-10">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0">
                <Users className="text-primary" size={28} />
                </div>

                <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    Who Can Refer?
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                    Supporting referrals from trusted professional and personal care networks.
                </p>
                </div>
            </div>

            {/* CLEAN CARD GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                {
                    title: "Local Authorities",
                    icon: Building2,
                },
                {
                    title: "NHS Professionals",
                    icon: ShieldCheck,
                },
                {
                    title: "Family Members",
                    icon: Users,
                },
                {
                    title: "Advocates",
                    icon: FileText,
                },
                ].map((item, i) => {
                const Icon = item.icon;

                return (
                    <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md transition"
                    >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="text-primary" size={18} />
                    </div>

                    <span className="font-medium text-gray-700 text-sm">
                        {item.title}
                    </span>
                    </div>
                );
                })}
            </div>

            </div>
        </div>
        </section>

      {/* 🔥 HOW IT WORKS */}
      <section className="px-6 lg:px-16 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              How It Works
            </h2>
            <p className="mt-4 text-gray-600">
              Our referral process is designed to be clear, supportive,
              and responsive from submission to placement.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {referralSteps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={24} />
                  </div>

                  <div className="text-sm font-semibold text-primary mb-2">
                    Step {i + 1}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 🔥 REFERRAL FORM + GUIDELINES */}
      <section className="px-6 lg:px-16 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* LEFT: GUIDELINES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8"
          >
            <h2 className="text-3xl font-semibold text-gray-900">
              Referral Guidelines
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Please complete the referral form with accurate and relevant
              details to help us assess care suitability quickly and effectively.
            </p>

            <div className="mt-8 space-y-5">

              {[
                "Referrer Name & Organisation",
                "Contact Details",
                "Resident’s Name & Age",
                "Primary Needs & Background",
                "Current Care Status",
                "Upload Supporting Documents (optional)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-primary" size={18} />
                  </div>

                  <p className="text-gray-700">{item}</p>
                </div>
              ))}

            </div>

            <div className="mt-10 p-5 rounded-2xl bg-primary/10 text-primary font-medium">
              <p className="font-medium">
                Once received, our care coordination team will contact you
                within 2–3 working days.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: REFER FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden py-10"
          >

            {/* HEADER */}
            <div className="text-white px-8 py-8 pt-4 md:px-10 md:py-16">
                <h2 className="text-3xl font-semibold text-gray-900">
              Submit Referral
            </h2>
            </div>

            {/* FORM */}
            <div className="p-8">
              <ReferForm />
            </div>

          </motion.div>

        </div>
      </section>

    </main>
  );
}