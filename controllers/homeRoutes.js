const router = require('express').Router();
const withAuth = require('../utils/auth');

// FRONT END
// Homepage route
router.get('/', (req, res) => {
    // handlebars
    res.render('welcome');
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

// Log in routes to handlebars
router.get('/login', (req, res) => {
    res.render('login');
});

// Sign up routes
router.get('/signup', (req, res) => {
    res.render('signup');
});

// profile route
router.get('/profile', withAuth, (req, res) => {
    res.render('profile', {
        loggedIn: req.session.loggedIn
    });
});

// new post route
router.get('/newpost', (req, res) => {
    res.render('newpost');
});

// all handlebars pages
module.exports = router;