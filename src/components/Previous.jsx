import React from "react";
import { Comma } from "./Icon";
import CommaImg from "../assets/images/webp/comma.webp";

const Previous = () => {
  return (
    <>
      <div className="bg-previousbg bg-no-repeat xl:bg-full bg-coner bg-center lg:pt-[167px] xl:pb-[116px] md:py-[96px] sm:py-[60px] pt-[53px] pb-[79px]">
        <div className="container 2xl:max-w-[1330px] mx-auto lg:px-3 px-6">
          <div
            className="xl:border-[3px] border-white xl:pt-[58px] xl:pb-[35px] xl:ps-[93px] xl:pe-[103px] rounded-[147px] flex flex-col justify-center items-center relative z-0"
            data-aos="zoom-in-up"
          >
            <img src={CommaImg} alt="CommaImg" className=" absolute top-[-7%] max-w-[73px] mx-auto"/>
            <Comma />
            <p
              className="max-w-[1109.65px] mx-auto font-black lg:text-[39px] md:text-[30px] sm:text-[26px] text-[20px] text-center lg:leading-[58px] text-white xl:mt-0 mt-2.5"
              data-aos="zoom-in-up"
            >
              This was my first introduction to php[architect]’s conferences,
              and they’ve quickly become my favorites. A great balance of fun
              and education, structured and social. The organizers obviously
              care about the conference and the enjoyment of everyone who
              attends, and I can’t wait for the next one!{" "}
            </p>

            <p
              className="text-center text-white font-bold md:text-[36px] text-[20px] xl:leading-[54px] xl:mt-[26px] mt-[36px]"
              data-aos="zoom-in-up"
            >
              ― Previous Attendee
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Previous;
