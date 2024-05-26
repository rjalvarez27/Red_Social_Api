const modelfollowed = require("../models/followed"); 

//Obtener seguidos

const createfollowed = async (req, res) => {
  try {
    const {id_user, id_followed,  notifications } = req.body;
    const value = await modelfollowed.create({
       id_user,
       id_followed,
       notifications
    });
    res.status(200).json({ message: "ruta acceptada", value });
  } catch (error) {
    res.status(404).json({ message: "Error" });
  }
};


// obtener seguidos por id de usuario

const getfollowed = async (req, res) => {
  try {
    const id_user = req.params.id;  
    console.log(id_user)
    const value = await modelfollowed.findOne({id_user});
    if (!value) {
      return res.status(404).json({ message: "no encontrado" });  
    }  
    res.json(value);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener Informacion" });  
  }  
};  

// Ruta para borrar seguidos

const deletFollowed = async (req, res) => {
  try {
    const id_followed = req.params.id;
    console.log(id_followed)
    const deleteF = await modelfollowed.deleteOne({id_followed});
    if (!deleteF) {
      return res.status(404).json({ message: "no encontrado" });
    }
    res.json({ message: "Eliminado", deleteF });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



module.exports = {createfollowed ,getfollowed , deletFollowed}