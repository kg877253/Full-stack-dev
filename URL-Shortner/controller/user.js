const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const { setuser, getuser } = require('../service/auth');

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
   
    if (await User.findOne({ email: email })) {
        return res.render('signup', { error: 'Email already exists' });
    }
    await User.create({
        name: name,
        email: email,
        password: password
    });
    return res.redirect('/');
}

//for stateful authentication
// async function handleUserLogin(req, res) {
//     const { email, password} = req.body;
//     const user = await User.findOne({email: email,password: password });

//     if (!user){
//         return res.render('signup', { error: 'Email does not exist' });
//     } 

//     const sessionid = uuidv4();
//     setuser(sessionid, user);
//     res.cookie('sessionid', sessionid, { httpOnly: true });
//     return res.redirect('/');
// }

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email, password: password });

    if (!user) {
        return res.render('login', { error: 'Invalid email or password' });
    }

    const token = setuser(user);
    //maxage will logout the user after whatever time you set in maxage, here it is 900000ms = 15min;
    res.cookie('token', token, { httpOnly: true, maxAge: 900000 });
    
    return res.redirect('/');
}


module.exports = { handleUserSignup, handleUserLogin };  