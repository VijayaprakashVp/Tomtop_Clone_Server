const { mongoose } = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Vijay:Vijay_123@cluster0.iuezz.mongodb.net/Tomtop_Clone",
  );
};
// mongodb+srv://Vijay:<password>@cluster0.iuezz.mongodb.net/test
//mongodb://127.0.0.1:27017/Tomtop_Clone
