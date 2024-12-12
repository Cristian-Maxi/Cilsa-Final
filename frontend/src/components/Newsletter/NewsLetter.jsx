// import './NewsLetter.css';

// const NewsLetter = () => {
//   return (
//     <div className='newsletter'>
//       <h1>Recibe Exclusivas Noticias De Música en Tu Mail</h1>
//       <p>Suscribite a nuestro newletter y mantente actualizado</p>
//       <div>
//         <input type="email" placeholder='Your Email id' />
//         <button>Subscribe</button>
//       </div>
//     </div>
//   )
// }

// export default NewsLetter

import React, { useState } from "react";
import "./NewsLetter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import Axios from "axios";

const NewsLetter = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [pais, setPais] = useState("");
  const [email, setEmail] = useState("");

  function EnviarDatos(e) {
    e.preventDefault();
    Axios.post("http://localhost:8080/create", {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      pais: pais,
      email: email,
    })
      .then(() => {
        limpiarCampos();
        Swal.fire({
          title: "<strong>Registro Exitoso</strong>",
          html: `<i>El usuario <strong>${nombre} ${apellido}</strong> fue creado con éxito!!!</i>`,
          icon: "success",
          timer: 3000,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrio un Error",
          footer: error.message,
        });
      });
  }

  function limpiarCampos() {
    setNombre("");
    setApellido("");
    setEdad("");
    setPais("");
    setEmail("");
  }

  return (
    <div className="newsletter registration-form">
      <div className="form-title">
        <h1>Recibe Exclusivas Noticias De Música en Tu Mail</h1>
        <p>Suscribite a nuestro newsletter y mantente actualizado</p>
      </div>
      <form onSubmit={EnviarDatos}>
        <div className="form-icon">
          <span>
            <i className="bi bi-person-circle"></i>
          </span>
        </div>
        <div className="form-group">
          <input
            type="text"
            onChange={(e) => setNombre(e.target.value)}
            className="form-control item"
            placeholder="Ingrese su nombre"
            value={nombre}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            onChange={(e) => setApellido(e.target.value)}
            className="form-control item"
            placeholder="Ingrese su apellido"
            value={apellido}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            onChange={(e) => setEdad(e.target.value)}
            className="form-control item"
            placeholder="Ingrese su edad"
            value={edad}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            onChange={(e) => setPais(e.target.value)}
            className="form-control item"
            placeholder="Ingrese su país"
            value={pais}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control item"
            placeholder="Ingrese su email"
            value={email}
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="create-account">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
