const express = require('express');
const router  = express.Router();

const {
    createTiendaC,
    getTiendasC
} = require('../controller/tiendaController');

router.post('/crearTienda', createTiendaC);
router.get('/verTiendas', getTiendasC);


module.exports = router;