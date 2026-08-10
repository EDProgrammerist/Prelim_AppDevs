import { useEffect, useState } from "react";
import { ExternalLinkIcon } from "@/components/ui/icons";
import endpointSecurityBadge from "@/assets/certifications-image/endpoint-security.png";
import introToCybersecurityBadge from "@/assets/certifications-image/introduction-to-cybersecurity.png";

type Certification = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string;
  badge: string; 
};

const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    name: "Endpoint Security",
    issuer: "Cisco",
    date: "2026",
    link: "https://www.credly.com/badges/39086287-9df0-4f37-8935-548df18738e3/public_url",
    badge: endpointSecurityBadge,
  },
  {
    id: 2,
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2026",
    link: "https://www.credly.com/badges/41b2a962-7909-424e-bee4-a27660fd137a/public_url",
    badge: introToCybersecurityBadge,
  },
];

export function CertificationsSection() {
  const [selected, setSelected] = useState<Certification | null>(null);

  useEffect(() => {
    if (!selected) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Certifications</h1>
        <p className="mt-2 text-gray-600">Courses and certifications I&apos;ve completed.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <div
            key={cert.id}
            className="group border border-gray-200 rounded-xl bg-white p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <button
              type="button"
              onClick={() => setSelected(cert)}
              aria-label={`View ${cert.name} badge`}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gray-100 border border-gray-200 overflow-hidden cursor-pointer transition-transform duration-300 group-hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-900"
            >
              {cert.badge ? (
                <img src={cert.badge} alt={`${cert.name} badge`} className="w-full h-full object-cover" />
              ) : (
                <span className="w-full h-full flex items-center justify-center text-xs text-gray-400 px-2">
                  Badge image
                </span>
              )}
            </button>

            <h3 className="mt-4 text-base font-semibold text-gray-900">{cert.name}</h3>
            <p className="mt-1 text-sm text-gray-500">
              {cert.issuer} · {cert.date}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline"
            >
              View Credential <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full text-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full bg-gray-100 overflow-hidden">
              {selected.badge && (
                <img
                  src={selected.badge}
                  alt={`${selected.name} badge`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{selected.name}</h3>
            <p className="mt-1 text-sm text-gray-500">
              {selected.issuer} · {selected.date}
            </p>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-5 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}