//only for stateful authentication, not for stateless authentication
// const sessionidtousermap = new Map();

const jwt = require("jsonwebtoken");
const secret ="kartik123";

// function setuser(sessionid, user) {
//     sessionidtousermap.set(sessionid, user);
// }

function setuser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, secret);
}

// function getuser(sessionid) {
//     return sessionidtousermap.get(sessionid);
// }

function getuser(token) {
    if (!token) {
        return null;
    }
    try {
        
    return jwt.verify(token, secret);
    }
    catch (err) {
        return null;
    }
}

module.exports = { setuser, getuser };