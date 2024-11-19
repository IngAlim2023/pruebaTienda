const pool = require('../../../config/database');
const bcrypt = require('bcrypt');

const Consumidor = {
    findAll: function(){
        return pool.query('SELECT * FROM consumidores');
    },
    create: async function(consumidorData) {
        const password = consumidorData.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const sql =`INSERT INTO consumidores (nombre_consumidor, apellido_consumidor, correo_consumidor, telefono_consumidor, fecha_nacimiento, password) VALUES (?,?,?,?,?,?)`;
        return pool.execute(sql, [consumidorData.nombre_consumidor, consumidorData.apellido_consumidor, consumidorData.correo_consumidor, consumidorData.telefono_consumidor, consumidorData.fecha_nacimiento, hash]);
    }
}

async function findConsumidor(correo_consumidor) {
    const[row] = await pool.query('SELECT * FROM consumidores WHERE correo_consumidor = ?', [correo_consumidor]);
    return row[0];
}

module.exports = {
    Consumidor,
    findConsumidor
};