const ContenedorMongoDb = require("../../Contenedor/ContenedorMongoDb");

class DaoProductsMongoDb extends ContenedorMongoDb {

    constructor() {
        super('products', {
            title: { type: String, required: true },
            price: { type: Number, required: true },
            thumbnail: { type: String, required: true }
        })
    }
}

module.exports = DaoProductsMongoDb;
