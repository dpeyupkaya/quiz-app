import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaBook } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { IoMdHome } from "react-icons/io";
import { GrContact } from "react-icons/gr";
import { useAuth } from "../context/ContextProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleNavigation = (subject) => {
    navigate(`/${subject.toLowerCase()}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogoutModalOpen(false);
    logout();
    navigate("/");
  };

 

   

  return (
    <>
<nav
  className={`bg-gradient-to-r from-indigo-500 via-pink-600 to-teal-500 text-white p-4 shadow-lg transition-transform duration-500 ease-bounce ${
    showNavbar ? "top-0 left-0 right-0 z-50 transform scale-100" : "transform -translate-y-full"
  } fixed w-full`}
>
        <div className="container mx-auto flex justify-between items-center">
          <h1
            className="text-3xl font-bold cursor-pointer tracking-wider hover:text-gray-100 transition duration-300"
            onClick={() => handleNavigation("")}
          >
            Quiz App
          </h1>

          <ul className="flex space-x-8">
            <li>
              <button
                className="text-lg px-6 py-3 rounded-full hover:bg-teal-600 transition duration-300"
                onClick={() => handleNavigation("")}
              >
                <IoMdHome className="text-2xl" />
              </button>
            </li>
            <li className="relative group">
              <button
                className="text-lg px-6 py-3 rounded-full hover:bg-teal-600 transition duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FaBook className="text-2xl" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-100" : ""
                }`}
              >
                <ul>
                  <li>
                    <button
                      className="block px-4 py-2 hover:bg-teal-100"
                      onClick={() => handleNavigation("math")}
                    >
                      Math
                    </button>
                  </li>
                  <li>
                    <button
                      className="block px-4 py-2 hover:bg-teal-100"
                      onClick={() => handleNavigation("physical")}
                    >
                      Physical
                    </button>
                  </li>
                  <li>
                    <button
                      className="block px-4 py-2 hover:bg-teal-100"
                      onClick={() => handleNavigation("chemical")}
                    >
                      Chemical
                    </button>
                  </li>
                  <li>
                    <button
                      className="block px-4 py-2 hover:bg-teal-100"
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
                className="text-lg px-6 py-3 rounded-full hover:bg-teal-600 transition duration-300"
                onClick={() => handleNavigation("about")}
              >
                <FcAbout className="text-2xl" />
              </button>
            </li>
            <li>
              <button
                className="text-lg px-6 py-3 rounded-full hover:bg-teal-600 transition duration-300"
                onClick={() => handleNavigation("contact")}
              >
                <GrContact className="text-2xl" />
              </button>
            </li>
          </ul>

          <div className="flex justify-end space-x-8">
            {user ? (
              <button className="bg-teal-600 px-3 py-2 rounded-lg text-white hover:bg-teal-500 transition duration-300">
                Welcome, {user.name}
              </button>
            ) : (
              <button
                className="bg-gray-400 px-3 py-2 rounded-lg text-white hover:bg-gray-300 transition duration-300"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}

            <button
              className="flex items-center bg-red-600 px-4 py-2 rounded-lg hover:bg-red-500 transition-colors duration-300"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <AiOutlineLogout className="text-xl mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      {isLogoutModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400"
                onClick={handleLogout}
              >
                Yes
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400"
                onClick={() => setIsLogoutModalOpen(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
