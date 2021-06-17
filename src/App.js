import logo from './logo.svg';
import './App.css';
import React from "react"
import Navbar from "./components/navbar/Navbar"
import Carousel from "./components/carousel/Carousel"
import HouseTypes from "./components/housetypes/HouseTypes"
import Footer from "./components/footer/Footer"


function App() {
  return (
    <div>
       <Navbar />
       <Carousel />
       <HouseTypes/>
       <Footer />
    </div>
  );
}

export default App;
