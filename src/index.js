const mongoose = require("mongoose");
const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const SocialSavingController = require("./controllers/socialsaving.controller");
const HotdealsController = require("./controllers/hotdeals.controller");
const ProductsController = require("./controllers/products.controller");
const usersController = require("./controllers/user.controller");
const {
  register,
  login,
  check,
  adding,
} = require("./controllers/auth.controller");

// app.get("/", function (req, res) {
//   return res.redirect("https://faballey-clone.vercel.app/");
// });

app.use("/", HotdealsController);

app.use("/socials", SocialSavingController);
app.use("/hotdeals", HotdealsController);
app.use("/products", ProductsController);
app.use("/users", usersController);
app.post("/register", register);
app.post("/login", login);
app.get("/login", check);
app.patch("/login/:id", adding);
app.get("/login/:id", check);

module.exports = app;
