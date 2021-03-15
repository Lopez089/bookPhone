const Phone = require("../model/phone");
module.exports = deletePhone = (req, res, next) => {
  const { id } = req.params;

  Phone.findByIdAndRemove(id)
    .then((result) => res.status(204).end())
    .catch((err) => next(err));
};
