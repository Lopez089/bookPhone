const Phone = require('../model/phone')

const getIdPhone = (req, res, next) => {
  const { id } = req.params

  Phone.findById(id)
    .then((result) => {
      if (result) {
        res.json(result)
      } else {
        res.status(404).end()
      }
    })
    .catch((err) => next(err))
}

module.exports = getIdPhone
