"use client";

import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <div className="px-2">
    <section
      id="contact"
      className="bg-gradient-to-t from-[#2E2D2D] to-[#000000] border-2 border-green-500 rounded-3xl md:rounded-4xl mt-2 mb-2 text-gray-300 px-6 sm:px-8 md:px-16 py-16 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold text-[#00ff88]">
            Contact Me
          </h2>
          <p className="mt-2 text-gray-400">
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md border border-green-700 bg-black/40 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-green-700 bg-black/40 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Phone Number */}
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full rounded-md border border-green-700 bg-black/40 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Service of Interest */}
          <select
            className="w-full rounded-md border border-green-700 bg-black/40 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            defaultValue=""
          >
            <option value="" disabled>
              Service Of Interest
            </option>
            <option value="web" className="bg-green-900">Web Development</option>
            <option value="design" className="bg-green-900">UI/UX Design</option>
            <option value="branding" className="bg-green-900">Branding</option>
            <option value="consulting" className="bg-green-900">Consulting</option>
          </select>

          {/* Timeline */}
          <input
            type="text"
            placeholder="Timeline"
            className="w-full rounded-md border border-green-700 bg-black/40 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Project Details */}
          <textarea
            placeholder="Project Details..."
            className="w-full rounded-md border border-green-700 bg-black/40 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 h-28 md:col-span-2"
          />

          {/* Send Button */}
          <div className="md:col-span-2 flex justify-end">
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition-all"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </section>
    </div>
  );
}
