"use client";

import React from "react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

function ProjectSection() {
  const testimonials = [
    {
      quote:
        "A full-stack application designed to simplify the process of scheduling and managing doctor appointments, ensuring seamless communication between users and healthcare providers.",
      name: "Bookify",
      designation: "Doctor Appointment Booking System",
      src: "/assets/p-1.png",
      href: "/",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "",
      href: "/",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "",
      href: "/",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export default ProjectSection;
