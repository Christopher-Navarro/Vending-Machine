import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function Chips() {
  return (
    <div className="Chips">
      <h1>Chips</h1>
      <img src="https://www.kroger.com/product/images/large/front/0002840009085" />
      <h2>
        <a href="/">Back</a>
      </h2>
    </div>
  );
}

export default Chips;
