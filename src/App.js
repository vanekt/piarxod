import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/pages/Index/Index';
import Joke from './components/Joke/Joke';
import Clippy from './components/Clippy/Clippy';
import './App.css';

export default () => (
  <div className="App">
    <Header />
    <Index />

    <div className="pre-footer">
      <Joke />
      <Clippy />
    </div>

    <Footer />
  </div>
);
