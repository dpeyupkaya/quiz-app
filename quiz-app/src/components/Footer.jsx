import React from "react";
import { FaBook, FaGraduationCap, FaLightbulb, FaUserGraduate } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-gray-800 py-4 mt-auto">
        <div className="container mx-auto text-center text-sm space-y-1">
          <p>Make learning easier with Quiz App.</p>
          <p className="text-gray-600">
            Achieve success with notes, courses, and tips.
          </p>
          <p className="text-gray-500">© 2024 Quiz App. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
