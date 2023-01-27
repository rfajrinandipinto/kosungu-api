"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OwnerSchema = new Schema({
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  no_telp: {
    type: String,
    required: true,
  },
  product_id: {
    type: String,
    required: false,
  },
  avalibility: {
    type: Boolean,
    required: true,
  },
  image_id: {
    type: String,
    required: false,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ownerModel", OwnerSchema);
