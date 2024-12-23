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
    <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 text-white py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">Our Policies</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center bg-white text-blue-500 rounded-full w-24 h-24 mx-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              {policy.icon}
              {/* Tooltip */}
              <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm rounded-lg px-4 py-2 shadow-lg">
                <strong>{policy.title}</strong>
                <p>{policy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;
