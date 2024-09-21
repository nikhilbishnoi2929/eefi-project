import React, { useEffect } from "react";
import firstBull from "../assets/images/webp/bull-first.webp";
import fistBear from "../assets/images/webp/bull-second.webp";
import amplifyMan from "../assets/images/webp/amplify-man.webp";
import "animate.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Amplify = () => {
  useEffect(() => {
    gsap.fromTo(
      ".bull",
      {
        x: -100,
        opacity: 0,
        duration: 1,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".bull",
          start: "top 80%",
          end: "bottom 50%",
        },
      }
    );
    gsap.fromTo(
      ".bear",
      {
        x: 100,
        opacity: 0,
        duration: 1,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".bear",
          start: "top 50%",
          end: "bottom 50%",
        },
      }
    );
    gsap.fromTo(
      ".para",
      {
        scale: 0,
        opacity: 0,
        duration: 1,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".para",
          start: "top 80%",
          end: "bottom 50%",
        },
      }
    );
    gsap.fromTo(
      ".amplifyMan",
      {
        y: 100,
        opacity: 0,
        duration: 1,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".amplifyMan",
          start: "top 80%",
          end: "bottom 50%",
        },
      }
    );
  }, []);
  return (
    <div className="bg-amplify-bg bg-no-repeat bg-center bg-cover lg:pt-5 lg:h-[825px] md:h-[640px] sm:h-[556px] h-[520px] relative">
      <div className="container max-w-[1140px] mx-auto px-3 relative">
        <div className="flex justify-center lg:pt-0 pt-3">
          <h2 className="font-plus animate__zoomIn animate__animated text-white font-extrabold lg:text-custom-3xl md:text-4xl sm:text-3xl text-xl xl:leading-[62px] leading-10 md:left-8 text-center font-plus_jakarta max-w-[726px]">
            Amplify and STRETCH GAINS
          </h2>
        </div>
        <div className="flex justify-center items-center lg:mt-[325px] md:mt-[196px] sm:mt-[148px] mt-[110px] relative z-[1]">
          <p className="max-w-[554px] para font-raleway text-white text-sm leading-[22px] font-normal text-center max-sm:backdrop-blur-[40px] max-sm:p-3">
            We take a different balanced approach to finding and creating yield
            opportunities in the everchanging crypto market. Our yield
            strategies help users stay protected and hedged during bear markets
            and amplify yield during bull markets without resorting to leverage
            or other dangerous techniques.
          </p>
        </div>
      </div>
      <img
        className="max-w-[569px] bear w-1/2 md:w-[41%] lg:w-1/2 xl:w-full absolute bottom-14 right-1 xl:right-[10%] pointer-events-none"
        src={fistBear}
        alt="fistBear"
      />
      <img
        className="max-w-[684px] bull w-7/12 md:w-1/2 lg:w-7/12 xl:w-full absolute bottom-14 left-1 xl:left-[10%] pointer-events-none"
        src={firstBull}
        alt="firstBull"
      />
      <img
        className="pointer-events-none amplifyMan max-w-[100px] w-[10%] sm:w-full absolute bottom-14 left-1/2 -translate-x-1/2"
        src={amplifyMan}
        alt="amplifyMan"
      />
    </div>
  );
};

export default Amplify;
