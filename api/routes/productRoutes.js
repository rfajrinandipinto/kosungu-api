"use strict";

module.exports = function (app) {
  var product = require("../controllers/productController");

  app.route("/products").get(product.listAllProducts).post(product.createNewProducts);

  app.route("/products/:id").get(product.getProduct).put(product.updateProduct).delete(product.deleteProduct);
};
