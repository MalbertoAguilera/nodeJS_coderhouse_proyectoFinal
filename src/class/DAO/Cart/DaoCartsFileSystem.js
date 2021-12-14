const ContenedorFileSystem = require("../../Contenedor/ContenedorFileSystem");

class DaoCartsFileSystem extends ContenedorFileSystem {

    constructor() {
        super('./src/db/carts.txt')
    }

    async save(cart = { products: [] }) {
        return super.save(cart)
    }
}

module.exports = DaoCartsFileSystem;
