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

function getuser(token) {
    if (!token) {
        return null;
    }
    return jwt.verify(token, secret);
}

module.exports = { setuser, getuser };