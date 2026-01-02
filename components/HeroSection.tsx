const HeroSection = () => {
  return (
    <main className="hero-section flex bg-amber-500 flex-col items-center justify-center gap-8 p-6 sm:flex-row-reverse sm:gap-16 sm:p-16">
      <div className="image-container w-full h-full ">
        {/* Mobile */}
        <img
          src="/images/image-hero-mobile.png"
          alt="hero-illustration"
          className="w-full h-auto block sm:hidden"
        />

        {/* Desktop */}
        <img
          src="/images/image-hero-desktop.png"
          alt="hero-illustration"
          className="w-full h-auto hidden sm:block"
        />
      </div>
      <div className="description-container flex flex-col items-center ">
        <div className="">
          <h1 className="text-[3.75rem] font-bold sm:text-[4.75rem] ">
            Make remote work
          </h1>
          <p className="text-[1.85rem] text-center sm:text-start text-gray-600 pt-5">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="btn text-[2.65rem] sm:text-[1.75rem] bg-black text-white mt-12 py-6 px-14  rounded-[2.25rem] hover:bg-white hover:text-black">
            Learn more
          </button>
        </div>

        <div className="client-logo-container shrink-0 w-full h-full flex gap-15 pt-7">
          <div className="client-logos flex">
            <img src="/images/client-databiz.svg" alt="databiz-logo" />
            <img src="/images/client-audiophile.svg" alt="audiophile-logo" />
            <img src="/images/client-meet.svg" alt="meet-logo" />
            <img src="/images/client-maker.svg" alt="maker-logo" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
