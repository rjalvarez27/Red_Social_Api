const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

// validaciones del Register
const validateR = (req, res, next) => {
  const { name, username, email, password } = req.body;
  const validName = new RegExp(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/);
  const validCorreo = new RegExp(
    /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
  );
  const validPassword = new RegExp(/^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/);
  
  if (name == null || username == null || email == null || password == null) {
    return res
      .status(400)
      .json({ message: "Verifique los datos, faltan datos" });
  }
  if (
    name.length == 0 ||
    username.length == 0 ||
    email.length == 0 ||
    password.length == 0
  ) {
    return res.status(400).json({ message: "Datos vacios" });
  }
  if (validName.test(name) == true && validName.test(username) == true && validCorreo.test(email) == true && validPassword.test(password) == true) {
  console.log("Datos aceptados")
  next();
  } else {
    return res.status(401).json({ message: "Datos introducidos no validas" });
  }
};

module.exports = { validateR };
