const express = require('express');
const router = express.Router();
const { getPasswords, addPassword, deletePassword } = require('../controllers/passcontrol');

router.get('/', getPasswords);
router.post('/', addPassword);
router.delete('/:id', deletePassword);

module.exports = router;