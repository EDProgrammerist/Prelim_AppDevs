type SkillLevelProps = {
  level: number;
};

export function SkillLevel({ level }: SkillLevelProps) {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`w-1.5 h-1.5 rounded-full ${i < level ? "bg-gray-900" : "bg-gray-200"}`} />
      ))}
    </span>
  );
}