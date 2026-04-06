"use client";

import { HeartHandshake, Home, Sparkles } from "lucide-react";

export default function HighlightStrip() {
  return (
    <section className="w-full">

      <div className="grid grid-cols-1 md:grid-cols-3">

        {/* BLOCK 1 */}
        <div className="bg-primary/70 text-white p-10 flex items-center gap-6">
          
          <div className="w-14 h-14 flex items-center justify-center border-2 border-white/40 rounded-full">
            <HeartHandshake size={28} />
          </div>

          <h3 className="text-xl md:text-2xl font-semibold leading-snug">
            Safe, Supported <br /> Living
          </h3>
        </div>

        {/* BLOCK 2 */}
        <div className="bg-primary text-white p-10 flex items-center gap-6">
          
          <div className="w-14 h-14 flex items-center justify-center border-2 border-white/40 rounded-full">
            <Home size={28} />
          </div>

          <h3 className="text-xl md:text-2xl font-semibold leading-snug">
            Building Independence <br /> Every Day
          </h3>
        </div>

        {/* BLOCK 3 */}
        <div className="bg-gray-100 text-gray-900 p-10 flex items-center gap-6">
          
          <div className="w-14 h-14 flex items-center justify-center border-2 border-primary/40 rounded-full">
            <Sparkles size={28} className="text-primary" />
          </div>

          <h3 className="text-xl md:text-2xl font-semibold leading-snug">
            Person-Centred <br /> Care Approach
          </h3>
        </div>

      </div>
    </section>
  );
}