const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const getAllPhone = require('./controllers/getAllPhone')
const createPhone = require('./controllers/createPhone')
const deletePhone = require('./controllers/deletePhone')
const updatePhone = require('./controllers/updatePhone')
const infoPhone = require('./controllers/infoPhone')
const getIdPhone = require('./controllers/getIdPhone')

morgan.token('request', (req, res) => JSON.stringify(req.body))

const customformat = (tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.request(req, res)
  ].join(' ')
}

app.use(cors())
app.use(express.json())
app.use(morgan(customformat))
app.use(express.static('build'))

app.get('/api/persons', getAllPhone)

app.get('/info', infoPhone)

app.get('/api/persons/:id', getIdPhone)

app.delete('/api/persons/:id', deletePhone)

app.post('/api/persons/', createPhone)

app.put('/api/persons/:id', updatePhone)

const errorHandler = (error, req, res, next) => {
  console.log(error.message)
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
