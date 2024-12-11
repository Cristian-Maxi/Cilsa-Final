import './Footer.css';
import footer_logo from '../../assets/logo-footer.png'
import pintester_icon from '../../assets/pintester_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <a href="/"><img src={footer_logo} alt="" /></a>
        </div>
        <ul className="footer-links">
            <a className="footer-links-a" href="/generos" style={{ textDecoration: 'none' }}><li>Géneros Musicales</li></a>
            <a className="footer-links-a" href="/instrumentos" style={{ textDecoration: 'none' }}><li>Instrumentos</li></a>
            <a className="footer-links-a" href="/nosotros" style={{ textDecoration: 'none' }}><li>Nosotros</li></a>
            <a className="footer-links-a" href="/contacto" style={{ textDecoration: 'none' }}><li>Contacto</li></a>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyrigth @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
