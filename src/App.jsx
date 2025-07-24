import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./pages/About";
import Cocktails from "./pages/Cocktails";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import "./App.css"; 
import "./styles/main.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/sandersons/">
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cocktails" element={<Cocktails />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
