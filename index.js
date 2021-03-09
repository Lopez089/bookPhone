const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const getAllPhone = require("./controllers/getAllPhone");

morgan.token("request", (req, res) => JSON.stringify(req.body));

const customformat = (tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.request(req, res),
  ].join(" ");
};

app.use(cors());
app.use(express.json());
app.use(morgan(customformat));
app.use(express.static("build"));

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/api/persons", getAllPhone);

app.get("/info", (req, res) => {
  const date = new Date();
  const lengthPerson = persons.length;

  res.send(`<div> <p>Phonebook has info for ${lengthPerson} people</p>
  <p>${date}</p> </div>
  `);
});

app.get("/api/persons/:id", (req, res) => {
  const { id } = req.params;

  const person = persons.find((person) => person.id === Number(id));
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const { id } = req.params;

  persons = persons.filter((person) => person.id !== Number(id));

  res.status(204).end();
});

app.post("/api/persons/", (req, res) => {
  const maxId = Math.max(...persons.map((person) => person.id));
  const newPerson = { ...req.body, id: maxId + 1 };

  if (!newPerson.name || !newPerson.number) {
    return res.status(400).json({ error: "fill in all fields" });
  }
  const hasPerson = persons.some((person) => person.name === newPerson.name);

  if (hasPerson) {
    return res.status(400).json({ error: "name must be unique" });
  }
  persons = [...persons.concat(newPerson)];

  res.json({ newPerson, allPersons: persons });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
