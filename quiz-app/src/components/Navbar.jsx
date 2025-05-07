import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { IoMdHome } from "react-icons/io";
import { GrContact } from "react-icons/gr";
import { FiUser } from "react-icons/fi";  // Profile için ikon
import { IoSettingsOutline } from "react-icons/io5";  // Settings için ikon
import { useAuth } from "../context/ContextProvider";
import { GoChevronDown } from "react-icons/go";  // Ok işareti

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Dropdown menüsünün dışına tıklamayı algılamak için kullanılır
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const handleNavigation = (subject) => {
    navigate(`/${subject.toLowerCase()}`);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);  // Dropdown menüsünü açma/kapama
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);  // FaBook menüsünü açma/kapama
  };

  // Dış tıklama olayını dinlemek için useEffect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        menuRef.current && !menuRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false); // Dışarıya tıklanırsa dropdown menüyü kapat
        setIsMenuOpen(false); // FaBook menüsünü de kapat
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`bg-gray-800 text-white p-4 shadow-md transition-transform duration-500 ${showNavbar ? "top-0 left-0 right-0 z-50 transform scale-100" : "transform -translate-y-full"} fixed w-full`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Hi user kısmı en solda */}
        <div className="flex items-center">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <span
                className="text-bm text-gray-300 cursor-pointer px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg transform hover:scale-105"
                onClick={handleDropdownToggle}
              >
                Hi! {user}
                <span className="ml-2 text-gray-200 text-sm">&#9660;</span> {/* Küçük ok ikonu */}
              </span>

              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg">
                  <ul>
                    <li>
                      <button className="w-full text-left px-4 py-2 hover:bg-green-700 flex items-center space-x-2">
                        <FiUser className="text-xl" />
                        <span>Profile</span>
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center space-x-2">
                        <IoSettingsOutline className="text-xl" />
                        <span>Settings</span>
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left px-4 py-2 hover:bg-red-700 flex items-center space-x-2" onClick={handleLogout}>
                        <AiOutlineLogout className="text-xl" />
                        <span>Logout</span>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-sm" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </div>

        {/* Menü öğeleri sağda */}
        <ul className="flex space-x-6 ml-auto">
          <li>
            <button className="p-2 rounded-full hover:bg-gray-700 transition" onClick={() => handleNavigation("")}>
              <IoMdHome className="text-2xl" />
            </button>
          </li>
          <li className="relative group" ref={menuRef}>
            <button
              className="p-2 rounded-full hover:bg-gray-700 transition"
              onClick={handleMenuToggle}
            >   
              <FaBook className="text-2xl" />
              <GoChevronDown className={`ml-2 text-xl transition-transform ${isMenuOpen ? "rotate-180" : "rotate-0"}`} />
            </button>

            {isMenuOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-10 transition-opacity duration-300 opacity-100 visible">
                <ul>
                  {["Math", "Physical", "Chemical", "Biology"].map((item) => (
                    <li key={item}>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-yellow-600 transition duration-300"
                        onClick={() => handleNavigation(item.toLowerCase())}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <li>
            <button className="p-2 rounded-full hover:bg-gray-700 transition" onClick={() => handleNavigation("about")}>
              <FcAbout className="text-2xl" />
            </button>
          </li>
          <li>
            <button className="p-2 rounded-full hover:bg-gray-700 transition" onClick={() => handleNavigation("contact")}>
              <GrContact className="text-2xl" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
