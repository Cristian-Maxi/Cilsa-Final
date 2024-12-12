// import { useRef, useState } from 'react';
// import logo from '../../assets/Logo-musica.png'
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// import nav_dropdown from '../../assets/nav_dropdown.png'

// const Navbar = () => {

//     const [menu, setMenu] = useState("shop");
//     const menuRef = useRef();

//     const dropdown_toggle = (e) => {
//       menuRef.current.classList.toggle('nav-menu-visible');
//       e.target.classList.toggle('open');
//     }

//   return (
//     <div className='navbar'>
//       <div className="nav-logo">
//         <a href="/"><img src={logo} alt="" className='nav-logo-img'/></a>
//       </div>
//       <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
//       <ul ref={menuRef} className="nav-menu">
//         <li className='nav-text' onClick={()=>{setMenu("home")}}><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
//         <li className='nav-text' onClick={()=>{setMenu("generos")}}><Link to='/generos' style={{ textDecoration: 'none' }}>Géneros Musicales</Link></li>
//         <li className='nav-text' onClick={()=>{setMenu("instrumentos")}}><Link to='/instrumentos' style={{ textDecoration: 'none' }}>Instrumentos</Link></li>
//         <li className='nav-text' onClick={()=>{setMenu("nosotros")}}><Link to='/nosotros' style={{ textDecoration: 'none' }}>Nosotros</Link></li>
//         <li className='nav-text' onClick={()=>{setMenu("contacto")}}><Link to='/contacto' style={{ textDecoration: 'none' }}>Contacto</Link></li>
//       </ul>
//       <div className="nav-login-cart">
//         {localStorage.getItem('auth-token')
//         ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
//         :<Link to='/login'><button>Login</button></Link>}
//         {localStorage.getItem('auth-token')
//         ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
//         :<Link to='/admin'><button>Admin</button></Link>}
//       </div>
//     </div>
//   )
// }

// export default Navbar


import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo-musica.png';
import nav_dropdown from '../../assets/nav_dropdown.png';
import { Modal, Button, Form } from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [showModal, setShowModal] = useState(false);
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const menuRef = useRef();
    const navigate = useNavigate();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    const handleLoginClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleLoginSubmit = () => {
        if (usuario.trim() && contraseña.trim()) {
            // Verificar credenciales
            if (usuario === "cristian" && contraseña === "1234") {
                setShowModal(false);
                navigate("/admin"); // Redirigir al componente Admin
            } else {
                alert("Credenciales incorrectas. Inténtalo de nuevo.");
            }
        } else {
            alert("Por favor, ingresa usuario y contraseña.");
        }
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <a href="/"><img src={logo} alt="" className='nav-logo-img' /></a>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li className='nav-text' onClick={() => { setMenu("home") }}><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
                <li className='nav-text' onClick={() => { setMenu("generos") }}><Link to='/generos' style={{ textDecoration: 'none' }}>Géneros Musicales</Link></li>
                <li className='nav-text' onClick={() => { setMenu("instrumentos") }}><Link to='/instrumentos' style={{ textDecoration: 'none' }}>Instrumentos</Link></li>
                <li className='nav-text' onClick={() => { setMenu("nosotros") }}><Link to='/nosotros' style={{ textDecoration: 'none' }}>Nosotros</Link></li>
                <li className='nav-text' onClick={() => { setMenu("contacto") }}><Link to='/contacto' style={{ textDecoration: 'none' }}>Contacto</Link></li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                    ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
                    : <Link to='/login'><button>Login</button></Link>}
                <button onClick={handleLoginClick}>Admin</button>
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Panel Administrador</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formUsuario">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa tu usuario"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formContraseña">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                value={contraseña}
                                onChange={(e) => setContraseña(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleLoginSubmit}>
                        Iniciar Sesión
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Navbar;