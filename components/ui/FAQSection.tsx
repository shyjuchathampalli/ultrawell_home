"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQTab = {
  label: string;
  data: FAQItem[];
};

export default function FAQSection({ tabs }: { tabs: FAQTab[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-20 bg-[#f5f0d6]">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Frequently asked questions
          </h2>

        </div>

        {/* TABS */}
        <div className="flex gap-8 mt-10 border-b">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => {
                setActiveTab(i);
                setOpenIndex(null);
              }}
              className={`pb-3 text-sm font-medium transition relative ${
                activeTab === i
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              {tab.label}

              {/* ACTIVE UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-[1px] h-[2px] bg-primary transition-all ${
                  activeTab === i ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* FAQ LIST */}
        <div className="mt-10 space-y-4">

          {tabs[activeTab].data.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="border border-gray-300 bg-white"
              >

                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : i)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}