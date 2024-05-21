const avatarModel = require("../models/avatar");
   
// obtener avatar por id de usuario 
  
  const getAvatar = async (req, res) => {
    try {
      const id_user = req.params.id;  
      const value = await   avatarModel.findById(id_user);
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
      const { id_user } = req.params;
      const {avatar} = req.body;
      const value = await avatarModel.findByIdAndUpdate(id_user, {
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
      const {id_user} = req.body;
      const deleteAvatar = await avatarModel.findByIdAndDelete(id_user);
      if (!deleteAvatar) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.json({ message: "Avatar eliminado exitosamente", deleteAvatar });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
module.exports = { getAvatar, avatarPatch, avatarDelete}