'use client';

// import "../../public/Frame.svg"

import { Cairo, Rubik } from "next/font/google";
import { Navigation } from "./components/Navigation.tsx";
import { HeroSection } from "./components/HeroSection.tsx";
import { BehindTheScenesSection } from "./components/BehindTheScenesSection.tsx";
import { CoursesSection } from "./components/CoursesSection.tsx";
import { ProjectsSection } from "./components/ProjectsSection.tsx";
import { ValuesSection } from "./components/ValuesSection.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { Footer } from "./components/Footer.tsx";
// import { Footer } from "./components/Footer";

const almarai = Cairo({
  subsets: ['arabic'],
  weight: '400',
  display: 'swap'
})

export default function App() {
  return (
    <div className={`${almarai.className} min-h-screen bg-background text-foreground dark`}>
          <Navigation />
          <HeroSection />
          <BehindTheScenesSection />
          <CoursesSection />
          {/* <ProjectsSection /> */}
          <ValuesSection />
          <Footer />
          <Toaster />
        </div>
  );
}
