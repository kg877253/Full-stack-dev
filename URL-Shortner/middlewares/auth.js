const { getuser } = require('../service/auth');
                                     
async function authMiddleware(req, res, next) {
    const publicPaths = ['/login', '/signup'];
    if (publicPaths.includes(req.path)) {
        return next();
    }

    const sessionid = req.cookies.token;
    if (!sessionid) {
        return res.redirect('/login');
    }
    if (!getuser(sessionid)) {
        return res.redirect('/login');
    }
    req.user = getuser(sessionid);
    next();
}

async function checkauth(req, res, next) {
    const sessionid = req.cookies.token;
    if (!sessionid || !getuser(sessionid)) {
        return res.redirect('/login');
    }
    req.user = getuser(sessionid);
    next();
}
module.exports = {authMiddleware, checkauth};