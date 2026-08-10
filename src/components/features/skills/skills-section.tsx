import { SkillLevel } from "@/components/ui/skill-level";
import type { ComponentType } from "react";
import { CodeIcon, ServerIcon, SettingsIcon } from "@/components/ui/icons";

type Skill = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
};

type SkillCategory = {
  id: number;
  name: string;
  Icon: ComponentType<{ className?: string }>;
  skills: Skill[];
};

const CATEGORIES: SkillCategory[] = [
  {
    id: 1,
    name: "Frontend",
    Icon: CodeIcon,
    skills: [
      { name: "React", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "HTML", level: 5 },
      { name: "CSS", level: 5 },
    ],
  },
  {
    id: 2,
    name: "Backend",
    Icon: ServerIcon,
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "REST APIs", level: 4 },
    ],
  },
  {
    id: 3,
    name: "Tools & Workflow",
    Icon: SettingsIcon,
    skills: [
      { name: "Git", level: 4 },
      { name: "Expo", level: 4 },
      { name: "GitHub", level: 4 },
      { name: "Figma", level: 4 },
    ],
  },
];



export function SkillsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Skills</h1>
        <p className="mt-2 text-gray-600">Technologies and tools I use to bring ideas to life.</p>
      </div>

      {CATEGORIES.map((category, index) => (
        <div key={category.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="flex items-center gap-2 mb-4">
            <category.Icon className="w-5 h-5 text-gray-900" />
            <h2 className="text-lg font-semibold text-gray-900">{category.name}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2.5 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:border-gray-900 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <SkillLevel level={skill.level} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}