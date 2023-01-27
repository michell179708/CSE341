const swaggerpractice = require ('swagger-autogen')();

const doc = {
    info: {
        title : 'API practice for class CSE 341',
        description: 'this API work witht the database MONGODB to get,update and delete contact information'
    },
    host: 'michi341test.onrender.com',
    schemes: ['https']
};

const outputFile ='./swagger.json';
const endpoints = ['./app.js'];

//with this code will be generate the document swagger.json
swaggerpractice(outputFile, endpoints, doc);