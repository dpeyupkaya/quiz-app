import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaBook } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { IoMdHome } from "react-icons/io";
import { GrContact } from "react-icons/gr";
import  {useAuth}  from "../context/ContextProvider";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();
  const { user , logout  } = useAuth();

 



  const handleNavigation = (subject) => {
    navigate(`/${subject.toLowerCase()}`);
  };

  const handleLogout = () => {
    logout();
   
    navigate('/login');
  };;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); 
      } else {
        setShowNavbar(true); 
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-gray-800 text-white p-4 transition-all duration-300 ${
        showNavbar ? "fixed top-0  left-0 right-0" : "transform -translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleNavigation("")}
        >
          Quiz App
        </h1>

        <ul className="flex space-x-8">
          <li>
            <button
              className="text-lg text-white bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 hover:from-blue-500 hover:to-teal-400 px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => handleNavigation("")}
            >
              <IoMdHome className="text-2xl" />
            </button>
          </li>
          <li className="relative group">
            <button
              className="text-lg text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 hover:from-red-500 hover:to-purple-400 px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBook className="text-2xl" />
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-gray-700 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-100" : ""}`}
            >
              <ul>
                <li>
                  <button
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={() => handleNavigation("math")}
                  >
                    Math
                  </button>
                </li>
                <li>
                  <button
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={() => handleNavigation("physical")}
                  >
                    Physical
                  </button>
                </li>
                <li>
                  <button
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={() => handleNavigation("chemical")}
                  >
                    Chemical
                  </button>
                </li>
                <li>
                  <button
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={() => handleNavigation("biology")}
                  >
                    Biology
                  </button>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button
              className="text-lg text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-pink-400 hover:to-indigo-500 px-6 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => handleNavigation("about")}
            >
              <FcAbout className="text-2xl" />
            </button>
          </li>
          <li>
            <button
              className="text-lg text-white bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 hover:from-blue-500 hover:to-teal-400 px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => handleNavigation("contact")}
            >
              <GrContact className="text-2xl" />
            </button>
          </li>
        </ul>
        <div className="flex justify-end space-x-8">
  {user ? (
    <button className="bg-blue-600 px-3 py-2 rounded-lg text-white">
      Hoşgeldiniz, {user.name}
    </button>
  ) : (
    <button className="bg-gray-400 px-3 py-2 rounded-lg text-white">
      Yükleniyor...
    </button>
  )}

  <button
    className="flex items-center bg-red-600 px-4 py-2 rounded-lg hover:bg-red-500 transition-colors duration-300"
    onClick={handleLogout}
  >
    <AiOutlineLogout className="text-xl mr-2" />
    Logout
  </button>
</div>


      </div>
    </nav>
  );
};

export default Navbar;
