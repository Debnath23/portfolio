"use client";

import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import { Links } from "../../components/Links";

function Page() {
  const { theme } = useTheme();
  return (
    <div className={`${theme} bg-white dark:bg-neutral-950`}>
      <div className="flex flex-col bg-white dark:bg-neutral-950 px-4 sm:px-6 md:px-10 xl:px-[220px] pt-8 md:pt-12 pb-4">
        <div className="pb-16">
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 py-4">
            {/* Left Section */}
            <div className="w-full lg:w-3/5">
              <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
                Doctor Appointment Booking System
              </h1>
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-2">
                A full-stack application designed to simplify the process of
                scheduling and managing doctor appointments, ensuring seamless
                communication between users and healthcare providers.
              </p>

              {/* Features */}
              <div className="mt-6 space-y-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 pb-2">
                    Key Features:
                  </h2>

                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      User Functionality:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>Secure registration and login for users.</li>
                      <li>
                        Browse and filter doctors by categories and
                        availability.
                      </li>
                      <li>
                        Book appointments for future dates and time slots.
                      </li>
                      <li>
                        Cancel appointments with real-time updates sent to
                        doctors.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Doctor Functionality:
                    </h3>
                    <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                      <li>View and manage appointment schedules.</li>
                      <li>
                        Update availability or cancel appointments when
                        necessary.
                      </li>
                      <li>
                        Receive notifications for new bookings, cancellations,
                        or changes.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Admin Module:
                    </h3>
                    <p className="text-slate-800 dark:text-slate-200">
                      Manage doctor profiles, specializations, and appointment
                      categories.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Validation and Error Handling:
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200">
                    Appointment booking restricted to future dates and
                    non-overlapping time slots.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Tech Stack:
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200">
                    React, NestJS, MongoDB, Prisma ORM, Cloudinary
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Challenges Solved:
                  </h3>
                  <ul className="list-disc pl-5 text-slate-800 dark:text-slate-200">
                    <li>
                      Developed robust date and time validation to ensure only
                      valid appointments are booked.
                    </li>
                    <li>
                      Designed a scalable system capable of handling multiple
                      concurrent bookings efficiently.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Outcome:
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200">
                    Successfully built a reliable, user-friendly, and scalable
                    solution that enhanced appointment scheduling and
                    management. The application streamlined interactions between
                    users and doctors, reducing scheduling conflicts and
                    improving user satisfaction.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Links:
                  </h3>
                  <div className="space-y-1">
                    {/* Check It Out */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                      <span className="text-slate-800 dark:text-slate-200 text-sm font-semibold">
                        Check It Out:
                      </span>
                      <a
                        href="https://bookify-beta.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline text-sm"
                      >
                        https://bookify-beta.vercel.app/
                      </a>
                    </div>
                    {/* Swagger APIs */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                      <span className="text-slate-800 dark:text-slate-200 text-sm font-semibold">
                        Swagger APIs:
                      </span>
                      <a
                        href="https://doctor-appointment-booking-backend-165h.onrender.com/swagger#/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline text-sm"
                      >
                        https://bookify-beta.vercel.app/swagger#/
                      </a>
                    </div>
                    {/* Frontend Code */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                      <span className="text-slate-800 dark:text-slate-200 text-sm font-semibold">
                        Frontend Code:
                      </span>
                      <a
                        href="https://github.com/Debnath23/bookify"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline text-sm"
                      >
                        https://github.com/Debnath23/bookify
                      </a>
                    </div>
                    {/* Backend Code */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                      <span className="text-slate-800 dark:text-slate-200 text-sm font-semibold">
                        Backend Code:
                      </span>
                      <a
                        href="https://github.com/Debnath23/doctor-appointment-booking-backend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline text-sm"
                      >
                        https://github.com/Debnath23/doctor-appointment-booking-backend
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-[60px] md:pt-[120px]">
              <PinContainer title="bookify-beta.vercel.app" href="https://bookify-beta.vercel.app/">
                <div className="max-w-md flex flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[360px] md:w-[500px] h-auto">
                  <Image
                    src="/assets/p-2.png"
                    alt="Doctor Appointment Booking System"
                    width={500}
                    height={900}
                    className="rounded-lg w-full shadow-lg"
                  />
                </div>
              </PinContainer>
              <p className="text-slate-600 dark:text-slate-300 mt-10 text-center text-sm font-medium">
                Hover on it
              </p>
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

export default Page;
