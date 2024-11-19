const {Consumidor} = require('../Models/consumidorModels');

async function createConsumidor(consumidorData) {
    if(!consumidorData || !consumidorData.nombre_consumidor || !consumidorData.apellido_consumidor || !consumidorData.correo_consumidor || !consumidorData.telefono_consumidor || !consumidorData.fecha_nacimiento || !consumidorData.password) {
        throw new Error('Faltan datos para crear un consumidor');
    }

    try{
        const newConsumidor = await Consumidor.create(consumidorData);
        return newConsumidor;
    }catch (error){
        console.error('Error al crear al consumidor', error.message);
        throw new Error('No se pudo crear el usuario. Intente de nuevo.');
    }
}

async function getConsumidores() {
    return await Consumidor.findAll();
}

module.exports = {
    createConsumidor,
    getConsumidores
}