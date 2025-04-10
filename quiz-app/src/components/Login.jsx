import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      if (res.data.success) {
      
        localStorage.setItem('token', res.data.token);
        
  
        navigate('/');

        
        window.location.reload();  
      }
    } catch (error) {
      console.log(error);   
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen animated-bg">
    <div className="border border-gray-200 shadow-lg p-8 w-80 bg-white bg-opacity-70 backdrop-blur-xl rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-800" htmlFor="email">Email</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-400 bg-white bg-opacity-80"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800" htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-400 bg-white bg-opacity-80"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black-500 text-gray-800 py-2 rounded-md hover:bg-green-400 transition duration-300"
        >
          Login
        </button>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-black-500 hover:text-blue-700 transition duration-200 underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  </div>
  
  );
}

