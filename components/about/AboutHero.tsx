"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT */}
      <div className="bg-gradient-to-r from-primary to-orange-400 text-white flex items-center justify-center px-6 py-20 relative overflow-hidden">

        {/* subtle wave */}
        <div className="absolute bottom-10 left-0 w-full h-20 bg-[url('/wave.svg')] opacity-30"></div>

        <h1 className="text-4xl md:text-5xl font-semibold" style={{ fontSize: "64px" }}>
          About us
        </h1>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative h-[300px] lg:h-[500px]">
        <Image
          src="/our-approach.jpg"
          alt="About"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}