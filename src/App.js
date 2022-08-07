import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import { Home, Login, Register, NotFound } from './components/index'

function App() {
  return (
    <>
      <h1>HoiLen</h1>

      <nav>
			  <ul>
				  <li><Link to="/">Home</Link></li>
				  <li><Link to="/register">Register</Link></li>
				  <li><Link to="/login/">--Login--</Link></li>
			  </ul>
		  </nav>

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
