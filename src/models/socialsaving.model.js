// Social Saving Model
const mongoose = require("mongoose");

const socialsavingSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    img_link: { type: String, required: true },
    joined: { type: String, required: true },
    current_price: { type: String, required: true },
    regular_price: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const SocialSaving = new mongoose.model("Socials", socialsavingSchema);

module.exports = SocialSaving;
