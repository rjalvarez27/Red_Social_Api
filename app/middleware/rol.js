const jwt = require("jsonwebtoken"); 
const userModel = require("../models/user"); 

// Verificacion para Administrador 
const verifyAdmin = async (req, res, next) => { 
    try{
        // id: Administrador
        const { id } = req.params;
        const user = await userModel.findById(id);
        console.log(user)
        if(!user){
            return res.status(404).json({ message: "User no found" });
        }
        if(user.rol == "admin"){
            next()
        }else{
            return res.status(403).json({message: "Usuario no autorizado"});
        }

    } catch(error){
        return res.status(401).json({ message: "Usuario no autorizado" });
    }
}

//Verificacion para usuario premiun 

const verifyPremiun = async (req, res, next) => { 
    try{
        // id: Usuario premiun 
        const { id } = req.params;
        const user = await userModel.findById(id);
        console.log(user)
        if(!user){
            return res.status(404).json({ message: "User no found" });
        }
        if(user.rol == "userP"){
            next()
        }else{
            return res.status(403).json({message: "Usuario no autorizado"});
        }

    } catch(error){
        return res.status(401).json({ message: "Usuario no autorizado" });
    }
}

module.exports = { verifyPremiun , verifyAdmin }