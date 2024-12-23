import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Chemical = () => {
  const quizzes = [
    "Organic",
    "Inorganic",
 
  ];

  const navigate = useNavigate();

  const handleStart = (quiz) => {
 
    navigate(`/chemical/${quiz.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
  <> 
  <Navbar />
   <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 text-white">
  <h1 className="text-4xl font-bold mb-6"> Chemical Quiz Topics</h1>
  
  <div className="flex flex-col items-center space-y-4 w-full max-w-4xl">
    <ul className="space-y-4 text-lg w-full">
      {quizzes.map((quiz, index) => (
        <li key={index} className="flex items-center justify-between bg-white text-blue-500 rounded-lg p-4 shadow-md w-full">
          <span>{quiz}</span>
          <button
            onClick={() => handleStart(quiz)}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-400 transition duration-300"
          >
            Start
          </button>
        </li>
      ))}
    </ul>
  </div>
</div>
<Footer />
  </>
  );
};
export default Chemical;
