const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const tiendasRoutes = require('../modules/tiendas/routes/tiendaRoutes');
const consumidoresRoutes = require('../modules/consumidores/routes/consumidorRoutes');
const productosRoutes = require('../modules/productos/routes/productoRoutes');
const ventasRoutes = require('../modules/ventas/routes/ventaRoutes');

const corsOptions ={
    origin:[
        'http://localhost:5173',
    ]
};

const appBackend = express();
const port = 3000;
appBackend.use(cors(corsOptions));
appBackend.use(morgan('dev'));
appBackend.use(express.json());


appBackend.use(tiendasRoutes);
appBackend.use(consumidoresRoutes);
appBackend.use(productosRoutes);
appBackend.use(ventasRoutes);

appBackend.set('port', process.env.PORT || port);

module.exports = appBackend;