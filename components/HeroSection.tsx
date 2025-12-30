import React from "react";

const HeroSection = () => {
  return (
    <main className="hero-section flex flex-col items-center justify-center gap-8 p-6 md:flex-row md:gap-16 md:p-16">
      <div className="image-container w-full h-full">
        <img
          src="/images/image-hero-mobile.png"
          alt="hero-illustration"
          className="w-full h-auto"
        />
      </div>
      <div className="description-container">
        <h1 className="text-4xl font-bold">Make remote work</h1>
        <p className="text-xl text-gray-600">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="btn text-5 bg-black text-white py-2 px-4 rounded-xl">
          Learn more
        </button>
      </div>
    </main>
  );
};

export default HeroSection;
