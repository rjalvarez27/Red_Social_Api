const publishModel = require('../models/publicaciones')

// OBTENER COMENTARIO
const getPublish = async (req, res) => {
    const publish = await publishModel.find();
    res.status(200).json(publish);
}

<<<<<<< HEAD
// AGREGAR FUNCION A PREMIUM
// EDITAR COMENTARIO
=======
>>>>>>> 0d7c43a04711bafeff1346a9c94fdab5ca19b565

const updatePublish = async (req, res) => {
    try{
        const { id } = req.params;
        const { content, image } = req.body;
        const updatePublish = await publishModel.findByIdAndUpdate(id, {content, image});

        if(!updatePublish){
            return res.status(404).json({error: error.message});
        }
        res.status(200).json({message: 'Publicación actualizada', updatePublish});

    }catch(error){
        res.status(404).json({message: error.message});
    }
} //ADAPTAR A NUEVO SISTEMA

// ELIMINAR COMENTARIO

const deletePublish = async (req, res) => {
    try{
        const id = req.params.id;
        const deletePublish = await publishModel.findByIdAndDelete(id);
        
        if(!deletePublish){
            return res.status(404).json({error: error.message});
        }
        res.status(200).json({message: 'Publicaion eliminada'});

    }catch(error){
        res.status(404).json({message: error.message});
    }
}

module.exports = { getPublish, updatePublish, deletePublish }