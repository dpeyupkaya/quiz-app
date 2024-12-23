import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Policy from '../components/Policy';

export const HomePage = () => {
  return (
    <React.StrictMode>
    <Navbar />
    <Home />

    <Footer />
    
    </React.StrictMode>
  )
}
export default HomePage;