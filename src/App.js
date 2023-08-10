import React from 'react';
import Header from "./Layouts/Headers";
import About from './Layouts/About';
import Footer from "./Layouts/Footer";
import Banner from './Layouts/Banner';
import Contact from './Layouts/Contacts';
import './App.css';

function App() {

  return (
    <>
      <div className="App">
        <Header />
        <Banner />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;


