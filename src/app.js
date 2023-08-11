const
    express = require( 'express' ),
    app = express()
    cors = require( 'cors'  ),
    db = require ( './config/mongo.config' ),
    PORT = process.env.PORT || 4001;

require( 'dotenv' ).config();

app.use( cors() );
app.use( express.json() );

app.use( '/api/products', require( './routes/products.routes' ) );

db()
    .then( () => console.log( `MongoDB se conecto correctamente` ) )
    .catch( () => console.error( `MongoDB sufre un problema de conexión` ) );

app.listen( PORT, () => {
    console.log( `Servidor lanzado en http://localhost:${ PORT }` );
});
