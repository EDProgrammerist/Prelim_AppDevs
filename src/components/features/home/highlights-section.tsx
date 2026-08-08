import type { ComponentType } from "react";
import { NavLink } from "react-router";
import { Card } from "@/components/ui/card";
import { CodeIcon, FolderIcon, AwardIcon } from "@/components/ui/icons";

type Highlight = {
  id: number;
  name: string;
  description: string;
  to: string;
  Icon: ComponentType<{ className?: string }>;
};

const HIGHLIGHTS: Highlight[] = [
  {
    id: 1,
    name: "Skills",
    description: "Languages, frameworks, and tools I work with day to day.",
    to: "/skills",
    Icon: CodeIcon,
  },
  {
    id: 2,
    name: "Projects",
    description: "A selection of things I've built, from side projects to client work.",
    to: "/projects",
    Icon: FolderIcon,
  },
  {
    id: 3,
    name: "Certifications",
    description: "Courses and certifications I've completed to keep leveling up.",
    to: "/certifications",
    Icon: AwardIcon,
  },
];

export function HighlightsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {HIGHLIGHTS.map((item, index) => (
          <NavLink
            key={item.id}
            to={item.to}
            className="block h-full animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card
              title={item.name}
              description={item.description}
              buttonLabel="Explore"
              icon={<item.Icon className="w-6 h-6" />}
            />
          </NavLink>
        ))}
      </div>
    </section>
  );
}