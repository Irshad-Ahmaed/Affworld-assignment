// backend/routes/posts.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/Post');
const { upload } = require('../cloudinaryConfig');

// Create Post
router.post('/', auth, upload.single('photo'), async (req, res) => {
    try {
        const { caption } = req.body;

        if (!req.file || !req.file.path) {
            return res.status(400).json({ msg: 'Photo upload failed' });
        }
    
        const photoUrl = req.file.path; // Cloudinary stores the uploaded photo's URL in `path` !Important

        const post = new Post({
            user: req.userId,
            caption: caption,
            photoUrl: photoUrl,
        });

        await post.save();
        res.status(201).json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get Posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'name');
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
