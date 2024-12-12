import './Contacto.css';
import Enviar from '../../assets/menu.png';
import EnviarHover from '../../assets/enviar.png';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contacto = () => {
  const form = useRef();
  const [buttonImage, setButtonImage] = useState(Enviar);

  const handleMouseEnter = () => {
    setButtonImage(EnviarHover);
  };

  const handleMouseLeave = () => {
    setButtonImage(Enviar);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o8t2qwe', 'template_4wsmjgf', form.current, 'PwcJfkdqTsuHgDmrK')
      .then((result) => {
        console.log(result.text);
        // Muestra la alerta de SweetAlert2 después de un envío exitoso
        Swal.fire({
          title: 'Enviado!',
          text: 'Tu mensaje fue enviado exitosamente.',
          color: '#ffffff',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#555',
          background: '#404040',
          customClass: {
            title: 'white-text',
            htmlContainer: 'white-text',
            confirmButton: 'custom-confirm-button'
          },
          onOpen: (modalElement) => {
            const confirmButton = modalElement.querySelector('.custom-confirm-button');
            if (confirmButton) {
              confirmButton.style.backgroundColor = '##404040'; // Color de fondo amarillo
              confirmButton.style.color = '#fff'; // Color del texto blanco
              confirmButton.style.border = '1px solid #ffc730'; // Color del borde amarillo
            }
          },
        });

        // Restablece el formulario
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire({
          title: 'Error!',
          text: 'Tu mensaje no pudo ser enviado. Por favor intenta enviarlo nuevamente.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <section id='contactPage' className='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contactanos</h1>
        <span className='contactDesc'>Por favor llena el formulario debajo para hacernos tu consulta.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Nombre' name='your_name' />
          <input type='email' className='email' placeholder='Dirección de Mail' name='your_email' />
          <textarea className='msg' name='message' rows='5' placeholder='Mensaje'></textarea>
          <button 
            type='submit' 
            value='send' 
            className='submitBtn'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={buttonImage} alt="Enviar" className='enviarBtn' />
          </button>
          <br />
        </form>
      </div>
    </section>
  );
}

export default Contacto;
