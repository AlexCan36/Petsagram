const router = require("express").Router();
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

router.post("/api/images", async (req, res) => {
  const uploadedImg = req.files.image;
  console.log(uploadedImg);

  const options = {
    width: 150,
    height: 150,
    crop: "scale",
    folder: "petsagram",
  };

  try {
    cloudinary.uploader.upload(
      uploadedImg.tempFilePath,
      options,
      function (error, result) {
        const imgUrl = result.url;
        // save public_id into database and it can be used in delete route
        const publicID = result.public_id;
        console.log(imgUrl);

        const dbPostData = Post.create({
          caption: req.body.caption,
          Image: imgUrl,
          public_id: publicID,
          user_id: req.session.user_id,
        });

        res.json(result);
      }
    );

    console.log(dbPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/api/images", async (req, res) => {
  const deleteImgRoute = await Post.findOne({
    where: {
      public_id: req.body.nameonfrontend,
    },
  });
  cloudinary.v2.uploader.destroy(
    deleteImgRoute.public_id,
    options,
    function (error, result) {}
  );
  // decide if we want to delete the whole post or just the img
  // name req.body.nameonfrontend on frontend javascript
  // fetch (send public_id to fetch)
  Post.updateOne({
    public_id: req.body.nameonfrontend,
  });
});

router.put("/api/images", (req, res) => {
  const updateImgRoute = Post.findOne({
    where: {
      public_id: req.body.nameonfrontend,
    },
  });

  // delete
  cloudinary.v2.uploader.destroy(
    updateImgRoute,
    options,
    function (error, result) {
      res.json(result);
    }
  );

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
      const publicID = result.public_id;

      Post.update(
        {
          public_id: publicID,
          image: imgUrl,
        },
        {
          where: {
            public_id: req.body.nameonfrontend,
          },
        }
      );
    }
  );
});
module.exports = router;
