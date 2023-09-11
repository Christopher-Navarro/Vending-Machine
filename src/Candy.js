import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function Candy() {
  return (
    <div className="Candy">
      <h1>Candy</h1>
      <img src="https://i.pinimg.com/564x/dc/61/3c/dc613c32e967b6128967a22cd27a766d.jpg" />
      <h2>
        <a href="/">Back</a>
      </h2>
    </div>
  );
}

export default Candy;
