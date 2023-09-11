import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="Home">
      <h1>Vending machine</h1>
      <img src="https://www.amequipmentsales.com/wp-content/uploads/2017/10/AMS-300x450.png" />
      <h2>
        <a href="/candy">Candy</a>
      </h2>
      <h2>
        <a href="/chips">Chips</a>
      </h2>
      <h2>
        <a href="/soda">Soda</a>
      </h2>
    </div>
  );
}

export default Home;
