
import { useState } from 'react';
import './App.css';

import Image from './compoents/Image';
import Navbar from './compoents/Navbar';
import Footer from './compoents/Footer';

function App() {
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode ('dark');
    }
    else{
      setMode('light');
    }
  }

  const [mode , setMode]= useState('light');
  return (
    <>
    <Navbar title="CB Dry Fruits" mode={mode} toggleMode={toggleMode}/> 
    <br/>
    <Image/>
    <br></br>
    <Footer/>
     </>
  );
}

export default App;
