"use client";
import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className={`h-[100vh] relative flex justify-center items-center`}>
        <div className="loader"></div>
        <Image
          src={"/logo-icon.png"}
          width={500}
          height={500}
          alt="logo"
          className="favicon"
        />
        <div className="loaderwords"></div>
      </div>
    </div>
  );
};

export default Loader;
