import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import Project from "../../../../public/assets/Resturant.png";

export default function Resturant() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-10">

      {/* LEFT SIDE (Main Content) */}
      <div className="lg:w-2/3 space-y-6 mt-14">

        {/* Overview */}
        <div className="bg-[#0B0B0B] border border-green-500 rounded-3xl p-8 text-gray-300">
          <h1 className="text-3xl font-semibold mb-4 text-green-400">
            Project Overview
          </h1>
          <p className="leading-relaxed text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Hic voluptate molestiae tenetur possimus cum.
          </p>

          <h1 className="text-3xl font-semibold mt-8 mb-4 text-green-400">
            Technology Used
          </h1>
          <p className="leading-relaxed text-gray-400">
            Next.js, Tailwind CSS, TypeScript, React, etc.
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
              href="https://your-live-link.com"
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

        {/* Gallery */}
        <div className="bg-[#0B0B0B] border border-green-500 rounded-3xl p-8">
          <h1 className="text-3xl font-semibold mb-6 text-green-400">
            Project Gallery
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Image
                key={item}
                src={Project}
                alt="Project Screenshot"
                className="rounded-xl border border-green-500/30 hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

      </div>

      {/* RIGHT SIDE (Details Card) */}
      <div className="lg:w-1/3">
        <div className="bg-[#0B0B0B] border border-green-500 rounded-3xl p-8 text-gray-300 sticky top-24">

          <h1 className="text-2xl font-bold mb-6 text-green-400">
            Project Details
          </h1>

          <div className="space-y-4 text-gray-400">
            <div>
              <p className="font-semibold text-white">Client</p>
              <p>Hackathon</p>
            </div>

            <div>
              <p className="font-semibold text-white">Timeline</p>
              <p>7 Days</p>
            </div>

            <div>
              <p className="font-semibold text-white">Role</p>
              <p>Web Developer</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
