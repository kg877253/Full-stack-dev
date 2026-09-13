const express = require('express');
const app = express();
const dotenve=require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
mongoose.connect('mongodb://127.0.0.1:27017/passman');
dotenve.config();

const passwordSchema = new mongoose.Schema({
    site: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
})

const Password = mongoose.model('Password', passwordSchema);
const port = 3000;
app.use(bodyParser.json());
app.use(cors());

app.get('/', async(req, res) => {
    try {
        const passwords = await Password.find({});
        res.status(200).json(passwords);
    } catch (err) {
        res.status(500).send('Error retrieving passwords');
    }
});

app.post('/', async (req, res) => {
    const body = req.body;
    const password = new Password(body);
    await password.save();
    res.status(201).send('Password saved successfully');
})

app.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Password.findByIdAndDelete(id);
    res.status(200).send('Password deleted successfully');
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});