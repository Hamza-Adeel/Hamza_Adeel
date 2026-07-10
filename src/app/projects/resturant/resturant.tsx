"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import Project from "../../../../public/assets/Resturant.png";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function Resturant() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-10 max-w-7xl mx-auto">

      {/* LEFT SIDE (Main Content) */}
      <div className="lg:w-2/3 space-y-6 mt-14">

        {/* Overview */}
        <ScrollReveal direction="left" delay={0.1}>
          <div className="bg-[#0B0B0B] border border-green-500 rounded-3xl p-8 text-gray-300">
            <h1 className="text-3xl font-semibold mb-4 text-green-400">
              Project Overview
            </h1>
            <p className="leading-relaxed text-gray-400">
              Foodtuck is a modern, premium restaurant landing page designed to offer an immersive, visual dining preview. The site features interactive menus, chef highlights, and reservation calls-to-action. Built with speed and responsiveness at its core, the UI delivers elegant transitions and optimized asset delivery for a flawless user experience across all devices.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4 text-green-400">
              Technology Used
            </h2>
            <p className="leading-relaxed text-gray-400">
              Next.js, React 19, Tailwind CSS v4, TypeScript, Lucide Icons, and React Icons.
            </p>

            <div className="flex gap-4 mt-6 flex-wrap">
              <Link
                href="https://github.com/Hamza-Adeel/GIAIC_hackathon"
                target="_blank"
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold hover:scale-105 transition"
                >
                  <FaGithub className="mr-2" />
                  View Source Code
                </Button>
              </Link>

              <Link
                href="https://giaic-hackathon-three.vercel.app/"
                target="_blank"
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold hover:scale-105 transition"
                >
                  <MdOpenInNew className="mr-2" />
                  View Project
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Gallery */}
        <ScrollReveal direction="left" delay={0.2}>
          <div className="bg-[#0B0B0B] border border-green-500 rounded-3xl p-8">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">
              Project Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="overflow-hidden rounded-xl border border-green-500/30">
                  <Image
                    src={Project}
                    alt="Project Screenshot"
                    className="hover:scale-105 transition duration-500 w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* RIGHT SIDE (Details Card) */}
      <div className="lg:w-1/3">
        <ScrollReveal direction="right" delay={0.3} className="sticky top-24 mt-14 lg:mt-14">
          <div className="bg-[#0B0B0B] border border-green-500 rounded-3xl p-8 text-gray-300">

            <h2 className="text-2xl font-bold mb-6 text-green-400">
              Project Details
            </h2>

            <div className="space-y-4 text-gray-400">
              <div>
                <p className="font-semibold text-white">Client</p>
                <p>GIAIC Hackathon</p>
              </div>

              <div>
                <p className="font-semibold text-white">Timeline</p>
                <p>7 Days</p>
              </div>

              <div>
                <p className="font-semibold text-white">Role</p>
                <p>Web Developer & UI Designer</p>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>

    </div>
  );
}
