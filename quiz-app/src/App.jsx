import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import HomePage from "./pages/HomePage";

import {Math} from "./lessons/Math";
import { Algebra } from "./subject/Math/Algebra";
import { Calculus } from "./subject/Math/Calculus";
import {Physical} from "./lessons/Physical";
import { Electiric } from "./subject/physical/Electiric";
import { Newton } from "./subject/physical/Newton";
import { Organic } from "./subject/Chemical/Organic";
import { Inorganic } from "./subject/Chemical/Inorganic";
import { Chemical } from "./lessons/Chemical";
import { Biology } from "./lessons/Biology";  
import { Systems } from "./subject/Biology/Systems";
import { Animals } from "./subject/Biology/Animals";
import { AboutPages } from "./pages/AboutPages";

import ContactPage from "./pages/ContactPage";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPages />} />  
        <Route path="/contact" element={<ContactPage />}  /> 
        
        <Route path="/math" element={<Math/>} />
        <Route path="/biology" element={<Biology />} />
        <Route path="/physical" element={<Physical />} />
        <Route path="/chemical" element={<Chemical />} /> 
        <Route path ="/math/calculus" element={<Calculus />} />
        <Route path ="/math/algebra" element={<Algebra />} />
        <Route path ="/physical/electiric" element={<Electiric />} />
        <Route path ="/physical/newton" element={<Newton/>} />
        <Route path="/chemical/organic" element={<Organic />} />
        <Route path="/chemical/inorganic" element={<Inorganic />} />
        <Route path="/biology/systems" element={<Systems />} />
        <Route path="/biology/animals" element={<Animals />} />
      </Routes>
    </Router>
  );
}

export default App;
