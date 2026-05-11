"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Sparkles, ArrowRight } from "lucide-react";

const jobs = [
  {
    title: "Support Worker",
    type: "Full-Time / Part-Time / Casual",
    desc: "Deliver daily care and emotional support.",
  },
  {
    title: "Team Leader",
    type: "Full-Time",
    desc: "Supervise daily operations and staff development.",
  },
  {
    title: "Registered Manager",
    type: "Full-Time",
    desc: "Oversee care quality, compliance, and training.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white">

      {/* 🔥 HERO HEADER (MINIMAL) */}
      <section className="px-6 lg:px-16 pt-20 pb-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Careers at UltraWell
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Join a compassionate team making a difference every day. At UltraWell Home, our staff are the heart of our service.
          </p>
        </div>
      </section>

      {/* 🔥 WHY WORK WITH US (PRIMARY SECTION) */}
      <section className="relative px-6 lg:px-16 py-24 overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-accent/10" />
        <div className="absolute -top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Why Work With Us
            </h2>

            <div className="mt-4 w-16 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />

            <p className="mt-6 text-gray-600 leading-relaxed">
              At UltraWell Home, we believe that great care begins with
              empowered people. We invest in our team, support growth,
              and create an environment where your work truly matters.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-5">
            {[
              {
                icon: Users,
                text: "Structured training and development",
              },
              {
                icon: Sparkles,
                text: "Competitive pay and supportive environment",
              },
              {
                icon: Briefcase,
                text: "Opportunities for international candidates (subject to sponsorship)",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
                    <Icon size={18} className="text-primary" />
                  </div>

                  <p className="text-gray-600">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🔥 JOB OPENINGS (SECONDARY FOCUS) */}
      <section className="px-6 lg:px-16 py-24 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900">
              Current Opportunities
            </h2>
            <p className="mt-3 text-gray-600">
              Explore roles where you can grow, contribute, and make impact.
            </p>
          </div>

          <div className="grid gap-6">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-xl transition overflow-hidden"
              >

                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-primary/5 to-accent/5" />

                <div className="relative flex justify-between items-start gap-6">

                    {/* LEFT CONTENT */}
                    <div className="flex-1">

                      <h3 className="text-lg font-semibold text-gray-900">
                        {job.title}
                      </h3>

                      <p className="text-sm text-primary font-medium">
                        {job.type}
                      </p>

                      <p className="text-gray-600 text-sm mt-6 max-w-sm">
                        {job.desc}
                      </p>

                    </div>

                    {/* RIGHT BUTTON */}
                    <button
                      disabled
                      className="
                        shrink-0
                        inline-flex items-center gap-2
                        px-4 py-2
                        rounded-xl
                        border border-primary/30
                        text-primary
                        font-medium
                        text-sm
                        cursor-not-allowed
                        opacity-70
                        whitespace-nowrap
                      "
                    >
                      Apply <ArrowRight size={16} />
                    </button>

                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-24 bg-white">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

    {/* LEFT: GROW WITH US */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-3xl border border-gray-200 bg-gradient-to-br from-primary/5 to-accent/5 p-8 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative">
        <h2 className="text-3xl font-semibold text-gray-900">
          Grow With Us
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          A career in social care is a journey, and we are here to support
          you every step of the way. At UltraWell Home, we provide tailored
          development opportunities designed to help you excel, no matter
          your starting point.
        </p>

        <div className="mt-8 space-y-5">

          {[
            {
              icon: Sparkles,
              title: "Professional Training",
              desc: "Access accredited qualifications and bespoke programs via the industry-leading QCS platform.",
            },
            {
              icon: Briefcase,
              title: "Certified Growth",
              desc: "Complete your Care Certificate, Safeguarding, and First Aid through a modern, app-based learning portal.",
            },
            {
              icon: Users,
              title: "Ongoing Support",
              desc: "From induction to specialized certifications, we provide mentoring and tools to build a meaningful career.",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-100">
                  <Icon className="text-primary" size={18} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <button disabled className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition cursor-not-allowed">
          Apply Now <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>

    {/* RIGHT: VOLUNTEERING */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-gray-200 bg-gray-50 p-8 flex flex-col justify-between"
    >
      <div>
        <h2 className="text-3xl font-semibold text-gray-900">
          Community Volunteering
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Not ready for a full role? Join us as a volunteer to share your
          skills, gain experience, and make a meaningful difference in the
          lives of our residents.
        </p>

        <div className="mt-8 flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
            <Users className="text-primary" size={18} />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Make an Impact
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Build real-world care experience while supporting a compassionate community.
            </p>
          </div>
        </div>
      </div>

      <a
        href="/contact"
        className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-white transition"
      >
        Inquire About Volunteering <ArrowRight size={18} />
      </a>
    </motion.div>

  </div>
</section>

    </main>
  );
}