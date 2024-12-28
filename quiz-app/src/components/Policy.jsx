import React from "react";
import { FaUserShield, FaExclamationCircle, FaRegLifeRing, FaCogs } from "react-icons/fa";

const Policy = () => {
  const policies = [
    { icon: <FaUserShield className="text-4xl" />, title: "Privacy Policy" },
    { icon: <FaExclamationCircle className="text-4xl" />, title: "Terms of Service" },
    { icon: <FaRegLifeRing className="text-4xl" />, title: "Support & Help" },
    { icon: <FaCogs className="text-4xl" />, title: "Cookies Policy"},
  ];

  return (
    <div className=" bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 text-white py-12">
     

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-10 text-shadow-lg">
          Our Policies
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center justify-center bg-white text-red-600 rounded-lg w-48 h-48 mx-auto shadow-xl p-4 transition-all transform hover:scale-105 hover:bg-red-50"
            >
              <div className="mb-4">{policy.icon}</div>
              <h3 className="font-semibold">{policy.title}</h3>
              {/* Tooltip */}
              <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm rounded-lg px-4 py-2 shadow-lg">
                <strong>{policy.title}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;
