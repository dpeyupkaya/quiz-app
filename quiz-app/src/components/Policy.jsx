import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Policy = () => {
  const services = [
    { icon: <FaCode className="text-2xl text-blue-500 hover:text-blue-300 transition-colors duration-300" />, title: "Web Development" },
    { icon: <FaPaintBrush className="text-2xl text-purple-500 hover:text-purple-300 transition-colors duration-300" />, title: "UI/UX Design" },
    { icon: <FaMobileAlt className="text-2xl text-green-500 hover:text-green-300 transition-colors duration-300" />, title: "Mobile Apps" },
    { icon: <FaChartLine className="text-2xl text-yellow-500 hover:text-yellow-300 transition-colors duration-300" />, title: "Digital Marketing" },
  ];
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/services');
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 via-black to-red-600 text-white py-2 backdrop-blur-sm animate-prisma">
      <div className="relative z-2 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-10 text-shadow-lg">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4 mx-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full w-20 h-20 mx-auto shadow-xl p-4 transition-all transform hover:scale-105 hover:bg-white/20 cursor-pointer"
              onClick={handleNavigate}
            >
              <div className="text-white">{service.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;