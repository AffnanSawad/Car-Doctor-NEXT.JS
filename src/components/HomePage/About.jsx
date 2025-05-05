import Image from "next/image";
import Link from "next/link";


const About = () => {
    return (
       
       
       
       <div className="py-10 px-4 md:px-10 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left - Image */}
          <div className="relative w-full h-full flex justify-center">
            <div className="relative w-[250px] h-[350px] md:w-[300px] md:h-[400px]">
              <Image
                src="/assets/images/about_us/person.jpg"
                alt="About Us"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
      
          {/* Right - Content */}
          <div className="space-y-5 text-center lg:text-left">
           
            <h2 className="text-3xl text-orange-600 md:text-4xl font-bold">
              We Are Qualified & Experienced<br />In Car Repairing
            </h2>
            <p className="text-gray-600 font-bold">
              With over a decade of experience, our certified mechanics provide expert car diagnostics,
              repairs, and maintenance. We take pride in offering honest service, quality parts, and
              fast turnaround times.
            </p>
            <p className="text-gray-600 font-bold">
              Whether it's routine servicing or a major repair, your car is in safe hands. Visit our shop or
              contact us for a quote.
            </p>
            <Link href='/about'>
            
            <button className="btn btn-dash btn-error">Get More Info</button>
            
            </Link>
          </div>
        </div>
      </div>
      

    );
};

export default About;