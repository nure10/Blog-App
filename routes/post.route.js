const router = require('express').Router();
const passport = require('passport')
const Post = require('../models/post.model');
const auth = require('../middlewares/auth');
const { postRoute, createGetRoute, createPostRoute, editRoute, updateRoute, deleteRoute } = require('../controllers/post.controller');

//post route
router.get('/posts', auth, postRoute);

//create-post route
router.get('/create-post', auth, createGetRoute);

router.post('/create-post', auth, createPostRoute);


//edit post route
router.get('/edit-post/:id', auth, editRoute);

// Update Post
router.post('/edit-post/:id', auth, updateRoute);

// Delete Post
router.post('/delete-post/:id', auth, deleteRoute);



module.exports = router;