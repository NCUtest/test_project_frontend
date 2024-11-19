import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="content">
          <Services />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
