const avatarModel = require("../models/avatar");
const fs = require('fs');

// obtener avatar por id de usuario 
  
  const getAvatar = async (req, res) => {
    try {
      const id_user = req.params.id;  
      const value = await  avatarModel.findOne({id_user});
      if (!value) {
        return res.status(404).json({ message: "imagen de usuario no encontrado" });  
      }  
      res.json(value.avatar);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el avatar" });  
    }  
  };  
  
  // Ruta para borrar avatar por id de usuario
  const avatarDelete = async (req, res) => {
    try {
      const id_user = req.params.id;
      const deleteAvatar = await avatarModel.deleteOne({id_user});
      if (!deleteAvatar) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.json({ message: "Avatar eliminado exitosamente", deleteAvatar });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
module.exports = { getAvatar, avatarDelete}