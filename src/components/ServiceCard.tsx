"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: "solid" | "outline";
  index: number;
  className?: string;
};

export default function ServiceCard({
  title,
  description,
  icon,
  variant = "solid",
  index,
  className = "",
}: ServiceCardProps) {
  const isOutline = variant === "outline";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.6,
        delay: index * 0.28,
        ease: "easeOut",
      }}
      whileHover={{ y: -6 }}
      className={`rounded-[28px] p-8 shadow-xl transition-shadow sm:p-10 ${
        isOutline
          ? "border-2 border-[var(--color-primary)] bg-gradient-to-br from-white/[0.06] to-[var(--color-accent)]/10 shadow-[var(--color-primary)]/10"
          : "bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]/70 shadow-[var(--color-primary)]/20"
      } ${className}`}
    >
      <div className="flex items-center gap-3">
        <h3 className="font-display text-xl text-white sm:text-2xl">{title}</h3>
        {icon && (
          <span
            className={`${
              isOutline ? "text-[var(--color-secondary)]" : "text-white/90"
            }`}
          >
            {icon}
          </span>
        )}
      </div>
      <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}
