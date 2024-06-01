const commentModel = require('../models/comments')

// OBTENER COMENTARIO
const getComment = async (req, res) => {
    const comment = await commentModel.find();
    res.status(200).json(comment);
}

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

module.exports = { getComment , updateComment , deleteComment}