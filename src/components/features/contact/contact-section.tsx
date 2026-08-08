import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { MailIcon, MapPinIcon, SendIcon } from "@/components/ui/icons";

const CONTACT_EMAIL = "paristonnn@gmail.com";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) {
      next.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Message can't be empty.";
    return next;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setStatus("idle");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Let&apos;s talk</h1>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Have a project in mind or just want to say hi? My inbox is open.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-5 gap-8 md:gap-12">
       <div className="md:col-span-2 space-y-4">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-900"
          >
            <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gray-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <MailIcon className="w-5 h-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium text-gray-500">Email</p>
              <p className="text-sm font-medium text-gray-900 truncate">{CONTACT_EMAIL}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white">
            <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gray-900 text-white flex items-center justify-center">
              <MapPinIcon className="w-5 h-5" />
            </span>
            <div>
              <p className="text-xs font-medium text-gray-500">Location</p>
              <p className="text-sm font-medium text-gray-900">Philippines</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="md:col-span-3 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors focus:border-gray-900 ${
                errors.name ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors focus:border-gray-900 ${
                errors.email ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors resize-none focus:border-gray-900 ${
                errors.message ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="Tell me a bit about your project..."
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          <Button type="submit" className="w-full sm:w-auto px-6">
            <SendIcon className="w-4 h-4" /> Send Message
          </Button>

          {status === "sent" && (
            <p className="text-sm text-green-600" role="status">
              Opening your email client…
            </p>
          )}
        </form>
      </div>
    </section>
  );
}