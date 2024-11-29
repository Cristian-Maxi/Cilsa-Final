import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default Rutas;
