import { ROADMAP_ITEMS } from "./common/Helper";
import cloudsEllips from "../assets/images/webp/position-clouds.webp";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Roadmap = () => {
  useEffect(() => {
    gsap.fromTo(
      ".roadmap",
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
          trigger: ".roadmap",
          start: "top 90%",
          end: "bottom 50%",
        },
      }
    );
  }, []);
  const isRightAligned = (idx) => idx % 2 !== 0;
  const isIndented = (idx) => [0, 1, 3].includes(idx);
  return (
    <div
      className="bg-roadmap-bg bg-no-repeat bg-cover relative bg-fixed elative py-2 sm:py-10 lg:py-24"
      id="product"
    >
      <div className="container max-w-[1164px] mx-auto px-3 my-12 relative z-[2]">
        <h2 className="font-bold roadmap machice_normal max-sm:leading-[44px] text-center leading-[55px] text-4xl lg:text-text_xl text-white">
          Roadmap
        </h2>
        <div
          className="max-w-[880px] max-lg:max-w-[500px] w-full relative pl-8 sm:pl-24 lg:pl-0 gap-4 flex flex-col lg:gap-0 mx-auto mt-5 sm:mt-14 md:mt-20 lg:mt-[117px] max-lg:items-center"
          id="team"
        >
          {ROADMAP_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={` py-5 sm:py-9 px-3 sm:px-4 max-w-[373px] roadmap relative w-full border border-blue rounded-lg lg:-mt-3 bg-blue-light ${
                isRightAligned(idx) ? "lg:ml-auto" : ""
              }`}
            >
              <p className="font-medium text-xl text-white font-plus_jakarta">
                {item.number}
              </p>
              <div className="mt-4 text-white text-base font-normal">
                <div className="flex items-start">
                  <span className="mx-2.5 font-raleway p-[1.9px] mt-2.5 bg-white rounded-full"></span>
                  <p className="font-normal font-raleway">{item.text}</p>
                </div>
                {item.heading && (
                  <div className="flex items-start">
                    <span className="mx-2.5 font-raleway p-[1.9px] mt-2.5 bg-white rounded-full"></span>
                    <p className="font-normal font-raleway">{item.heading}</p>
                  </div>
                )}
                {item.title && (
                  <div className="flex items-start">
                    <span className="mx-2.5 font-raleway p-[1.9px] mt-2.5 bg-white rounded-full"></span>
                    <p className="font-normal font-raleway ">{item.title}</p>
                  </div>
                )}
                {item.items?.map((e, index) => (
                  <div
                    key={index}
                    className={`text-white font-raleway text-base font-normal ${
                      isIndented(idx) ? "pl-6" : ""
                    }`}
                  >
                    <div className="flex items-start">
                      <span className="mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full"></span>
                      <p className="font-normal font-raleway">{e.title}</p>
                    </div>
                    <div className="flex items-start">
                      <span className="mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full"></span>
                      <p className="font-normal font-raleway">{e.text}</p>
                    </div>
                    {e.data && (
                      <div className="flex items-start">
                        <span className="mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full"></span>
                        <p className="font-normal font-raleway">{e.data}</p>
                      </div>
                    )}
                  </div>
                ))}
                {item.data && (
                  <div className="flex items-start">
                    <span className="mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full"></span>
                    <p className="font-normal font-raleway">{item.data}</p>
                  </div>
                )}
              </div>
              <div
                className={`absolute flex items-center top-0 ${
                  isRightAligned(idx)
                    ? "lg:-left-20 -left-[36px] sm:-left-[67.6px]"
                    : "lg:-right-20 lg:left-auto -left-[36px] sm:-left-[67.6px] lg:flex-row-reverse"
                }`}
              >
                <div className="relative w-6 h-6">
                  <span className="bg-white opacity-10 w-full rounded-full flex h-full"></span>
                  <span className="w-3 h-3 absolute flex bg-blue-medium rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></span>
                </div>
                <div className="w-8 hidden sm:flex justify-between -ml-px">
                  <span className="flex bg-blue-medium h-0.5 w-1"></span>
                  <span className="flex bg-blue-medium h-0.5 w-2"></span>
                  <span className="flex bg-blue-medium h-0.5 w-1"></span>
                </div>
              </div>
            </div>
          ))}
          <span className="flex h-[99%] lg:h-full w-0.5 bg-blue-medium absolute top-3 max-md:left-[57px] max-lg:left-[55px] max-sm:left-2 lg:top-0 left-0 lg:left-1/2 lg:-translate-x-1/2"></span>
        </div>
      </div>
      <img
        src={cloudsEllips}
        alt="cloudsEllips"
        className="w-full pointer-events-none absolute top-[-6px] left-0 -translate-y-1/2"
      />
    </div>
  );
};

export default Roadmap;
