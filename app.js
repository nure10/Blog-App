const express = require('express');
const path = require('path');
require('./config/database');
const userRouter = require('./routes/user.route');
const postRouter = require('./routes/post.route')
const passport = require('passport');
const cookieParser = require('cookie-parser');
require('./config/passport')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.use(passport.initialize());

app.use('', userRouter);
app.use('', postRouter);

app.use((req, res, next) => {
    res.status(404).send("Route not found");
})

app.use((err, req, res, next) => {
    res.status(500).send("Something broke");
})

module.exports = app;

