"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Project from "../../public/assets/project.png";
import Resturant from "../../public/assets/Resturant.png";
import Link from "next/link";

const filters = ["All", "UI UX", "Website Design", "App Design", "Graphic Design"];

export default function Projects() {
  const [active, setActive] = useState("All");

  return (
    <section id="projects" className="py- scroll-mt-24 px-2">
      <div className="bg-gradient-to-b from-[#000000] to-[#2E2D2D] border-2 border-green-500 rounded-3xl md:rounded-4xl text-gray-300 py-16 px-6 sm:px-8 md:px-12 shadow-lg mt-2">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00ff88]">
            My Projects
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
            felis ligula aliquam venenatis nisi ante.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={active === filter ? "orange" : "outline"}
              className={`${
                active === filter
                  ? "bg-[#00ff88] text-black hover:bg-[#00cc6a]"
                  : "border-[#00ff88] hover:text-white text-green-700 hover:bg-[#00ff88]/9"
              }`}
              onClick={() => setActive(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Project 1 */}
          {(active === "All" || active === "UI UX") && (
            <div className="space-y-3">
              <div className="relative group rounded-xl overflow-hidden border border-[#00ff88]/30 hover:shadow-[0_0_25px_rgba(0,255,136,0.35)] transition duration-300">

                <Image
                  src={Resturant}
                  alt="AirCalling Landing Page Design"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">

                  <Link
                    href="/projects/resturant"
                    className="px-4 py-2 bg-[#00ff88] text-black font-medium rounded-lg hover:bg-[#00cc6a] transition"
                  >
                    Project Details
                  </Link>

                  <Link
                    href="https://giaic-hackathon-three.vercel.app/"
                    target="_blank"
                    className="px-4 py-2 border border-[#00ff88] text-[#00ff88] rounded-lg hover:bg-[#00ff88] hover:text-black transition"
                  >
                    Live Preview
                  </Link>

                </div>
              </div>

              <p className="text-sm text-[#00ff88] font-medium">UI UX</p>
              <h3 className="font-semibold">AirCalling Landing Page Design</h3>
            </div>
          )}

          {/* Project 2 */}
          {(active === "All" || active === "Website Design") && (
            <div className="space-y-3">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_18px_rgba(0,255,136,0.18)] transition">
                <Image
                  src={Project}
                  alt="Portfolio Website Design"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-[#00ff88] font-medium">Website Design</p>
              <h3 className="font-semibold">Portfolio Website Design</h3>
            </div>
          )}

          {/* Project 3 */}
          {(active === "All" || active === "App Design") && (
            <div className="space-y-3">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_18px_rgba(0,255,136,0.18)] transition">
                <Image
                  src={Project}
                  alt="Mobile App Dashboard"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-[#00ff88] font-medium">App Design</p>
              <h3 className="font-semibold">Mobile App Dashboard</h3>
            </div>
          )}

          {/* Project 4 */}
          {(active === "All" || active === "Graphic Design") && (
            <div className="space-y-3">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_18px_rgba(0,255,136,0.18)] transition">
                <Image
                  src={Project}
                  alt="Branding & Illustration"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-[#00ff88] font-medium">Graphic Design</p>
              <h3 className="font-semibold">Branding & Illustration</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
