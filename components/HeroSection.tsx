const HeroSection = () => {
  return (
    <main className="hero-section flex flex-col items-center justify-center gap-8 p-6 md:flex-row-reverse md:gap-16 md:p-16">
      <div className="image-container w-full h-full">
        <img
          src="/images/image-hero-mobile.png"
          alt="hero-illustration"
          className="w-full h-auto"
        />
      </div>
      <div className="description-container flex flex-col items-center">
        <h1 className="text-[3.75rem] font-bold md:text-[7.75rem]">
          Make remote work
        </h1>
        <p className="text-[1.85rem] text-center text-gray-600 md:text-[2rem] pt-5">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="btn text-[2.65rem] bg-black text-white mt-12 py-6 px-14  rounded-[2.25rem] hover:bg-white hover:text-black">
          Learn more
        </button>
      </div>
      <div className="client-logo-container w-full flex items-center justify-center gap-15 pt-7">
        <img
          className="size-29"
          src="/images/client-databiz.svg"
          alt="databiz-logo"
        />
        <img src="/images/client-audiophile.svg" alt="audiophile-logo" />
        <img src="/images/client-meet.svg" alt="meet-logo" />
        <img src="/images/client-maker.svg" alt="maker-logo" />
      </div>
    </main>
  );
};

export default HeroSection;
