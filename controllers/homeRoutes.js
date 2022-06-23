const router = require('express').Router();

// FRONT END
// Homepage route
router.get('/', (req, res) => {
    // handlebars
    res.render('welcome');
});

// alex makes get route to /feed that finds all posts and creates a 'posts' constant


// This is Tess' fake data route for testing
// router.get('/feed', (req, res) => {
//     // handlebars
//     const post = {
//         image: 'google.com',
//         like_count: '7',
//         comments_count: '9',
//         user: 'Tess',
//         caption: "Caption",
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

// profile routes
router.get('/profile', (req, res) => {
    res.render('profile');
});

// all handlebars pages
module.exports = router;