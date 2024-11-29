const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// Para solucionar el error de envio CORS.
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cris15401212",
    database: "cilsa_final"
});

app.post("/create", (req, res) => {
    const { nombre, apellido, edad, pais, email } = req.body;
    db.query(
        "INSERT INTO usuarios(nombre, apellido, edad, pais, email) VALUES (?,?,?,?,?)",
        [nombre, apellido, edad, pais, email],
        (error, resultado) => {
            if (error) {
                console.log(error);
            } else {
                res.send(resultado);
            }
        }
    );
});

app.put("/update", (req, res) => {
    const { id_usuario, nombre, apellido, edad, pais, email } = req.body;
    db.query(
        "UPDATE usuarios SET nombre=?, apellido=?, edad=?, pais=?, email=? WHERE id_usuario=?",
        [nombre, apellido, edad, pais, email, id_usuario],
        (error, resultado) => {
            if (error) {
                console.log(error);
            } else {
                res.send(resultado);
            }
        }
    );
});

app.get("/listar", (req, res) => {
    db.query("SELECT * FROM usuarios", (error, resultado) => {
        if (error) {
            console.log(error);
        } else {
            res.send(resultado);
        }
    });
});

app.delete("/delete/:id_usuario", (req, res) => {
    const id_usuario = req.params.id_usuario;
    db.query(
        "DELETE FROM usuarios WHERE id_usuario = ?",
        [id_usuario],
        (error, resultado) => {
            if (error) {
                console.log(error);
            } else {
                res.send(resultado);
            }
        }
    );
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Puerto iniciado");
});