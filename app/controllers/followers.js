const modelfollowers = require("../models/followers"); 

//Obtener los seguidores

const createfollowers = async (req, res) => {
  try {
    const {id_user, id_followers, notifications } = req.body;
    const value = await modelfollowers.create({
       id_user,
       id_followers,
       notifications
    });
    res.status(200).json({ message: "ruta acceptada", value });
  } catch (error) {
    res.status(404).json({ message: "Error" });
  }
};

// obtener seguidores por id de usuario

const getfollowers = async (req, res) => {
  try {
    const id_user = req.params.id;  
    console.log(id_user)
    const value = await modelfollowers.findOne({id_user});
    if (!value) {
      return res.status(404).json({ message: "no encontrado" });  
    }  
    res.json(value);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener Informacion" });  
  }  
};  

// Ruta para borrar seguidores por id 
const deletFollowers = async (req, res) => {
  try {
    const id_followers = req.params.id;
    console.log(id_followers)
    const deleteF = await modelfollowers.deleteOne({id_followers});
    if (!deleteF) {
      return res.status(404).json({ message: "no encontrado" });
    }
    res.json({ message: "Eliminado", deleteF });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



module.exports = {createfollowers, getfollowers, deletFollowers}