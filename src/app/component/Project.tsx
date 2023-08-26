import Image from "next/image";
import Link from "next/link";



const Project = () => {
  return (
    <div id={"project"}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900">
              My Project
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-10">
            {/*project 1*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer ">
              <div className="flex relative">
                <Image
                  alt="project"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  width={500}
                height={500}
                  src={require('../../../public/project/pic.jpeg')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    E-Commerce Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    COMMERCE
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is the project which I've fro those who owns a
                    E-commerce business.
                  </p>
                  <Link target="blank" href={""}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
             {/*project 2*/}
             <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer ">
              <div className="flex relative">
                <Image
                  alt="project"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  width={500}
                height={500}
                  src={require('../../../public/project/pic2.jpeg')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Typescript Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    TYPESCRIPT
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is the my typescript project which is solve about Questions 45.
                  </p>
                  <Link target="blank" href={""}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/*project 3*/}
            <div className="lg:w-1/3 sm:w-1/3 p-5 cursor-pointer ">
              <div className="flex relative">
                <Image
                  alt="project"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  width={500}
                height={500}
                  src={require('../../../public/project/pic3.jpeg')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    PersonalWebSite Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    I'm create PersonalWebSite.
                  </p>
                  <Link target="blank" href={""}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
