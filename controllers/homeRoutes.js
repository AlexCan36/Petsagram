const router = require('express').Router();

// FRONT END
// Homepage route
router.get('/', (req, res) => {
    // handlebars
    res.render('homepage');
});

// Log in routes to handlebars
router.get('/login', (req, res) => {
    res.render('login');
});

// Sign up routes
router.get('/signup', (req, res) => {
    res.render('signup');
});

// all handlebars pages
module.exports = router;