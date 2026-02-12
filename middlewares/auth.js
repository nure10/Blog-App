const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).send("Unauthorized")
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).send("User not found");
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(401).send("Invalid token");
    }
}

module.exports = auth;
