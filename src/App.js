import React from "react";
import "./App.css"

import{Header, Blog, Footer, Possibility, Features, WhatGPT3, } from './containers';
import {CTA, Brand, Navbar, Button} from './components'


const App = () => {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header/>
          <Button/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
