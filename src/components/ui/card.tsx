import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";

type CardProps = {
  title: string;
  description: string;
  buttonLabel: string;
  icon?: ReactNode;
};

export function Card({ title, description, buttonLabel, icon }: CardProps) {
  return (
    <div className="group h-full border border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300">
      {icon && (
        <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gray-900 text-white transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
      <span className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:underline">
        {buttonLabel}
        <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </div>
  );
}