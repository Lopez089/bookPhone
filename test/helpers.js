const supertest = require('supertest')
const {app} = require('../index')
const api = supertest(app)

const inicialPhone = [
    {
        name: 'Pepe',
        number: '123456789'
    },
    {
        name: 'Juan',
        number: '987654321'
    }

]

const getAllPhone = async()=>{
    const res = await api.get('/api/persons/')
    const content = res.body.map(phone=> phone.name)

    return {res, content}
}


module.exports = {
    inicialPhone,
    api,
    getAllPhone
}