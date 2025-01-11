import Image from "next/image";
import React from "react";

function DemoMobileScreen() {
  return (
    <div className="py-8 flex justify-center items-center relative">
      <div className="relative w-auto h-auto">
        <Image
          src="/assets/desktop.jpg"
          alt=""
          width={700}
          height={600}
          className="z-10"
        />
        <div className="absolute flex z-20 left-[114px] bottom-[129px] h-[300px] w-auto">
          <Image
            src="/assets/doctor-appointment-booking.png"
            alt="Overlay content"
            width={482}
            height={900}
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default DemoMobileScreen;
