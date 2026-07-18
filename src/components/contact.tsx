"use client";

import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function ContactForm() {
  return (
    <div className="px-2">
      <section
        id="contact"
        className="bg-gradient-to-t from-[#2E2D2D] to-[#000000] border-2 border-green-500 rounded-3xl md:rounded-4xl mt-2 mb-2 text-gray-300 px-6 sm:px-8 md:px-16 py-16 scroll-mt-32"
      >
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <ScrollReveal direction="down" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold text-[#00ff88]">
                Contact Me
              </h2>
              <p className="mt-2 text-gray-400">
                Cultivating Connections: Reach Out And Connect With Me
              </p>
            </ScrollReveal>
          </div>

          {/* Contact Layout */}
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <ScrollReveal direction="left" delay={0.2} className="w-full md:w-[45%]">
              <div className="rounded-2xl border border-green-500/20 bg-black/35 p-6 sm:p-8 shadow-[0_0_20px_rgba(0,255,136,0.08)]">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-[#00ff88]">Get in touch</h3>
                  <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-green-400">
                    Available
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  I&apos;m available for freelance projects, collaborations, and full-time opportunities.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-green-500/15 bg-[#0B0B0B] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Name</p>
                    <p className="mt-1 text-base font-medium text-white">Hamza Adeel</p>
                  </div>

                  <div className="rounded-xl border border-green-500/15 bg-[#0B0B0B] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Email</p>
                    <p className="mt-1 text-base font-medium text-white">hamzaadeel0025@gmail.com</p>
                  </div>

                  <div className="rounded-xl border border-green-500/15 bg-[#0B0B0B] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Phone</p>
                    <p className="mt-1 text-base font-medium text-white">+92 324 1272531</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="hidden md:block h-auto w-px self-stretch bg-gradient-to-b from-transparent via-green-500/40 to-transparent" />

            <ScrollReveal direction="right" delay={0.25} className="w-full md:w-[55%]">
              <form className="space-y-4 rounded-2xl border border-green-500/20 bg-black/35 p-6 sm:p-8 shadow-[0_0_20px_rgba(0,255,136,0.08)]" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md border border-green-700 bg-black/40 px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border border-green-700 bg-black/40 px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-500"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full rounded-md border border-green-700 bg-black/40 px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-500"
                />

                <select
                  className="w-full rounded-md border border-green-700 bg-black/40 px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-500 bg-black">
                    Service Of Interest
                  </option>
                  <option value="web" className="bg-green-900 text-white">Web Development</option>
                  <option value="design" className="bg-green-900 text-white">UI/UX Design</option>
                  <option value="branding" className="bg-green-900 text-white">Branding</option>
                  <option value="consulting" className="bg-green-900 text-white">Consulting</option>
                </select>

                <input
                  type="text"
                  placeholder="Timeline"
                  className="w-full rounded-md border border-green-700 bg-black/40 px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-500"
                />

                <textarea
                  placeholder="Project Details..."
                  className="w-full rounded-md border border-green-700 bg-black/40 px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-500 h-28"
                />

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-green-500/30 hover:scale-102"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
