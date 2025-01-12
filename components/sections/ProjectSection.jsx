"use client";

import React from "react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

function ProjectSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "A full-stack application designed to streamline the scheduling and management of doctor appointments, fostering seamless communication between patients and healthcare providers.",
      name: "Bookify",
      designation: "Effortlessly book appointments and prioritize your health.",
      src: "/assets/p-1.png",
      href: "/bookify",
    },
    {
      id: 2,
      quote:
        "A cross-platform real-estate application enabling users to explore and find their dream homes, complete with attractive deals and property details.",
      name: "Find Your Home",
      designation: "Discover your ideal home with ease and get the best deals.",
      src: "/assets/p-2.png",
      href: "/find-your-home",
    },
    {
      id: 3,
      quote:
        "An intuitive travel-planning app designed to make trips hassle-free by integrating advanced tools like Gemini APIs for planning and Google Location APIs for navigation.",
      name: "Make Your Trip",
      designation:
        "Plan your next adventure effortlessly and cherish every moment.",
      src: "/assets/p-3.webp",
      href: "/make-your-trip",
    },
  ];
  return (
    <div>
      <div className="flex justify-start">
        <span className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-5xl xl:text-6xl">
          Projects
        </span>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}

export default ProjectSection;
