require('dotenv').config();
const router = require('express').Router();
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { registerGetRoute, registerPostRoute, loginGetRoute, loginPostRoute } = require('../controllers/user.controller');
const saltRounds = 10;

//register route
router.get('/', registerGetRoute);

router.post('/', registerPostRoute);

//login route
router.get('/login', loginGetRoute);

router.post('/login', loginPostRoute);

module.exports = router;