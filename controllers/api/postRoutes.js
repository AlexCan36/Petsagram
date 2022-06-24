const  router  = require("express").Router();
const {} = require('../../models');


// Display all comments for a post
router.get('/:id/comments',function(req,res){
    Comment.findAll({
        where: {
            post_id: req.params.id
        },
        attributes: [
            'id',
            'comment_text',
            'user_id',
            'post_id',
          ],
        include:
            {
              model: User,
              attributes: ['id', 'username'],
              },
            },
        ).then (dbCommentData => {
            const comments = dbCommentData.map(comment => comment.get({ plain: true }));
            res.render('comments', { comments, loggedIn: req.session.loggedIn });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
        });


// Make a new comment on a post
router.post('/comment', async (req, res) => {
    try {
      const dbUserData = await Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user,
        // post_id: {{this.id}},
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // Add a like to a post
  router.post('/like', async (req, res) => {
    try {
      const dbUserData = await Like.create({

      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



module.exports = router;