
import { BrowserRouter as Router } from "react-router-dom";
import './css/App.css';
import Rutas from "./components/Rutas";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';


function App() {
  return (
    
    <Router>
      <Navbar />
      <Rutas/>
      <Footer />
    </Router>
  );
}

export default App;
