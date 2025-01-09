import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="flex flex-col justify-center space-y-6">
        <p className="text-lg font-medium text-primary">Welcome to Foices</p>
        <h1 className="text-6xl font-bold text-gray-800 leading-snug">
          We Are The Professional Voice Over Service
        </h1>
        <p className=" text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <div className="mt-4 flex">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="?playlist=&amp;mute=0&amp;autoplay=0&amp;loop=no&amp;controls=0&amp;start=0&amp;end="
            aria-label="video-popup"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition"
          >
            <i className="icon icon-play-button text-2xl"></i>
            <span>Our Demos</span>
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="relative flex justify-center items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('/wave.png')" }}
        ></div>

        {/* Foreground Image */}
        <Image
          width={800}
          height={798}
          src="https://askproject.net/foices/wp-content/uploads/sites/91/2022/07/singing-practice-XTLY279-1.png"
          alt="Singing Practice"
          className="rounded-lg  z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
