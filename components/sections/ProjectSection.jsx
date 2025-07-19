"use client";

import React from "react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

function ProjectSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "A video-enabled application enabling real-time communication with automated recording. Designed for seamless video sessions and secure cloud-based storage/playback.",
      name: "Connect with Real Humans",
      designation: "Discover your ideal home with ease and get the best deals.",
      src: "/assets/p-1.png",
      href: "/connect-with-real-humans",
    },
    {
      id: 2,
      quote:
        "A full-stack application designed to streamline the scheduling and management of doctor appointments, fostering seamless communication between patients and healthcare providers.",
      name: "Bookify",
      designation: "Effortlessly book appointments and prioritize your health.",
      src: "/assets/p-2.png",
      href: "/bookify",
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
