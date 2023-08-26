import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import {SiLinkedin} from "react-icons/si"
import Link from "next/link";
import Logo from "public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image alt="event" src={Logo} className="w-[100px]" />

            <span className="ml-3 text-xl">IT ENGINEER</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 IT ENGINERR
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start px-2 gap-2">
            <Link
              target="blank"
              href={"https://twitter.com/home"}
              className="text-gray-500">
                <AiFillTwitterCircle className="text-3xl text-[blue]" />
            </Link>
            <Link
              target="blank"
              href={"https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"}
              className="text-gray-500">
                <SiLinkedin className="text-3xl text-[black]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
