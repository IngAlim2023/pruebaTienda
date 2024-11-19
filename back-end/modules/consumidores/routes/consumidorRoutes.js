const express = require('express');
const router = express.Router();

const {
    createConsumidorC,
    getConsumidoresC
} = require('../controller/consumidorController');

router.post('/crearConsumidor', createConsumidorC);
router.get('/verconsumidores', getConsumidoresC);

module.exports = router;