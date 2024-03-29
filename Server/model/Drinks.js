const { Schema, model } = require("mongoose");
const schema = new Schema({
  name: {
    type: String,
    require: true,
  },

  size: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },

  discount: {
    type: Number,
  },

  img: {
    type: String,
    require: true,
  },
});

module.exports = model("Pizza", schema);
