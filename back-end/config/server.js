const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const tiendasRoutes = require('../modules/tiendas/routes/tiendaRoutes');
const consumidoresRoutes = require('../modules/consumidores/routes/consumidorRoutes');

const appBackend = express();
const port = 3000;
appBackend.use(cors());
appBackend.use(morgan('dev'));
appBackend.use(express.json());


const corsOptions ={
    origin:[
        'http://localhost:5173',
    ]
};

appBackend.use(tiendasRoutes);
appBackend.use(consumidoresRoutes);

appBackend.set('port', process.env.PORT || port);

module.exports = appBackend;