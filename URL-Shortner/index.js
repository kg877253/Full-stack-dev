const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const staticroute = require('./routes/staticroute');
const URL = require('./models/url');
const urlRoutes = require('./routes/url');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', staticroute);
app.use('/main', urlRoutes);

mongoose.connect('mongodb://localhost:27017/shorturl').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});