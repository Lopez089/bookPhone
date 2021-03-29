const Phone = require('../model/phone')

const infoPhone = (req, res, next) => {
  const date = new Date()

  const lengthPerson = Phone.find({})
    .then((result) =>
      res.send(`<div> <p>Phonebook has info for ${result.length} people</p>
  <p>${date}</p> </div>
  `)
    )
    .catch((err) => next(err))
}

module.exports = infoPhone
