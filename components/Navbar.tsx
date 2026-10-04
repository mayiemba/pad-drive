import Link from "next/link";

const NAV_LINKS = [
  { label: "Our Mission", href: "#mission" },
  { label: "Our Motivation", href: "#motivation" },
  { label: "Donation Impact", href: "#impact" },
];

export default function Navbar() {
  return (
    <header className="top-0 z-50 w-full bg-white font-sans">
      <nav
        aria-label="Main"
        className="grid w-full grid-cols-2 items-center gap-y-1 bg-white px-2 py-1 sm:px-8 md:grid-cols-[1fr_auto_1fr]"
      >
        <Link
          href="/"
          className="justify-self-start px-3 py-2 text-base font-bold text-[#7B3F9E] sm:px-5 sm:py-2.5 sm:text-2xl font-serif">
          Menstrual Dignity Drive
        </Link>

        {/* Centered on desktop; drops to its own row on small screens */}
        <div className="order-last col-span-2 flex items-center justify-center gap-6 pb-2 sm:gap-8 md:order-0 md:col-span-1 md:pb-0">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-black transition-colors hover:text-[#7B3F9E] sm:text-xl"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="https://www.mchanga.africa/fundraiser/148697"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 justify-self-end rounded-full bg-[#FEDF97] px-3 py-2 text-sm font-semibold text-black sm:px-5 sm:py-2.5 sm:text-lg"
        >
          Donate
        </a>
      </nav>
    </header>
  );
}