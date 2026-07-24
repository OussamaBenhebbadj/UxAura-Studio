import {
  LogoMark,
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
  LocationIcon,
  CopyrightIcon,
} from "./icons/BrandIcons";

const CONTACT_ITEMS = [
  { icon: LinkedinIcon, label: "UXaura Studio", href: "https://www.linkedin.com/company/uxaura-studio" },
  { icon: InstagramIcon, label: "uxaura_studio", href: "https://www.instagram.com/uxaura_studio/" },
  {
    icon: MailIcon,
    label: "ux.aura.contact@gmail.com",
    href: "mailto:ux.aura.contact@gmail.com",
    underline: true,
  },
  { icon: LocationIcon, label: "Algiers , Algeria", href: undefined },
];

export default function Footer() {
  return (
    <footer
      className="px-6 pb-8 pt-16 lg:px-12"
      style={{
        background:
          "linear-gradient(180deg, #2b1454 0%, #180a30 35%, var(--color-dark) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-12 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="" className="h-10 w-10" />
              <span className="font-display text-2xl text-white">
                UXaura <span className="text-[var(--color-accent)]">Studio</span>
              </span>
            </div>
            <p className="mt-4 font-display text-sm text-white/70 sm:text-base">
              &ldquo; Where every experience matters &rdquo;
            </p>
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 gap-x-12 gap-y-5 sm:grid-cols-2">
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon;
              const content = (
                <span className="flex items-center gap-3 text-white/85 transition-colors hover:text-white">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span
                    className={`font-display text-sm sm:text-base ${
                      item.underline ? "underline underline-offset-4" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </span>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-14 flex items-center justify-center gap-2 border-t border-white/10 pt-6 text-white/60">
          <CopyrightIcon className="h-4 w-4 text-[var(--color-secondary)]" />
          <span className="font-display text-xs sm:text-sm">
            UXaura {new Date().getFullYear()} - All rights are reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
