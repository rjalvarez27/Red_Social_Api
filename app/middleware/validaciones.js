const jwt = require("jsonwebtoken"); 
const userModel = require("../models/user"); 

const validationR = async (req, res, next) => {
    try {
    const { name , username, email, password  } = req.body;
    console.log(name)
    console.log(username)
    console.log(email)
    console.log(password)
    if(!name){
        return res.status(404).json({ message: "name " });
    }
    if(!username){
        return res.status(404).json({ message: "username" });
    }
    if(!email){
        return res.status(404).json({ message: "email" });
    }
    next()

    } catch(error){
        return res.status(401)/json({message:"Usuario no encontrado"})
    }


}

module.exports = {validationR}


