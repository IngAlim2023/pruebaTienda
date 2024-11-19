const pool = require('../../../config/database');

const Producto = {
    findAll: async function(idtienda){
        return pool.query('SELECT * FROM productos WHERE tiendas_idtiendas = ?', [idtienda])
    },
    create: async function (productoData) {
        const sql = `INSERT INTO productos (nombre_producto, descripcion_producto, precio_producto, stock, tiendas_idtiendas) VALUES (?, ?, ?, ?, ?)`;
        return pool.execute(sql, [productoData.nombre_producto, productoData.descripcion_producto, productoData.precio_producto, productoData.stock, productoData.tiendas_idtiendas]);
    }
}

async function getAllProductos(){
    return pool.query('SELECT * FROM productos');
}

module.exports = {
    Producto,
    getAllProductos
}