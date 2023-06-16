import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import All from "./pages/All.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Random from "./pages/Random.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/all" element={<All />}></Route>
        <Route path="/random" element={<Random />}></Route>
        <Route path="/all/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
