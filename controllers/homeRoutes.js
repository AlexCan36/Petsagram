const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User, Like, Comment } = require('../models');
const sequelize = require('../config/connection');

// FRONT END

// This is the page that renders when a user first visits the site, or any time that they are not logged in
router.get('/', (req, res) => {
    res.render('welcome');
});


// renders the feed
router.get('/feed', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'image',
            'caption',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = Like.post_id)'), 'like_count']
            [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = Comment.post_id)'), 'comment_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        // handlebars
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));

            res.render('homepage', withAuth, {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// renders the profile
router.get('/profile', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'image',
            'caption',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = Like.post_id)'), 'like_count']
            [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = Comment.post_id)'), 'comment_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        // handlebars
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));

            res.render('profile', withAuth, {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// router.get('/feed', (req, res) => {
//     // handlebars
//     const post = {
//         image: 'https://image.shutterstock.com/image-photo/american-staffordshire-terrier-puppies-sitting-260nw-1048123303.jpg',
//         like_count: '7',
//         comments_count: '9',
//         user: 'Tess',
//         caption: "Caption",
//         id: 7,
//     }

//     res.render('feed', { posts: new Array(4).fill(post) });
// });

// renders a single post
router.get('/single-post', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'image',
            'caption',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = Like.post_id)'), 'like_count']
            [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = Comment.post_id)'), 'comment_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const post = dbPostData.get({ plain: true });

            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Sign up routes
router.get('/signup', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
    res.render('signup');
});

// get all the data from database and send it to handlebars pages

// renders login page
router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
    res.render('login');
});

// profile route
router.get('/profile', withAuth, (req, res) => {
    res.render('profile', {
        loggedIn: req.session.loggedIn
    });
});

// new post route
router.get('/newpost', withAuth, (req, res) => {
    res.render('newpost', {
        loggedIn: req.session.loggedIn
    });
});

// all handlebars pages

module.exports = router;