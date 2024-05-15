const mongoose = require('mongoose');

const dbConnect = () =>{
    const DB_URI = process.env.DB_URI; 
    mongoose.connect(DB_URI)
    .then(()=>{
        console.log('Conexion exitosa a la base de datos')
    })
    .catch(error =>{
        console.error('Error al conectar con la base de datos', error)
    })
}

module.exports = { dbConnect }