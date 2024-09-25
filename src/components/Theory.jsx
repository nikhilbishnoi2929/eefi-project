import Icons from "./common/Icon";
import { THEORY_DATA } from "./common/Helper";
import lineImage from "../assets/images/webp/theroy-image.webp";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Theory = () => {
  useEffect(() => {
    gsap.fromTo(
      ".game_text",
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
        delay: 0.2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".game_text",
          start: "top 100%",
          end: "bottom 50%",
        },
      }
    );
    gsap.fromTo(
      ".game_right",
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
          trigger: ".game_right",
          start: "top 100%",
          end: "bottom 50%",
        },
      }
    );
  }, []);
  return (
    <div
      className="sm:py-[68px] py-12 bg-theory-bg bg-cover bg-fixed -mt-1"
      id="theory"
    >
      <div className="container max-w-[1168px] mx-auto px-3 my-1 sm:my-0">
        <div className="flex items-center gap-6 max-sm:gap-4 lg:flex-row flex-col justify-between">
          <div className="max-w-[572px] game_text w-full flex flex-col sm:items-center lg:items-start">
            <h2 className="machice_bold game_text font-extrabold sm:leading-shadow_xl text-text_lg leading-10 sm:text-text_xl sm:text-center lg:text-left text-white">
              (E,E) Game Theory: An UPGRADE from (3,3)
            </h2>
            <p className="sm:mt-11 max-sm:text-sm game_text mt-6 text-white font-raleway capitalize text-base font-normal sm:text-center lg:text-left  italic max-w-[515px]">
              Remember (3,3) at its core was about social coordination. Or,
              people working together to achieve a common outcome or goal. (E,E)
              is the same. But with (E,E) people are working together not to
              grow a robust treasury that would back a decentralized stablecoin
              but instead to establish the first ever decentralized amplified
              yield token… $EEFI. A token that can produce yield in any market
              condition.
            </p>
            <p className="sm:mt-3 max-sm:text-sm game_text lg:mt-4 mt-2 font-raleway text-white text-base capitalize font-normal sm:text-center lg:text-left  italic max-w-[502px]">
              To achieve this (E,E) has everyone work together by interacting
              with and supporting its ecosystem flywheel: Vaults, Bonds, Markets
              and other components. Interaction with the (E,E) Flywheel will
              help build a treasury of what we term high quality “growth
              assets”. Assets that are revenue bearing, interest bearing, Real
              Yield bearing or Rebase bearing. Where the ‘growth’ aka the yields
              of these assets are used to act as long term decentralized
              leverage on EEFI’s value. This is (E,E). This is sustainable. This
              is the UPGRADE.
            </p>
          </div>
          <div className="max-w-[530px] game_right relative w-full mt-6 lg:mt-0">
            <div className="mx-auto w-[114px] relative z-[1] sm:w-[129px] bg-white rounded h-[93px] grid place-items-center">
              <div className="sm:w-[116px] w-[102px] h-20 rounded bg-blue flex flex-col justify-center items-center">
                <p className="machice_bold font-extrabold text-white text-xl sm:text-2xl text-center">
                  YOU
                </p>
                <p className="font-normal font-raleway text-sm text-white text-center">
                  (Flywheel)
                </p>
              </div>
            </div>
            <div className="sm:pt-10 relative z-[1] pt-7 flex flex-wrap justify-between">
              {THEORY_DATA.map((items, idx) => (
                <div
                  key={idx}
                  className={`mt-9 flex gap-3 sm:gap-6 items-start w-full ${
                    idx === 2 || idx === 3
                      ? "justify-center gap-3 sm:gap-9"
                      : "justify-between"
                  }`}
                >
                  {items.items.map((data, index) => (
                    <div
                      key={index}
                      className="sm:max-w-[160px] max-w-[103px] h-full shadow-text_xl w-full px-2 pb-2 min-h-[130px] bg-white pt-[18px] rounded-md flex flex-col items-center"
                    >
                      <Icons
                        className="max-w-6 w-full md:max-w-7"
                        iconName={data.icon}
                      />
                      <p className="mt-2 machice_bold max-sm:leading-4 capitalize font-extrabold text-black text-sm sm:leading-5 sm:text-base text-center">
                        {data.title}
                      </p>
                      <p className="font-normal font-raleway capitalize leading-4 text-sm text-black max-w-[123px] text-center mt-1">
                        {data.text}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <img
              src={lineImage}
              alt="lineImage"
              className="sm:top-0 -top-5 max-sm:-top-[14px] absolute left-0 w-full h-[104%] sm:h-[101%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theory;
