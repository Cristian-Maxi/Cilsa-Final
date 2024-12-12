import { useRef, useState } from 'react';
import logo from '../../assets/Logo-musica.png'
import './Navbar.css';
import { Link } from 'react-router-dom';
import nav_dropdown from '../../assets/nav_dropdown.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <a href="/"><img src={logo} alt="" className='nav-logo-img'/></a>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li className='nav-text' onClick={()=>{setMenu("home")}}><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
        <li className='nav-text' onClick={()=>{setMenu("generos")}}><Link to='/generos' style={{ textDecoration: 'none' }}>Géneros Musicales</Link></li>
        <li className='nav-text' onClick={()=>{setMenu("instrumentos")}}><Link to='/instrumentos' style={{ textDecoration: 'none' }}>Instrumentos</Link></li>
        <li className='nav-text' onClick={()=>{setMenu("nosotros")}}><Link to='/nosotros' style={{ textDecoration: 'none' }}>Nosotros</Link></li>
        <li className='nav-text' onClick={()=>{setMenu("contacto")}}><Link to='/contacto' style={{ textDecoration: 'none' }}>Contacto</Link></li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/admin'><button>Admin</button></Link>}
      </div>
    </div>
  )
}

export default Navbar
