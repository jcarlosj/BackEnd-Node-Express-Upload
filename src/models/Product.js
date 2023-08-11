const 
    { Schema, model } = require(  'mongoose' ),
    productSchema = new Schema({
        name: {
            type: String
        },
        price: {
            type: Number
        },
        urlImage: {
            type: String
        }
    }, {
        timestamps: true
    });

module.exports = model( 'Products', productSchema );
