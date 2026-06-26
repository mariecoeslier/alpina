"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function AnimatedCounter({
  end,
  suffix,
  started,
}: {
  end: number;
  suffix: string;
  started: boolean;
}) {
  const [value, setValue] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!started) return;

    if (reducedMotion) {
      setValue(end);
      return;
    }

    const controls = animate(0, end, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [started, end, reducedMotion]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

type StatConfig =
  | { key: string; end: number; suffix: string }
  | { key: string; staticValue: string };

function StatItem({
  stat,
  label,
  started,
}: {
  stat: StatConfig;
  label: string;
  started: boolean;
}) {
  return (
    <motion.div variants={itemVariants} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 tabular-nums">
        {"staticValue" in stat ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={started ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {stat.staticValue}
          </motion.span>
        ) : (
          <AnimatedCounter
            end={stat.end}
            suffix={stat.suffix}
            started={started}
          />
        )}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  const t = useTranslations("stats");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats: StatConfig[] = [
    { key: "activeUsers", end: 10, suffix: "M+" },
    { key: "countries", end: 50, suffix: "+" },
    { key: "sports", end: 16, suffix: "" },
    { key: "coverage", staticValue: "24/7" },
  ];

  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat) => (
            <StatItem
              key={stat.key}
              stat={stat}
              label={t(stat.key)}
              started={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
