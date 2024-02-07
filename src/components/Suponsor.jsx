import React from "react";

const Suponsor = () => {
  return (
    <>
      <div className="sm:bg-cafearea bg-verticallayer 2xl:bg-full sm:bg-cover bg-full bg-no-repeat 2xl:bg-left bg-center sm:min-h-[415px] min-h-[722px] mt-[27px] relative" id="SPONSORS">
        <div className="2xl:ms-[155px] lg:ms-[80px] max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:px-6 max-lg:container absolute sm:top-1/2 sm:-translate-y-1/2 flex-col flex justify-center items-center max-sm:mt-[57px]" >
          <h3 className="font-black text-white max-w-[854px] lg:text-[36px] md:text-[32px] sm:text-[26px] text[20px] lg:leading-[54px] leading-[30px] md:mb-[32px] mb-4 text-center max-sm:max-w-[250px]" data-aos="zoom-in-up">
            Interested in becoming a sponsor and getting exposure to our
            audience?
          </h3>
          <button
            className="text-white font-normal md:text-[24px] text-[20px] leading-[36px] md:py-[17px] py-3 sm:px-[55px] px-[63.5px] bg-black rounded-[78px] hover:shadow-[0px_5px_10px_0px_black] transition-all duration-500 ease-in-out
          " data-aos="zoom-in-up"
          >
            SPONSOR THE EVENT
          </button>
        </div>
        {/* <img
          src={OrangeLayer}
          alt="OrangeLayer"
          className="2xl:max-w-[1071.47px] lg:max-w-[800px] w-full relative z-[1] "
        />
        
        <img
          src={CaffetArea}
          alt="CaffetArea"
          className="lg:max-w-[1229px] w-full lg:translate-x-[-31%] relative z-0"
        /> */}
      </div>
    </>
  );
};

export default Suponsor;
