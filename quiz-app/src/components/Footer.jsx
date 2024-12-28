import React from "react";
import Policy from "./Policy";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Policy />
      <footer className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          {/* Sosyal Medya Bağlantıları */}
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-600 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-pink-600 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-700 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>

        
          <p className="text-lg font-medium">
            © 2024 Quiz App. All Rights Reserved.
          </p>
        </div>
   
        <div className="border-t-2 border-white mt-8"></div>
      </footer>
    </>
  );
}
