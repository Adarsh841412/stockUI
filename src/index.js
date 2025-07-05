import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import Navbar from "../src/landing_page/Navbar";
import OpenAccount from "./landing_page/OpenAccount";
import Footer from "./landing_page/Footer";
import Signup from "./landing_page/signup/Signup";
import ProductPage from "./landing_page/products/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Support from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
   
      <Routes>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="*" element={ <NotFound/>}></Route>

      </Routes>
      <OpenAccount/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
