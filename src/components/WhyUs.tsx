import WhyCard from "./WhyCard";

const REASONS = [
  {
    title: "User-Centered Approach",
    description:
      "We place users at the heart of every decision. By deeply understanding their needs and behaviors, we design experiences that are intuitive, engaging, and truly effective.",
    shape: "left" as const,
  },
  {
    title: "Strategic & Purpose-Driven Design",
    description:
      "Every design choice we make is intentional. We align user experience with business goals to deliver solutions that not only look great but also perform.",
    shape: "center" as const,
  },
  {
    title: "High-Quality Interfaces",
    description:
      "We craft clean, modern, and visually compelling interfaces that meet today's design standards and elevate your digital presence.",
    shape: "right" as const,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[var(--color-dark)] px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl">
          <span className="bg-gradient-to-r from-white/40 to-[var(--color-accent)] bg-clip-text text-transparent">
            Why{" "}
          </span>
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            choose us?
          </span>
        </h2>

        <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {REASONS.map((reason, i) => (
            <WhyCard
              key={reason.title}
              title={reason.title}
              description={reason.description}
              shape={reason.shape}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
