const ContedorFirebase = require("../../Contenedor/ContenedorFirebase");

class DaoCartsFirebase extends ContedorFirebase {

    constructor() {
        super('carts')
    }

    async guardar(carrito = { products: [] }) {
        return super.save(carrito)
    }
}

module.exports = DaoCartsFirebase;
