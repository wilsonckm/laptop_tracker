import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Laptops from './pages/Laptops/Laptops';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Laptops />
    </div>
  );
}

export default App;
