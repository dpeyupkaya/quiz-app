import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 text-white">
      <div className="text-center p-8 max-w-3xl bg-white text-blue-500 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our Quiz App! Here, you can challenge yourself with a
          variety of quizzes across different subjects like Math, Science, and
          more.
        </p>
        <p className="text-lg mb-4">
          Our goal is to provide a fun and interactive way for you to test and
          improve your knowledge. Whether you're studying for exams or just
          curious, our quizzes offer something for everyone.
        </p>
        <p className="text-lg mb-4">
          Join us in the journey of learning and growing, one quiz at a time!
        </p>
        <p className="text-lg">
          Feel free to explore, learn, and most importantly, enjoy your time
          here!
        </p>
      </div>
    </div>
  );
};

export default About;
