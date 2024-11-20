const express = require('express');
const router = express.Router();


const { 
    createVentaC,
    getConsumidorVentasC,
    getVentasC
} = require('../controller/ventaController');

router.post('/crearVenta', createVentaC);
router.get('/verventas/:id', getConsumidorVentasC);
router.get('/verventas', getVentasC);

module.exports = router;