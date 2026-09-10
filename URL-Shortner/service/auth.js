const sessionidtousermap = new Map();

function setuser(sessionid, user) {
    sessionidtousermap.set(sessionid, user);
}

function getuser(sessionid) {
    return sessionidtousermap.get(sessionid);
}

module.exports = { setuser, getuser };