require('dotenv').config();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

//register route
const registerGetRoute =  (req, res) => {
    res.render('register');
}

const registerPostRoute = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (user) {
            return res.status(400).send("User already exist")
        }

        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
            const newUser = new User({
                username: req.body.username,
                password: hash
            })
            await newUser.save()
                .then(() => {
                    res.redirect('/login');
                })
                .catch((err) => {
                    res.send(err.message);
                })
        });
    } catch (error) {
        console.log(error.message);
    }
}


//login route
const loginGetRoute = (req, res) => {
    res.render('login');
}

const loginPostRoute = async (req, res) => {
    const user = await User.findOne({username: req.body.username})

    if(!user){
        return res.send("User not found");
    }

    if(!bcrypt.compareSync(req.body.password, user.password)){
        return res.send("Incorrect Password")
    }

    const payload = {
        id: user._id,
        username: user.username
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn:"2d"})
    res.cookie("jwt", token, {
        httpOnly: true
    })
    res.redirect('/posts');
}

module.exports = {registerGetRoute, registerPostRoute, loginGetRoute, loginPostRoute};