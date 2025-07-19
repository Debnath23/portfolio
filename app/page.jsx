"use client";

import React from "react";
import { Links } from "@/components/Links";
import { TimelineDemo } from "../components/Timeline";
import { useTheme } from "../context/ThemeContext";
import ProjectSection from "../components/sections/ProjectSection";
import SkillsSection from "../components/sections/SkillsSection";
import HeroSection from "../components/sections/HeroSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={`${theme} bg-white dark:bg-neutral-950`}>
      <div className="flex flex-col">
        <section
          id="hero"
          className="bg-white dark:bg-neutral-950 px-4 sm:px-10 xl:px-[220px] pt-16 md:pt-24 pb-4"
        >
          <HeroSection />
        </section>

        <section
          id="timeline"
          className="bg-white dark:bg-neutral-950 px-4 sm:px-10 xl:px-[220px] py-4"
        >
          <TimelineDemo />
        </section>

        <section
          id="projects"
          className="bg-white dark:bg-neutral-950 px-4 sm:px-10 xl:px-[220px] pt-12 md:pt-18 pb-6"
        >
          <ProjectSection />
        </section>

        <section
          id="skills"
          className="bg-white dark:bg-neutral-950 px-12 sm:px-10 xl:px-[220px] py-4"
        >
          <SkillsSection />
        </section>

        <section
          id="contact"
          className="bg-white dark:bg-neutral-950 px-4 sm:px-10 xl:px-[220px] pt-2 md:pb-16"
        >
          <ContactSection />
        </section>

        <footer className="sticky z-50 bottom-3">
          <Links />
        </footer>
      </div>
    </div>
  );
}
