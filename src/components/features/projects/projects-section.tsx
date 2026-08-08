import { Card } from "@/components/ui/card";

type Project = {
  id: number;
  name: string;
  description: string;
  link: string;
};

export function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Renderify AI",
      description: "Powered architectural visualization SaaS. Use AI models from Claude to Gemini to transform 2D floor plans into photorealistic 3D renders with permanent hosting and persistent metadata..",
      link: "https://github.com/EDProgrammerist/AI-powered-architectural-visualization",
    },
    {
      id: 2,
      name: "Chroma AI",
      description: "Professional image editing powered by AI.",
      link: "https://github.com/EDProgrammerist/Full-Stack-Chroma-AI-Image-Editor",
    },
    {
      id: 3,
      name: "AI Fitness Assistant",
      description: "Smart AI Assistant: Engage in conversation with an AI that asks about your fitness goals, physical condition, and preferences.",
      link: "https://github.com/EDProgrammerist/AI-Fitness-Assistant",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
            <Card
              title={project.name}
              description={project.description}
              buttonLabel="View Project"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
