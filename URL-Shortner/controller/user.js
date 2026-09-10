const User = require('../models/user');
const {v4: uuidv4} = require('uuid');
const { setuser, getuser } = require('../service/auth');

async function handleUserSignup(req, res) {
    const {name, email, password} = req.body;
    await User.create({
        name: name,
        email: email,
        password: password
    });
    return res.redirect('/');
}

async function handleUserLogin(req, res) {
    const { email, password} = req.body;
    const user = await User.findOne({email: email,password: password });

    if (!user){
        return res.render('signup', { error: 'Email does not exist' });
    } 

    const sessionid = uuidv4();
    setuser(sessionid, user);
    res.cookie('sessionid', sessionid, { httpOnly: true });
    return res.redirect('/');
}


module.exports = { handleUserSignup, handleUserLogin };  