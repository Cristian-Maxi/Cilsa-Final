import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Login from "./Login/Login"
import Generos from "../pages/Generos/Generos"
import Instrumentos from "../pages/Instrumentos/Instrumentos"
import Contacto from "../pages/Contacto/Contacto"
import Nosotros from "../pages/Nosotros/Nosotros"

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/generos" element={<Generos />} />
      <Route path="/instrumentos" element={<Instrumentos />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default Rutas;
