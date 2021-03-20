require("dotenv").config();
const uniqueValidator = require("mongoose-unique-validator");
const mongoose = require("mongoose");

const url = process.env.MONGO_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("conction bd");
  })
  .catch((err) => console.log(`error connection to mongodb: ${err}`));

const phoneSchema = new mongoose.Schema({
  name: { type: String, unique: true, minlength: 3 },
  number: { type: String, minlength: 8 },
});

phoneSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

phoneSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Phone", phoneSchema);
