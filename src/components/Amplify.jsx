import React from "react";
import firstBull from "../assets/images/webp/bull-first.webp";
import fistBear from "../assets/images/webp/bull-second.webp";
import amplifyMan from "../assets/images/webp/amplify-man.webp";

const Amplify = () => {
  return (
    <div className="bg-amplify-bg bg-no-repeat bg-center bg-cover lg:pt-5 lg:h-[825px] md:h-[640px] sm:h-[556px] h-[520px] relative">
      <div className="container max-w-[1140px] mx-auto px-3 relative">
        <div className="flex justify-center lg:pt-0 pt-3">
          <h2 className="font-plus text-white font-extrabold lg:text-custom-3xl md:text-4xl sm:text-3xl text-xl xl:leading-[62px] leading-10 md:left-8 text-center font-plus_jakarta max-w-[726px]">
            Amplify and STRETCH GAINS
          </h2>
        </div>
        <div className="flex justify-center items-center lg:mt-[325px] md:mt-[196px] sm:mt-[148px] mt-[110px] relative z-[1]">
          <p className="max-w-[554px] font-raleway text-white text-sm leading-[22px] font-normal text-center max-sm:backdrop-blur-[40px] max-sm:p-3">
            We take a different balanced approach to finding and creating yield
            opportunities in the everchanging crypto market. Our yield
            strategies help users stay protected and hedged during bear markets
            and amplify yield during bull markets without resorting to leverage
            or other dangerous techniques.
          </p>
        </div>
      </div>
      <img
        className="max-w-[569px] w-1/2 md:w-[41%] lg:w-1/2 xl:w-full absolute bottom-14 right-1 xl:right-[10%] pointer-events-none"
        src={fistBear}
        alt="fistBear"
      />
      <img
        className="max-w-[684px] w-7/12 md:w-1/2 lg:w-7/12 xl:w-full absolute bottom-14 left-1 xl:left-[10%] pointer-events-none"
        src={firstBull}
        alt="firstBull"
      />
      <img
        className="pointer-events-none max-w-[100px] w-[10%] sm:w-full absolute bottom-14 left-1/2 -translate-x-1/2"
        src={amplifyMan}
        alt="amplifyMan"
      />
    </div>
  );
};

export default Amplify;
