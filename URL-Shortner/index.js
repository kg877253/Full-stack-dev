const express = require('express');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/url');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/', urlRoutes);

mongoose.connect('mongodb://localhost:27017/shorturl').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});