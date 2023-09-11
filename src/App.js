import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Chips from "./Chips";
import Soda from "./Soda";
import Candy from "./Candy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/candy" element={<Candy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
