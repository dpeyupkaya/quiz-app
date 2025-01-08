import { nav } from "framer-motion/client";
import React from "react";
import { FaUserShield, FaExclamationCircle, FaRegLifeRing, FaCogs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";





const Policy = () => {
  const policies = [
    { icon: <FaUserShield className="text-4xl text-blue-500 hover:text-blue-300 transition-colors duration-300" />, title: "Privacy Policy" },
    { icon: <FaExclamationCircle className="text-4xl text-purple-500 hover:text-purple-300 transition-colors duration-300" />, title: "Terms of Service" },
    { icon: <FaRegLifeRing className="text-4xl text-green-500 hover:text-green-300 transition-colors duration-300" />, title: "Support & Help" },
    { icon: <FaCogs className="text-4xl text-yellow-500 hover:text-yellow-300 transition-colors duration-300" />, title: "Cookies Policy" },
  ];
const navigate = useNavigate();


 const eyup = () => {
  navigate('/contact');
 
 }

  return (
    <div className="bg-gradient-to-r from-blue-600 via-black to-red-600 text-white py-10 backdrop-blur-sm animate-prisma">
      <div className="relative z-10 max-w-8xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-10 text-shadow-lg">
          Our Policies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-2 mx-4" > 
          {policies.map((policy, index) => ( 
            <div 
              key={index}
              className="relative group flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-lg w-full h-40 mx-auto shadow-xl p-6 transition-all transform hover:scale-105 hover:bg-white/20"
            onClick={eyup}
            >
              <div className="mb-4 text-white" >{policy.icon}</div>
              <h3 className="font-semibold text-white" >{policy.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;