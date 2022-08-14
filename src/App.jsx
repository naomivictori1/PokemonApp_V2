import React from "react";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import PokemonCard from "./components/PokemonCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/pokemon/:pokemonid" element={<PokemonCard />} />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
    </BrowserRouter>
  );
}
