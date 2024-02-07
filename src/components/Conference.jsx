import React from "react";

const Conference = () => {
  return (
    <>
      <div className=" lg:bg-[#ffffff] bg-[#F59330]" id="SEHEDULE" data-aos="zoom-in-up">
        <div className="container 2xl:max-w-[1459px] mx-auto lg:px-3  lg:translate-y-[50%]">
          <div className="bg-[#F59330] lg:rounded-[65px] xl:pe-[45px] lg:pt-[30px] lg:pb-[32px] xl:ps-[96px] lg:px-5 flex lg:flex-row flex-col lg:gap-0 gap-2 justify-between items-center px-6 md:py-[96px] sm:py-[60px] pb-[42px] pt-[30px]">
            <h3 className="font-semibold text-[30px] leading-[45px] text-white lg:text-start text-center">
              Conference Attendee
            </h3>
            <div className="flex lg:flex-row flex-col items-center sm:gap-5 gap-4">
              <p className="text-white font-bold text-[30px] leading-[45px]">
                $700
              </p>
              <button className="text-black font-normal md:text-[24px] text-[20px] leading-[36px] md:py-[17px] py-3 md:px-[40.5px] px-8 bg-white rounded-[78px] hover:shadow-[0px_5px_10px_0px_white] transition-all duration-500 ease-in-out">
                EXPIRED
              </button>
              <button className="text-white font-normal md:text-[24px] text-[20px] leading-[36px] md:py-[17px] py-3 md:px-[55px] px-[86px] bg-black rounded-[78px] hover:shadow-[0px_5px_10px_0px_black] transition-all duration-500 ease-in-out">
                VIEW SCHEDULE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conference;
