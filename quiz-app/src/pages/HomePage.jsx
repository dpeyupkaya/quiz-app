import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';


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