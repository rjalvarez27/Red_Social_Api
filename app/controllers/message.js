const MessageSchema = require('../models/message.js')

//Función para guardar un mensaje
    const postMessages = async (req, res) => {

        try{
            const message = await MessageSchema.create({
                message: req.body.message,
                from: req.body.from
            })
            console.log(req.body + ' esto es el body')
            console.log(req)

            await message.save()

            res.send('File enviado' + message)

        }catch(error){
            res.sendStatus(error.status);
        }
    }

    //Función para obtener los mensajes
    const getMessages = async (req, res) => {
        try{
            const messages = await MessageSchema.find({});

            if (!messages || messages.length === 0) {
                return res.status(404).send({
                    status: "error",
                    message: "No hay mensajes para mostrar"
                });
            }
    
            return res.status(200).send({
                status: "success",
                messages
            });

        }catch(error){
            
            return res.status(500).send({
                status: "error",
                 message: "Error al extraer los datos"
            })
            
        }
    };

    const deleteMessages = async (req, res) => {
        try{
            const id = req.params.id;
            const deleteMessages = await MessageSchema.findByIdAndDelete(id);
            
            if(!deleteMessages){
                return res.status(404).json({error: error.message});
            }
            res.status(200).json({message: 'Mensaje eliminado'});
    
        }catch(error){
            res.status(404).json({message: error.message});
        }
    }

module.exports = { postMessages, getMessages, deleteMessages }