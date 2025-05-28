require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const routers = require('./src/routes');

const app = express();

const corsOptions = {
  origin: 'https://cozy-lokum-790cda.netlify.app',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use('/auth', routers.auth);
app.use('/tests', routers.tests);
app.use('/categories', routers.categories);

app.use((error, req, res, next) => {
  const { status = 500, message = 'Server error' } = error;
  res.status(status).json({ message });
});

module.exports = app;
