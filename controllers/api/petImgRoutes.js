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
    const dbPostData = await Post.create({
      caption: req.body.caption,
      image: uploadedImg,
      userId: req.session.user_id
    })
    console.log(dbPostData)
  }
  catch (err) {
    res.status(500).json(err);
  } 

  cloudinary.uploader.upload(
    uploadedImg.tempFilePath,
    options,
    function (error, result) {
      const imgUrl = result.url;
      // save public_id into database and it can be used in delete route
      const publicID = result.public_id;
      console.log(imgUrl);
    }
  );


  
});

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
module.exports = router;
