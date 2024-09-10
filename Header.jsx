import React from "react";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5"; 


function Header() {
  return (
    <>
     <header className="bg-[#262626] py-4 border-b-4 border-black">
  <div className="flex justify-between px-8">
    <Image
      src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-0c6ef0bdbf918a098bf915273cd4ca39cb1afd7992deef185dafe33b2c623b2f.svg"
      width={150}
      height={150}
      alt="Envato Market Logo"
    />
    <button className="text-white bg-green-500 p-3 rounded-lg">
      Buy Now
    </button>
  </div>
</header>

<nav>
  <div className="bg-[#1E2023] py-5">
    <div className="flex justify-between items-center px-8">
      <Image
        src="https://gramentheme.com/html/xbuild/assets/img/logo/white-logo.svg"
        width={150}
        height={150}
        alt="Logo"
      />
        <div className="text-white">
            <ul className="flex items-center space-x-6"> 
            <li className="flex items-center">Home<IoMdAdd className="ml-1" /></li> 
            <li>About Us</li>
            <li className="flex items-center">Services<IoMdAdd className="ml-1" /></li>
            <li className="flex items-center">Projects<IoMdAdd className="ml-1" /></li>
            <li className="flex items-center">Blog<IoMdAdd className="ml-1" /></li>
            <li>Contact Us</li>
            <CiSearch className="text-2xl" />
            <IoMenu  className="text-2xl text-orange-500"/>

            </ul>
        </div>
    </div>
  </div>
</nav>


    </>
  );
}

export default Header;
