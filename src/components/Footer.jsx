import React from "react";
import { FaceBook, LinkedIn, Mail, Twitter } from "./Icon";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-[21px] sm:mt-0 mt-[30px]">
        <a href="https://www.twitter.com" target="_blank">
          <Twitter />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <FaceBook />
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <LinkedIn />
        </a>
        <a href="https://www.google.com" target="_blank">
          <Mail />
        </a>
      </div>
      <ul className="flex max-sm:flex-col items-center justify-center lg:gap-[50px] md:gap-7 gap-4 md:my-[25.49px] mt-4 max-sm:mb-10 px-6">
        <li className="text-[#F59330] font-bold sm:leading-[45px] leading-[21px] lg:text-[30px] md:text-[24px] text-[16px]">
          Code of Conduct
        </li>
        <li className="text-[#F59330] font-bold sm:leading-[45px] leading-[21px] lg:text-[30px] md:text-[24px] text-[16px]">
          Privacy Policy
        </li>
        <li className="text-[#F59330] font-bold sm:leading-[45px] leading-[21px] lg:text-[30px] md:text-[24px] text-[16px]">
          Refund Policy
        </li>
      </ul>
      <p className="text-center sm:mb-[60px] mb-[21px] text-[#26221D] font-normal sm:leading-[45px] leading-[21px] lg:text-[30px] md:text-[24px] text-[16px] px-6">
        © 2024 PHP Architect, LLC
      </p>
    </>
  );
};

export default Footer;
