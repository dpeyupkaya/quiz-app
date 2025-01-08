import React from "react";
import Policy from "./Policy";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Policy />
      <footer className="bg-gradient-to-r from-blue-600 via-black to-red-600 text-white py-10 backdrop-blur-sm animate-prisma">
        <div className="container mx-auto text-center">
      
          <div className="flex justify-center space-x-10 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl hover:text-blue-400 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl hover:text-blue-300 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl hover:text-pink-400 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Telif Hakkı Metni */}
          <p className="text-lg font-medium">
            © 2024 Quiz App. All Rights Reserved.
          </p>
        </div>

        {/* Çizgi */}
        <div className="border-t-2 border-white/50 mt-8"></div>
      </footer>
    </>
  );
}