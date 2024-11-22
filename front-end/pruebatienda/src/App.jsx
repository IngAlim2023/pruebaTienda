import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Inicio } from "./pages/Inicio";
import { Productos } from "./pages/Productos";
import Perfil from "./pages/Perfil";
import { Compras } from "./pages/Compras";
import { Tiendas } from "./pages/Tiendas";
import { Toaster } from "react-hot-toast";

function App() {
  const [side, setSide] = useState(false);

  const activeNav = () => {
    setSide(!side);
  };
  return (
    <BrowserRouter>
      <header>
        <FaBars onClick={activeNav} className="menu-icon" />
        <h3>Tienda</h3>
      </header>
      <NavBar side={side} setSide={setSide}/>
      <div className={`main ${side ? "side" : ""}`}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/compras" element={<Compras/>} />
          <Route path="/tiendas" element={<Tiendas/>} />
        </Routes>
      </div>
      <Toaster position="top-center" reverseOrder={true}/>
    </BrowserRouter>
  );
}

export default App;
