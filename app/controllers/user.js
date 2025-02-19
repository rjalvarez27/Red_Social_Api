const userModel = require("../models/user"); 
const jwt = require("jsonwebtoken");

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
    console.log(error)
    res.status(404).json({ message: "Error al crear un usuario" });
  }
};

// obtener todos los usuarios

const getUsers = async (req, res) => {
  try{
  const users = await userModel.find();  
  res.status(200).json(users);
  }catch(error){
    res.status(404).json({ message: "Error al obtener los usuarios" });
  }
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
    const id = req.params.id;  
    const update = req.body;
    const response = await userModel.findByIdAndUpdate(id, update);
    if (!response) {
      return res.status(404).json({ message: "Usuario no actualizado" });  
    }  
    res.status(200).json({ message: "Usuario actualizado" });
  }
    catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Ruta para actualizar password de usuarios por id

const userPatchPassword = async (req, res) => {
  const id = req.params.id;
  const {password} = req.body;
  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const newPassword = await userModel.encryptPassword(password);
    user.password = newPassword;
    await user.save();
    res.status(200).json({ message: "Contraseña actualizada" });
  } catch (error) {
    res.status(500).json({ message: "Error al Cambiar la contraseña" });
  }
};


// Ruta para borrar un usuario por id
const userDelete = async (req, res) => {
  try {
    const {id} = req.params;
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

module.exports = { getUsers, getUser, userPatch, userDelete, createUser, userPatchPassword };