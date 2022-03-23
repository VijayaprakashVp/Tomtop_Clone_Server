const mongoose = require("mongoose");
const express = require("express");
const connect = require("./db");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const SocialSavingController = require("./controllers/socialsaving.controller");
const HotdealsController = require("./controllers/hotdeals.controller");
const ProductsController = require("./controllers/products.controller");
const usersController = require("./controllers/user.controller");
const { register, login, check , adding } = require("./controllers/auth.controller");

app.use("/socials", SocialSavingController);
app.use("/hotdeals", HotdealsController);
app.use("/products", ProductsController);
app.use("/users", usersController);
app.post("/register", register);
app.post("/login", login);
app.get("/login", check);
app.patch("/login/:id", adding);
app.get("/login/:id", check);

app.listen(6789, async (req, res) => {
  try {
    await connect();
    console.log("I'm listening on 6789");
  } catch (e) {
    console.log(e.message);
  }
});
