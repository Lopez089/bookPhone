const Phone = require("../model/phone");

module.exports = getAllPhone = (req, res) => {
  Phone.find({})
    .then((persons) => {
      const personFormat = persons.map((person) => ({
        name: person.name,
        number: person.number,
        id: person._id,
      }));
      res.json(personFormat);
      res.status(200);
    })
    .catch((err) => console.log(err));
};
