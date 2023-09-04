const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// const routers = require('./src/routes/api');

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.use((error, req, res, next) => {
    const {status = 500, message = 'Server error'} = error;
    res.status(status).json({message});
})

module.exports = app;