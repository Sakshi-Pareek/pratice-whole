import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideFirst from "../assets/images/webp/sliderfirst.webp";
import Slidesec1 from "../assets/images/webp/slideSec1.webp";
import Slidesec2 from "../assets/images/webp/slidesec2.webp";
import SliderThird from "../assets/images/webp/slidethird.webp";
import SlideForth1 from "../assets/images/webp/slideforth1.webp";
import SlideForth2 from "../assets/images/webp/slideforth2.webp";
import Slide1 from "../assets/images/webp/slide1.webp";
import Slide2 from "../assets/images/webp/slide2.webp";
import Slide4 from "../assets/images/webp/slide4.webp"

import Slider from "react-slick";

const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        className="xl:pt-[132px] xl:pb-[124px] md:py-[96px] py-[60px]"
        id="VENUE"
      >
        <h3 className="font-black text-[#F59330] lg:text-[60px] md:text-[50px] text-[40px] md:leading-[90px] text-center md:mb-[23px] mb-4 lg:px-3 px-6" data-aos="zoom-in-up">
          ABOUT PHP[TEK]
        </h3>
        <p className="text-black max-w-[1419px] font-normal lg:text-[30px] md:text-[26px] sm:text-[20px] text-[16px] md:leading-[45px] sm:leading-[30px] leading-[24px] mx-auto text-center lg:px-3 px-6" data-aos="zoom-in-up">
          We are the longest-running web developer conference in the United
          States that has a focus on the PHP programming language. The event is
          broken up into multiple days. The main conference happens over the
          course of 3 days (May 16-18) and includes keynotes, talks, and
          networking options. It will be broken into three tracks and will cover
          a range of topics.
        </p>
        <div className="2xl:mt-[118px] xl:mt-[75px] mt-10 h-full max-w-[1920px] mx-auto flex-wrap flex-row lg:justify-between sm:flex hidden mb-4 lg:px-0 px-6 max-lg:gap-1 justify-center">
          <div className="lg:w-[19.79%] w-[43%]">
            <img src={SlideFirst} alt="SlideFirst" className="w-full" data-aos="zoom-in-up"/>
          </div>
          <div className="flex flex-col justify-between lg:w-[19.79%] w-[43%]">
            <img src={Slidesec1} alt="Slidesec1" className="w-full" data-aos="zoom-in-up"/>
            <img src={Slidesec2} alt="Slidesec2" className="w-full"data-aos="zoom-in-up"/>
          </div>
          <div className="lg:w-[32.08%] w-[43%]">
            <img
              src={SliderThird}
              alt="SliderThird"
              className="w-full h-full" data-aos="zoom-in-up"
            />
          </div>
          <div className="flex flex-col justify-between gap-1 lg:w-[27.24%] w-[43%]">
            <img src={SlideForth1} alt="SlideForth1" className="w-full" data-aos="zoom-in-up"/>
            <img src={SlideForth2} alt="SlideForth2" className="w-full" data-aos="zoom-in-up"/>
          </div>
        </div>
        <div className="px-6 container mx-auto mt-[77px] sm:hidden block" data-aos="zoom-in-up"> 
          <Slider {...settings}>
            <div>
              <img src={Slide1} alt="Slide1" className="w-full mb-2.5" />
            </div>
            <div>
              <img src={Slide2} alt="Slide2" className="w-full mb-2.5" />
            </div>
            <div>
              <img src={Slide4} alt="Slide4" className="w-full mb-2.5" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default About;
