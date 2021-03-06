const expressJwt = require('express-jwt');
const models = require('../db/models');
const User = models.user;

module.exports = jwt;

function jwt() {
    const secret = process.env.SECRET;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            /^\/users\/authenticate/,
            /^\/users\/register/
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await User.findOne({ id: payload.sub})

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};