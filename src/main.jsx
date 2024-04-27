import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/landing-page.jsx";
import About from "./Routes/About.jsx";
import Vans from "./Routes/Vans.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
    </Routes>
  </BrowserRouter>
);
