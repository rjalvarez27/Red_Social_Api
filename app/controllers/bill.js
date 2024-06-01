const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const transporter = require("../../config/mailer");
const user = require("../models/user");

const postBill = async (req, res) => {
    const {name, ci, bank, reference, email, type } = req.body;
    try {
        await transporter.sendMail({
            from: '"Mounts" <Mounts@gmail.com>',
            to: `${email}`,
            subject: `Factura de compra de ${name} ✔`,
            text: `Hola ${name}, los datos ingresados son los siguientes: 
                   Cedula: ${ci} 
                   Banco: ${bank} 
                   Numero de referancia: ${reference} 
                   Correo electronico: ${email}
                   Tipo de cuenta: ${type}
            Los datos estan siendo procesados por Mounts. Una vez validados los datos, recibiras un email de confirmacion. 
            Gracias por usar Mounts
            `,
        });    
        res.status(200).json({ message: "Email enviado" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


module.exports = { postBill }