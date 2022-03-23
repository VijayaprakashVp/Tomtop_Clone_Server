// Hot Deals Model
const mongoose = require("mongoose");

const hotdealSchema = new mongoose.Schema(
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

const Hotdeals = new mongoose.model("hotdeals", hotdealSchema);

module.exports = Hotdeals;
