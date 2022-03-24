const app = require("./index");

require("dotenv").config();

const connect = require("./configs/db");

const port = process.env.PORT || 7890;

app.listen(port, async (req, res) => {
  try {
    await connect();
    console.log("I'm listening on 7890");
  } catch (e) {
    console.log(e.message);
  }
});
