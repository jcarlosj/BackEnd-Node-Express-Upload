const { registerProduct } = require( '../controllers/product.controller' );

const { multerMiddleware } = require( '../middlewares/upload.middleware' );

const 
    { Router } = require( 'express' ),
    router = Router();

router.post( 
    '/', 
    multerMiddleware.single( 'urlImage' ),
    registerProduct
);

module.exports = router;

