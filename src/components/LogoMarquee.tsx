import { LogoMark } from "./icons/BrandIcons";

const REPEAT_COUNT = 8;

function LogoItem() {
  return (
    <div className="mx-8 flex shrink-0 items-center gap-3 sm:mx-10">
      <img src="/logo.png" alt="" />
      <span className="font-display whitespace-nowrap text-xl text-[var(--color-light)] sm:text-2xl">
        UXaura Studio
      </span>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div
      className="marquee-wrapper relative w-full overflow-hidden bg-[var(--color-dark)] py-10"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="marquee-track flex w-max">
        {/* Two identical sets placed back to back for a seamless loop */}
        {Array.from({ length: 2 }).map((_, setIndex) => (
          <div key={setIndex} className="flex shrink-0">
            {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
              <LogoItem key={`${setIndex}-${i}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
