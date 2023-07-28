import "./App.css";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import Laptops from "./pages/Laptops/Laptops";

function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Laptops />} />
    </Routes>
  </div>
  );
}

export default App;
