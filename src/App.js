import React, {useEffect, useState, Component} from 'react';
import './index.css';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';

function App() {
  const [products] = useState([{}, {}, {}, {}, {}]);
  return (
    <>
      <Header/>
      <Main products={products}/>
      <Footer/>
    </>
  );
}

export default App;
