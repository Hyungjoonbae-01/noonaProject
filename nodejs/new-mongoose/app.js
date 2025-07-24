const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mongoose-test");

const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        if (!validator.isEmail(v)) {
          throw new Error("This is not an email");
        }
      },
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

const newUser = new User({
  name: "hyungjoon",
  email: "noonag@mail.com",
  password: "         abcde",
  age: 25,
});

//newUser.save().then((value) => console.log("value is", value));

User.find({ name: "hyungjoon" })
  .select("name-_id")
  .then((value) => console.log("value is", value));
