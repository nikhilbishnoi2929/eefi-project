import React, { useEffect, useState } from "react";
import pageLogo from "../assets/images/webp/logo.webp";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const PreLoader = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    gsap.fromTo(
      ".preloaderLogo",
      {
        scale: 0,
        duration: 1,
      },
      {
        scale: 1,
        duration: 1,
      }
    );
    document.body.classList.add("overflow-hidden");
    const Timer = setTimeout(() => {
      setVisible(false);
      document.body.classList.remove("overflow-hidden");
    }, 2000);
    return () => {
      clearTimeout(Timer);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  if (!visible) return null;
  return (
    <div className="min-h-screen w-full bg-blue z-[100] fixed top-0 left-0 grid place-items-center">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col items-center">
          <img
            src={pageLogo}
            alt="logo"
            className="preloaderLogo relative z-10"
          />
          <h2 className="loader mt-5"></h2>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
