import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from './components/qualification/Qualification';
import Portfolio from "./components/portfolio/portfolio.jsx";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Scrollup from "./components/scrollup/Scrollup.jsx";



const App = () => {
  return (
    <>
    <Header />

    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
    </main>

    <Footer />
    <Scrollup />
    </>
  );
}

export default App;
