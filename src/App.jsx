import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import List from "./pages/List";
import Reviews from "./pages/Reviews";
import Faqs from "./pages/Faqs";
import ElementorCard from "./Components/ElementorCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <ElementorCard />
        <List />
        <Reviews />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}

export default App;
