import { NavLink } from "react-router";
import { MailIcon, MapPinIcon, ArrowRightIcon } from "@/components/ui/icons";

const PROFILE = {
  email: "paristonnn@gmail.com", 
  location: "Philippines", 
  summary:
    "I'm a bsit student who enjoys turning ideas into fast, accessible and visually polished web experiences. I care about clean code, thoughtful UI and shipping things that actually work.",
};

export function ProfileSection() {
  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid md:grid-cols-3 gap-8 md:gap-12 items-start">
        <div className="md:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">A bit about me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">{PROFILE.summary}</p>
          <NavLink
            to="/about"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:gap-2 transition-all"
          >
            Read my full story <ArrowRightIcon className="w-4 h-4" />
          </NavLink>
        </div>

        <div className="space-y-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="group flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-gray-900 hover:shadow-sm transition-all"
          >
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center transition-transform group-hover:scale-110">
              <MailIcon className="w-4 h-4" />
            </span>
            <span className="text-sm text-gray-700 truncate">{PROFILE.email}</span>
          </a>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200">
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center">
              <MapPinIcon className="w-4 h-4" />
            </span>
            <span className="text-sm text-gray-700">{PROFILE.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}