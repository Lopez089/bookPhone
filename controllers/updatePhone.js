const Phone = require("../model/phone");

const updatePhone = (req, res, next) => {
  const { name, number } = req.body;
  const { id } = req.params;

  const newObjectPerson = {
    name,
    number,
  };

  Phone.findByIdAndUpdate(id, newObjectPerson)
    .then((result) => {
      res.json(result).status(200).end();
    })
    .catch((err) => next(err));
};

module.exports = updatePhone;
