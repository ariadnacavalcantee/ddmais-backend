require('dotenv/config');

const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const conn = require('./db/conn');

conn();

app.use('/api', routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3001, () => {
  console.log('DD+ online!');
});
