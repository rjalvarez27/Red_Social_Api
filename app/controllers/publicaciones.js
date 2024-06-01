const publishModel = require('../models/publicaciones')

// OBTENER COMENTARIO
const getPublish = async (req, res) => {
    const publish = await publishModel.find();
    res.status(200).json(publish);
}


// obtener avatar por id de usuario 

const getPublishID = async (req, res) => {
    try {
      const id_user = req.params.id;  
      console.log(id_user)
      const value = await  publishModel.findOne({id_user} );
      if (!value) {
        return res.status(404).json({ message: "imagen de usuario no encontrado" });  
      }  
      res.json(value.image);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener la imagen" });  
    }  
  };  


const deletePublish = async (req, res) => {
    try{
        const id = req.params.id;
        const deletePublish = await publishModel.findByIdAndDelete(id);
        
        if(!deletePublish){
            return res.status(404).json({error: error.message});
        }
        res.status(200).json({message: 'Publicacion eliminada'});

    }catch(error){
        res.status(404).json({message: error.message});
    }
}

module.exports = { getPublish, getPublishID, deletePublish }