"use client";

import React from "react";
import { Links } from "@/components/Links";
import { useTheme } from "@/context/ThemeContext";
// import { ShowScreens } from "@/components/ui/show-screens";

function page() {
  const { theme } = useTheme();

  // const handleDownload = () => {
  //   const fileUrl = "/assets/travel-planner.apk";

  //   const link = document.createElement("a");
  //   link.href = fileUrl;
  //   link.download = "travel-planner.apk";
  //   link.click();
  // };

  // const testimonials = [
  //   { id: 1, src: "/assets/project3/1.jpg" },
  //   { id: 2, src: "/assets/project3/2.jpg" },
  //   { id: 3, src: "/assets/project3/3.jpg" },
  //   { id: 4, src: "/assets/project3/4.jpg" },
  //   { id: 5, src: "/assets/project3/5.jpg" },
  // ];

  return (
    <div className={`${theme} bg-white dark:bg-neutral-950`}>
      <div className="flex flex-col bg-white dark:bg-neutral-950 px-4 sm:px-6 md:px-10 xl:px-[220px] pt-8 md:pt-12 pb-4">
        <div className="pb-16">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 py-4">
            {/* Left Section */}
            <div className="w-full">
              <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
                Travel Planner App
              </h1>
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-2">
                A comprehensive platform to simplify travel planning, allowing
                users to explore destinations, book flights, hotels, and
                activities seamlessly.
              </p>

              {/* Features */}
              <div className="mt-6 space-y-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold pb-2 text-slate-800 dark:text-slate-200">
                    Key Features:
                  </h2>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Travel Planning & Booking:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>
                        Book flights, hotels, and activities tailored to your
                        preferences.
                      </li>
                      <li>
                        Compare prices and reviews to make informed booking
                        decisions.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Explore Destinations:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>
                        Discover popular and offbeat destinations with curated
                        travel guides.
                      </li>
                      <li>
                        Access detailed itineraries and tips for travelers.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      User Profile & Wish-list:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>
                        Save favorite destinations, hotels, or activities for
                        future reference.
                      </li>
                      <li>
                        Manage bookings and access past trips in your profile.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Reviews & Ratings:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>
                        Share your experiences through reviews and ratings.
                      </li>
                      <li>
                        Help others make better travel choices with detailed
                        feedback.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Tech Stack:
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200">
                    React Native, Expo, Appwrite
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Challenges Solved:
                  </h3>
                  <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                    <li>
                      Created a dynamic filtering system for personalized
                      bookings.
                    </li>
                    <li>
                      Ensured seamless synchronization of bookings and user
                      preferences in real-time.
                    </li>
                    <li>
                      Designed a user-friendly interface for easy navigation and
                      travel planning.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Outcome:
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200">
                    Delivered a feature-rich mobile application, empowering
                    users to plan and book trips effortlessly. The app provides
                    comprehensive travel information and real-time updates to
                    ensure a hassle-free experience.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Links:
                  </h3>
                  <div className="md:flex gap-2">
                    <span className="text-slate-800 dark:text-slate-200 text-sm font-semibold mr-1">
                      Frontend Code:
                    </span>
                    <a
                      href="https://github.com/Debnath23/travel-planner"
                      target="_blank"
                      className="text-blue-700 underline text-sm"
                    >
                      https://github.com/Debnath23/travel-planner
                    </a>
                  </div>
                  <div className="md:flex gap-2">
                    <span className="text-slate-800 dark:text-slate-200 text-sm font-semibold mr-1">
                      Backend Code:
                    </span>
                    <a
                      href="https://github.com/Debnath23/travel-planner-backend"
                      target="_blank"
                      className="text-blue-700 underline text-sm"
                    >
                      https://github.com/Debnath23/travel-planner-backend
                    </a>
                  </div>
                  <div className="md:flex gap-2">
                    <span className="text-slate-800 dark:text-slate-200 text-sm font-semibold mr-1">
                      Swagger APIs:
                    </span>
                    <a
                      href="https://travel-planner-backend-zj5z.onrender.com/swagger#/"
                      target="_blank"
                      className="text-blue-700 underline text-sm"
                    >
                      https://make-my-trip/swagger#/
                    </a>
                  </div>
                </div>

                {/* <div className="max-md:flex max-md:justify-center max-md:items-center">
                  <button
                    onClick={handleDownload}
                    className="text-slate-600 dark:text-neutral-800 bg-green-400 dark:bg-green-300 px-4 py-2 rounded-full font-semibold"
                  >
                    Download
                  </button>
                </div> */}
              </div>
            </div>

            {/* Right Section */}
            {/* <div className="max-md:flex max-md:justify-center max-md:items-center">
              <ShowScreens testimonials={testimonials} />
            </div> */}
          </div>
        </div>
      </div>
      <footer className="sticky z-50 bottom-3">
        <Links />
      </footer>
    </div>
  );
}

export default page;
