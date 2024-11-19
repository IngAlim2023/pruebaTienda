const express = require('express');
const router = express.Router();

const {
    createProductoC,
    getTiendaProductosC,
    getTiendasProductosC
} = require('../controller/productoController');


router.post('/crearProducto', createProductoC);
router.get('/verproductos/:idTienda', getTiendaProductosC);
router.get('/verTiendasProductos', getTiendasProductosC);

module.exports = router;