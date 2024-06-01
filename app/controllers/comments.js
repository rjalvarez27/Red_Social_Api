const commentModel = require('../models/comments')

// OBTENER COMENTARIO
const getComment = async (req, res) => {
    const comment = await commentModel.find();
    res.status(200).json(comment);
}

const getCommentID = async (req, res) => {
    try {
      const id_user = req.params.id;  
      console.log(id_user)
      const value = await  commentModel.findOne({id_user} );
      if (!value) {
        return res.status(404).json({ message: "comentario de usuario no encontrado" });  
      }  
      res.json(value.image);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener la imagen" });  
    }  
  };  

// ELIMINAR COMENTARIO

const deleteComment = async (req, res) => {
    try{
        const id = req.params.id;
        const deleteComment = await commentModel.findByIdAndDelete(id);
        
        if(!deleteComment){
            return res.status(404).json({error: error.message});
        }
        res.status(200).json({message: 'Comentario eliminado'});

    }catch(error){
        res.status(404).json({message: error.message});
    }
}

module.exports = { getComment , getCommentID, deleteComment}