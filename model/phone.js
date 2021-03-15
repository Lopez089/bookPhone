require("dotenv").config();
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
  name: String,
  number: String,
});

phoneSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Phone", phoneSchema);

///////////////////////////////////////////////////////////////////////
/* 
const name = process.argv[2] || undefined;
const number = process.argv[3] || undefined;

const phone = new Phone({
  name,
  number,
});

if (!name && !number) {
  Phone.find({}).then((res) => {
    res.forEach((phone) => {
      console.log(phone);
    });
    mongoose.connection.close();
  });
} else {
  phone.save()
    .then((res) => {
      console.log("phone save");
      mongoose.connection.close();
    })
    .catch((err) => console.log({ err }));
} */
