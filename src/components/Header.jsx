import React, { useState } from "react";
import WebLogo from "../assets/images/webp/WebLogo.webp";
import MeetingRoom from "../assets/images/webp/MeetingImg.webp";
import TopLeftShape from "../assets/images/webp/LeftTopSideShape.webp";
import BottomLeftShape from "../assets/images/webp/LeftBottomSideShape .webp";
import TopRightShape from "../assets/images/webp/RightTopSideShape.webp";
import bottomRightShape from "../assets/images/webp/RightBottomSideShape.webp";
import SmallHeroImg from "../assets/images/webp/SmallHeroImg.webp";

const Header = () => {
  const [show, setShow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src={TopLeftShape}
          alt="TopLeftShape"
          className="w-full 2xl:max-w-[580px] max-w-[430px] absolute top-0 xl:left-0 lg:left-[-15%] md:left-[-30%] sm:left-[-40%] max-sm:left-[-57%] z-[1]"
        />
        <img
          src={BottomLeftShape}
          alt="BottomLeftShape"
          className="w-full 2xl:max-w-[1126px] max-w-[1000px] absolute bottom-0 xl:left-0 lg:left-[-50%] md:left-[-44%] sm:left-[-50%] max-sm:left-[-49%] z-[1] "
        />
        <img
          src={TopRightShape}
          alt="TopRightShape"
          className="w-full 2xl:max-w-[610px] max-w-[500px] absolute top-0 xl:right-0 lg:right-[-22%] sm:right-[-55%] md:right-[-40%] z-[2] max-2xl:z-[-1] max-sm:right-[-66%]"
        />
        <img
          src={bottomRightShape}
          alt="bottomRightShape"
          className="w-full 2xl:max-w-[816px] max-w-[740px] absolute bottom-0 xl:right-0 lg:right-[-30%] md:right-[-53%] sm:right-[-50%] z-[1] max-sm:right-[-50%]"
        />
        <div className="container 2xl:max-w-[1638px] mx-auto lg:px-3 px-6">
          <nav className="flex items-center justify-between relative z-[4] xl:py-0 sm:py-6 pt-2.5 pb-7">
            <a href="#">
              <img
                src={WebLogo}
                alt="WebLogo"
                className="2xl:max-w-[301px] xl:max-w-[170px] lg:max-w-[130px] max-w-[60px] w-full 2xl:translate-y-[77px] xl:translate-y-[32px]"
              />
            </a>
            <div className="flex 2xl:gap-10 gap-8 items-center">
              <ul
                className={`${
                  show ? "left-[-100%]" : "left-0 max-lg:bg-[#E8EFF5]"
                } flex items-center 2xl:gap-16 lg:gap-10 gap-7 flex-row max-lg:fixed max-lg:flex-col top-0 max-lg:w-full max-lg:h-full max-lg:min-h-screen max-lg:justify-center transition-all ease-linear duration-300}`}
              >
                <li onClick={() => setShow(!show)}>
                  <a
                    href="#SEHEDULE"
                    className="font-normal text-[24px] leading-[36px] text-[#1A1A1A] hover:after:w-full after:mx-auto after:right-0 after:w-0 after:absolute after:bg-[#1A1A1A] after:h-[2px] relative after:left-[0] after:bottom-0 after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    SEHEDULE
                  </a>
                </li>
                <li onClick={() => setShow(!show)}>
                  <a
                    href="#SPEAKERS"
                    className="font-normal text-[24px] leading-[36px] text-[#1A1A1A] hover:after:w-full after:mx-auto after:right-0 after:w-0 after:absolute after:bg-[#1A1A1A] after:h-[2px] relative after:left-[0] after:bottom-0 after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    SPEAKERS
                  </a>
                </li>
                <li onClick={() => setShow(!show)}>
                  <a
                    href="#SPONSORS"
                    className="font-normal text-[24px] leading-[36px] text-[#1A1A1A] hover:after:w-full after:mx-auto after:right-0 after:w-0 after:absolute after:bg-[#1A1A1A] after:h-[2px] relative after:left-[0] after:bottom-0 after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    SPONSORS
                  </a>
                </li>
                <li onClick={() => setShow(!show)}>
                  <a
                    href="#VENUE"
                    className="font-normal text-[24px] leading-[36px] text-[#1A1A1A] hover:after:w-full after:mx-auto after:right-0 after:w-0 after:absolute after:bg-[#1A1A1A] after:h-[2px] relative after:left-[0] after:bottom-0 after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    VENUE
                  </a>
                </li>
                <li className="lg:hidden block font-normal text-[24px] leading-[36px] text-[#F0F0F0] py-[15px] px-[63px] bg-[#EE612F] rounded-[50px]">
                  <a href="">REGISTER NOW</a>
                </li>
              </ul>
              <a
                href=""
                className="font-normal text-[24px] leading-[36px] text-[#F0F0F0] py-[15px] 2xl:px-[63.9px] px-[35px] bg-[#EE612F] rounded-[50px] lg:block hidden hover:text-white transition-all duration-500 ease-linear hover:shadow-[0px_5px_10px_0px_#EE612F]"
              >
                REGISTER NOW
              </a>
              <div
                onClick={() => setShow(!show)}
                className="cursor-pointer lg:hidden w-[26px] sm:h-[20px] h-[17px] relative z-[6] flex justify-between flex-col"
              >
                <span
                  className={`${
                    show
                      ? ""
                      : " rotate-[50deg] translate-y-[12px] sm:translate-y-[16px]"
                  } bg-[#ffffff] h-[3px] w-full duration-300 ease-linear transition-all`}
                ></span>
                <span
                  className={`${
                    show ? "" : "hidden"
                  } bg-[#ffffff] h-[3px] w-full duration-300 ease-linear transition-all`}
                ></span>
                <span
                  className={`${
                    show ? "" : "rotate-[-50deg] translate-y-[-50%]"
                  } bg-[#ffffff] h-[3px] w-full duration-300 ease-linear transition-all`}
                ></span>
              </div>
            </div>
          </nav>
          <div className="relative 2xl:-translate-y-[10%] xl:-translate-y-[4%] z-[1] 2xl:pb-0 pb-10">
            <img
              src={MeetingRoom}
              alt="MeetingRoom"
              className="w-full max-w-[1614px] mx-auto sm:block hidden" data-aos="zoom-in-up"
            />
            <img
              src={SmallHeroImg}
              alt="SmallHeroImg"
              className="w-full rounded-[10px] mx-auto sm:hidden block" data-aos="zoom-in-up"
            />
            <h1 className="font-black 2xl:text-[90px] xl:text-[75px] md:text-[60px] text-[48px] lg:leading-[135px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              PHP[TEK] 2024
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
