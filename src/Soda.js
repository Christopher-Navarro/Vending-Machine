import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function Soda() {
  return (
    <div className="Soda">
      <h1>Soda</h1>
      <img src="https://waterbutlers.com/cdn/shop/products/coke1_41ae86e4-d7a6-4fb3-93e7-049ab97312fc_600x.jpg?v=1606515428" />
      <h2>
        <a href="/">Back</a>
      </h2>
    </div>
  );
}

export default Soda;
