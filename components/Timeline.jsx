import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
  title: "Early 2025",
  content: (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-3xl font-extrabold mb-2">
        Full-Stack Developer Intern
      </p>
      <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-2xl font-bold mb-4">
        Duration: February 2025 – April 2025
      </p>
      <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-xl font-semibold mb-2">
        Contributions During Internship:
      </p>
      <ul className="pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-2">
        <li>✅ Led the migration of BlogHunch’s frontend from Vue.js to Next.js, improving performance and SEO.</li>
        <li>✅ Rebuilt components, layouts, and routes using Next.js with SSR and static generation.</li>
        <li>✅ Worked with designers and backend engineers to ensure a smooth, error-free transition.</li>
        <li>✅ Introduced TypeScript, Tailwind CSS, and a modular architecture to improve maintainability.</li>
        <li>✅ Helped achieve significantly better Lighthouse scores and faster page loads.</li>
      </ul>
      <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-medium mb-0.5">
        Technologies Used:
      </p>
      <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-sm font-medium">
        Next.js, TypeScript, Tailwind CSS, Vue.js (legacy), JavaScript
      </p>
    </div>
  ),
},
    {
      title: "End 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-3xl font-extrabold mb-2">
            Web Development Intern
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-2xl font-bold mb-4">
            Duration: July 2024 – September 2024
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-xl font-semibold mb-2">
            Projects In My Internship Period:
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-semibold mb-1">
            1. Asset Management System
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-0.5">
            Overview: Developed a comprehensive application to efficiently
            track, manage, and maintain company assets.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-0.5">
            Responsibilities:
          </p>
          <ul className="pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-2">
            <li>
              ✅ Designed and implemented a user-friendly dashboard for asset
              monitoring.
            </li>
            <li>
              ✅ Integrated Cloudinary to upload and manage asset images
              dynamically.
            </li>
            <li>
              ✅ Utilized Nest.js for creating modular, scalable backend APIs
              and MongoDB for storing asset details.
            </li>
            <li>
              ✅ Ensured secure access by building authentication and
              authorization mechanisms.
            </li>
          </ul>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-semibold mb-1">
            2. Seat Booking Application
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-0.5">
            Overview: Created an application to streamline seat reservations for
            employees, enhancing office resource utilization.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-0.5">
            Responsibilities:
          </p>
          <ul className="pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-2">
            <li>
              ✅ Built the frontend using React.js, providing real-time booking
              updates and a seamless UI.
            </li>
            <li>
              ✅ Developed backend logic with Node.js and Nest.js for handling
              seat availability and bookings.
            </li>
            <li>
              ✅ Incorporated date validation to prevent booking past dates and
              support future reservations.
            </li>
            <li>
              ✅ Leveraged MongoDB to maintain user, seat, and booking data.
            </li>
          </ul>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-medium mb-0.5">
            Technologies Used:
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-sm font-medium">
            React.js, Node.js, Nest.js, MongoDB
          </p>
        </div>
      ),
    },
    {
      title: "Mid 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-3xl font-extrabold mb-2">
            Bachelor's of Computer Science
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-2xl font-bold mb-4">
            Duration: 2021 – 2024
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-xl font-semibold mb-2">
            Institution: Midnapore College
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-0.5">
            Academic Achievements:
          </p>
          <ul className="pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-2">
            <li>✅ Graduated with a GPA of 7.99/10.</li>
            <li>
              ✅ Gained foundational knowledge in algorithms, data structures,
              and software engineering.
            </li>
            <li>
              ✅ Developed hands-on experience in programming, databases, and
              web development.
            </li>
          </ul>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-medium mb-0.5">
            Key Skills Acquired:
          </p>
          <ul className="pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-2">
            <li>
              ✅ Proficiency in programming languages and frameworks like
              React.js, Node.js, and Nest.js.
            </li>
            <li>
              ✅ Strong understanding of database management using MongoDB and
              SQL.
            </li>
            <li>✅ Ability to build and deploy full-stack applications.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-3xl font-extrabold mb-2">
            Skill Advancements
          </p>
          <ul className="pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-2">
            <li>
              ✅ Added **Find-Your-Home App**: A cross-platform real-estate app
              built with React Native.
            </li>
            <li>
              ✅ Added **Make-Your-Trip App**: A travel-planner app integrating
              Gemini APIs and Google Location APIs.
            </li>
            <li>
              ✅ Enhanced portfolio with a fully responsive design and dark mode
              toggle.
            </li>
            <li>
              ✅ Showcased skills in React Native for cross-platform app
              development.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
