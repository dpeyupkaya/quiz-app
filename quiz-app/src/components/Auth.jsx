import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    if (isLogin) {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";
  
    try {
      const response = await axios.post(endpoint, formData);
  
      if (isLogin) {
        const token = response.data.token;
        const userName = response.data.name;
        if (token) {
          localStorage.setItem("token", token); 
          localStorage.setItem("userName", userName);
          toast.success("Login successful!"); 
          navigate("/"); 
        }
      } else {
        toast.success(response.data.message); 
        navigate("/login"); 
      }
    } catch (error) {
      toast.error(error.response?.data.message || "An error occurred");
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      initial={{
        background: isLogin
          ? "linear-gradient(135deg, #6D83F2, #A683F2)"
          : "linear-gradient(135deg, #F27D85, #F283B2)",
      }}
      animate={{
        background: isLogin
          ? "linear-gradient(135deg, #6D83F2, #A683F2)"
          : "linear-gradient(135deg, #F27D85, #F283B2)",
      }}
      transition={{ duration: 1 }}
    >
      <div className="flex space-x-8">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="max-w-md w-full bg-white shadow-2xl rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Login</h2>
              <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 pl-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-gradient-to-r from-blue-100 to-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-4 pl-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-gradient-to-r from-blue-100 to-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition duration-300"
                >
                  Login
                </button>
              </form>
              <p className="text-sm text-gray-600 text-center mt-4">
                Don't have an account?{" "}
                <span
                  onClick={toggleForm}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Register
                </span>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="register"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="max-w-md w-full bg-white shadow-2xl rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Register</h2>
              <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 pl-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-gradient-to-r from-yellow-100 to-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 pl-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-gradient-to-r from-yellow-100 to-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-4 pl-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-gradient-to-r from-yellow-100 to-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400"
                    placeholder="Create a password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-lg hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 transition duration-300"
                >
                  SignUp
                </button>
              </form>
              <p className="text-sm text-gray-600 text-center mt-4">
                Already have an account?{" "}
                <span
                  onClick={toggleForm}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Login
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ToastContainer */}
        <ToastContainer />
      </div>
    </motion.div>
  );
}
