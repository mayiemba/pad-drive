import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Our Mission", href: "#ourMission" },
  { label: "What We Provide", href: "#whatWeProvide" },
  { label: "Donation Impact", href: "#donationImpact" },
];

export default function Navbar() {
  return(
    <header className="top-0 z-50 w-ful bg-white">
      <nav className="flex w-full items-center justify-between bg-white px-2 py-1 sm:px-8">
        <Link
          href="#"
          className="px-3 py-2 text-sm font-semibold text-black sm:px-5 sm:py-2.5 sm:text-lg">
          Menstrual Dignity Drive
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-black sm:text-xl">
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="shrink-0 rounded-full bg-[#FEDF97] px-3 py-2 text-sm font-semibold text-black sm:px-5 sm:py-2.5 sm:text-lg">
          Donate
        </Link>

      </nav>
    </header>
  );
};