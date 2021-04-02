
const {inicialPhone, api, getAllPhone} = require('./helpers')
const mongoose = require('mongoose');
const {server} = require('../index')
const Phone = require('../model/phone')




beforeEach (async ()=>{
    await Phone.deleteMany({})

    const phone1 = new Phone(inicialPhone[0])
    await phone1.save()

    const phone2 = new Phone(inicialPhone[1])
    await phone2.save()
})


describe('Get Phone', () => {
    test('Phone are returned as json', async() => {
       await api
            .get('/api/persons/')
            .expect(200)
            .expect('Content-Type', /application\/json/)

    });
   
    test('there are two Phone', async () => {
        const {res} = await getAllPhone()
        expect(res.body).toHaveLength(inicialPhone.length)
    });
    
    test('the frist phone is about Pepe', async() => {
        const {res} = await getAllPhone()
        expect(res.body[0].name).toBe('Pepe')
    });
    
    
});

describe('Post phone', () => {
    test('adding a new note to metho post', async() => {
        
        const newPhone =  {
                name: 'Cristian',
                number: '333333333'
            }

        await api 
            .post('/api/persons')
            .send(newPhone)
            .expect(200)
            .expect('content-Type', /application\/json/)

        const {res, content} = await getAllPhone()

        expect(res.body).toHaveLength(inicialPhone.length +1)
        expect(content).toContain(newPhone.name)
    });
    test('adding a new note without name is not adding', async() => {
        
        const newPhone =  {
                number: '333333333'
            }

        await api 
            .post('/api/persons')
            .send(newPhone)
            .expect(500)
            .expect('content-Type', /text\/html/)

        const {res} = await getAllPhone()
        
        expect(res.body).toHaveLength(inicialPhone.length)
    });
});


afterAll(()=>{
    mongoose.connection.close()
    server.close()
})


