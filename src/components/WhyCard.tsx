"use client";

import { motion } from "framer-motion";

type WhyCardProps = {
  title: string;
  description: string;
  index: number;
  shape: "left" | "center" | "right";
};

const SHAPE_CLASSES: Record<WhyCardProps["shape"], string> = {
  left: "rounded-tl-[56px] rounded-tr-2xl rounded-br-none rounded-bl-2xl lg:mt-0",
  center: "rounded-3xl lg:mt-16",
  right: "rounded-tr-[56px] rounded-tl-2xl rounded-bl-none rounded-br-2xl lg:mt-0",
};

export default function WhyCard({ title, description, index, shape }: WhyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.28, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`border-2 border-[var(--color-primary)]/70 bg-gradient-to-br from-[var(--color-primary)]/25 via-[var(--color-accent)]/10 to-transparent px-7 py-10 text-center shadow-lg shadow-[var(--color-primary)]/10 ${SHAPE_CLASSES[shape]}`}
    >
      <h3 className="font-display text-lg text-white sm:text-xl">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-[15px]">
        {description}
      </p>
    </motion.div>
  );
}
