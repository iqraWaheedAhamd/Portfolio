'use client'
import Image from "next/image";
import React from "react";
import img1 from "public/img1.jpg";
import Bg from "public/bg.jpg";
import Typewriter from "typewriter-effect";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="text-gray-600 body-font  bg-cover bg-center custom-image ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            I am
            <br className="  hidden lg:inline-block " />
                <Typewriter
                options={{
                  strings: [
                    "IQra Waheed Ahmad!",
                    "Web Developer",
                    "IT Engineer",
                    " UL/UX Designer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              </h1>
          <div className="w-[100px] h-[2px] bg-blue-700 mb-4"></div>
          <p className="mb-8 leading-relaxed text-white">
            I have a strong understanding of the software development life cycle
            and have worked on projects ranging from simple websites to complex
            web applications. I am well-versed in responsive design, optimizing
            websites for various devices and screen sizes, ensuring
            accessibility and usability for all users.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Contact
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center  rounded-full mx-auto w-[30rem]"
            alt="hero"
            width={800}
            height={800}
            src={img1}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
