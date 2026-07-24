"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import projectsData from "@/data/projects.json";
import type { Project, ProjectCategory } from "@/types/project";
import ProjectCard from "./ProjectCard";

const projects = projectsData as Project[];

const FILTERS: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-[var(--color-dark)] px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1300px]">
        {/* Header row */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-[var(--color-secondary)]">Our </span>
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="flex gap-3">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className={`rounded-full px-6 py-2 font-display text-sm transition-colors ${
                  filter === f.value
                    ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white"
                    : "border border-white/20 text-white/60 hover:border-white/40 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gradient-bordered container */}
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[var(--color-primary)]/40 via-[var(--color-accent)]/20 to-transparent p-[1.5px]">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-dark)] to-[var(--color-dark)] p-6 sm:p-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {filtered.length === 0 && (
              <p className="py-16 text-center text-white/40">
                No projects in this category yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
