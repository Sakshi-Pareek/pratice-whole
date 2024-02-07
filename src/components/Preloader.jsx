import React from "react";
import { Loader } from "./Icon";

const Preloader = () => {
  return (
    <>
      <div className="bg-[#F59330] min-h-screen fixed flex flex-col justify-center items-center left-0 right-0">
        <Loader />
      </div>
    </>
  );
};

export default Preloader;
