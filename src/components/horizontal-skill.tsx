"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "PYTHON", percent: 90 },
      { name: "HTML", percent: 90 },
      { name: "CSS", percent: 85 },
      { name: "TypeScript", percent: 80 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Next.js", percent: 88 },
      { name: "Streamlit", percent: 88 },
      { name: "FastAPI", percent: 82 },
    ],
  },
];

export default function HorizontalSkill() {
  return (
    <section
      id="skills"
      className=" mt-2 px-2 scroll-mt-32"
    >
      <div className="bg-gradient-to-t from-[#2E2D2D] to-[#000000] selection:bg-green-500 selection:text-white border-2 border-green-500 rounded-3xl md:rounded-4xl text-gray-300 py-16 px-6 sm:px-8 md:px-16 lg:px-24">
        <div className="mb-12 text-center">
          <ScrollReveal direction="down" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00ff88]">
              My Skills
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <ScrollReveal
              key={group.title}
              direction="up"
              delay={0.1 + index * 0.1}
              className="rounded-2xl border border-[#00ff88]/25 bg-[#0B0B0B] p-6 shadow-[0_0_16px_rgba(0,255,136,0.08)]"
            >
              <h3 className="mb-5 text-xl font-semibold text-[#00ff88]">{group.title}</h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="rounded-xl border border-[#00ff88]/20 bg-[#111111] p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-lg font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-[#00ff88]">{skill.percent}%</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#1f1f1f]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a]"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
