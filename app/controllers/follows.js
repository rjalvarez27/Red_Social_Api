const modelfollows = require("../models/follows"); 

//Obtener todos los likes

const createfollows = async (req, res) => {
  try {
    const {id_usuario, id_seguidos, id_seguidores, notificaciones } = req.body;
    const user = await modelLikes.create({
       id_usuario,
       id_seguidos,
       id_seguidores,
       notificaciones
    });
    res.status(200).json({ message: "Like creado", user });
  } catch (error) {
    res.status(404).json({ message: "Error al crear un like" });
  }
};


// obtener follow por id de usuario

const getfollows = async (req, res) => {
  try {
    const id_usuario = req.params.id;  
    const follow = await modelLikes.findById(id_usuario);
    if (!like) {
      return res.status(404).json({ message: "no encontrado" });  
    }  
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener Informacion" });  
  }  
};  


// Ruta para borrar  
const followDelete = async (req, res) => {
  try {
    const {id_usuario} = req.body;
    console.log(id)
    const deletelike = await modelLikes.findByIdAndDelete(id_publicacion);
    if (!deletelike) {
      return res.status(404).json({ message: "no encontrado" });
    }
    res.json({ message: "Eliminado", deletelike });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {createfollows,getfollows,followDelete}