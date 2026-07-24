"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { FigmaIcon, PencilIcon, PeopleIcon } from "./icons/BrandIcons";

const SERVICES = [
  {
    title: "UX/UI Audit",
    description:
      "We evaluate existing digital products to identify usability issues, friction points, and opportunities for improvement. Our audit process combines expert analysis and best practices to deliver actionable insights. We then redesign and optimize interfaces.",
    icon: <img src="/star.png" />,  
    variant: "solid" as const,
  },
  {
    title: "UX/UI Design",
    description:
      "At UXaura, we craft visually refined and highly intuitive interfaces that deliver seamless user experiences across web and mobile platforms. From early wireframes to high-fidelity prototypes, we design products that balance aesthetics, usability, and performance.",
    icon: <img src="/pencil.png" />,
    variant: "outline" as const,
  },
  {
    title: "Training & Workshops",
    description:
      "We provide hands-on UI/UX training sessions and workshops tailored for students, teams, and organizations. Our approach is practical and project-based, allowing participants to learn by doing, from fundamentals to advanced design practices.",
    icon: <img src="/people.png" />,
    variant: "solid" as const,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[var(--color-dark)] px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="relative text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-white/40 to-[var(--color-accent)] bg-clip-text text-transparent">
              Our{" "}
            </span>
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 h-9 w-8 sm:absolute sm:-right-4 sm:top-0 sm:mt-0"
          >
            <img src="/figma.png" alt="" />
          </motion.div>
        </div>

        {/* Zigzag grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left column */}
          <div className="flex flex-col gap-8 lg:gap-24">
            <ServiceCard
              title={SERVICES[0].title}
              description={SERVICES[0].description}
              icon={SERVICES[0].icon}
              variant={SERVICES[0].variant}
              index={0}
            />
            <ServiceCard
              title={SERVICES[2].title}
              description={SERVICES[2].description}
              icon={SERVICES[2].icon}
              variant={SERVICES[2].variant}
              index={2}
            />
          </div>

          {/* Right column, offset down to create the staggered look */}
          <div className="flex flex-col lg:mt-20">
            <ServiceCard
              title={SERVICES[1].title}
              description={SERVICES[1].description}
              icon={SERVICES[1].icon}
              variant={SERVICES[1].variant}
              index={1}
              className="lg:min-h-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
