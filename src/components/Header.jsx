import React, { useEffect, useState } from "react";
import { DROP_DOWN, NAV_ITEM } from "./common/Helper";
import logo from "../assets/images/webp/logo.webp";
import Icons from "./common/Icon";
import { gsap } from "gsap";
import "animate.css";
const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      ".head",
      {
        y: -100,
        opacity: 0,
        duration: 1,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
        stagger: 0.6,
        scrollTrigger: {
          trigger: ".head",
          start: "top center",
          end: "bottom 50%",
        },
      }
    );
  }, []);
  const [isDropdownOpen, setDropdown] = useState(false);
  const toggle_Drop = () => {
    setDropdown(!isDropdownOpen);
  };
  const [show, setShow] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        document.body.style.overflow = show ? "" : "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [show]);
  const handle_Click = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (window.innerWidth < 992) {
      setShow(!show);
    } else {
      e.preventDefault();
    }
  };
  return (
    <>
      <div className="container mx-auto px-3 max-w-[1176px] relative z-[2]">
        <div className={`${!show ? "min-h-screen" : ""} `}>
          <div className="flex justify-between items-center bg-transparent py-1.5">
            <a href="#">
              <img
                className="cursor-pointer w-[68px] head"
                src={logo}
                alt="#"
              />
            </a>
            <div
              className={`flex flex-col lg:flex-row items-center gap-7 lg:gap-6 max-lg:fixed max-lg:justify-center duration-300 ease-linear top-0 max-lg:-right-full max-lg:backdrop-blur-[90px] max-lg:z-[90] max-lg:h-screen max-lg:w-full ${
                show ? "" : " !right-0"
              }`}
            >
              {NAV_ITEM.map((item, index) => (
                <a
                  key={index}
                  href={`/${item.url}`}
                  onClick={(e) => handle_Click(e, item.url.substring(1))}
                  className="font-normal head font-raleway lg:text-base text-lg leading-5 text-white duration-300 "
                >
                  {item.text}
                </a>
              ))}
              <div className="relative">
                <button
                  onClick={toggle_Drop}
                  className="font-normal head font-raleway lg:text-base text-lg leading-5 text-white flex items-center space-x-1"
                >
                  <span className="font-normal">More</span>
                  <Icons iconName="downIcon" isDropdownOpen={isDropdownOpen} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute -left-2 mt-2 w-20 bg-white rounded-lg shadow-lg">
                    {DROP_DOWN.map((obj, index) => (
                      <a
                        key={index}
                        href={`/${obj.text}`}
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-lg"
                      >
                        {obj.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <button className="sm:p-[13px_32px] head p-[12px_24px] lg:hidden border lg:text-blue hover:text-blue hover:bg-white text-white lg:border-blue border-white rounded-lg font-medium text-base leading-4  duration-500  ">
                Enter App
              </button>
            </div>
            <button
              className="sm:p-[13px_32px] head p-[12px_24px] hidden lg:block border hover:border-white hover:bg-blue hover:text-white
              lg:text-blue text-white lg:border-blue border-white rounded-lg font-medium text-base leading-4 duration-500"
            >
              Enter App
            </button>
            <button
              aria-label="Toggle Navigation Menu"
              className="cursor-pointer relative w-8 h-7 z-[90] lg:hidden"
              onClick={() => setShow(!show)}
            >
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className={`w-full h-1 rounded-xl bg-white block duration-300 ease-linear absolute ${
                    i === 0
                      ? "top-0 left-0"
                      : i === 1
                      ? "top-1/2 -translate-y-1/2"
                      : "bottom-0 left-0"
                  } ${
                    i === 0 && !show ? "rotate-45 top-1/2 -translate-y-1/2" : ""
                  } ${
                    i === 2 && !show
                      ? "-rotate-45 top-1/2 -translate-y-1/2 bottom-auto"
                      : ""
                  } ${i === 1 && !show ? "hidden" : "flex"}`}
                ></span>
              ))}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
