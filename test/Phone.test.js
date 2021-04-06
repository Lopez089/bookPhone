
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
    test.only('Phone are returned as json', async() => {

        const {res} = await getAllPhone()

        await api
            .get('/api/persons/')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .expect(response=> {
                expect(response.body).toEqual(res.body)
            })
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

describe ('Post phone', () => {
    test('adding a new phone to metho post', async() => {
        
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
    test('adding a new phone without name is not adding', async() => {
        
        const newPhone =  {
                number: '333333333',
            }

        await api 
            .post('/api/persons')
            .send(newPhone)
            .expect(500)
            .expect('content-Type', /text\/html/)

        const {res} = await getAllPhone()
        
        expect(res.body).toHaveLength(inicialPhone.length)
    });

    test('adding a new phone without number is not adding', async() => {
        
        const newPhone =  {
                name: 'Roberto',
            }

        await api 
            .post('/api/persons')
            .send(newPhone)
            .expect(500)
            .expect('content-Type', /text\/html/)

        const {res} = await getAllPhone()
        
        expect(res.body).toHaveLength(inicialPhone.length)
    });

    test('adding a new phone with name less three letters is not adding', async() => {
        
        const newPhone =  {
                name: 'Ju',
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

    test('adding a new phone with number less letters is not adding', async() => {
        
        const newPhone =  {
                name: 'Juaaaaaaaaaaaa',
                number: '33333'
            }

        await api 
            .post('/api/persons')
            .send(newPhone)
            .expect(500)
            .expect('content-Type', /text\/html/)

        const {res} = await getAllPhone()
        
        expect(res.body).toHaveLength(inicialPhone.length)


    });

    test('adding a new phone with name repeated is not adding', async() => {
        
        const newPhone =  {
                name: 'Pepe',
                number: '123456789'
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

describe('delete phone',  () => {
    test('delete phone the list ', async () => {

        const {res} = await getAllPhone()
        const idDelete  = res.body[1].id

        await api
            .delete(`/api/persons/${idDelete}`)
            .expect(204)

        const {res:res2} = await getAllPhone()
        expect(res2.body).toHaveLength(1)
    });

    test('try delete phone with id incorrect', async ()=>{
        const idDelete = '39827'

        await api 
            .delete(`/api/persons/${idDelete}`)
            .expect(500)

        const {res} = await getAllPhone()
        expect(res.body).toHaveLength(2)
    })
    
});





afterAll(()=>{
    mongoose.connection.close()
    server.close()
})


