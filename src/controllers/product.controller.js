const Product = require("../models/Product");
const { PATH_STORAGE } = require( '../middlewares/upload.middleware' );
const path = require( 'path' );

const registerProduct = async ( req, res ) => {
    const inputData = req.body;

    // Asegúrate de que PATH_STORAGE esté definido y tenga el valor correcto
    if ( ! PATH_STORAGE ) {
        res.status( 500 ).json({
            ok: false,
            path: '/products',
            msg: 'No se ha configurado correctamente la ruta de almacenamiento de archivos',
        }); 
    }

    const filePath = path.join( PATH_STORAGE, req.file.filename );        // Obtiene la ruta del archivo subido
 
    // const filePath = `${ PATH_STORAGE }/${ req.file.filename }`
    console.log( 'req.file', req.file );
    console.log( 'PATH_STORAGE:', PATH_STORAGE );
    console.log( 'filePath:', filePath );

    const productData = {
        name: inputData.name,
        price: inputData.price,
        urlImage: path.normalize( filePath )
    };

    try {
        const data = await Product.create( productData );

        res.status( 201 ).json({
            ok: true,
            product: data
        });
    } catch (error) {
        console.log( error );
        res.status( 500 ).json({
            ok: false,
            msg: `Error al crear producto`
        });
    }
    
}


module.exports = {
    registerProduct
};