import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all">
      <div className="mb-3 md:mb-4 p-2 md:p-3 rounded-xl bg-[#E5F0FF] text-primary" aria-hidden="true">
        {icon}
      </div>
      <h3 className="mb-1 md:mb-2 text-sm md:text-base font-semibold">
        {title}
      </h3>
      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
        {description}
      </p>
    </article>
  );
}
