import React from "react";
import video from "../videos/aboutvideo.mp4";

export const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
   
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-1000"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    
      <div className="container mx-auto p-8 max-w-3xl text-black relative z-10 overflow-hidden">
     
   
    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-50 blur-lg animate-prisma z-0"></div>
    
  
    <div className="relative z-10 bg-opacity-80 p-6 rounded-lg shadow-md">
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


 </div>
  );
};

export default About;
