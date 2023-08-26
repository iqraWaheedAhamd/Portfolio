import React from "react";
import {ImCheckboxChecked} from "react-icons/im"
const Skill = () => {
  return (
    <div id="skil">
      <section className="text-gray-600 body-font">
        <div className="container py-24 my-4">
          <div className="flex flex-col text-center w-full ">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-2">
              SKILLS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My skills
            </h1>
          </div>

          <div className="container px-5 py-24 -mt-10">
            <div className="flex items-center w-[100%] lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
            <span className="text-5xl font-bold text-purple-600"><ImCheckboxChecked /></span>
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  HTML
                </h2>
              </div>
              <div className="flex-grow">
                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                  <div className="absolute bg-blue-600 h-1 rounded-xl w-[100%]"></div>
                </div>
                <p className="font-bold text-blue-600 text-right">100%</p>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 w-[100%] mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
            <span className="text-5xl font-bold text-purple-600"><ImCheckboxChecked /></span>
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  CSS
                </h2>
              </div>
              <div className="flex-grow">
                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                  <div className="absolute bg-blue-600 h-1 rounded-xl w-[90%]"></div>
                </div>
                <p className="font-bold text-blue-600 text-right">90%</p>
              </div>
            </div>
            <div className="flex items-center w-[100%] lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col   ">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
            <span className="text-5xl font-bold text-purple-600"><ImCheckboxChecked /></span>
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Javascript/Typescript
                </h2>
              </div>
              <div className="flex-grow">
                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                  <div className="absolute bg-blue-600 h-1 rounded-xl w-[80%]"></div>
                </div>
                <p className="font-bold text-blue-600 text-right">80%</p>
              </div>
            </div> 
           <a href={"/cv/resume.pdf "}>
            <button className="flex mx-auto mt-20 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
              View CV
            </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
