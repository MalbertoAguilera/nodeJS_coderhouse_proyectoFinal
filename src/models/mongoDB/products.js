const {Schema, model} = require("mongoose");
const { module } = require("../../config");

productShema = new Schema({

})

module.exports = model("products",productShema);