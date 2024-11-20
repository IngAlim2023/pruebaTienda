const {Venta, getAllVentas} = require('../models/ventaModels');

async function createVenta(ventaData) {
    try{
        const venta = await Venta.create(ventaData);
        return venta;
    } catch (error){
        console.error('Error al crear la venta', error.message);
        throw new Error('No se pudo crear la venta. Intentalo de nuevo.');
    }
}
async function getConsumidorVentas(idConsumidor){
    return await Venta.findAll(idConsumidor);
}
async function getVentas(){
    return await getAllVentas();
}

module.exports = {
    createVenta,
    getConsumidorVentas,
    getVentas
}