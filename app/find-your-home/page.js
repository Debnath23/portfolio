"use client";

import React from "react";
import { Links } from "@/components/Links";
import { useTheme } from "@/context/ThemeContext";
import { ShowScreens } from "@/components/ui/show-screens";

function page() {
  const { theme } = useTheme();

  const handleDownload = () => {
    const fileUrl = "/assets/find-your-home.apk";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "find-your-home.apk";
    link.click();
  };

  const testimonials = [
    {
      id: 1,
      src: "/assets/project2/1.jpg",
    },
    {
      id: 2,
      src: "/assets/project2/2.jpg",
    },
    {
      id: 3,
      src: "/assets/project2/3.jpg",
    },
    {
      id: 4,
      src: "/assets/project2/4.jpg",
    },
    {
      id: 5,
      src: "/assets/project2/5.jpg",
    },
    {
      id: 6,
      src: "/assets/project2/6.jpg",
    },
    {
      id: 7,
      src: "/assets/project2/7.jpg",
    },
  ];
  return (
    <div className={`${theme} bg-white dark:bg-neutral-950`}>
      <div className="flex flex-col bg-white dark:bg-neutral-950 px-4 sm:px-6 md:px-10 xl:px-[220px] pt-8 md:pt-12 pb-4">
        <div className="pb-16">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 py-4">
            {/* Left Section */}
            <div className="w-full md:w-3/5">
              <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
                Find Your Home
              </h1>
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-2">
                A mobile platform to simplify property browsing, search, and
                management, allowing users to explore, save, and purchase
                properties seamlessly.
              </p>

              {/* Features */}
              <div className="mt-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                    Key Features:
                  </h2>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Property Browsing & Search:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>
                        Browse multiple properties with key details (name, type,
                        price).
                      </li>
                      <li>
                        Search and filter properties by location, price range,
                        bedrooms, and more.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Detailed Property Information:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>
                        Property type, location, and facilities (gym, laundry,
                        etc.).
                      </li>
                      <li>Geolocation and agent contact information.</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Wish-list & Property Purchase:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>
                        Save properties to your wish-list for future reference.
                      </li>
                      <li>
                        Initiate property purchases directly from the app.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Reviews & Ratings:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>Leave reviews and ratings for properties.</li>
                      <li>
                        Help future users make informed property decisions.
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
                      Developed a responsive system for browsing and searching a
                      wide variety of properties.
                    </li>
                    <li>
                      Implemented dynamic filters to help users find properties
                      matching their preferences.
                    </li>
                    <li>
                      Integrated real-time property updates to ensure accuracy
                      and freshness of listings.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Outcome:
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200">
                    Successfully built a seamless and feature-rich mobile
                    application that enhances property browsing, search, and
                    purchasing. The app enables users to save properties to a
                    wish-list, initiate purchases, and make informed decisions
                    based on real-time data and reviews.
                  </p>
                </div>

                <button
                  onClick={handleDownload}
                  className="text-slate-600 dark:text-neutral-800 bg-green-400 dark:bg-green-300 px-4 py-2 rounded-full font-semibold"
                >
                  Download
                </button>
              </div>
            </div>

            <div>
              <ShowScreens testimonials={testimonials} />
            </div>
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
