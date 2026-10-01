import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Need from "@/components/Need";
import Motivation from "@/components/Motivation";
import Footer from "@/components/Footer";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", style: ["normal", "italic"] });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

// then on your <html> tag:
<html lang="en" className={`${serif.variable} ${sans.variable}`}></html>

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#E9FFEC]">
      <Navbar/>
      <Hero imageSrc="/padDriveHeroSectionImage"  donateUrl="#donate"/>
      <Impact imageSrc="/padDriveImpactSectionImage"/>
      <Need />
      <Motivation />
      <Footer />
    </main>
  );
};