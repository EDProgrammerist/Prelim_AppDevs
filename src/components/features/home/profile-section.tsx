import { NavLink } from "react-router";
import { ArrowRightIcon } from "@/components/ui/icons";

const PROFILE = {
  summary:
    "I'm a bsit student who enjoys turning ideas into fast, accessible and visually polished web experiences. I care about clean code, thoughtful UI and shipping things that actually work.",
};

export function ProfileSection() {
  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">A bit about me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">{PROFILE.summary}</p>
          <NavLink
            to="/about"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:gap-2 transition-all"
          >
            Read my full story <ArrowRightIcon className="w-4 h-4" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}