import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main className="text-dark">
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
