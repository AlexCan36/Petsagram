const router = require("express").Router();
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

// Creates a new post
router.post("/", async (req, res) => {
  console.log('AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHKLKFGLDFKGDFGLDFKGADFG')
  const uploadedImg = req.body.picture;
  console.log("I really love images")

  const options = {
    width: 150,
    height: 150,
    crop: "scale",
    folder: "petsagram",
  };
  console.log("options are good to go")

  try {
    console.log("Do I dare tempt the db")
    const dbPostData = await Post.create({
      caption: req.body.caption,
      image: upload(uploadedImg),
      userId: req.session.user_id
    })
    console.log(dbPostData)
    console.log("db has been thouroghly tempted")
  }
  catch (err) {
    console.log(err)
    res.status(500).json(err);
  } 
  console.log("glad we made it through that")

  function upload(localImgPath) {
    console.log("uploading images disgusting")
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
    console.log(`our wonderful path ${localImgPath}`)
    let imgUrl;
    localImgPath = "C:\Users\Tess\Pictures\Screenshots\Screenshot (8).png"
    cloudinary.uploader.upload(
      localImgPath,
      options,
      function (error, result) {
        console.log("XXXXXXXXXXXXXXXXXXX")
        console.log(error);
        console.log("XXXXXXXXXXXXXXXXXXX")
        console.log(result)
        if (result.url){
          imgUrl = result.url;
        }else{console.log("oh no")}
        
        // save public_id into database and it can be used in delete route
        const publicID = result.public_id;
        console.log(imgUrl);
        
      }
  );
  return imgUrl;
  }
});

// Deletes a Post
router.delete("/", (req, res) => {
  cloudinary.v2.uploader.destroy(public_id, options, function (error, result) {
    res.json(result);
  });
});

router.put("/", (req, res) => {
  // delete
  cloudinary.v2.uploader.destroy(public_id, options, function (error, result) {
    res.json(result);
  });

  // upload
  const uploadedImg = req.files.image;
  console.log(uploadedImg);
  const options = {
    width: 150,
    height: 150,
    crop: "scale",
    folder: "petsagram",
  };

  cloudinary.uploader.upload(
    uploadedImg.tempFilePath,
    options,
    function (error, result) {
      const imgUrl = result.url;
      // save public_id into database and it can be used in delete route
      const publicID = result.public_id;
    }
  );
});

// Display all comments for a post
router.get('/:id/comments', function(req,res){
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
  console.log("in route");
  try {
    const dbUserData = await Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
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
      post_id: req.body.post_id
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
