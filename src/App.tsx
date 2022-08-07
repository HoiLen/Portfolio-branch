import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import { Home, Login, Register, NotFound, Header } from './components/index'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/login/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
