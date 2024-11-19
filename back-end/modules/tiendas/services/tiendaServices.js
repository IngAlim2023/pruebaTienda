const { Tienda } = require('../models/tiendaModels');

async function createTienda(tiendaData) {
    // Validación de los datos
    if (!tiendaData || !tiendaData.nombre_tienda || !tiendaData.direccion_tienda || !tiendaData.correo_tienda || !tiendaData.password) {
        throw new Error('Faltan datos obligatorios para la creación de la Tienda');
    }

    try {
        // Crear la nueva tienda llamando al método del modelo
        const newTienda = await Tienda.create(tiendaData);
        return newTienda;
    } catch (error) {
        // Manejo de errores
        console.error('Error al crear la tienda:', error.message);
        throw new Error('No se pudo crear la tienda. Intente nuevamente.');
    }
};

async function getTiendas() {
    return await Tienda.findAll();
}

module.exports = {
    createTienda,
    getTiendas
};
