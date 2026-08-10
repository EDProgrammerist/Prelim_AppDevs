import { NavLink } from "react-router";
import { ArrowRightIcon } from "@/components/ui/icons";

const PROFILE = {
  summary:
    "I'm a BSIT student who likes turning ideas into web experiences that are fast and accessible with real attention to how they look. Clean code and thoughtful UI matter to me but what matters most is shipping something that actually works.",
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