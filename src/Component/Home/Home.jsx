import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Naga from "../DrNaga/Naga";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Partners from "../Partners/Partners";

export default function Home() {
  return (
    <div className="home">
      <div class="hero">
        <Navbar />
        <Hero />
        <Naga />
        <Services />
        <Team />
        <Partners />
      </div>
    </div>
  );
}
