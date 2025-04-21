import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Home from "./Component/Home/Home";
import Naga from "./Component/DrNaga/Naga";
import Services from "./Component/Services/Services";
import Team from "./Component/Team/Team";
import DoctorsCarousel from "./Component/DoctorsCarousel/DoctorsCarousel";
import Partners from "./Component/Partners/Partners";
import Branches from "./Component/Branches/Branches";
import Opinions from "./Component/Opinions/Opinions";


function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
        {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
