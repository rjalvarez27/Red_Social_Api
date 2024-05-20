const modelAvatar = require("../models/avatar");

// Crear Avatar

const createAvatar = async (req, res) => {
    try {
      const {id_usuario, avatar } = req.body;
      const perfil = await modelAvatar.create({
         id_usuario,
         avatar
      });
      res.status(200).json({ message: "Avatar creado", perfil });
    } catch (error) {
      res.status(404).json({ message: "Error al crear avatar" });
    }
  };
   
  // obtener avatar por id de usuario 
  
  const getAvatar = async (req, res) => {
    try {
      const id_usuario = req.params.id;  
      const value = await modelAvatar.findById(id_usuario);
      if (!value) {
        return res.status(404).json({ message: "Avatar no encontrado" });  
      }  
      res.json(value);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el avatar" });  
    }  
  };  
  
  // Ruta para actualizar avatar
  
  const avatarPatch = async (req, res) => {
    try {
      const { id_usuario } = req.params;
      const {avatar} = req.body;
      const value = await modelAvatar.findByIdAndUpdate(id_usuario, {
        avatar
      });
      if (!value) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(200).json({ message: "avatar actualizado" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Ruta para borrar avatar por id de usuario
  const avatarDelete = async (req, res) => {
    try {
      const {id_usuario} = req.body;
      console.log(id_usuario)
      const deleteAvatar = await userModel.findByIdAndDelete(id_usuario);
      if (!deleteAvatar) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.json({ message: "Avatar eliminado exitosamente", deleteAvatar });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
module.exports = {createAvatar, getAvatar, avatarPatch, avatarDelete}