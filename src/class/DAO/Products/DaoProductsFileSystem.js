const ContenedorFileSystem = require("../../Contenedor/ContenedorFileSystem");

class DaoProductsFileSystem extends ContenedorFileSystem {

    constructor() {
        super('./src/db/productos.txt')
    }
}

module.exports = DaoProductsFileSystem;
