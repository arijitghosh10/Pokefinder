import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Heading from './components/Heading';
import PokeDetails from './components/PokeDetails';
import Pokemon from './components/Pokemon';

const App = ()=> {
  return (
    <>
      <Heading />
      <Routes>
          <Route exact path="/" element={<Pokemon />} />
          <Route exact path="/pokemon/:id" element={<PokeDetails />} />
      </Routes>
    </>
  );
}

export default App;
