const Phone = require("../model/phone");

module.exports = createPhone = (req, res, next) => {
  const { name, number } = req.body;
  const phone = new Phone({
    name,
    number,
  });

  phone
    .save()
    .then((data) => {
      console.log("phone save"), res.json(data);
      res.status(200).end();
    })
    .catch((err) => next(err));

  /* const maxId = Math.max(...persons.map((person) => person.id));
  const newPerson = { ...req.body, id: maxId + 1 };

  if (!newPerson.name || !newPerson.number) {
    return res.status(400).json({ error: "fill in all fields" });
  }
  const hasPerson = persons.some((person) => person.name === newPerson.name);

  if (hasPerson) {
    return res.status(400).json({ error: "name must be unique" });
  }
  persons = [...persons.concat(newPerson)];

  res.json({ newPerson, allPersons: persons }); */
};
