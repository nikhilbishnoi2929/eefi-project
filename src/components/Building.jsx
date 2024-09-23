import React from "react";
import Header from "./Header";
import ellipsHero from "../assets/images/webp/main-ellips.webp";
import heroBg from "../assets/images/webp/light-image.webp";
import imageHero from "../assets/images/png/dragon-image.png";
const Building = () => {
  return (
    <div className="relative pb-24 lg:pb-0">
      <img
        className="w-full absolute right-2 bottom-0"
        src={heroBg}
        alt="heroBg"
      />
      <img
        className="absolute left-0 max-xl:-top-4 max-lg:-top-1 max-sm:top-0 xl:max-w-[1170px] lg:max-w-[900px] object-cover lg:h-[720px] xl:h-[810px] h-[600px] max-md:object-cover md:w-full 2xl:hidden block"
        src={ellipsHero}
        alt="#"
      />
      <Header />
      <div className="container mx-auto px-3 max-w-[1176px] mb-20 pb-20 lg:pb-0 lg:mb-0 relative">
        <div className="flex lg:flex-row flex-col xl:-mt-12 relative z-[1]">
          <div className="xl:pt-[182px] lg:pt-[118px] sm:pt-20 pt-14">
            <h1 className="text-white max-w-[335px] font-medium sm:text-5xl text-4xl uppercase lg:text-text_2xl machina_regular md:text-6xl sm:max-w-[463px] lg:leading-[95px] leading-[50px] sm:leading-[60px]">
              Building elastic Protocol
            </h1>
            <p className="font-normal font-raleway text-base leading-6 text-white max-w-[524px] md:my-6 my-4 capitalize">
              An ecosystem of unique yield strategies that help you earn yield,
              amplify, and stretch it across all market conditions
            </p>
            <a
              href="/"
              className="font-bold text-lg text-white leading-5 underline"
            >
              Audited by Omniscia
            </a>
          </div>
          <img
            className="xl:max-w-[635px] h-[502px] xl:h-[876px] md:max-w-[450px] md:h-auto md:w-full absolute lg:relative top-10 md:-top-10 lg:top-5 right-0 -z-10 opacity-50 sm:opacity-820 w-[335px] lg:opacity-100 pointer-events-none lg:pt-0 pt-9"
            src={imageHero}
            alt="imageHero"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 absolute top-12 right-7">
        {[...Array(5)].map((_, idx) => (
          <span
            key={idx}
            className="w-2.5 h-2.5 bg-dark-blue rounded-full flex"
          ></span>
        ))}
      </div>
      <img
        className="absolute -top-12 left-[-124px] h-[810px] w-[80%] 2xl:block hidden"
        src={ellipsHero}
        alt="ellipsHero"
      />
    </div>
  );
};

export default Building;
