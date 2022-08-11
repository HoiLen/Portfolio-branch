import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home, Login, Register, NotFound, Header,Gallery } from './components/index'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/img/:id" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
