"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types/project";
import { SeraProjectIcon, GenericWebIcon, GenericMobileIcon } from "./icons/ProjectIcons";

const ICONS = {
  sera: SeraProjectIcon,
  web: GenericWebIcon,
  mobile: GenericMobileIcon,
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.15,
        ease: "easeOut",
      }}
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-3xl shadow-lg shadow-black/20"
    >
      {/* Thumbnail */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[var(--color-light)] p-6">
          <Image
            src={project.image}
            alt={project.title}
            fill
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
          />
        )
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]/70 px-6 py-6 text-center">
        <h3 className="font-display text-base leading-snug text-white sm:text-lg">
          {project.title}
        </h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display mt-5 inline-block w-full rounded-full border border-white/40 py-2.5 text-base text-sm text-white transition-colors hover:bg-white/10"
        >
          View project
        </a>
      </div>
    </motion.div>
  );
}
