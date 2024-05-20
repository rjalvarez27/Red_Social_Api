const modelfollows = require("../models/follows"); 

//Obtener todos los likes

const createfollows = async (req, res) => {
  try {
    const {id_usuario, id_seguidos, id_seguidores, notificaciones } = req.body;
    const value = await modelfollows.create({
       id_usuario,
       id_seguidos,
       id_seguidores,
       notificaciones
    });
    res.status(200).json({ message: "Like creado", value });
  } catch (error) {
    res.status(404).json({ message: "Error al crear un like" });
  }
};


// obtener follow por id de usuario

const getfollows = async (req, res) => {
  try {
    const id_usuario = req.params.id;  
    const value = await modelfollows.findById(id_usuario);
    if (!value) {
      return res.status(404).json({ message: "no encontrado" });  
    }  
    res.json(value);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener Informacion" });  
  }  
};  

// Ruta para borrar seguidos
const followDeletSeguidos = async (req, res) => {
  try {
    const {id_seguidos} = req.body;
    console.log(id_seguidos)
    const deleteF = await modelfollows.findByIdAndDelete(id_seguidos);
    if (!deleteF) {
      return res.status(404).json({ message: "no encontrado" });
    }
    res.json({ message: "Eliminado", deleteF });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ruta para borrar seguidores
const followDeletSeguidores = async (req, res) => {
  try {
    const {id_seguidores} = req.body;
    console.log(id_seguidores)
    const deleteF = await modelfollows.findByIdAndDelete(id_seguidores);
    if (!deleteF) {
      return res.status(404).json({ message: "no encontrado" });
    }
    res.json({ message: "Eliminado", deleteF });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {createfollows,getfollows, followDeletSeguidos, followDeletSeguidores}