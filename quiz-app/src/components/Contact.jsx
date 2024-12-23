import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 text-white">
      <div className="text-center p-8 max-w-3xl bg-white text-blue-500 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-4">
          If you have any questions or inquiries, feel free to reach out to us!
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Reach Us at:</h2>
          <p className="text-lg">
            Email: <a href="mailto:support@quizapp.com" className="underline">support@quizapp.com</a>
          </p>
          <p className="text-lg">Phone: +1 234 567 890</p>
        </div>
        <div className="flex justify-center">
          <a
            href="mailto:support@quizapp.com"
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-400 transition duration-300"
          >
            Send an Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
