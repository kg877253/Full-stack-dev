const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const URL = require('./models/url');
const urlRoutes = require('./routes/url');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());

app.use('/', urlRoutes);

mongoose.connect('mongodb://localhost:27017/shorturl').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.get('/tot/allid', async(req, res) => {
  const allurls= await URL.find({});
  res.render('render',{url: allurls});
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});