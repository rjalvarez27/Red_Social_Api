const user = require("../models/user");
const userModel = require("../models/user"); 

//Crear un nuevo usuario

const createUser = async (req, res) => {
  try {
    const {name, username, email, password } = req.body;
    const user = await userModel.create({
      name,
      username,
      email,
      password: await userModel.encryptPassword(password),
    });
    res.status(200).json({ message: "Usuario creado", user });
  } catch (error) {
    res.status(404).json({ message: "Error al crear un usuario" });
  }
};

// obtener todos los usuarios


const getUsers = async (req, res) => {
  const users = await userModel.find();  
  res.status(200).json(users);
};  


// obtener un solo usuario por id 

const getUser = async (req, res) => {
  try {
    const id = req.params.id;  
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });  
    }  
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario" });  
  }  
};  


// Ruta para actualizar un usuario

const userPatch = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = await userModel.findByIdAndUpdate(id, {
      name,
      email,
      password: await userModel.encryptPassword(password),
    });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json({ message: "Usuario actualizado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Ruta para borrar un usuario por id
const userDelete = async (req, res) => {
  try {
    const {id} = req.body;
    console.log(id)
    const deleteUser = await userModel.findByIdAndDelete(id);
    if (!deleteUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json({ message: "Usuario eliminado exitosamente", deleteUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = { getUsers, getUser, userPatch, userDelete, createUser };