"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
} from "lucide-react";

import EnquireForm from "@/components/ui/forms/EnquireForm";
import ReferForm from "@/components/ui/forms/ReferForm";

export default function ContactPage() {
  const [tab, setTab] = useState<"enquire" | "refer">("enquire");

  return (
    <main className="bg-white">

      {/* 🔥 HERO */}
      <section className="px-6 lg:px-16 pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Get in Touch
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Whether you're exploring care options or making a referral,
          we’re here to guide you every step of the way.
        </p>
      </section>

      {/* 🔥 CONTACT + ADDRESS */}
      <section className="px-6 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* LEFT: ADDRESS CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          >

            {/* subtle gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

            <div className="relative">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 text-gray-700">

                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-gray-600">
                      UltraWell Home<br />
                      Croydon, London<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-600">
                      +44 7872 908711
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600">
                      admin@ultrawellhome.co.uk
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="text-primary" />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-sm text-gray-600">
                      Mon - Fri: 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT: FORM PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          >

            {/* 🔥 TAB HEADER */}
            <div className="flex">

              <button
                onClick={() => setTab("enquire")}
                className={`flex-1 py-4 font-medium transition ${
                  tab === "enquire"
                    ? "bg-gradient-to-r from-primary to-accent text-white"
                    : "bg-gray-50 text-gray-600"
                }`}
              >
                Enquire
              </button>

              <button
                onClick={() => setTab("refer")}
                className={`flex-1 py-4 font-medium transition ${
                  tab === "refer"
                    ? "bg-gradient-to-r from-primary to-accent text-white"
                    : "bg-gray-50 text-gray-600"
                }`}
              >
                Refer
              </button>
            </div>

            {/* 🔥 FORM BODY */}
            <div className="p-6">

              {tab === "enquire" && <EnquireForm />}
              {tab === "refer" && <ReferForm />}

            </div>

          </motion.div>

        </div>
      </section>

      {/* 🔥 OPTIONAL MAP (future ready) */}
      <section className="px-6 lg:px-16 pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border">

          <div className="h-[300px] flex items-center justify-center bg-gray-100 text-gray-500">
            Map integration (Google Maps / iframe)
          </div>

        </div>
      </section>

    </main>
  );
}