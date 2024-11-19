const ResponseStructure = require("../../../helpers/ResponseStructure");
const { createTienda, getTiendas } = require("../services/tiendaServices");

const { findTienda } = require("../models/tiendaModels");

const controller = {};

controller.createTiendaC = async (req, res, next) => {
  try {
    const tiendaData = req.body;

    // Verificar si la tienda ya existe
    const tiendaExiste = await findTienda(tiendaData.nombre_tienda);
    if (tiendaExiste) {
      return res
        .status(400)
        .json(ResponseStructure.error("La tienda ya está registrada", 400));
    }

    // Crear nueva tienda
    const nuevaTienda = await createTienda(tiendaData);
    return res
      .status(201)
      .json(
        ResponseStructure.success(nuevaTienda, "Tienda creada exitosamente")
      );
  } catch (error) {
    return res.status(500).json(ResponseStructure.error(error.message, 500));
  }
};

controller.getTiendasC = async (req, res, next) => {
  try {
    const tiendas = await getTiendas();
    return res
      .status(200)
      .json(
        ResponseStructure.success(tiendas, "Tiendas obtenidas correctamente")
      );
  } catch (error) {
    return res
      .status(500)
      .json(ResponseStructure.error("No se pudieron obtener las Tiendas", 500));
  }
};

module.exports = controller;
