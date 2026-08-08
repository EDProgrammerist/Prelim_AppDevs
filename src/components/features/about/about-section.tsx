import profilePhoto from "@/assets/profile-photo.jpg";

const TIMELINE = [
  {
    year: "2026 — Present",
    title: "3rd year BS Information Technology student",
    description: "Building responsive, accessible web applications with React and TypeScript.",
  },
  {
    year: "2024",
    title: "1st year BS Information Technology student",
    description: "Focused on HTML, CSS and JavaScript fundamentals before moving into React.",
  },
];

export function AboutSection() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
          <div className="mx-auto md:mx-0 w-48 sm:w-64 md:w-full animate-fade-in-up">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-full md:h-auto md:aspect-square rounded-2xl bg-gray-200 overflow-hidden mx-auto">
              <img
                src={profilePhoto}
                alt="EJ Ursal"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">About Me</h1>
            <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi, I&apos;m EJ a BSIT Student who loves building clean, responsive
                interfaces with React, TypeScript and Tailwind CSS. I care about writing code
                that&apos;s easy to read, easy to maintain and pleasant for people to use.
              </p>
              <p>
                Outside of code, I&apos;m always looking for the next thing to learn whether
                that&apos;s a new framework a design pattern or just a better way to solve a
                familiar problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">My Journey</h2>
          <ol className="relative border-l border-gray-300 space-y-10 pl-6 sm:pl-8">
            {TIMELINE.map((item, index) => (
              <li
                key={item.title}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-gray-900 border-4 border-gray-50" />
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}