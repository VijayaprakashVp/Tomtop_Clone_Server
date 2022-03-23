// Products Model
const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    img_link: { type: String, required: true },
    current_price: { type: String, required: true },
    regular_price: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const products = new mongoose.model("products", productsSchema);

module.exports = products;
