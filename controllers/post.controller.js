const Post = require('../models/post.model');

//post route
const postRoute = async (req, res) => {
    try {
      const posts = await Post.find()
        .populate('author', 'username') 
        .sort({ createdOn: -1 }); 

      res.render('posts', { posts: posts, user: req.user });
    } catch (err) {
      console.log(err.message);
      res.send("Error loading posts");
    }
  }


//create-post route
const createGetRoute = (req, res) => {
    res.render('create-post', { user: req.user });
}

const createPostRoute = async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            author: req.user._id  
        });

        await newPost.save();

        res.redirect('/posts');
    } catch (err) {
        console.log(err.message);
        res.send("Error creating post");
    }
}


//edit post route
const editRoute = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.send("Post not found");
        }

        if (post.author.toString() !== req.user._id.toString()) {
            return res.send("You are not allowed to edit this post");
        }

        res.render('edit-post', { post });

    } catch (err) {
        console.log(err.message);
        res.send("Error loading edit page");
    }
}

// Update Post
const updateRoute = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.send("Post not found");
        }

        if (post.author.toString() !== req.user._id.toString()) {
            return res.send("You are not allowed to edit this post");
        }

        post.title = req.body.title;
        post.content = req.body.content;

        await post.save();

        res.redirect('/posts');

    } catch (err) {
        console.log(err.message);
        res.send("Error updating post");
    }
}

// Delete Post
const deleteRoute = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.send("Post not found");
        }

        if (post.author.toString() !== req.user._id.toString()) {
            return res.send("You are not allowed to delete this post");
        }

        await Post.findByIdAndDelete(req.params.id);

        res.redirect('/posts');

    } catch (err) {
        console.log(err.message);
        res.send("Error deleting post");
    }
}

module.exports = {postRoute, createGetRoute, createPostRoute, editRoute, updateRoute, deleteRoute};