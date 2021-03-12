const Phone = require("../model/phone");

module.exports = getAllPhone = (req, res) => {
  Phone.find({})
    .then((persons) => {
      res.json(persons);
      res.status(200).end();
    })
    .catch((err) => console.log(err));
};
