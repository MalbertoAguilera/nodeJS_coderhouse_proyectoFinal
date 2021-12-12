const ContenedorMongoDb = require("../../Contenedor/ContenedorMongoDb");

class DaoCartMongoDb extends ContenedorMongoDb {

    constructor() {
        super('carts', {
            products: { type: [], required: true }
        })
    }

    async save(cart = { products: [] }) {
        return super.guardar(cart);
    }
}

module.exports = DaoCartMongoDb;
