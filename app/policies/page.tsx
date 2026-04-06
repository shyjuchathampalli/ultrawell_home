"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Scale,
  AlertCircle,
  Download,
  CheckCircle2,
} from "lucide-react";

const policies = [
  {
    title: "Safeguarding Policy",
    icon: ShieldCheck,
  },
  {
    title: "Data Protection & GDPR",
    icon: FileText,
  },
  {
    title: "Equality & Diversity Policy",
    icon: Scale,
  },
  {
    title: "Complaints Procedure",
    icon: AlertCircle,
  },
];

export default function PoliciesPage() {
  return (
    <main className="bg-white">

      {/* 🔥 HERO */}
      <section className="px-6 lg:px-16 pt-20 pb-12">
        <div className="max-w-5xl">

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Policies & Compliance
          </h1>

          <div className="mt-4 w-16 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl">
            UltraWell Home is committed to delivering safe, transparent,
            and accountable care. Our policies reflect our compliance
            with CQC standards and UK legislation.
          </p>
        </div>
      </section>

      {/* 🔥 POLICIES LIST */}
      <section className="px-6 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-xl font-semibold text-gray-900 mb-8">
            Downloads
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">

            {policies.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-xl transition overflow-hidden"
                >

                  {/* subtle hover gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-primary/5 to-accent/5" />

                  <div className="relative flex items-center justify-between">

                    {/* LEFT */}
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary/10">
                        <Icon size={20} className="text-primary" />
                      </div>

                      <span className="font-medium text-gray-900">
                        {item.title}
                      </span>
                    </div>

                    {/* DOWNLOAD */}
                    <button className="flex items-center gap-2 text-sm text-primary font-medium hover:underline">
                      Download <Download size={16} />
                    </button>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* 🔥 COMPLIANCE BLOCK */}
      <section className="px-6 lg:px-16 py-16">
        <div className="max-w-5xl mx-auto">

          <div className="rounded-3xl border border-gray-200 p-8 bg-gradient-to-br from-primary/5 to-accent/5">

            <div className="flex items-start gap-4">

              <CheckCircle2 className="text-primary mt-1" />

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  CQC Registration Status
                </h3>

                <p className="mt-2 text-gray-600 leading-relaxed">
                  In Progress — UltraWell Clinic Ltd trading as UltraWell Home.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}