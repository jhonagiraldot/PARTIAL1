const mongoose = require("mongoose");
const user_schema = mongoose.Schema({
  username: { type: String, require: true },
  lastname: { type: String, require: true },
  age: { type: Number, require: true },
  document: { type: String, require: true },
  email: { type: String, require: true },
  adress: {
    type: Object,
    require: true,
    city: { type: String, require: true },
    code_zip: { type: String, require: true },
  },
  pets: { type: Array, require: true },
});

module.exports = mongoose.model("users", user_schema);
