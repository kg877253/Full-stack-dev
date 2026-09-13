const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const passwordRoutes = require('./routes/Passwordroute');

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use('/', passwordRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});