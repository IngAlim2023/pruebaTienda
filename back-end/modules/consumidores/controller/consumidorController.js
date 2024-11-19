const ResponseStructure = require("../../../helpers/ResponseStructure");
const {
  createConsumidor,
  getConsumidores,
} = require("../services/consumidorServices");

const { findConsumidor } = require("../Models/consumidorModels");

const controller = {};

controller.createConsumidorC = async (req, res, next) => {
  try {
    const consumidorData = req.body;

    const consumidorExiste = await findConsumidor(
      consumidorData.correo_consumidor
    );
    if (consumidorExiste) {
      return res
        .status(400)
        .json(ResponseStructure.error("El cliente ya existe", 400));
    }
    const consumidor = await createConsumidor(consumidorData);
    return res
      .status(201)
      .json(
        ResponseStructure.success(consumidor, "Consumidor creado con exito.")
      );
  } catch (error) {
    return res.status(500).json(ResponseStructure.error(error.message, 500));
  }
};

controller.getConsumidoresC = async (req, res, next) => {
  try {
    const consumidores = await getConsumidores();
    return res.status(200).json(ResponseStructure.success(consumidores, 200));
  } catch (error) {
    return res
      .status(500)
      .json(ResponseStructure.error("Error al obtener los consumidores", 500));
  }
};

module.exports = controller;
