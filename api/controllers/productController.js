const Product = require("../models/productModel");

exports.listAllProducts = (req, res) => {
  Product.find({}, (err, product) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(product);
  });
};

exports.createNewProducts = (req, res) => {
  let newProduct = new Product(req.body);
  newProduct.save((err, product) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(product);
  });
};

exports.getProduct = (req, res) => {
  Product.find({ _id: req.params.id }, (err, product) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(product);
  });
};

exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, product) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(product);
  });
};

exports.deleteProduct = async (req, res) => {
  await Product.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(404).send(err);
    }
    res.status(200).json({ message: "Product successfully deleted" });
  });
};
