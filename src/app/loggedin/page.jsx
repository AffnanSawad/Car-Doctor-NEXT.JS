"use client"

import Image from "next/image";
import Link from "next/link";
import { ImFacebook2 } from "react-icons/im";
import { FaGoogle } from "react-icons/fa";


const page = () => {

  
    const handleLogIn = async(event) => {

        event.preventDefault();

        const ExistingUser = {
         
           email : event.target.name.value ,
           password : event.target.password.value ,
           
        }
        console.log(ExistingUser);
        event.target.reset()
    
        
    }





  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-200 via-blue-300 to-indigo-400

 flex items-center justify-center px-4 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16">
          
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/assets/images/login/login.svg"
              alt="Login illustration"
              height={500}
              width={500}
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-10 rounded-3xl  max-w-md mx-auto w-full  transform transition duration-300 hover:translate-2 hover:shadow-3xl ">
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-indigo-600 mb-8">
               Log In Now !
              </h2>

              <form onSubmit={handleLogIn} className="space-y-6">
                {/* Name */}
                

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="********"
                    className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                  {/* Confirm Password */}

                </div>

                {/* Login Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
                  >
                    Log In
                  </button>
                </div>

                {/* Sign Up Prompt */}
                <p className="text-center text-sm mt-4 font-medium text-gray-700">
                  New here?{" "}
                  <Link href="/signup" className="text-indigo-600 hover:underline">
                    Sign up first!
                  </Link>
                </p>


                 <hr />
                
                            <h1 className="text-2xl font-bold text-center text-black underline">Or , Log In With</h1>
                
                            <div className="flex  items-center justify-center gap-10 text-black">
                             
                             <button className="text-black " height={50}>
                             <ImFacebook2 />
                
                             </button>
                
                
                             <button>
                            
                            <FaGoogle/>
                
                             </button>
                
                
                
                            </div>


              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
