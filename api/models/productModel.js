"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  owner_id: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  kategori: {
    type: String,
    required: true,
  },
  harga: {
    type: String,
    required: true,
  },
  tipe: {
    type: String,
    required: true,
  },
  lokasi: [
    {
      lat: String,
      lng: String,
    },
  ],
  fasilitas: [
    {
      k_dalam: String,
      kasur: String,
      lemari: String,
      meja: String,
      kursi: String,
      kipas: String,
      listrik: String,
      wifi: String,
      dapur: String,
    },
  ],
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

module.exports = mongoose.model("productModel", ProductSchema);
