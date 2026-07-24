import { MailIcon, LinkedinIcon, InstagramIcon } from "./icons/BrandIcons";
import ContactForm from "./ContactForm";

const CONTACT_LINKS = [
  {
    icon: <img src="/email.png" />,
    label: "ux.aura.contact@gmail.com",
    href: "mailto:ux.aura.contact@gmail.com",
  },
  {
    icon: <img src="/linkedin.png" />,
    label: "UXaura Studio",
    href: "https://www.linkedin.com/company/uxaura-studio",
  },
  {
    icon: <img src="/instagram.png" />,
    label: "uxaura_studio",
    href: "https://www.instagram.com/uxaura_studio/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--color-dark)] px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1300px] rounded-[2.5rem] border-2 border-[var(--color-primary)]/60 bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-[var(--color-secondary)]/5 px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: info */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-white/40 to-[var(--color-accent)] bg-clip-text text-transparent">
                Contact{" "}
              </span>
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                us
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
              Have a project? An idea in mind? Or perhaps you&apos;d like to
              train in UI/UX?{" "}
              <span className="font-display text-[var(--color-secondary)]">
                UXaura
              </span>{" "}
              can help! Contact us.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {CONTACT_LINKS.map((link) => {
                
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
                      {link.icon}
                    </span>
                    <span className="font-display text-sm sm:text-base">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
