const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const transporter = require("../../config/mailer");
const user = require("../models/user");

const postRecovery = async (req, res) => {
    const email = req.params.email;
    const users = await userModel.findOne({ email });
    console.timeLog(users)
    if (!users) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const code = jwt.sign({ id: users._id }, process.env.SECRET_KEY, { expiresIn: '8h' })
    try {
        await transporter.sendMail({
            from: '"Mounts" <Mounts@gmail.com>',
            to: `${users.email}`,
            subject: "Link de recuperacion de la cuenta ✔",
            html: `
                <h1>Recuperación de Contraseña Mounts</h1>
                <p>Hola ${users.name}</p>
                <p>Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace para cambiarla:</p>
                <p>http://localhost:5173/recoverPassword/${code}</p>
                <p>Si no solicitaste esto, ignora este mensaje.</p>
                <p>¡Gracias!</p>`
        });    
        res.status(200).json({ message: "Email enviado" });
    } catch (error) { 
        res.status(404).json({ message: error.message });
    }
}

const getRecovery = async (req, res) => {
    try {
        const code = req.params.code;
        const decoded = jwt.verify(code, process.env.SECRET_KEY);
        if (!decoded) {
            return res.status(404).json({ message: "token invalido" } );
        } else {
            return res.status(200).json({ message: decoded.id });
        }
    } catch (error) {
        return res.status(404).json({ message: false });
    }
}



module.exports = { getRecovery, postRecovery }