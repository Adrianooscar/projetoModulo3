const express = require('express');
const faker = require('faker');
const app = express()

const port = 3000;
app.get('/' , (req, res) =>{res.send({
    firstName: faker.name.firstName(),
    LastName: faker.name.lastName(),
    gender: faker.name.gender(),
    birthDay: faker.date.past(),
    email: faker.internet.email(),
    password: faker.internet.password()
    
});
});

app.listen(port,()=> {console.log(`app listing at http://localhost:${port}`)});
