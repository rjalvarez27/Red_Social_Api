const MessageSchema = require("../models/message"); 


const getMessages = async (req, res) => {
    const query = await Message.find({})

    query.sort('-_id').exec((error, messages) => {
        if(error){
            return res.status(500).send({
                status: "error",
                message: "Error al extraer los datos"
            })
        }

        //Si no existen artículos:
        if(!messages){
            return res.status(404).send({
                status: "error",
                message: "No hay mensajes para mostrar"
            })
        }

        return res.status(200).send({
            status: "success",
            messages
        })

    })
}

module.exports = { getMessages}