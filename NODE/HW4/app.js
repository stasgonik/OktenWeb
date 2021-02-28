const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./router/api.router');

const app = express();

_connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(5042, () => {
    console.log('Starting NODE SERVER, proceed to localhost:5042');
});

function _connectToDB() {
    mongoose.connect('mongodb://localhost:27017/Gonik_HW4', { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', (error) => {
        console.log(error);
    });
}
