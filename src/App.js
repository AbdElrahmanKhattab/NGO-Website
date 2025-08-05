import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VolunteerForm from './components/VolunteerForm';
import Stats from './components/Stats';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <VolunteerForm />
      <Stats />
      <Footer />
    </div>
  );
};

export default App;
