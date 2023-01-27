const Owner = require("../models/ownerModel");

exports.listAllOwners = (req, res) => {
  Owner.find({}, (err, owner) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(owner);
  });
};

exports.createNewOwners = (req, res) => {
  let newOwner = new Owner(req.body);
  newOwner.save((err, owner) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(owner);
  });
};

exports.getOwner = (req, res) => {
  Owner.find({ _id: req.params.id }, (err, owner) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(owner);
  });
};

exports.updateOwner = (req, res) => {
  Owner.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, owner) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(owner);
  });
};

exports.deleteOwner = async (req, res) => {
  await Owner.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(404).send(err);
    }
    res.status(200).json({ message: "Owner successfully deleted" });
  });
};
