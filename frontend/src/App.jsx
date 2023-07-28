import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Laptops from "./pages/Laptops/Laptops";
import { useState } from "react";
import Login from "./pages/LoginPage/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Laptops />
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
