import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/landing-page.jsx";
import About from "./Routes/About.jsx";
import Vans from "./Routes/Vans.jsx";
import "./index.css";
import VanDetail from "./componentes/vans-page/van-detail/van-detail.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
      <Route path="/vans/:id" element={<VanDetail />} />
    </Routes>
  </BrowserRouter>
);
