const Phone = require("../model/phone");

module.exports = getAllPhone = (req, res, next) => {
  Phone.find({})
    .then((persons) => {
      res.json(persons);
      res.status(200).end();
    })
    .catch((err) => next(err));
};
