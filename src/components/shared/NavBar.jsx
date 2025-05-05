"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { data: session, status } = useSession();


    console.log(session);

    const NavItems = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Blog", path: "/blog" },
        { title: "Contacts", path: "/contacts" },
    ];

    return (
        <div className="w-full navbar bg-white text-black shadow-sm mx-auto px-4">
            {/* Nav Logo */}
            <div className="navbar-start">
                <Link href="/">
                    <Image alt="navLogo" src="/assets/logo.svg" height={60} width={100} />
                </Link>
            </div>

            {/* Desktop Nav Items */}
            <div className="navbar-center hidden lg:flex">
                <div className="flex space-x-6">
                    {NavItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.path}
                            className="font-semibold hover:text-orange-600 duration-300"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden navbar-end">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 z-50">
                    {NavItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.path}
                            className="py-2 text-lg font-semibold hover:text-orange-600 duration-300"
                            onClick={() => setIsMenuOpen(false)} // Close menu when clicked
                        >
                            {item.title}
                        </Link>
                    ))}
                    <button className="mt-4 btn btn-error">Appointment</button>
                </div>
            )}

            {/* Desktop Appointment Button */}
            <div className="hidden   lg:flex navbar-end gap-5">
               
 <button className="btn btn-error text-white">Appointment</button>

 { 
 status === "authenticated" ? (
  <Link href="loggedout">
  
  <button 
  
  onClick={()=> signOut()}
  className="btn text-black btn-warning">
    Log Out  
  </button>

  <br />

 
   
  
  
  </Link>
) 

: (
  <Link href="/api/auth/signup">
  
  <button  className="btn  btn-accent">
    Sign Up
  </button>
  
  
  </Link>


)}
     
     <h1 className="text-sm  text-gray-600 bg-gray-100 px-4 py-1 rounded-full shadow-sm font-bold">
  {session?.user?.email}
</h1>

     
     </div>
        </div>
    );
};

export default NavBar;
