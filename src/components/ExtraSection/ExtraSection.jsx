import React from "react";
import './ExtraSection.css'
const ExtraSection = () => {
  return (
    <div className="my-4 flex flex-col items-center">
      <h2 className="font-bold md:text-5xl  active-url text-center my-4">
        Improve Your Martial Art skills
      </h2>
      <div className="flex flex-col justify-center  text-container md:flex-row gap-4">
        <div className="md:w-1/2 ">
          <h3 className="md:text-3xl text-xl font-bold kicks">Roundhouse Kicks:</h3>
          <p className="text-md text-lg leading-relaxed">
            Enhance your lower body strength and flexibility with powerful
            rotational kicks that target your opponent from various angles
          </p>
          <h3 className="md:text-3xl text-xl font-bold kicks">Shadow Boxing:</h3>
          <p className="text-md text-lg leading-relaxed">
            Improve your coordination, speed, and technique by simulating a
            sparring session with an imaginary opponent, allowing you to focus
            on perfecting your striking and defensive movements
          </p>
          <h3 className="md:text-3xl text-xl font-bold kicks">
            Brazilian Jiu-Jitsu Drills:
          </h3>
          <p className="text-md text-lg leading-relaxed">
            Develop your ground fighting skills through grappling exercises that
            emphasize leverage, joint locks, and submissions, empowering you to
            control and overcome opponents regardless of size or strength
          </p>
        </div>
        <img
          className=" extra-section-img md:w-[400px] md:h-[465px]   rounded-sm object-cover"
          src="https://images.unsplash.com/photo-1588989810740-c4c8b90239b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=441&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default ExtraSection;
