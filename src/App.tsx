import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home, Login, Register, NotFound, Header,Gallery, Modalc } from './components/index'

function App() {
  return (
    <>
      <Header />

      <Gallery />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/img/0/" element={<Modalc />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
