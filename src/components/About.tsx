"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[var(--color-dark)] px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-tl-[110px] rounded-tr-3xl rounded-br-[110px] rounded-bl-none bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)] p-[1.5px]"
        >
          <div className="rounded-tl-[108px] rounded-tr-[22px] rounded-br-[108px] rounded-bl-none bg-[var(--color-dark)] px-8 py-14 sm:px-14 sm:py-16 lg:px-20 lg:py-20">
            <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                About{" "}
              </span>
              <span className="text-white">Us</span>
            </h2>

            <div className="mx-auto mt-10 max-w-3xl space-y-6 text-center">
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                UXaura is a forward-thinking UI/UX design studio founded by
                two digital enthusiasts with a shared passion for creating
                exceptional digital experiences.
              </p>
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                We design intuitive, user-centered interfaces that combine
                aesthetics, functionality, and strategy to help startups,
                businesses, and educational institutions elevate their
                digital presence. By transforming complex ideas into elegant
                solutions, we create impactful experiences that inspire
                users and drive results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
