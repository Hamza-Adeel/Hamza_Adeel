"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";

const skills = [
  { label: "Python",       percentage: 95, icon: "/assets/Python-Logo.png",  invert: false },
  { label: "Next JS",      percentage: 85, icon: "/assets/Next-JS.png",      invert: true  },
  { label: "Tailwind CSS", percentage: 75, icon: "/assets/Tailwind_CSS.png", invert: false },
  { label: "Amazon",       percentage: 90, icon: "/assets/amazon.png",       invert: true  },
];

export default function Skills() {
  return (
    <div className="px-2">
      <section
        id="skills"
        className="bg-gradient-to-t from-[#2E2D2D] to-[#000000] selection:bg-green-500 selection:text-white border-2 border-green-500 rounded-3xl md:rounded-4xl text-gray-300 py-16 px-6 sm:px-8 md:px-16 lg:px-30 mt-2 scroll-mt-32"
      >
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <ScrollReveal direction="down" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00ff88]">
              My Skills
            </h2>
          </ScrollReveal>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <ScrollReveal
              key={skill.label}
              direction="up"
              delay={0.1 + index * 0.1}
              className="flex flex-col items-center gap-3 p-5 rounded-xl border border-[#00ff88]/30 bg-[#0B0B0B] hover:shadow-[0_0_18px_rgba(0,255,136,0.18)] hover:border-[#00ff88]/60 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Circular Progress + Icon */}
              <div className="relative w-28 h-28">
                <CircularProgressbar
                  value={skill.percentage}
                  strokeWidth={8}
                  styles={buildStyles({
                    pathColor: "#00ff88",   // neon green
                    trailColor: "#004d26",  // dark green
                    strokeLinecap: "round",
                  })}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={skill.label}
                    width={44}
                    height={44}
                    className={skill.invert ? "invert" : ""}
                  />
                </div>
              </div>

              {/* Percentage + Label */}
              <p className="text-[#00ff88] font-semibold text-lg">{skill.percentage}%</p>
              <p className="text-sm">{skill.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
