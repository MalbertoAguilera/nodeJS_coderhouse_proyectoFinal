const ContenedorFirebase = require("../../Contenedor/ContenedorFirebase")

class DaoProductsFirebase extends ContenedorFirebase {

    constructor() {
        super('products')
    }
}

module.exports = DaoProductsFirebase;
