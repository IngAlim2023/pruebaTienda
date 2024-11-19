const pool = require('../../../config/database');
const bcrypt = require('bcrypt');

const Tienda ={
    findAll: function(){
        return pool.execute('SELECT * FROM tiendas');
    },
    create: async function(tiendaData){
        const  password = tiendaData.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const sql =`INSERT INTO tiendas (nombre_tienda, direccion_tienda, correo_tienda, password) VALUES (?,?,?,?)`;
        return pool.execute(sql, [tiendaData.nombre_tienda, tiendaData.direccion_tienda, tiendaData.correo_tienda, hash]);
    }
}


async function findTienda(nombre_tienda) {
    const[row] = await pool.execute(`SELECT * FROM tiendas WHERE nombre_tienda = ?`, [nombre_tienda]);
    return row[0];
}
module.exports = {
    Tienda,
    findTienda
};