import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuizStart() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz/play"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the Quiz</h1>
        <p className="text-lg mb-6 text-center">
          Test your knowledge and challenge yourself with our fun and interactive quiz.
        </p>
        <ul className="text-left list-disc pl-5 mb-6">
          <li>You will have 10 questions to answer.</li>
          <li>Each question has a time limit of 30 seconds.</li>
          <li>Score is based on accuracy and speed.</li>
        </ul>
        <button
          onClick={handleStartQuiz}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-700"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
