import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "public/logo.png";
import {  AiOutlineDownload } from "react-icons/ai"

const Navbar = () => {
  return (
    <div className=" bg-white z-50 sticky top-0">1
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image alt="event" src={Logo} className="w-[200px]" />
          </a>
          <span className="ml-3 text-xl">IT ENGINEER</span>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-black-700">
              About
            </Link>
            <Link href={"#skil"} className="mr-5 hover:text-black-700">
              Skills
            </Link>
            <Link href={"#project"} className="mr-5 hover:text-black-700">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-black-700">
              Contact
            </Link>
          </nav>
          <a href="/cv/resume.pdf">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Download CV
           <span className="text-xl ml-2 text-black"> 
           <AiOutlineDownload /></span>
              </button>
              </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
