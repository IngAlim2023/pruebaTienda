const pool = require("../../../config/database");

const Venta = {
  findAll: function (idConsumidor) {
    return pool.execute(
      "SELECT * FROM ventas WHERE consumidores_idconsumidores = ?",
      [idConsumidor]
    );
  },
  create: async function (ventaData) {
        // Capturar el precio del producto
        const [rows] = await pool.execute(
          `SELECT precio_producto FROM productos WHERE idproductos = ?`,
          [ventaData.productos_idproductos]
        );
  
        if (rows.length === 0) {
          throw new Error("Producto no encontrado");
        }

        
        // Con el precio del producto, calcular el monto de la venta:
        const precioProducto = parseFloat(rows[0].precio_producto);
        const cantidad = parseInt(ventaData.cantidad_productos, 10) || 1;
        const subtotalVenta = precioProducto * cantidad;
        //NUEVO!!
        //Ver la cantidad de productos que tengo en el stock:
        const [stockRows] = await pool.execute(`SELECT stock FROM productos WHERE idproductos = ?`, [ventaData.productos_idproductos]);
        //Almaceno la cantidad de productos que hay en el inventario para operar con el:
        const cantidadStock = parseInt(stockRows[0].stock, 10);
        //Esta validación hay que mejorarla para NO VENDER MÁS PRODUCTO DEL QUE TENGO EN INVENTARIO, Por ahora solo hace la resta del inventario:
        if(cantidadStock >= cantidad){
          const stock_actualizado = cantidadStock - cantidad;
          await pool.execute(`UPDATE productos SET stock = ? WHERE idproductos = ?`, [stock_actualizado, ventaData.productos_idproductos]);
        }
        
        // Insertar la venta en la tabla "ventas"
        const [ventaResult] = await pool.execute(
          `INSERT INTO ventas (total, consumidores_idconsumidores) VALUES (?, ?)`,
          [subtotalVenta, ventaData.consumidores_idconsumidores]
        );
  
        const idVenta = ventaResult.insertId;
  
        // Insertar los detalles de la compra
        await pool.execute(
          `INSERT INTO detalles_compras (productos_idproductos, cantidad_productos, subtotal_compra, Ventas_idVentas) VALUES (?, ?, ?, ?)`,
          [ventaData.productos_idproductos, cantidad, subtotalVenta, idVenta]
        );
    }
};
async function getAllVentas() {
    return await pool.query('SELECT * FROM ventas');
};

module.exports = {
    Venta,
    getAllVentas
}