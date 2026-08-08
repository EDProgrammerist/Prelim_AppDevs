import { NavLink } from "react-router";
import { ArrowRightIcon } from "@/components/ui/icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div
        className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-gray-200/60 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-sm font-medium text-gray-500 mb-3">Hi, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
           Ed James Ursal
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-700 font-medium">BSIT Student</p>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-gray-600 leading-relaxed">
            I build clean responsive web interfaces with React, TypeScript and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <NavLink
              to="/projects"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-lg bg-black text-white text-sm sm:text-base font-medium transition-colors hover:bg-gray-800"
            >
              View Projects <ArrowRightIcon className="w-4 h-4" />
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm sm:text-base font-medium transition-colors hover:bg-gray-50"
            >
              Get in Touch
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}