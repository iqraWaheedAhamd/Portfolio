import Image from 'next/image'
import Link from 'next/link'
import img2 from 'public/img2.jpg'

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 mt-9 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 w-5/6">
      <Image
        className="object-cover object-center mb-10 mx-auto w-[30rem] "
        alt="About"
        width={800}
        height={800}
        src={require('../../../public/img2.jpg')}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
        </h1>
           <p className="mb-5 leading-relaxed">
       I've  completed my Matriculation from F.S Model High School , Intermediate from Government College & Bs(Information Technology) Continue from GCT(punjab university)..
      </p>  
      <p className="mb-5 leading-relaxed ">
       Phone No:03xxxxxxx        
       GMail: iqrawaheed213823bs@gmail
      </p>    
      <div className="flex justify-center">
        <a href={"/cv/resume.pdf "}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View VC
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
