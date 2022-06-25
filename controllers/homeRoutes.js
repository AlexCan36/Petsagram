const router = require('express').Router();

// FRONT END
// Homepage route
router.get('/feed', (req, res) => {
    Post.findAll({
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
        // handlebars
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));

            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Log in routes to handlebars
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
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

// all handlebars pages
module.exports = router;