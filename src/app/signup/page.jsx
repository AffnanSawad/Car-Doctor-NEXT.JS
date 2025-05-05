"use client"

import { ImFacebook2 } from "react-icons/im";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const page = () => {

  
    const handleSignUp = async(event) => {

        event.preventDefault();

        const newUser = {

           name : event.target.name.value ,
           email : event.target.name.value ,
           password : event.target.password.value ,
           confirmPassword :event.target.confirmPassword.value
        }
        console.log(newUser);
        event.target.reset()



      
        
    }


    
    



  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-200 via-green-200 to-lime-200
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
          <div className="w-full lg:w-1/2 transform transition duration-300 hover:translate-2 hover:shadow-3xl">
            <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md mx-auto w-full">
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-indigo-600 mb-8">
                Sign Up Now !
              </h2>

              <form onSubmit={handleSignUp} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="w-full px-4 py-2  text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

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
<div>
  <label className="block text-sm font-semibold text-gray-700 mb-1 mt-5">
    Confirm Password
  </label>
  <input
    type="password"
    name="confirmPassword"
    placeholder="Re-enter your password"
    className="w-full px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    required
  />
</div>
                </div>

                {/* Sign Up Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
                  >
                   Sign Up
                  </button>
                </div>

                {/* Sign Up Prompt */}
                <p className="text-center text-sm mt-4 font-medium text-gray-700">
                  Already Registered ? {" "}
                  <Link href="/loggedin" className="text-indigo-600 hover:underline">
                    Please Log In first!
                  </Link>
                </p>

            <hr />

            <h1 className="text-2xl font-bold text-center text-black underline">Or , Sign Up With</h1>

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
