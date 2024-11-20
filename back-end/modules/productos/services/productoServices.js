const {Producto} = require('../models/productoModels');
const {getAllProductos} = require('../models/productoModels');

async function createProducto(productoData) {
    try{
        const producto = await Producto.create(productoData);
        return producto;
    } catch (error){
        console.error('Error al crear el producto', error.message);
        throw new Error('No se pudo crear el producto. Intentalo de nuevo.');
    }
}
async function getTiendaProductos(idtienda) {
    return await Producto.findAll(idtienda);
}
async function getTiendasProductos() {
    return await getAllProductos();    
}

module.exports = {
    createProducto,
    getTiendaProductos,
    getTiendasProductos
}