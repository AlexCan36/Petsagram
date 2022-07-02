const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User, Likes, Comment } = require('../models');
const sequelize = require('../config/connection');

// FRONT END

// This is the page that renders when a user first visits the site, or any time that they are not logged in
router.get('/', (req, res) => {
    res.render('welcome');
});


// renders the feed
router.get('/feed', withAuth, (req, res) => {
        Post.findAll({
            attributes: [
                'id',
                'image',
                'caption',
                'created_at',
                [sequelize.literal('(SELECT COUNT(*) FROM Likes WHERE post.id = likes.post_id)'), 'like_count'],
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
                },
            ]
        })
            // handlebars
            .then(dbPostData => {
                const posts = dbPostData.map(post => post.get({ plain: true }));
                    console.log(posts)
                res.render('feed', {
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
router.get('/profile', withAuth, async (req, res) => {
console.log("/profile")
console.log(req.session.user_id)
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        // attributes: [
        //     'id',
        //     'image',
        //     'caption',
        //     'created_at',
        //     [sequelize.literal('(SELECT COUNT(*) FROM Likes WHERE post.id = likes.post_id)'), 'like_count'],
        //     [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = Comment.post_id)'), 'comment_count']
        // ],
        // include: [
        //     {
        //         model: Comment,
        //         attributes: ['id', 'comment_text', 'post_id', 'user_id'],
        //         include: {
        //             model: User,
        //             attributes: ['username']
        //         }
        //     },
        //     {
        //         model: User,
        //         attributes: ['username']
        //     }
        // ]
    })
        // handlebars
        .then(dbPostData => {
            console.log(dbPostData)
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('profile', {
                posts,
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

// renders login page
router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
    res.render('login');
});

// profile route
// router.get('/profile', withAuth, (req, res) => {
//     res.render('profile', {
//         loggedIn: req.session.loggedIn
//     });
// });

// new post route
router.get('/newpost', withAuth, (req, res) => {
    res.render('newpost', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;