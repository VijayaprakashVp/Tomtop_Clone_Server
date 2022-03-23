const Products = require("../models/products.models");
const express = require("express");

const router = express.Router();


router.post("", async (req, res) => {
  try {
    const products = await Products.create(req.body);
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const products = await Products.find().lean().exec();
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const products = await Products.findById(req.params.id);

    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch(":id", async (req, res) => {
  try {
    const products = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const products = await Products.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;