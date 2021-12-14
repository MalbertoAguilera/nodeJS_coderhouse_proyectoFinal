let productsDao;
let cartsDao;
let storage = "json";

switch (storage) {
    case 'json':
        const DaoProductsFileSystem = require("./Products/DaoProductsFileSystem");
        const DaoCartsFileSystem = require("./Cart/DaoCartsFileSystem");
        
        productsDao = new DaoProductsFileSystem();
        cartsDao = new DaoCartsFileSystem();
        break
    case 'firebase':
        const DaoProductsFirebase = require("./Products/DaoProductsFirebase");
        const DaoCartsFirebase = require("./Cart/DaoCartsFirebase");
     
        productsDao = new DaoProductsFirebase()
        cartsDao = new DaoCartsFirebase()
        break
    case 'mongodb':
        const DaoProductsMongoDb = require('./Products/DaoProductsMongoDb');
        const DaoCartsMongoDb = require('./Cart/DaoCartsMongoDb');

        productsDao = new DaoProductsMongoDb();
        cartsDao = new DaoCartsMongoDb();

        break
    // case 'mariadb':
    //     const { default: ProductosDaoMariaDb } = await import('./productos/ProductosDaoMariaDb.js')
    //     const { default: CarritosDaoMariaDb } = await import('./carritos/CarritosDaoMariaDb.js')

    //     productsDao = new ProductosDaoMariaDb()
    //     cartsDao = new CarritosDaoMariaDb()
    //     break
    // case 'sqlite3':
    //     const { default: ProductosDaoSQLite3 } = await import('./productos/ProductosDaoSQLite3.js')
    //     const { default: CarritosDaoSQLite3 } = await import('./carritos/CarritosDaoSQLite3.js')

    //     productosDao = new ProductosDaoSQLite3()
    //     carritosDao = new CarritosDaoSQLite3()
    //     break
    // default:
    //     const { default: ProductosDaoMem } = await import('./productos/ProductosDaoMem.js')
    //     const { default: CarritosDaoMem } = await import('./carritos/CarritosDaoMem.js')

    //     productosDao = new ProductosDaoMem()
    //     carritosDao = new CarritosDaoMem()
        // break
}

module.exports = { productsDao, cartsDao };