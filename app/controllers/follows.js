const modelfollows = require("../models/follows"); 

//Obtener todos los likes

const createfollows = async (req, res) => {
  try {
    const {id_user, id_followed, id_followers, notifications } = req.body;
    const value = await modelfollows.create({
       id_user,
       id_followed,
       id_followers,
       notifications
    });
    res.status(200).json({ message: "Like creado", value });
  } catch (error) {
    res.status(404).json({ message: "Error al crear un like" });
  }
};


// obtener follow por id de usuario

const getfollows = async (req, res) => {
  try {
    const id_user = req.params.id;  
    const value = await modelfollows.findById(id_user);
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
    const {id_followed} = req.body;
    console.log(id_followed)
    const deleteF = await modelfollows.findByIdAndDelete(id_followed);
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
    const {id_followers} = req.body;
    console.log(id_followers)
    const deleteF = await modelfollows.findByIdAndDelete(id_followers);
    if (!deleteF) {
      return res.status(404).json({ message: "no encontrado" });
    }
    res.json({ message: "Eliminado", deleteF });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {createfollows,getfollows, followDeletSeguidos, followDeletSeguidores}