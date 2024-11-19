const ResponseStructure = require('../../../helpers/ResponseStructure');

const {
    createProducto,
    getTiendaProductos,
    getTiendasProductos
} = require('../services/productoServices');

const controller = {};

controller.createProductoC = async (req, res, next) => {
    try {
        const productoData = req.body;
        const producto = await createProducto(productoData);
        return res 
            .status(201)
            .json(ResponseStructure.success(producto, 'Producto creado con exito.'));
    } catch (error){
        return res.status(500).json(ResponseStructure.error(error.message, 500));
    }
}

controller.getTiendaProductosC = async (req, res, next) => {
    try {
        //Mejorar esta parte no pasar la tienda con los parametros:
        const idTienda = req.params.idTienda;
        const productos = await getTiendaProductos(idTienda);
        return res.status(200).json(ResponseStructure.success(productos, 200));
    } catch (error){
        return res.status(500).json(ResponseStructure.error('Error al obtener los productos', 500));
    }
}

controller.getTiendasProductosC = async (req, res, next) => {
    try {
        const productos = await getTiendasProductos();
        return res.status(200).json(ResponseStructure.success(productos, 200));
    } catch (error){
        return res.status(500).json(ResponseStructure.error('Error al obtener los productos', 500));
    }
}

module.exports = controller;