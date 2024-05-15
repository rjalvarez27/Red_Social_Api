const publishModel = require('../models/publicaciones')

// OBTENER COMENTARIO
const getPublish = async (req, res) => {
    const publish = await publishModel.find();
    res.status(200).json(publish);
}

// AGREGAR COMENTARIO
const newPublish = async (req, res) =>{
    try{
        const {author, content, image} = req.body;

        const publish = await publishModel.create({
            author,
            content,
            image 
        });
        res.status(201).json(publish);
    }catch(error){
        res.status(500).json({message: error.message})
        
    }
}

// AGREGAR FUNCION A PREMIUM
// EDITAR COMENTARIO

const updatePublish = async (req, res) => {
    try{
        const { id } = req.params;
        const { content, image } = req.body;
        const updatePublish = await publishModel.findByIdAndUpdate(id, {content, image});

        if(!updatePublish){
            return res.status(404).json({error: error.message});
        }
        res.status(200).json({message: 'Publicacion actualizada', updatePublish});

    }catch(error){
        res.status(404).json({message: error.message});
    }
}

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

module.exports = { getPublish, newPublish, updatePublish, deletePublish }