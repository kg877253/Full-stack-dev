const Password = require('../models/Password');

const getPasswords = async (req, res) => {
    try {
        const passwords = await Password.find({});
        res.status(200).json(passwords);
    } catch (err) {
        res.status(500).send('Error retrieving passwords');
    }
};

const addPassword = async (req, res) => {
    try {
        const password = new Password(req.body);
        await password.save();
        res.status(201).send('Password saved successfully');
    } catch (err) {
        res.status(500).send('Error saving password');
    }
};

const deletePassword = async (req, res) => {
    try {
        const id = req.params.id;
        await Password.findByIdAndDelete(id);
        res.status(200).send('Password deleted successfully');
    } catch (err) {
        res.status(500).send('Error deleting password');
    }
};

module.exports = { getPasswords, addPassword, deletePassword };