const paymentModel = require('../models/paymentPM');

const createPayment = async (req, res) => {
    try {
      const {name, ci, bank, email, type } = req.body;
      console.log(name, ci, bank, type)
      const pay = await paymentModel.create({
        name,
        ci,
        bank,
        email,
        type
      });
      res.status(200).json({ message: "Pago Registrado", pay });
    } catch (error) {
      res.status(404).json({ message: "Error al crear un usuario" });
    }
  };


const getPayment = async (req, res) => {
    const payment = await paymentModel.find();
    res.status(200).json(payment);
}

const getPaymentId = async (req, res) => {
    try {
      const id = req.params.id;  
      console.log(id)
      const user = await paymentModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });  
      }  
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el usuario" });  
    }  
  };  



  const patchPayment = async (req, res) => {
    try {
      const id = req.params.id;  
      const update = req.body;
      const response = await paymentModel.findByIdAndUpdate(id, update);
      if (!response) {
        return res.status(404).json({ message: "Registro no actualizado" });  
      }  
      res.status(200).json({ message: "Registro actualizado" });
    }
      catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  const deletePayment = async (req, res) => {
    try {
      const {id} = req.params;
      const deleteUser = await paymentModel.findByIdAndDelete(id);
      if (!deleteUser) {
        return res.status(404).json({ message: "Registro no encontrado" });
      }
      res.json({ message: "registro eliminado exitosamente", deleteUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };



module.exports = { getPayment, getPaymentId, patchPayment, deletePayment, createPayment }