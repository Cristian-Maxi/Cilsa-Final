import { useEffect, useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Admin() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [pais, setPais] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();
  
    const [listarEpleados, setListarEmpleados] = useState([]);
    const [editar, setEditar] = useState(false);
  
    useEffect(() => {
      ListaEmpleados();
    }, []);
  
    function EnviarDatos() {
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
            text: "No se logró crear el usuario!",
            footer: error.message,
          });
        });
    }
  
    function ListaEmpleados() {
      Axios.get("http://localhost:8080/listar")
        .then((response) => setListarEmpleados(response.data))
        .catch((error) => console.log(error));
    }
  
    function editarEpleados(empleado) {
      setEditar(true);
      setNombre(empleado.nombre);
      setApellido(empleado.apellido);
      setEdad(empleado.edad);
      setPais(empleado.pais);
      setEmail(empleado.email);
      setId(empleado.id_empleado);
    }
  
    function ActualizarDatos() {
      Axios.put("http://localhost:8080/update", {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        pais: pais,
        email: email,
        id_empleado: id,
      })
        .then(() => {
          setEditar(false);
          ListaEmpleados();
          limpiarCampos();
          Swal.fire({
            title: "<strong>Actualización Exitosa</strong>",
            html: `<i>El usuario <strong>${nombre} ${apellido}</strong> fue actualizado con éxito!!!</i>`,
            icon: "success",
            timer: 3000,
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se logró modificar al Usuario!",
            footer: error.message,
          });
        });
    }
  
    function EliminarDatos(empleado) {
      Swal.fire({
        title: "¿Confirmar Eliminación?",
        html: `<i>¿Realmente desea eliminar a <strong>${empleado.nombre} ${empleado.apellido}</strong>?</i>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, Eliminarlo!",
      }).then((result) => {
        if (result.isConfirmed) {
          Axios.delete(`http://localhost:8080/delete/${empleado.id_empleado}`)
            .then(() => {
              setEditar(false);
              ListaEmpleados();
              limpiarCampos();
              Swal.fire({
                title: "Eliminado!",
                text: `${empleado.nombre} ${empleado.apellido} fue Eliminado!`,
                icon: "success",
                timer: 3000,
              });
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No se logró eliminar el Empleado!",
                footer: error.message,
              });
            });
        }
      });
    }
  
    function limpiarCampos() {
      setNombre("");
      setApellido("");
      setEdad("");
      setPais("");
      setEmail("");
      setEditar(false);
    }
  
    return (
      <div className="container mt-5">
        <div className="card text-center">
          <div className="card-header"><h3>Usuarios Suscriptos</h3></div>
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text">Nombre</span>
              <input
                type="text"
                onChange={(e) => setNombre(e.target.value)}
                className="form-control"
                placeholder="Ingrese un nombre"
                value={nombre}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Apellido</span>
              <input
                type="text"
                onChange={(e) => setApellido(e.target.value)}
                className="form-control"
                placeholder="Ingrese un apellido"
                value={apellido}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text px-4">Edad</span>
              <input
                type="number"
                onChange={(e) => setEdad(e.target.value)}
                className="form-control"
                placeholder="Ingrese la edad"
                value={edad}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" style={{padding: "0px 28px 0px 28px"}}>País</span>
              <input
                type="text"
                onChange={(e) => setPais(e.target.value)}
                className="form-control"
                placeholder="Ingrese el país"
                value={pais}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" style={{padding: "0px 23px 0px 23px"}}>Email</span>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Ingrese el email"
                value={email}
              />
            </div>
          </div>
          <div className="card-footer">
            {editar ? (
              <>
                <button className="btn btn-warning m-2" onClick={ActualizarDatos}>
                  Actualizar
                </button>
                <button className="btn btn-info m-2" onClick={limpiarCampos}>
                  Cancelar
                </button>
              </>
            ) : (
              <button className="btn btn-primary" onClick={EnviarDatos}>
                Enviar
              </button>
            )}
          </div>
        </div>
        <table className="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>País</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listarEpleados.map((empleado) => (
              <tr key={empleado.id_empleado}>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellido}</td>
                <td>{empleado.edad}</td>
                <td>{empleado.pais}</td>
                <td>{empleado.email}</td>
                <td>
                  <div>
                    <button className="btn btn-info mx-2" onClick={() => editarEpleados(empleado)}>
                      Editar <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => EliminarDatos(empleado)}>
                      Eliminar <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
  
export default Admin;