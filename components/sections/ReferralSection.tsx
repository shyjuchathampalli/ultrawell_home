"use client";

import { motion } from "framer-motion";
import { usePanel } from "@/context/PanelContext";

const steps = [
  {
    number: "01",
    title: "Submit a Referral Form",
  },
  {
    number: "02",
    title: "We Assess Individual Needs",
  },
  {
    number: "03",
    title: "Move-In & Care Plan Activation",
  },
];

export default function ReferralSection() {
  const { setPanel } = usePanel();

  return (
    <section className="w-full bg-white py-20">

      <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0f172a]">
            Start Your Referral
          </h2>

          <div className="mt-3 w-12 h-[3px] bg-accent rounded-full mx-auto"></div>

          <p className="mt-6 text-[#475569]">
            Start your referral in three simple steps
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="
                bg-[#FAFAFA] 
                border border-[#e2e8f0]
                rounded-2xl 
                p-6 
                text-center
                hover:shadow-md transition
              "
            >
              {/* STEP NUMBER */}
              <div className="text-primary text-sm font-semibold tracking-wider">
                {step.number}
              </div>

              {/* TITLE */}
              <h3 className="mt-3 font-medium text-[#0f172a]">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => setPanel("refer")}
            className="
              bg-primary text-white 
              px-8 py-3 
              rounded-full 
              text-sm md:text-base font-medium
              shadow-md hover:opacity-90 transition
            "
          >
            Start Referral
          </button>
        </motion.div>

      </div>
    </section>
  );
}