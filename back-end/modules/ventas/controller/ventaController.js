const ResponseStructure = require("../../../helpers/ResponseStructure");

const {
  createVenta,
  getConsumidorVentas,
  getVentas,
} = require("../services/ventaServices");

const controller = {};

controller.createVentaC = async (req, res, next) => {
  try {
    const ventaData = req.body;
    const venta = await createVenta(ventaData);
    return res
      .status(201)
      .json(ResponseStructure.success(venta, "Venta creada con exito"));
  } catch (error) {
    return res.status(500).json(ResponseStructure.error(error.message, 500))
  }
}
controller.getConsumidorVentasC = async (req, res, next) => {
    try {
        //Mejorar esta parte no hacer la consulta con los parametros:
        const consumidorId = req.params.id;
        const ventas = await getConsumidorVentas(consumidorId);
        return res
            .status(200)
            .json(ResponseStructure.success(ventas, 200));
    } catch (error){
        return res.status(500).json(ResponseStructure.error('Error al obtener las ventas', 500));
    }
}
controller.getVentasC = async (req, res, next) => {
    try {
        const ventas = await getVentas();
        return res
            .status(200)
            .json(ResponseStructure.success(ventas, 200));
     }catch (error){
        return res.status(500).json(ResponseStructure.error('Error al obtener las ventas', 500));
    }
}
module.exports = controller;