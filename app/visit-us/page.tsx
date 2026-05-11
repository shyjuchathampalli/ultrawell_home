"use client";

import { motion } from "framer-motion";

export default function VisitUsPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative py-24 px-6 lg:px-16 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5"></div>

        <div className="relative max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Our Home
          </h1>

          <div className="mt-6 w-20 h-[3px] mx-auto bg-gradient-to-r from-primary to-accent rounded-full"></div>

        </div>
      </section>

      {/* PROPERTY OVERVIEW */}
      <section className="px-6 lg:px-16 pb-24">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >

            <p className="mt-6 text-gray-600 leading-relaxed">
              Nestled in a quiet residential area, UltraWell House offers a calm
              and inclusive living environment. Our home is thoughtfully
              designed to meet the needs of adults requiring supported living
              while maintaining privacy and comfort.
            </p>

            {/* KEY FEATURES */}
            <div className="mt-10">

              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                Key Features
              </h3>

              <ul className="space-y-4 text-gray-600">

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  4 spacious bedrooms with shared and ensuite options
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  Adapted facilities for physical accessibility
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  24/7 on-site support staff
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  Communal lounge, dining, and garden spaces
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  Nearby parks, transport links, and community centres
                </li>

              </ul>
            </div>

          </motion.div>

        </div>
      </section>

    </main>
  );
}