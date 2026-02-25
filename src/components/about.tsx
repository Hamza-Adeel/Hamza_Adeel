"use client";

import Profile from "../../public/assets/Profile.png";
import "react-circular-progressbar/dist/styles.css";
import Image from "next/image";

export default function About() {
  return (
    <div id="about" data-aos="fade-up" className="scroll-mt-24 px-2 ">
      <div className="bg-gradient-to-b from-[#000000] to-[#2E2D2D] mt-2 text-gray-300 border-2 rounded-3xl md:rounded-4xl border-green-500 px-6 sm:px-8 md:px-30 py-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg">
        
        {/* Profile Image */}
        <div className="relative group">
          <Image
            src={Profile}
            alt="Profile"
            className="w-52 sm:w-64 md:w-[400px] h-auto rounded-xl border-2 border-green-500 shadow-lg shadow-green-900/50 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 rounded-xl bg-green-500/10 blur-xl group-hover:opacity-60 transition-opacity"></div>
        </div>

        {/* Text Section */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#00ff88]">
            About Me
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae labore temporibus, sed nam ipsam vitae aspernatur itaque totam quasi animi, eaque, placeat minus odio optio dolore fugiat reprehenderit delectus.
          </p>
        </div>
      </div>
      </div>
  );
}
