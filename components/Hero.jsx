import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen dark:text-black text-gray-100"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2014/10/22/17/47/keyboard-498396_1280.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center ">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Welcome to Our Blog</h1>
            <p className="mb-5">
              Discover exciting stories and articles on various topics. Quench
              your curiosity and expand your knowledge with our carefully
              crafted content.
            </p>
            <Button><a href="#latest">Get Started</a></Button>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
