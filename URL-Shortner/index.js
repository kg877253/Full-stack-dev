const express = require('express');
const mongoose = require('mongoose');
const URL = require('./models/url');
const path = require('path');
const cookieParser = require('cookie-parser');
const { authMiddleware, checkauth } = require('./middlewares/auth');

const staticroute = require('./routes/staticroute');
const urlRoutes = require('./routes/url');
const userRoutes = require('./routes/user');

const app = express();
const port = 3000;

app.set( 'view engine' , 'ejs' );
app.use( express.json() );
app.use( express.urlencoded({ extended: false }) );
app.use( cookieParser() );

app.use( '/users' , userRoutes );                    // login/signup — auth check se pehle
app.use( '/' , authMiddleware, staticroute );         // home page protected
app.use( '/main' , checkauth, urlRoutes );       // URL shortener bhi protected

//connect to MongoDB
mongoose.connect( 'mongodb://localhost:27017/shorturl' ).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});