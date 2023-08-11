const { connect } = require ( 'mongoose' );

// Configuracion para la conexion con MongoDB
async function dbConnect() {
    const DB_URI = `${ process.env.DB_URI }`;     // <string> 
    await connect( DB_URI );
}


module.exports = dbConnect;