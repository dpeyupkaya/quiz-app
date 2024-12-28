import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import video from "../videos/homebackgroun.mp4"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (subject) => {
    navigate(`/${subject.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen relative">
    
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
        <source src ={video}  type = "video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center text-white">
        <div className="text-white p-8 bg-opacity-60 backdrop-blur-lg">
          <h1 className="text-5xl font-bold mb-4">Welcome to Quiz App</h1>
          <p className="text-lg mb-8">Test your knowledge and challenge yourself!</p>
          <button
            onClick={toggleMenu}
            className="bg-white text-orange-500 font-bold py-2 px-4 rounded-full hover:bg-orange-200 transition duration-300"
          >
            {isMenuOpen ? "Select a Subject" : "Get Started"}
          </button>

          <div
            className={`mt-4 bg-white text-orange-500 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform ${
              isMenuOpen ? "max-h-screen opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
            } overflow-hidden`}
          >
            <ul>
              <li
                className="px-4 py-2 hover:bg-orange-50 cursor-pointer"
                onClick={() => handleNavigation("Math")}
              >
                Math
              </li>
              <li
                className="px-4 py-2 hover:bg-orange-50 cursor-pointer"
                onClick={() => handleNavigation("Physical")}
              >
                Physical
              </li>
              <li
                className="px-4 py-2 hover:bg-orange-50 cursor-pointer"
                onClick={() => handleNavigation("Chemical")}
              >
                Chemical
              </li>
              <li
                className="px-4 py-2 hover:bg-orange-50 cursor-pointer"
                onClick={() => handleNavigation("Biology")}
              >
                Biology
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
