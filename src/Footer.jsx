import React from "react";
import { BsLinkedin, BsGithub, BsFacebook, BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="w-full xl:w-9/12 mx-auto flex   sm:flex-row justify-center items-center px-4">
        
        {/* Left Side - Copyright Text */}
        {/* <p className="text-sm   mt-4 sm:-mt-1 ">
          &copy; 2025 <span className="border px-5 ml-2 rounded-full  border-white pt-[3px] pb-[3px]">/ Rizon </span>
        </p> */}

        {/* Right Side - Social Icons */}
        <div className="flex gap-20 mt-3 sm:mt-0">
          {/* <a href="https://www.facebook.com/profile.php?id=61552156421365" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:shadow-lg transition-all duration-300">
            <BsFacebook />
          </a> */}
          <a href="https://www.linkedin.com/in/pawan-kumar-7a8200210/" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:shadow-lg transition-all duration-300">
            <BsLinkedin />
          </a>
          <a href="https://x.com/the_k2Xplorer" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:shadow-lg transition-all duration-300">
            <BsTwitterX />
          </a>
          <a href="https://github.com/Darvil-01" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:shadow-lg transition-all duration-300">
            <BsGithub />
          </a>
          {/* <a href="mailto:rizonahmed0486@gmail.com" className="text-white text-xl hover:shadow-lg transition-all duration-300">
            <MdOutlineEmail />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
