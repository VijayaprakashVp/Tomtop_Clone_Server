const Users = require("../models/user.model");
const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const user = await Users.create(req.body);
    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const user = await Users.find().lean().exec();
    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await Users.findById(req.params.id);

    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  // console.log(req.params.id, req.body);
  try {
    const find_name = await Users.findById(req.params.id);
    const cart_list = find_name.cart;
    cart_list.push(req.body);

    const body = {
      cart: cart_list,
    };

    const user = await Users.findByIdAndUpdate(req.params.id, body);

    return res.status(200).send(user);

    // const user = await Users.updateOne(
    //   { id: req.params.id },
    //   {
    //     $set: { cart: cart_list },
    //   },
    // )
    //   .lean()
    //   .exec();
    // return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
