import React from "react";
import Policy from "./Policy";
import { FaBook, FaGraduationCap, FaLightbulb, FaUserGraduate } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Policy />
      <footer className="bg-gradient-to-r from-blue-600 via-black to-red-600 text-white py-10 backdrop-blur-sm animate-prisma">
        <div className="container mx-auto text-center">
       
          <div className="flex justify-center space-x-10 mb-6">
            <a
              href="/study-materials"
              className="text-5xl hover:text-blue-400 transition duration-300"
              title="Study Materials"
            >
              <FaBook />
            </a>
            <a
              href="/courses"
              className="text-5xl hover:text-purple-400 transition duration-300"
              title="Courses"
            >
              <FaGraduationCap />
            </a>
            <a
              href="/tips"
              className="text-5xl hover:text-yellow-400 transition duration-300"
              title="Study Tips"
            >
              <FaLightbulb />
            </a>
            <a
              href="/community"
              className="text-5xl hover:text-green-400 transition duration-300"
              title="Community"
            >
              <FaUserGraduate />
            </a>
          </div>

        
          <div className="space-y-2">
            <p className="text-lg font-medium">
              Enhance your learning experience with Quiz App.
            </p>
            <p className="text-sm text-white/80">
              Explore study materials, courses, and tips to ace your exams.
            </p>
          </div>

         
          <div className="border-t-2 border-white/50 mt-8 pt-6">
            <p className="text-sm text-white/70">
              © 2024 Quiz App. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}