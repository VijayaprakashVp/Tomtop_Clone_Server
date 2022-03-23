const Users = require("../models/user.model");
// const express = require("express");

// const router = express.Router();

const register = async (req, res) => {
  // console.log("user:");
  // console.log("req.bod:", req.body);
  try {
    const user = await Users.findOne({ email: req.body.email });
    // console.log("user:", user);

    if (user) {
      return res
        .status(400)
        .json({ message: "Email is already registered", status: "failed" });
    }

    const create_user = await Users.create(req.body);
    return res.status(200).json(create_user);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

const login = async (req, res) => {
  // console.log("user:");
  try {
    const user = await Users.findOne({ email: req.body.email });
    console.log("user:", user);

    if (!user) {
      return res
        .status(400)
        .send({ message: "Email is not registered", status: "failed" });
    }
    // const create_user = await Users.create(req.body);

    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const check = async (req, res) => {
  try {
    const user = await Users.find().lean().exec();
    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const adding = async (req, res) => {
  // console.log(req.params.id, req.body);
  try {
    const find_name = await Users.findById(req.params.id);
    // console.log("find_name:", find_name.cart);
    const cart_list = find_name.cart;
    cart_list.push(req.body);
    // console.log("cart_list:", cart_list);

    const user = await Users.updateOne(
      { id: req.params.id },
      {
        $set: { cart: cart_list },
      },
    )
      .lean()
      .exec();
    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = { register, login, check, adding };
