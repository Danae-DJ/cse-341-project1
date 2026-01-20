const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'User Api',
        description: 'User Api'
    },
    host: 'localhost: 3000',
    schemes: ['https', 'http']
};

const outputfile = './swagger.json';
const endpointsfiles = ['./routes/index.js'];

// this will generate swagger.json
swaggerAutogen(outputfile, endpointsfiles, doc);