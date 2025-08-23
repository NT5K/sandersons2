import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Cocktails from "./pages/Cocktails/Cocktails";
import Home from "./pages/Home/Home";
import Tickets from "./pages/Tickets/Tickets";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cocktails" element={<Cocktails />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
