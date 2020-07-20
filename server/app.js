const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');

const app = express();

const MLAB_URI = 'mongodb+srv://dominik:graphQL@gql-demo.ykoag.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MLAB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
})